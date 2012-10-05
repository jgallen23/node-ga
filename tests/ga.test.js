var GoogleAnalytics = require('../lib/ga');

var testUA = "UA-25564582-1";
var testHost = 'nodega.jga.me';

module = QUnit.module;
module('ga', {
  setup: function() {
    this.ga = new GoogleAnalytics(testUA, testHost);
  },
  teardown: function() {
  }
});

test('test', function() {
  ok(true);
});

test('userId', function() {
  var userId = this.ga.trackPage('user/1');
  ok(userId);
});

asyncTest('pageview', function() {
  expect(1);
  this.ga.trackPage('testing/1', function(err) {
    ok(!err);
    start();
  });
});

asyncTest('test user', function() {
  expect(1);
  var userId = this.ga.trackPage('user/1');
  this.ga.trackPage('user/2', userId, function(err) {
    ok(!err);
    start();
  });
});

asyncTest('event', function() {
  expect(1);
  this.ga.trackEvent(
    {
        category: 'Videos',
        action: 'Video Loading',
        label: 'Gone With the Wind',
        value: 3
    },
    function(err) {
      ok(!err);
      start();
    }
  );
});

