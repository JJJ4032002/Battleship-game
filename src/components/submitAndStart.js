import startMainGame from "./startMainGame";
import PlaceShipsOnBoard from "./PlaceShipsOnBoard";

function submitAndStart() {
  let Input = document.querySelector("#name");
  let name = Input.value;
  if (name === "") {
    alert("Please Enter the name");
  } else {
    let gameDiv = document.querySelector("#gameContainer");
    gameDiv.innerHTML = "";
    let returnBoard = PlaceShipsOnBoard();

    return returnBoard;
  }
}
export default submitAndStart;
