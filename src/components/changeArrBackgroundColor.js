// iterate over an array and change the background color of the elements present in it.
function changeArrBackgroundColor(arr, color) {
  arr.forEach((e) => {
    e.style["background-color"] = `${color}`;
  });
}

export default changeArrBackgroundColor;
