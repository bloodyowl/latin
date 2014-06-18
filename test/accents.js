var tape = require("tape")
var latin = require("..")

tape("accents, all chars", function(test){
  var accented = "ÀÁÂÃÄÅàáâãäåÆæÇçÐðÈÉÊËèéêëÌÍÎÏìíîïÑñÒÓÔÕÖØòóôõöø×÷ÙÚÛÜùúûüÝýßÞþ"
  var expected = "AAAAAAaaaaaaAEaeCcDdEEEEeeeeIIIIiiiiNnOOOOOOoooooox UUUUuuuuYyssThth"
  test.equal(latin(accented), expected)
  test.end()
})

tape("accents, sentence", function(test){
  test.equal(latin("hé how are u ø ×!"), "he how are u o x!")
  test.equal(latin("Auf Wiedersehen!/ Tschüß!"), "Auf Wiedersehen!/ Tschuss!")
  test.equal(latin("no accents"), "no accents")
  test.end()
})
