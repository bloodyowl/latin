var latinRE = /[\xc0-\xff]/g
var letters = {}
var chars
var map = {
  "ÀÁÂÃÄÅ" : "A",
  "Æ" : "AE",
  "Ç" : "C",
  "Ð" : "D",
  "ÈÉÊË" : "E",
  "ÌÍÎÏ" : "I",
  "Ñ" : "N",
  "ÒÓÔÕÖØ" : "O",
  "×" : "x",
  "÷" : " ",
  "ÙÚÛÜ" : "U",
  "Ý" : "Y",
  "ß" : "ss",
  "Þ" : "Th"
}

function use(array, letter){
  var index = -1
  var length = array.length
  while(++index < length) {
    letters[array[index]] = letter
  }
}

for(chars in map) {
  use(chars.split(""), map[chars])
  use(chars.toLowerCase().split(""), map[chars].toLowerCase())
}

module.exports = function(string){
  return string.replace(latinRE, function(char){
    return letters[char]
  })
}
