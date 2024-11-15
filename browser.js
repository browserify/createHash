'use strict';

if (typeof BigInt === 'undefined') {
	module.exports = require('./browser.old.js');
} else {
	try {
		module.exports = require('./browser.noble.js');
	} catch (err) {
		module.exports = require('./browser.old.js');
	}
}
