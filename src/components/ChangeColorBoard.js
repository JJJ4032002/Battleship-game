function ColorChange(ship1, ship2, ele1, ele2) {
  if (ship1 != null) {
    ele1.style["background-color"] = "#de524e";
  } else {
    ele1.style["background-color"] = "#94908f";
  }

  if (ship2 != null) {
    ele2.style["background-color"] = "#de524e";
  } else {
    ele2.style["background-color"] = "#94908f";
  }
}

export default ColorChange;
