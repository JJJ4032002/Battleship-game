import ElementCreator from "../ElementCreator";
import { gameBoard } from "../../gameBoardFactory";
import CreateGrid from "../CreateGrid";
function ShipPlacement(name) {
  let gameDiv = document.querySelector("#gameContainer");
  gameDiv.innerHTML = "";
  let axisButton = ElementCreator("button", {
    id: "axisBtn",
    textContent: "X-Axis",
  });
  let StartGameButton = ElementCreator("button", {
    id: "subBtn",
    textContent: "Submit",
  });
  let dummyBoard = gameBoard(10, "DummyBoard");
  let grid = CreateGrid(10, "DummyBoard");
  gameDiv.appendChild(axisButton, StartGameButton, grid);
  return dummyBoard;
}

export default ShipPlacement;
