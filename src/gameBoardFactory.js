import { ship } from "./shipFactory";

const methodObj = {
  placeShip: function (row, column, shipLength, axisDecider) {
    this.NoOfShips++;
    let i = 0;
    while (i < shipLength) {
      this.boardBlocks[row][column] = `${shipLength}`;
      if (axisDecider) {
        column++;
      } else {
        row++;
      }
      i++;
    }
    let newShip = ship(shipLength);
    this.shipsArr.push(newShip);
  },
  receiveAttack: function (row, column) {
    let element = [row, column];
    let shipLength = this.boardBlocks[row][column];
    let index = this.CoordinatesArr.findIndex((e) => {
      return e[0] === element[0] && e[1] === element[1];
    });
    if (index != -1) {
      return "The ship has already been hit";
    } else if (index === -1 && shipLength != "") {
      this.CoordinatesArr.push([row, column]);
      function FindShip(params) {
        return Number(shipLength) === params.ShipLength;
      }
      let ShipIndex = this.shipsArr.findIndex(FindShip);
      console.log();
      console.log(ShipIndex);
      let thatShip = this.shipsArr[ShipIndex];

      thatShip.hit();
      this.boardBlocks[row][column] = "hit";
      let shipCondition = thatShip.isSunk();
      if (shipCondition === "Oh the ship has been sunk") {
        this.ShipsSunkArr.push(thatShip);
      }

      return "The ship has been hit and coordinates have been noted";
    } else {
      this.CoordinatesArr.push([row, column]);
      return "oops you missed the ship";
    }
  },
  AllShipsSunk: function () {
    if (this.ShipsSunkArr.length === this.NoOfShips) {
      return "All the ships are sunk";
    } else {
      return "All the ships have not been sunk yet";
    }
  },
  checkValidShipPlacement: function (row, column, shipLength, axisDecider) {
    let i = 0;
    let ArrToBeChecked = [];
    while (i < shipLength) {
      ArrToBeChecked.push([Number(row), Number(column)]);
      if (axisDecider) {
        column++;
      } else {
        row++;
      }
      i++;
    }

    if (axisDecider) {
      //Reverting back to correct coordinates
      column = column - 1;
    } else {
      row = row - 1;
    }

    let FilteredArr = [];
    if (this.shipsPlacedArr.length === 0) {
      console.log(
        "Ship for the first iteration as there will be no overlapping"
      );
    } else {
      let toCheckArr = [];
      ArrToBeChecked.forEach((arrayElement) => {
        //[[1,2,3],[4,5]] initial array
        this.shipsPlacedArr.forEach((indiArr) => {
          // Array to be checked from.
          indiArr.forEach((ele, index) => {
            if (ele === arrayElement[index]) toCheckArr.push(ele); //checking every element of shipsPlacedArr with arrayElement
          });
          if (toCheckArr.length === arrayElement.length)
            FilteredArr.push(toCheckArr);

          toCheckArr = [];
        });
      });
    }

    /* Conditions where ships cannot be placed if the rows number is undefined eg - xCol = 4 but there are only three rows defined.
    or Ships are overlapping in this cased the filtered array would be filled.
    or condition where the ships in horizontal condition cannot be placed boardBlocks[0][10]. But it will be undefined as there are only 9 columns.
    */

    if (
      this.boardBlocks[row] === undefined ||
      FilteredArr.length !== 0 ||
      this.boardBlocks[row][column] === undefined
    ) {
      return false;
    }

    this.shipsPlacedArr = [...this.shipsPlacedArr, ...ArrToBeChecked];
    console.log(this.shipsPlacedArr);
    return true;
  },
  getBoard: function () {
    return this.boardBlocks;
  },
};

function gameBoard(length) {
  let shipsArr = [];
  let CoordinatesArr = [];
  let NoOfShips = 0;
  let ShipsSunkArr = [];
  let shipsPlacedArr = [];
  let boardBlocks = Array.from({ length: length }, (e) => Array(10).fill(""));
  let gameBoardObj = Object.assign(Object.create(methodObj), {
    shipsArr,
    CoordinatesArr,
    NoOfShips,
    ShipsSunkArr,
    boardBlocks,
    shipsPlacedArr,
  });
  return gameBoardObj;
}

export { gameBoard };
