import PlaceAllShips from "./placeAllShips";
import { gameBoard } from "../gameBoardFactory";

function startMainGame() {
  let newBoard1 = gameBoard(100, "Board1");
  let newBoard2 = gameBoard(100, "Board2");
  PlaceAllShips(
    newBoard1,
    [
      { length: 1, position: 78 },
      { length: 2, position: 2 },
      { length: 3, position: 11 },
      { length: 4, position: 22 },
      { length: 5, position: 53 },
    ],
    "Board1"
  );
  PlaceAllShips(
    newBoard2,
    [
      { length: 1, position: 99 },
      { length: 2, position: 7 },
      { length: 3, position: 35 },
      { length: 4, position: 65 },
      { length: 5, position: 71 },
    ],
    "Board2"
  );
  return { newBoard1, newBoard2 };
}

export default startMainGame;
