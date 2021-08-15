/**
 * @jest-environment jsdom
 */
import { newGameBoard } from "./gameBoardFactory";
newGameBoard.placeShip(3, 3);
newGameBoard.placeShip(4, 11);
let bla;

test("Check if a boat is attacked", () => {
  document.innerHtml = ``;
  expect(newGameBoard.receiveAttack(3, 3)).toBe(
    "The ship has been hit and Coordinates have been noted"
  );
});

test("Check if a boat is attacked", () => {
  document.innerHtml = ``;
  expect(newGameBoard.receiveAttack(3, 3)).toBe(
    "You have attacked this position"
  );
});

test("Check if a enemy missed the attack", () => {
  document.innerHtml = ``;
  expect(newGameBoard.receiveAttack(3, bla)).toBe("Enemy Missed the attack");
});

test("Check if all the ships have sunk", () => {
  document.innerHtml = ``;
  expect(newGameBoard.AllShipsSunk()).toBe(
    "All the ships have not been sunk yet"
  );
});
