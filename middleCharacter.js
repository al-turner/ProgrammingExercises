/*
Instruction:

You are going to be given a word.
Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
  if (s.length % 2) {
    median = (s.length - 1) / 2;
    return s[median];
  } else {
    var result = "";
    var median1 = s.length / 2 - 1;
    var median2 = median1 + 1;
    result += s[median1] + s[median2];
    return result;
  }
}
