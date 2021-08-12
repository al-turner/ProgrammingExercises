/*
Instructions:

Given a string of words, return the length of the shortest word(s).
*/

function findShort(s) {
  var array = s.split(" ");
  var word = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i].length < word.length) {
      word = array[i];
    }
  }
  return word.length;
}
