# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.0](https://github.com/browserify/createHash/compare/v1.1.3...v1.2.0) - 2018-04-11

### Merged

- add back in md5.js file [`#22`](https://github.com/browserify/createHash/pull/22)

### Commits

- md5: re-order for define-before-use [`1d56935`](https://github.com/browserify/createHash/commit/1d56935caf763b374be04811b7d1d47ae901f81c)
- rm safe-buffer dependency, use md5.js and latest ripemd160 [`d71b31a`](https://github.com/browserify/createHash/commit/d71b31aae6524591e396be2a37638607250363e0)
- README: cleanup [`c69f0b7`](https://github.com/browserify/createHash/commit/c69f0b7cef35e1a87040509e4a44dc3d4b44bdbd)
- safe-buffer [`e6a6c05`](https://github.com/browserify/createHash/commit/e6a6c05d0d161dc72ef035a59a1ac32c2fc5fe62)
- add MIT LICENSE [`7c45304`](https://github.com/browserify/createHash/commit/7c45304b789220a352c60f8b609273a120b76bf6)
- travis: drop Node &lt;4 [`482e5d9`](https://github.com/browserify/createHash/commit/482e5d9e43255b331eaf593ef70d46ef376e396c)
- package: bump standard [`2612e83`](https://github.com/browserify/createHash/commit/2612e83e846787f46b14a2929c0c0bd4d92ef736)

## [v1.1.3](https://github.com/browserify/createHash/compare/v1.1.2...v1.1.3) - 2017-05-11

### Merged

- streaming ripemd [`#17`](https://github.com/browserify/createHash/pull/17)
- travis: add node 5 and 6 [`#14`](https://github.com/browserify/createHash/pull/14)
- clean up/rename the md5 stuff [`#9`](https://github.com/browserify/createHash/pull/9)

### Commits

- adhere to standard [`c713c6a`](https://github.com/browserify/createHash/commit/c713c6aa345147594c63c8dddf7debf3a70b3b99)
- lint it [`5a52062`](https://github.com/browserify/createHash/commit/5a52062e3b31eea2d0646c1e93912bd3b80e7ec1)
- bump sha.js to 2.4.0 [`df0b846`](https://github.com/browserify/createHash/commit/df0b8461808ec3e7fb8a51bbaf5ba4e1e0472037)
- rename file [`42550cd`](https://github.com/browserify/createHash/commit/42550cd167b60ba54e67a4be83ec8563aa3f0617)

## [v1.1.2](https://github.com/browserify/createHash/compare/1.1.1...v1.1.2) - 2015-09-28

### Merged

- normalize algs so ripemd160 works [`#6`](https://github.com/browserify/createHash/pull/6)
- use cipher-base [`#5`](https://github.com/browserify/createHash/pull/5)

### Commits

- update cipher-base [`a6eb6f7`](https://github.com/browserify/createHash/commit/a6eb6f782c1108e937cda7583b9a6d03312e076d)
- adds .gitignore [`dcc25f9`](https://github.com/browserify/createHash/commit/dcc25f9e0b66d07fbf76d13e2616ea4c34cbcc90)

## [1.1.1](https://github.com/browserify/createHash/compare/v1.1.0...1.1.1) - 2015-03-18

### Merged

- avoid using stream when using update or digest methods [`#2`](https://github.com/browserify/createHash/pull/2)

### Commits

- browser: consistent formatting [`98def75`](https://github.com/browserify/createHash/commit/98def752bb97a06184443b62b8e7cb8e3b0078de)
- browser: cleanup [`82b3ba4`](https://github.com/browserify/createHash/commit/82b3ba43b709063aad884accbf9cd619ac1b3805)
- typo [`776c1e9`](https://github.com/browserify/createHash/commit/776c1e96b3be86c82bb8dab1ee90c61a58edd89f)

## [v1.1.0](https://github.com/browserify/createHash/compare/v1.0.2...v1.1.0) - 2015-01-16

### Commits

- fix repo name, update readme, use browser.js as filename [`5ef8f19`](https://github.com/browserify/createHash/commit/5ef8f19b7cfbec433b6382080759195473f70fb2)

## [v1.0.2](https://github.com/browserify/createHash/compare/v1.0.1...v1.0.2) - 2015-01-14

### Commits

- use crypto in node [`f241b7d`](https://github.com/browserify/createHash/commit/f241b7dd04ba6e60326f0b1ea63bc172cfc5bf71)

## v1.0.1 - 2015-01-14

### Commits

- first [`b5c03ab`](https://github.com/browserify/createHash/commit/b5c03ab1d8f98ade1d746b4a72c7d92e2e26f681)
- travis [`2cc3ae8`](https://github.com/browserify/createHash/commit/2cc3ae81f75634e1263e1fb643c734392edb7bf0)
- update ripemd160 [`e2630b7`](https://github.com/browserify/createHash/commit/e2630b79b6a02d7f38e721a4f6a96b450bcbb8e8)
