var GoogleAnalytics = require('../lib/ga');
var testUA = "UA-25564582-1";
var testHost = 'nodega.jga.me';
var ga = new GoogleAnalytics(testUA, testHost);
ga.debug = true;
ga.trackPage('test/1', 1, function() {
	console.log('done');
});
