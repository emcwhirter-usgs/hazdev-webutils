require.config({
	baseUrl: '..',
	paths: {
		mocha: 'mocha/mocha',
		chai: 'chai/chai'
	},
	shim: {
		mocha: {
			exports: 'mocha'
		},
		chai: {
			deps: ['mocha'],
			exports: 'chai'
		}
	}
});

require([
	'mocha',
], function (mocha) {
	mocha.setup('bdd');

	// Add each test class here as they are implemented
	require([
		'spec/mvc/CollectionTest',
		'spec/mvc/ModelTest',
		'spec/util/EventsTest',
		'spec/util/UtilTest'
	], function () {
		if (window.mochaPhantomJS) {
			mochaPhantomJS.run();
		} else {
			mocha.run();
		}
	});
});
