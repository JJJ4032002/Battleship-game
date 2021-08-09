import CreateGrid from "./CreateGrid";
import PlaceAtPosition from "./PlaceAtPosition";
import { ship } from "./shipFactory";

const methodObj = {
  placeShip: function (ShipLength, position) {
    let ChildNodes = document.querySelector("#container").children;
    ChildNodes = [...ChildNodes];
    let newShip = ship(ShipLength);
    this.shipsArr.push(newShip);
    ChildNodes.forEach(PlaceAtPosition, {
      ShipLength,
      position,
      ShipCount: 0,
    });
    console.log(document.querySelector("#container").innerHTML);
  },
};

function gameBoard(length) {
  let shipsArr = [];
  CreateGrid(length);
  let gameBoardObj = Object.assign(Object.create(methodObj), {
    shipsArr,
  });
  return gameBoardObj;
}

export { gameBoard };
