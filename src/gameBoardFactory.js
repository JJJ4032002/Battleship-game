import CreateGrid from "./CreateGrid";
import PlaceAtPosition from "./PlaceAtPosition";
import { ship } from "./shipFactory";

const methodObj = {
  placeShip: function (ShipLength, position, BoardId) {
    this.NoOfShips++;
    let ChildNodes = document.querySelector(`#${BoardId}`).children;
    ChildNodes = [...ChildNodes];
    let newShip = ship(ShipLength);
    this.shipsArr.push(newShip);
    ChildNodes.forEach(PlaceAtPosition, {
      ShipLength,
      position,
      ShipCount: 0,
    });
  },
  receiveAttack: function (position, shipLength) {
    let index = this.CoordinatesArr.indexOf(position);
    if (index != -1) {
      return "The ship has already been hit";
    }
    if (shipLength === undefined) {
      this.CoordinatesArr.push(position);
      return "Enemy Missed the attack";
    } else if (index === -1) {
      this.CoordinatesArr.push(position);
      function FindShip(params) {
        return shipLength === params.ShipLength;
      }
      let ShipIndex = this.shipsArr.findIndex(FindShip);
      let thatShip = this.shipsArr[ShipIndex];

      thatShip.hit(position);
      let shipCondition = thatShip.isSunk();
      if (shipCondition === "Oh the ship has been sunk") {
        this.ShipsSunkArr.push(thatShip);
      }

      return "The ship has been hit and Coordinates have been noted";
    }
  },
  AllShipsSunk: function () {
    if (this.ShipsSunkArr.length === this.NoOfShips) {
      return "All the ships are sunk";
    } else {
      return "All the ships have not been sunk yet";
    }
  },
};

function gameBoard(length, Board) {
  let shipsArr = [];
  let CoordinatesArr = [];
  let NoOfShips = 0;
  let ShipsSunkArr = [];

  CreateGrid(length, Board);

  let gameBoardObj = Object.assign(Object.create(methodObj), {
    shipsArr,
    CoordinatesArr,
    NoOfShips,
    ShipsSunkArr,
  });
  return gameBoardObj;
}

export { gameBoard };
