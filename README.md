# Node-GA

Server side google analytics

## Install

	npm install ga

## Usage

	var ua = "UA-XXX";
	var host = 'nodega.jga.me';
	var ga = new GoogleAnalytics(ua, host);
	ga.trackPage('testing/1');
    ga.trackEvent({
        category: 'Videos',
        action: 'Video Loading',
        label: 'Gone With the Wind',
        value: 42
    });
