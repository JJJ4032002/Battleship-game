import Colors from "./components/Colors";

function PlaceAtPosition(
  row,
  column,
  shipLength,
  axisDecider,
  BoardId = "DummyBoard"
) {
  let shipCount = 0;
  let arrToAvoid = [];
  while (shipCount < shipLength) {
    console.log(row, column, BoardId);
    console.log(typeof row, typeof column);
    let elementToBeHiglighted = document.querySelector(
      `#${BoardId}${row}${column}`
    );

    arrToAvoid = [...arrToAvoid, elementToBeHiglighted];
    if (BoardId !== "Board2") {
      elementToBeHiglighted.style["background-color"] = Colors.green;

      console.log("done");
      console.log(elementToBeHiglighted);
    }

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
