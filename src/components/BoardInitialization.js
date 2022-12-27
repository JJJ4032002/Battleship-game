import ElementCreator from "./ElementCreator";
import { gameBoard } from "../gameBoardFactory";
import CreateGrid from "./CreateGrid";
function BoardInitialization(name, submitButtonId, ErrorSpanId, BoardId) {
  let gameDiv = document.querySelector("#gameContainer");
  gameDiv.innerHTML = "";
  let heading = ElementCreator("h2", {
    textContent: `${name}, Please place your ships`,
  });
  let axisButton = ElementCreator("button", {
    id: "axisBtn",
    textContent: "X-Axis",
  });
  let StartGameButton = ElementCreator("button", {
    id: submitButtonId,
    className: "submitButton",
    textContent: "Submit",
  });
  let errorSpan = ElementCreator("span", {
    className: "ErrorText",
    id: ErrorSpanId,
    textContent: "Please place all the ships!",
  });
  let dummyBoard = gameBoard(10, BoardId);
  let grid = CreateGrid(10, BoardId);
  gameDiv.append(heading, axisButton, StartGameButton, errorSpan, grid);
  return dummyBoard;
}

export default BoardInitialization;
