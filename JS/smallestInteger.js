/*
Instructions:

Given an array of integers your solution should find the smallest integer. 
*/

function findSmallestInt(args) {
  var newArr = args.sort((a, b) => {
    return a - b;
  });
  return newArr[0];
}
