/**
 * @jest-environment jsdom
 */
import { gameBoard } from "./gameBoardFactory";
//Creating a new Gameboard
let newGameBoard = gameBoard(3);

test("If the board has been created", () => {
  expect(newGameBoard.getBoard()).toBe(
    new Array(3).fill(new Array(10).fill(""))
  );
});

//Attempting the 1D approach and assuming that arrays are divided in 10 columns and 3 rows.

test("Check - ship placement horizontal condition with non valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(9, 4, 4, true)).toBe(false);
});

test("Check - ship placement vertical condition with non valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(4, 4, false)).toBe(false);
});

test("Check - ship placement horizontal condition with valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(0, 4, 4, true)).toBe(true);
});

test("Check for the ships overlapping condition", () => {
  expect(newGameBoard.checkValidShipPlacement(0, 3, 4, true)).toBe(false);
});

test("Check - ship placement vertical condition with valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(0, 2, 2, false)).toBe(true);
});

test("Check if ship has been placed", () => {
  newGameBoard.placeShip(0, 4, 4, true);
  expect(newBoard.getBoard()).toBe([
    ["", "", "", "", "X", "X", "X", "X", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("Check if ship has been placed", () => {
  newGameBoard.placeShip(3, 2, false);
  expect(newGameBoard.getBoard()).toBe([
    ["", "", "X", "", "X", "X", "X", "X", "", ""],
    ["", "", "X", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});
