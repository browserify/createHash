'use strict';

var sha1 = require('@noble/hashes/sha1');
var ripemd160 = require('@noble/hashes/ripemd160');
var sha2 = require('@noble/hashes/sha2');
var sha3 = require('@noble/hashes/sha3');
var blake2b = require('@noble/hashes/blake2b');
var blake2s = require('@noble/hashes/blake2s');
var inherits = require('inherits');
var MD5 = require('md5.js');
var Base = require('cipher-base');
var Buffer = require('safe-buffer').Buffer;

function Hash(hash) {
	Base.call(this, 'digest');

	this._hash = hash;
}

inherits(Hash, Base);

Hash.prototype._update = function (data) {
	this._hash.update(data);
};

Hash.prototype._final = function () {
	var uarr = this._hash.digest();
	return Buffer.from(uarr.buffer, uarr.byteOffset, uarr.byteLength);
};

var hashes = {
	// Supported by browser.old.js
	sha1: sha1.sha1,
	sha224: sha2.sha224,
	sha256: sha2.sha256,
	sha384: sha2.sha384,
	sha512: sha2.sha512,
	ripemd160: ripemd160.ripemd160,
	rmd160: ripemd160.ripemd160,

	// Not supported by browser.old.js (until sha.js updates?)
	'sha512-224': sha2.sha512_224, // for browser.old.js: https://github.com/browserify/sha.js/pull/67
	'sha512-256': sha2.sha512_256, // for browser.old.js: https://github.com/browserify/sha.js/pull/67
	'sha3-224': sha3.sha3_224,
	'sha3-256': sha3.sha3_256,
	'sha3-384': sha3.sha3_384,
	'sha3-512': sha3.sha3_512,
	blake2b512: blake2b.blake2b, // 512 is the default size
	blake2s256: blake2s.blake2s // 256 is the default size
};

module.exports = function createHash(algorithm) {
	var alg = algorithm.toLowerCase();

	if (alg === 'md5') {
		return new MD5();
	}

	if (!Object.prototype.hasOwnProperty.call(hashes, alg)) {
		throw new Error('Digest method not supported');
	}

	return new Hash(hashes[alg].create());
};
