let checkArr = [];

function CheckUnique(arr) {
  let FilteredArr = checkArr.filter((e) => {
    return e[0] === arr[0] && e[1] === arr[1];
  });
  if (FilteredArr.length === 0) {
    checkArr.push(arr);
    console.log("The coordinates are unique");
    return arr;
  } else {
    let row = Math.floor(10 * Math.random());
    let column = Math.floor(10 * Math.random());
    arr = [row, column];
    let elseVal = CheckUnique(arr);
    console.log("The number was not unique and a new number is returned");
    return elseVal;
  }
}
export default CheckUnique;
