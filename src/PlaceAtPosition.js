function PlaceAtPosition(row, column, shipLength, axisDecider, arrToAvoid) {
  let shipCount = 0;
  while (shipCount < shipLength) {
    let elementToBeHiglighted = document.querySelector(
      `div[data-coordinates="${row}${column}"]`
    );
    arrToAvoid = [...arrToAvoid, elementToBeHiglighted];
    elementToBeHiglighted.style["background-color"] = "eeb5e";
    if (axisDecider) {
      column++;
    } else {
      row++;
    }
    shipCount++;
  }
  return arrToAvoid;
}

export default PlaceAtPosition;
