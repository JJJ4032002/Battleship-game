import Colors from "./Colors";
function ColorChange(ship1, ship2, ele1, ele2) {
  if (ship1 != null) {
    ele1.style["background-color"] = Colors.red;
  } else {
    ele1.style["background-color"] = Colors.gray;
  }

  if (ship2 != null) {
    ele2.style["background-color"] = Colors.red;
  } else {
    ele2.style["background-color"] = Colors.gray;
  }
}

export default ColorChange;
