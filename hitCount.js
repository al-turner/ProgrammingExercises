/*
Instructions:

The function will take one argument which will be a four character string representing hit count
The function must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number
*/

function counterEffect(hitCount) {
  var result = [];
  for (i = 0; i < hitCount.length; i++) {
    var nestedArr = [];
    for (x = 0; x <= hitCount[i]; x++) {
      nestedArr.push(x);
    }
    result.push(nestedArr);
  }
  return result;
}
