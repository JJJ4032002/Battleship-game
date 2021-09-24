import { gameBoard } from "../gameBoardFactory";

function PlaceShipsOnBoard() {
  let dummyBoard = gameBoard(100, "DummyBoard");
  return dummyBoard;
}

export default PlaceShipsOnBoard;
