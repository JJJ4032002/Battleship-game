import Colors from "../Colors";
function PreviewShipOnHover(
  currentElement,
  shipLength,
  GreenElementsArray,
  RedElementsArray,
  Direction
) {
  //incrementors
  let i = 0;
  let row = currentElement.getAttribute("data-row");
  let column = currentElement.getAttribute("data-column");

  //Calculating if ship can be placed in the row. The total should always be lesser or equal to endVal to be placed.
  //Getting total to compare later
  if (Direction) {
    column = +column + +shipLength - 1;
  } else {
    row = +row + +shipLength - 1;
  }

  //Looping over the elements as to create an effect if the ship is being higlighted on hover
  while (i < shipLength) {
    //If ship fits on the current row or column Color it with green else color it with red.
    if ((Direction && column <= 9) || (!Direction && row <= 9)) {
      console.log(column);
      currentElement.style["background-color"] = Colors.white;
    } else {
      currentElement.style["background-color"] = Colors.red;
      RedElementsArray.push(currentElement);
    }
    //Green colored element
    GreenElementsArray.push(currentElement);
    if (Direction && currentElement.getAttribute("data-column") < 9) {
      currentElement = currentElement.nextElementSibling;
    } else if (!Direction && currentElement.getAttribute("data-row") < 9) {
      let row = currentElement.getAttribute("data-row");
      let column = currentElement.getAttribute("data-column");
      row++;
      let nextElement = document.body.querySelector(
        `[data-Coordinates = "${row}${column}"]`
      );
      currentElement = nextElement;
    } else {
      console.log("Do not update");
    }

    i++;
  }
}

export default PreviewShipOnHover;
