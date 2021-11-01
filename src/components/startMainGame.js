import PlaceAllShips from "./placeAllShips";
import { gameBoard } from "../gameBoardFactory";
import elementCreator from "./elementCreator";
import CreateGrid from "../CreateGrid";

function startMainGame(arr) {
  let newBoard1 = gameBoard(10);
  let newBoard2 = gameBoard(10);
  CreateGrid(10, "Board1");
  CreateGrid(10, "Board2");

  PlaceAllShips(newBoard1, arr, "Board1");

  PlaceAllShips(
    newBoard2,
    [
      { row: 1, column: 2, length: 1, axisDecider: true },
      { row: 2, column: 7, length: 2, axisDecider: true },
      { row: 3, column: 0, length: 3, axisDecider: true },
      { row: 8, column: 1, length: 4, axisDecider: true },
      { row: 6, column: 3, length: 5, axisDecider: true },
    ],
    "Board2"
  );

  let restBtnDiv = elementCreator("div", { className: "Restart" });
  let restBtn = elementCreator("button", { id: "RestartBtn" });
  restBtn.textContent = "Restart";
  restBtnDiv.appendChild(restBtn);

  document.querySelector(".OuterContainer").appendChild(restBtnDiv);

  return { newBoard1, newBoard2 };
}

export default startMainGame;
