import PlaceShipsOnBoard from "./PlaceShipsOnBoard";

function submitName() {
  let Input = document.querySelector("#name");
  let name = Input.value;
  if (name === "") {
    alert("Please Enter the name");
  } else {
    let gameDiv = document.querySelector("#gameContainer");
    gameDiv.parentElement.removeChild(gameDiv);
    let returnBoard = PlaceShipsOnBoard(name);

    return returnBoard;
  }
}
export default submitName;
