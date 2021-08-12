/*
Instructions:

Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.
*/

function removeSmallest(numbers) {
  var smallestNumber = 0;
  var indexPosition;
  for (i = 0; i < numbers.length; i++) {
    if (i == 0) {
      smallestNumber = numbers[i];
      indexPosition = i;
    } else if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
      indexPosition = i;
    }
  }
  numbers.splice(indexPosition, 1);
  return numbers;
}
