/**
 * @jest-environment jsdom
 */
import { gameBoard } from "./gameBoardFactory";
//Creating a new Gameboard
let newGameBoard = gameBoard(3);

test("If the board has been created", () => {
  expect(newGameBoard.getBoard()).toStrictEqual(
    new Array(3).fill(new Array(10).fill(""))
  );
});

test("Check - ship placement horizontal condition with non valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(9, 4, 4, true)).toBe(false);
});

test("Check - ship placement vertical condition with non valid params", () => {
  expect(newGameBoard.checkValidShipPlacement(4, 4, 4, false)).toBe(false);
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

test("Check - ship placement vertical condition with overflow", () => {
  expect(newGameBoard.checkValidShipPlacement(0, 2, 4, false)).toBe(false);
});

test("Check - ship placement horizontal condition with overflow", () => {
  expect(newGameBoard.checkValidShipPlacement(0, 8, 4, true)).toBe(false);
});

// test("Check if ship has been placed", () => {
//   newGameBoard.placeShip(0, 4, 4, true);
//   expect(newBoard.getBoard()).toBe([
//     ["", "", "", "", "X", "X", "X", "X", "", ""],
//     ["", "", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", "", ""],
//   ]);
// });

// test("Check if ship has been placed", () => {
//   newGameBoard.placeShip(3, 2, false);
//   expect(newGameBoard.getBoard()).toBe([
//     ["", "", "X", "", "X", "X", "X", "X", "", ""],
//     ["", "", "X", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", "", ""],
//   ]);
// });
