# create-hash

[![NPM Package](https://img.shields.io/npm/v/create-hash.svg?style=flat-square)](https://www.npmjs.org/package/create-hash)
[![Build Status](https://img.shields.io/travis/crypto-browserify/createHash.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/createHash)
[![Dependency status](https://img.shields.io/david/crypto-browserify/createHash.svg?style=flat-square)](https://david-dm.org/crypto-browserify/createHash#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Node style [crypto.createHash](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm) on pure JavaScript.

```js
var createHash = require('create-hash')
var hash = createHash('sha224')
hash.update('synchronous write') // optional encoding parameter
hash.digest() // synchronously get result with optional encoding parameter

hash.write('write to it as a stream')
hash.end() // remember it's a stream
hash.read() // only if you ended it as a stream though
```

To get the JavaScript version even in node do `require('create-hash/browser')`

## License

MIT
