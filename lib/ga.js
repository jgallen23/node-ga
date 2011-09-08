var request = require('request');

var GoogleAnalytics = function(ua, host) {
  this.ua = ua;
  this.host = host;
  this.debug = false;
};

GoogleAnalytics.prototype._serialize = function(obj) {
  var str = [];
  for(var p in obj)
    str.push(p + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
};

GoogleAnalytics.prototype._makeRequest = function(obj, cb) {
  var self = this;
  var userId = null;
  if (obj.userId) {
    userId = obj.userId;
    delete obj.userId;
  } else {
    userId = Math.round(Math.random()*1000000);
  }
  var today = new Date().getTime().toString();
  obj.utmac = this.ua;
  obj.utmn = today; 
  obj.utmv = "1";
  obj.utmr= "-";
  obj.utmcc = "__utma="+userId+"."+Math.round(Math.random()*1000000)+"."+today+"."+today+"."+today+".3; __utmz="+userId+"."+today+".1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none);";
  var url = "http://www.google-analytics.com/__utm.gif?"+this._serialize(obj);

  request({
    url: url
  }, function(err, res, body) {
    if (self.debug) {
      console.log(url);
    }
    if (cb) cb();
  });
  return userId;
};

GoogleAnalytics.prototype.trackPage = function(path, userId, cb) {
  if (arguments.length == 2 && (typeof userId === 'function')) {
    cb = userId;
    userId = null;
  }
  var obj = {
    userId: userId,
    utmhn: this.host,
    utmp: path
  };
  return this._makeRequest(obj, cb);
};

module.exports = GoogleAnalytics;
