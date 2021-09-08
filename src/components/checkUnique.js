let checkArr = [];

function CheckUnique(index) {
  if (checkArr.indexOf(index) === -1) {
    checkArr.push(index);
    console.log("The number is unique");
    return index;
  } else {
    let index = Math.floor(100 * Math.random());
    let elseVal = CheckUnique(index);
    console.log("The number was not unique and a new number is returned");
    return elseVal;
  }
}
export default CheckUnique;
