import CreateGrid from "./CreateGrid";
import PlaceAtPosition from "./PlaceAtPosition";
import { ship } from "./shipFactory";

const methodObj = {
  placeShip: function (ShipLength, position, BoardId, axisDecider) {
    this.NoOfShips++;
    let ChildNodes = document.querySelector(`#${BoardId}`).children;
    ChildNodes = [...ChildNodes];
    let newShip = ship(ShipLength);
    this.shipsArr.push(newShip);
    ChildNodes.forEach(PlaceAtPosition, {
      axisDecider,
      ShipLength,
      position,
      ShipCount: 0,
      BoardId,
    });
  },
  receiveAttack: function (position, shipLength) {
    let index = this.CoordinatesArr.indexOf(position);
    if (index != -1) {
      return "The ship has already been hit";
    } else if (index === -1 && shipLength != null) {
      this.CoordinatesArr.push(position);
      function FindShip(params) {
        return Number(shipLength) === params.ShipLength;
      }
      let ShipIndex = this.shipsArr.findIndex(FindShip);
      let thatShip = this.shipsArr[ShipIndex];

      thatShip.hit(position);
      let shipCondition = thatShip.isSunk();
      if (shipCondition === "Oh the ship has been sunk") {
        this.ShipsSunkArr.push(thatShip);
      }

      return "The ship has been hit and Coordinates have been noted";
    } else {
      this.CoordinatesArr.push(position);
      return "Opps missed the ship";
    }
  },
  AllShipsSunk: function () {
    if (this.ShipsSunkArr.length === this.NoOfShips) {
      return "All the ships are sunk";
    } else {
      return "All the ships have not been sunk yet";
    }
  },
  checkValidShipPlacement: function (xCod, yCod, shipLength, axisDecider) {
    let i = 0;
    let ArrToBeChecked = [];
    while (i < shipLength) {
      ArrToBeChecked.push(yCod);
      if (axisDecider) {
        ArrToBeChecked.push(yCod);
        yCod++;
      } else {
        ArrToBeChecked.push(xCod);
        xCod++;
      }
      i++;
    }

    let FilteredArr = ArrToBeChecked.filter((e) => {
      return this.shipsPlacedArr.includes(e);
    });
    /* Conditions where ships cannot be placed if the rows number is undefined eg - xCol = 4 but there are only three rows defined.
    or Ships are overlapping in this cased the filtered array would be filled.
    or condition where the ships in horizontal condition cannot be placed boardBlocks[0][10]. But it will be undefined as there are only 9 columns.
    */

    console.log(xCod, yCod);
    if (
      this.boardBlocks[xCod] === undefined ||
      FilteredArr.length !== 0 ||
      this.boardBlocks[xCod][yCod] === undefined
    ) {
      return false;
    }
    // else if(){

    // }
    this.shipsPlacedArr = [...this.shipsPlacedArr, ...ArrToBeChecked];

    return true;
  },
  getBoard: function () {
    return this.boardBlocks;
  },
};

function gameBoard(length, Board) {
  let shipsArr = [];
  let CoordinatesArr = [];
  let NoOfShips = 0;
  let ShipsSunkArr = [];
  let shipsPlacedArr = [];
  let boardBlocks = new Array(length).fill(new Array(10).fill(""));
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
