import Colors from "./Colors";
function ColorChange(
  Board2Cond,
  Board1Cond,
  CoordinatesOneArr,
  CoordinatesTwoArr
) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;
  let ele2 = document.querySelector(`#Board2${row2}${column2}`);
  let ele1 = document.querySelector(`#Board1${row1}${column1}`);
  if (Board2Cond === "oops you missed the ship") {
    ele2.style["background-color"] = Colors.gray;
  } else {
    ele2.style["background-color"] = Colors.red;
  }

  if (Board1Cond === "oops you missed the ship") {
    ele1.style["background-color"] = Colors.gray;
  } else {
    ele1.style["background-color"] = Colors.red;
  }
}

export default ColorChange;
