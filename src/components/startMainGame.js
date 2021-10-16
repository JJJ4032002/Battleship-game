import PlaceAllShips from "./placeAllShips";
import { gameBoard } from "../gameBoardFactory";

function startMainGame(arr) {
  let newBoard1 = gameBoard(100, "Board1");
  let newBoard2 = gameBoard(100, "Board2");
  PlaceAllShips(newBoard1, arr, "Board1");
  PlaceAllShips(
    newBoard2,
    [
      { length: 1, position: 99, axisDecider: true },
      { length: 2, position: 7, axisDecider: true },
      { length: 3, position: 35, axisDecider: true },
      { length: 4, position: 65, axisDecider: true },
      { length: 5, position: 71, axisDecider: true },
    ],
    "Board2"
  );
  return { newBoard1, newBoard2 };
}

export default startMainGame;
