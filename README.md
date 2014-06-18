# latin

[![Build Status](https://travis-ci.org/bloodyowl/latin.svg?branch=master)](https://travis-ci.org/bloodyowl/latin)

[![browser support](https://ci.testling.com/bloodyowl/latin.png)](https://ci.testling.com/bloodyowl/latin)

replaces special latin (`\xc0` -> `\xff`) chars

## install

```sh
$ npm install bloody-latin
```

## require

```javascript
var latin = require("bloody-latin")
```

## api

### `latin(string) > string`

returns a cleaned string

## example

```javascript
latin("Auf Wiedersehen!/ Tschüß!") // "Auf Wiedersehen!/ Tschuss!"
latin("Phrases accentuées") // "Phrases accentuees"
latin("ø×÷") // "ox "
```
