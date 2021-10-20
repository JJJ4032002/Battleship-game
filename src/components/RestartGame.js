import PlaceShipsOnBoard from "./PlaceShipsOnBoard";
function RestartGame() {
  let outerContainer = document.querySelector(".OuterContainer");
  let BlocksContainer = document.querySelector(".BlocksContainer");
  let restartBtnContainer = document.querySelector(".Restart");
  outerContainer.removeChild(BlocksContainer);
  outerContainer.removeChild(restartBtnContainer);
  let dummyBoard = PlaceShipsOnBoard("Rohan");
  return dummyBoard;
}

export default RestartGame;
