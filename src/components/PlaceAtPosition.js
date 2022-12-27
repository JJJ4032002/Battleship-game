import Colors from "../Colors";

function PlaceAtPosition(
  row,
  column,
  shipLength,
  axisDecider,
  BoardId = "DummyBoard"
) {
  let i = 0;
  let arrToAvoid = [];
  while (i < shipLength) {
    let elementToBeHiglighted = document.querySelector(
      `#${BoardId}${row}${column}`
    );
    arrToAvoid = [...arrToAvoid, elementToBeHiglighted];
    if (BoardId !== "EnemyBoard") {
      elementToBeHiglighted.style["background-color"] = Colors.white;
    }

    if (axisDecider) {
      column++;
    } else {
      row++;
    }
    i++;
  }
  return arrToAvoid;
}

export default PlaceAtPosition;
