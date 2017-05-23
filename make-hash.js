'use strict'
var INT32_SIZE = 4
var CHAR64_SIZE = 8
var HASH128_SIZE = 16

var Buffer = require('safe-buffer').Buffer
var zeroBuffer = Buffer.alloc(INT32_SIZE, 0)

function asUInt32Array (buf) {
  if ((buf.length % INT32_SIZE) !== 0) {
    var len = buf.length + (INT32_SIZE - (buf.length % INT32_SIZE))
    buf = Buffer.concat([buf, zeroBuffer], len)
  }

  var arr = new Array(buf.length >>> 2)
  for (var i = 0, j = 0; i < buf.length; i += INT32_SIZE, j++) {
    arr[j] = buf.readInt32LE(i)
  }

  return arr
}

module.exports = function hash (buf, fn) {
  var arr = fn(asUInt32Array(buf), buf.length * CHAR64_SIZE)
  buf = new Buffer(HASH128_SIZE)

  for (var i = 0; i < arr.length; i++) {
    buf.writeInt32LE(arr[i], i << 2, true)
  }

  return buf
}
