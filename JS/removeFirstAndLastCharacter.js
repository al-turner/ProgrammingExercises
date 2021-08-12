/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/
function removeChar(str) {
  var split = str.split("");
  var result = [];
  for (i = 0; i <= split.length; i++) {
    if (i != 0 && i != split.length - 1) {
      result.push(split[i]);
    }
  }
  return result.join("");
}
