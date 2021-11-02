import PlaceAllShips from "./placeAllShips";
import { gameBoard } from "../gameBoardFactory";
import elementCreator from "./elementCreator";
import CreateGrid from "../CreateGrid";
import Player from "../Player";

function InitializeMainGame(arr, name) {
  let newBoard1 = gameBoard(10);
  let newBoard2 = gameBoard(10);
  CreateGrid(10, "Board1", name);
  CreateGrid(10, "Board2", "AI");

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
  let winnerp = elementCreator("p", { id: "Winnerpara" });
  restBtn.textContent = "Restart";
  restBtnDiv.appendChild(restBtn);
  console.log(newBoard1.boardBlocks);
  console.log(newBoard2.boardBlocks);
  let outerContainer = document.querySelector(".OuterContainer");
  outerContainer.appendChild(winnerp);
  outerContainer.appendChild(restBtnDiv);
  let PlayerOne = Player(name, newBoard2);
  let PlayerTwo = Player("AI", newBoard1);

  return { newBoard1, newBoard2, PlayerOne, PlayerTwo };
}

export default InitializeMainGame;
