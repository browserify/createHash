'use strict'
var test = require('tape').test
var vectors = require('hash-test-vectors')

var algorithms = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160', 'ripemd160']

function runTests (name, createHash) {
  vectors.forEach(function (vector, index) {
    var input = new Buffer(vector.input, 'base64')

    algorithms.forEach(function (alg) {
      var desc = name + ': ' + alg + ' NIST vector #' + (index + 1)

      test(desc + ' with .update', function (t) {
        t.same(createHash(alg).update(input).digest('hex'), vector[alg])
        t.end()
      })

      test(desc + ' with streams', function (t) {
        var hash = createHash(alg)
        hash.end(input)
        t.same(hash.read().toString('hex'), vector[alg])
        t.end()
      })
    })
  })
}

runTests('node', require('../index'))
runTests('pure js', require('../browser'))
