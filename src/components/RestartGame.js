import PlaceShipsOnBoard from "./PlaceShipsOnBoard";
function RestartGame() {
  let outerContainer = document.querySelector(".OuterContainer");
  let BlocksContainer = document.querySelector(".BlocksContainer");
  let WinnerPara = document.querySelector("#Winnerpara");
  let restartBtnContainer = document.querySelector(".Restart");
  outerContainer.removeChild(BlocksContainer);
  outerContainer.removeChild(restartBtnContainer);
  outerContainer.removeChild(WinnerPara);
  let dummyBoard = PlaceShipsOnBoard("Rohan");
  return dummyBoard;
}

export default RestartGame;
