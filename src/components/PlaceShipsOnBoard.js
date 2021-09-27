import { gameBoard } from "../gameBoardFactory";

function PlaceShipsOnBoard() {
  let btnDiv = document.createElement("div");
  btnDiv.setAttribute("class", "BtnCont");
  let btn = document.createElement("button");
  btn.setAttribute("id", "axisBtn");
  btn.textContent = "X-AXIS";
  btnDiv.appendChild(btn);
  let OuterContainer = document.querySelector(".OuterContainer");
  OuterContainer.appendChild(btnDiv);

  let dummyBoard = gameBoard(100, "DummyBoard");
  return dummyBoard;
}

export default PlaceShipsOnBoard;
