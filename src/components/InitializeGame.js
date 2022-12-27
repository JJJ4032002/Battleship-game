import PlaceAllShips from "./placeAllShips";
import { gameBoard } from "../gameBoardFactory";
import CreateGrid from "./CreateGrid";
import Player from "../Player";
import ElementCreator from "./ElementCreator";

function InitializeGame(
  PlayerOneShipsArray,
  PlayerOneName,
  PlayerTwoShipsArray,
  PlayerTwoName = "AI"
) {
  let newBoard1 = gameBoard(10);
  let newBoard2 = gameBoard(10);
  let PlayerGrid = CreateGrid(10, "PlayerBoard", PlayerOneName);
  let EnemyGrid = CreateGrid(10, "EnemyBoard", PlayerTwoName);
  let restBtnDiv = ElementCreator("div", { className: "Restart" });
  let restBtn = ElementCreator("button", {
    id: "RestartBtn",
    textContent: "Restart",
  });
  let winnerp = ElementCreator("p", { id: "Winnerpara" });
  let gridContainer = ElementCreator("div", { className: "GridContainer" });
  gridContainer.append(PlayerGrid, EnemyGrid);
  restBtnDiv.appendChild(restBtn);
  let gameDiv = document.querySelector("#gameContainer");
  gameDiv.innerHTML = "";
  gameDiv.append(winnerp, restBtnDiv, gridContainer);
  let User = Player(PlayerOneName, newBoard2);
  let Enemy = Player(PlayerTwoName, newBoard1);
  PlaceAllShips(newBoard1, PlayerOneShipsArray, "PlayerBoard");
  if (PlayerTwoShipsArray) {
    PlaceAllShips(newBoard1, PlayerTwoShipsArray, "EnemyBoard");
  } else {
    PlaceAllShips(
      newBoard2,
      [
        { row: 1, column: 2, length: 1, axisDecider: true },
        { row: 2, column: 7, length: 2, axisDecider: true },
        { row: 3, column: 0, length: 3, axisDecider: true },
        { row: 8, column: 1, length: 4, axisDecider: true },
        { row: 6, column: 3, length: 5, axisDecider: true },
      ],
      "EnemyBoard"
    );
  }

  return { newBoard1, newBoard2, User, Enemy };
}

export default InitializeGame;
