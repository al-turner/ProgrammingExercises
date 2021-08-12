/*
Instructions: 

Write a function called checkCoupon to verify that a coupon is valid and not expired.
If the coupon is good, return true. Otherwise, return false.
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  var date = new Date(currentDate);
  var expiryDate = new Date(expirationDate);
  if (enteredCode !== correctCode || date > expiryDate) {
    return false;
  } else return true;
}
