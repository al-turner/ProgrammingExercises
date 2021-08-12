/*
Instructions: 

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  var numAsString = num.toString();
  var numbers = numAsString.split("");
  var output = numbers.map(x => x * x);
  return parseInt(output.join(""));
}
