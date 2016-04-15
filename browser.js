'use strict'
var MD5 = require('md5.js')
var RIPEMD160 = require('ripemd160')
var shajs = require('sha.js')

module.exports = function createHash (alg) {
  alg = alg.toUpperCase()
  switch (alg) {
    case 'MD5':
      return new MD5()
    case 'RIPEMD160':
    case 'RMD160':
      return new RIPEMD160()
    default:
      return shajs(alg)
  }
}
