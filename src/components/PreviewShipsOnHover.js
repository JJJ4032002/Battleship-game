import Colors from "./Colors";
function PreviewShipsOnHover(e, shipCount, arr, arrRed, btn) {
  let i = 0;
  let j = 0;

  let row = e.getAttribute("data-row");
  let column = e.getAttribute("data-column");

  //Calculating if ship can be placed in the row. The total should always be lesser or equal to endVal to be placed.

  while (j < shipCount - 1) {
    if (btn) {
      column++;
    } else {
      row++;
    }
    j++;
  }

  while (i < shipCount) {
    if ((btn && column <= 9) || (!btn && row <= 9)) {
      e.style["background-color"] = Colors.green;
    } else {
      e.style["background-color"] = Colors.red;
      arrRed.push(e);
    }

    arr.push(e);
    if (btn && e.getAttribute("data-column") < 9) {
      e = e.nextElementSibling;
    } else if (!btn && e.getAttribute("data-row") < 9) {
      let rowColor = e.getAttribute("data-row");
      let columnColor = e.getAttribute("data-column");

      rowColor++;
      let nextEl = document.body.querySelector(
        `[data-Coordinates = "${rowColor}${columnColor}"]`
      );
      e = nextEl;
    } else {
      console.log("Do not update");
    }

    i++;
  }
}

export default PreviewShipsOnHover;
