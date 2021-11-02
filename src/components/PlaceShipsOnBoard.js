import CreateGrid from "../CreateGrid";
import { gameBoard } from "../gameBoardFactory";

function PlaceShipsOnBoard(name) {
  let btnDiv = document.createElement("div");
  let SubBtn = document.createElement("button");
  let heading = document.createElement("h2");
  heading.textContent = `Please ${name} place your ships`;
  btnDiv.setAttribute("class", "BtnCont");
  let btn = document.createElement("button");
  btn.setAttribute("id", "axisBtn");
  SubBtn.setAttribute("id", "subBtn");
  SubBtn.textContent = "SUBMIT";
  btn.textContent = "X-AXIS";
  btnDiv.appendChild(heading);
  btnDiv.appendChild(btn);
  btnDiv.appendChild(SubBtn);
  let OuterContainer = document.querySelector(".OuterContainer");
  OuterContainer.appendChild(btnDiv);

  let dummyBoard = gameBoard(10, "DummyBoard");
  CreateGrid(10, "DummyBoard");

  return { dummyBoard, name };
}

export default PlaceShipsOnBoard;
