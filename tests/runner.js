var testrunner = require('qunit');
testrunner.options.coverage = false;

testrunner.run({
	code: './lib/ga.js',
	tests: './tests/ga.test.js'
});
