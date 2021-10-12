import { gameBoard } from "../gameBoardFactory";

function PlaceShipsOnBoard(name) {
  let btnDiv = document.createElement("div");
  let para = document.createElement("p");
  para.textContent = `Please ${name} place your ships`;
  btnDiv.setAttribute("class", "BtnCont");
  let btn = document.createElement("button");
  btn.setAttribute("id", "axisBtn");
  btn.textContent = "X-AXIS";
  btnDiv.appendChild(para);
  btnDiv.appendChild(btn);
  let OuterContainer = document.querySelector(".OuterContainer");
  OuterContainer.appendChild(btnDiv);

  let dummyBoard = gameBoard(100, "DummyBoard");
  return dummyBoard;
}

export default PlaceShipsOnBoard;
