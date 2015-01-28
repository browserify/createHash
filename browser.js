'use strict';
var sha = require('sha.js')
var md5 = require('./md5')
var rmd160 = require('ripemd160')
var Transform = require('stream').Transform;
var inherits = require('inherits')

function HashNoConstructor(hash) {
  Transform.call(this);
  this._hash = hash
  this.buffers = []
}

inherits(HashNoConstructor, Transform)

HashNoConstructor.prototype._transform = function (data, _, done) {
  this.buffers.push(data)
  done()
}

HashNoConstructor.prototype._flush = function (done) {
  this.push(this.digest())
  done()
}

HashNoConstructor.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this.buffers.push(data)
  return this
}

HashNoConstructor.prototype.digest = function (enc) {
  var buf = Buffer.concat(this.buffers)
  var r = this._hash(buf)
  this.buffers = null

  return enc ? r.toString(enc) : r
}

function Hash(hash) {
  Transform.call(this)
  this._hash = hash
}

inherits(Hash, Transform)

Hash.prototype._transform = function (data, enc, done) {
  if (enc) data = new Buffer(data, enc)

  this._hash.update(data)

  done()
}

Hash.prototype._flush = function (done) {
  this.push(this._hash.digest())
  this._hash = null

  done()
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this._hash.update(data)
  return this
}

Hash.prototype.digest = function (enc) {
  var outData = this._hash.digest()

  return enc ? outData.toString(enc) : outData
}

module.exports = function createHash (alg) {
  if ('md5' === alg) return new HashNoConstructor(md5)
  if ('rmd160' === alg) return new HashNoConstructor(rmd160)
  return new Hash(sha(alg))
}
