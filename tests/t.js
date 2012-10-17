var GoogleAnalytics = require('../lib/ga');
var testUA = 'UA-25564582-1';
var testHost = 'nodega.jga.me';

var ga = new GoogleAnalytics(testUA, testHost);

ga.debug = true;

ga.trackPage('test/1', 1, function(err) {
	console.log(err || 'Page tracked');
});

ga.trackEvent(
    {
        category: 'Videos',
        action: 'Video Loading',
        label: 'Gone With the Wind',
        value: 3,
        nonInteraction: true
    },
    2,
    function(err) {
        console.log(err || 'Event tracked');
    }
);
