var GoogleAnalytics = require('../lib/ga');

var testUA = "UA-25564582-1";
var testHost = 'nodega.jga.me';

module = QUnit.module;
module('ga', {
	setup: function() {
		this.ga = new GoogleAnalytics(testUA, testHost);
		this.ga.debug = true;
	},
	teardown: function() {
	}
});

test('test', function() {
	ok(true);
});

asyncTest('pageview', function() {
	expect(1);
	this.ga.trackPage('testing/1', function() {
		ok(true);
	});
});

test('userId', function() {
	var userId = this.ga.trackPage('user/1');
	ok(userId);
});

asyncTest('test user', function() {
	expect(1);
	var userId = this.ga.trackPage('user/1');
	this.ga.trackPage('user/2', userId, function() {
		ok(true);
	});
});

