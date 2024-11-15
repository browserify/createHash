'use strict';

var test = require('tape');

var Buffer = require('safe-buffer').Buffer;
var algorithms = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160', 'ripemd160'];
var encodings = ['hex', 'base64']; // ignore binary
var vectors = require('hash-test-vectors');
vectors.forEach(function (vector) {
	// eslint-disable-next-line no-param-reassign
	vector.ripemd160 = vector.rmd160;
});
var createHashOld = require('../browser.old.js');
var createHashAuto = require('../browser.js');

var implementations = [createHashOld];
if (createHashAuto !== createHashOld) { implementations.push(createHashAuto); }

implementations.forEach(function (createHash) {
	algorithms.forEach(function (algorithm) {
		test('test ' + algorithm + ' against test vectors', function (t) {
			vectors.forEach(function (obj, i) {
				var input = Buffer.from(obj.input, 'base64');
				var node = obj[algorithm];
				var js = createHash(algorithm).update(input).digest('hex');
				t.equal(js, node, algorithm + '(testVector[' + i + ']) == ' + node);
			});

			encodings.forEach(function (encoding) {
				vectors.forEach(function (obj, i) {
					var input = Buffer.from(obj.input, 'base64').toString(encoding);
					var node = obj[algorithm];
					var js = createHash(algorithm).update(input, encoding).digest('hex');
					t.equal(js, node, algorithm + '(testVector[' + i + '], ' + encoding + ') == ' + node);
				});
			});

			vectors.forEach(function (obj, i) {
				var input = Buffer.from(obj.input, 'base64');
				var node = obj[algorithm];
				var hash = createHash(algorithm);
				hash.end(input);
				var js = hash.read().toString('hex');
				t.equal(js, node, algorithm + '(testVector[' + i + ']) == ' + node);
			});

			t.end();
		});
	});
});

var createHashNode = require('crypto').createHash;
var randomBytes = require('crypto').randomBytes;

function crossTest(createHashTest, createHashBase, algs) {
	var data = randomBytes(32);
	test('test against base implementation', function (t) {
		algs.forEach(function (algorithm) {
			var a = createHashTest(algorithm).update(data).digest('hex');
			var b;
			try {
				b = createHashBase(algorithm).update(data).digest('hex');
			} catch (err) {}
			var label = algorithm + '(' + data.toString('hex') + ')';
			if (b) {
				t.equal(a, b, label);
			} else {
				t.skip(label); // Node.js version doesn't support it
			}
		});
		t.end();
	});
}

var baseHashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'ripemd160', 'rmd160'];
var extraHashes = ['sha512-224', 'sha512-256', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'blake2b512', 'blake2s256'];

crossTest(createHashOld, createHashNode, baseHashes);

// Only new version supports additional hashes
if (createHashAuto !== createHashOld) {
	crossTest(createHashAuto, createHashNode, baseHashes);
	crossTest(createHashAuto, createHashNode, extraHashes);
}
