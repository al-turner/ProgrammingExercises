/* 
Instructions:

Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {
  const map = array.map(x => {
    if (x === 0) return 0;
    else return x * -1;
  });
  return map;
}
