import Player from "./Player";

const receiveAttack = jest
  .fn()
  .mockImplementationOnce(
    () => "The ship has been hit and coordinates have been noted"
  )
  .mockImplementationOnce(
    () => "The ship has been hit and coordinates have been noted"
  );

const AllShipsSunk = jest
  .fn()
  .mockImplementationOnce(() => "All the ships have not been sunk yet")
  .mockImplementationOnce(() => "All the ships are sunk");
const gameBoard = jest.fn().mockImplementationOnce((parm) => {
  return { receiveAttack: receiveAttack, AllShipsSunk: AllShipsSunk };
});

let board1 = gameBoard(30);
let Player1 = Player("Roy", board1);

test("Get Player Name", () => {
  expect(Player1.getName()).toBe("Roy");
});

test("Player Attacks ships", () => {
  expect(Player1.AttackBoard(0, 2)).toEqual({
    ShipHit: "The ship has been hit and coordinates have been noted",
    IfShipsSunk: "All the ships have not been sunk yet",
  });
});

test("Player Wins", () => {
  expect(Player1.AttackBoard(0, 3)).toEqual({
    ShipHit: "The ship has been hit and coordinates have been noted",
    IfShipsSunk: "All the ships are sunk",
  });
});
