/**
 * @jest-environment jsdom
 */
import { gameBoard } from "./gameBoardFactory";

// newGameBoard.placeShip(3, 3);
// newGameBoard.placeShip(4, 11);
// let bla;

test("Adding Divs to grid", () => {
  document.body.innerHTML = `
      <div class="OuterContainer"></div>
  `;
  let OuterContainer = document.querySelector(".OuterContainer");
  let newGameBoard = gameBoard(6, "Board1");
  require("./CreateGrid.js");

  expect(OuterContainer.innerHTML).toBe(
    `<div class="BlocksContainer"><div class="container" id="Board1" style="display: grid; grid-template-columns: repeat(10,1fr); grid-template-rows: repeat(10,minmax(25px,1fr); width: 100%;"><div style="border: 2px solid #40916c;" class="box-items" data-box="Board10" id="0"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board11" id="1"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board12" id="2"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board13" id="3"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board14" id="4"></div><div style="border: 2px solid #40916c;" class="box-items" data-box="Board15" id="5"></div></div></div>`
  );
});

// test("Check if a boat is attacked", () => {
//   document.innerHtml = ``;
//   expect(newGameBoard.receiveAttack(3, 3)).toBe(
//     "The ship has been hit and Coordinates have been noted"
//   );
// });

// test("Check if a boat is attacked", () => {
//   document.innerHtml = ``;
//   expect(newGameBoard.receiveAttack(3, 3)).toBe(
//     "You have attacked this position"
//   );
// });

// test("Check if a enemy missed the attack", () => {
//   document.innerHtml = ``;
//   expect(newGameBoard.receiveAttack(3, bla)).toBe("Enemy Missed the attack");
// });

// test("Check if all the ships have sunk", () => {
//   document.innerHtml = ``;
//   expect(newGameBoard.AllShipsSunk()).toBe(
//     "All the ships have not been sunk yet"
//   );
// });
