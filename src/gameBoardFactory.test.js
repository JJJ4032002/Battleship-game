/**
 * @jest-environment jsdom
 */
import { gameBoard } from "./gameBoardFactory";

document.body.innerHTML = `
      <div class="OuterContainer"></div>
  `;
let OuterContainer = document.querySelector(".OuterContainer");
let newGameBoard = gameBoard(6, "Board1");

require("./CreateGrid.js");

test("Adding Divs to grid", () => {
  expect(OuterContainer.innerHTML).toBe(
    `<div class="BlocksContainer"><div class="container" id="Board1" style="display: grid; grid-template-columns: repeat(10,1fr); grid-template-rows: repeat(10,minmax(35px,1fr); width: 100%;"><div style="border: 2px solid #40916c;" class="box-items" data-box="Board10" data-box-number="0" id="0"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board11" data-box-number="1" id="1"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board12" data-box-number="2" id="2"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board13" data-box-number="3" id="3"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board14" data-box-number="4" id="4"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board15" data-box-number="5" id="5"></div></div></div>`
  );
});

test("Adding Divs to grid", () => {
  newGameBoard.placeShip(3, 2, "Board1", true);
  expect(OuterContainer.innerHTML).toBe(
    `<div class="BlocksContainer"><div class="container" id="Board1" style="display: grid; grid-template-columns: repeat(10,1fr); grid-template-rows: repeat(10,minmax(35px,1fr); width: 100%;"><div style="border: 2px solid #40916c;" class="box-items" data-box="Board10" data-box-number="0" id="0"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board11" data-box-number="1" id="1"></div><div style="border: 2px solid #40916c; background-color: rgb(110, 235, 94);" class="box-items" data-box="Board12" data-box-number="2" id="2" data-ship="3"></div><div style="border: 2px solid #40916c; background-color: rgb(110, 235, 94);" class="box-items" data-box="Board13" data-box-number="3" id="3" data-ship="3"></div><div style="border: 2px solid #40916c; background-color: rgb(110, 235, 94);" class="box-items" data-box="Board14" data-box-number="4" id="4" data-ship="3"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board15" data-box-number="5" id="5"></div></div></div>`
  );
});

test("Check if a boat is attacked", () => {
  expect(newGameBoard.receiveAttack(3, 3)).toBe(
    "The ship has been hit and Coordinates have been noted"
  );
});

test("Check if a boat is attacked once", () => {
  expect(newGameBoard.receiveAttack(3, 3)).toBe(
    "The ship has already been hit"
  );
});

test("Check if a enemy missed the attack", () => {
  expect(newGameBoard.receiveAttack(1, null)).toBe("Opps missed the ship");
});

test("Check if all the ships have sunk", () => {
  newGameBoard.receiveAttack(2, 3);
  expect(newGameBoard.AllShipsSunk()).toBe(
    "All the ships have not been sunk yet"
  );
});

test("Check if all the ships have sunk", () => {
  newGameBoard.receiveAttack(4, 3);
  expect(newGameBoard.AllShipsSunk()).toBe("All the ships are sunk");
});
