import PlaceShipsOnBoard from "./PlaceShipsOnBoard";
function RestartGame(name) {
  let outerContainer = document.querySelector(".OuterContainer");
  let BlocksContainer = document.querySelector(".BlocksContainer");
  let WinnerPara = document.querySelector("#Winnerpara");
  let restartBtnContainer = document.querySelector(".Restart");
  outerContainer.removeChild(BlocksContainer);
  outerContainer.removeChild(restartBtnContainer);
  outerContainer.removeChild(WinnerPara);
  let dummyBoard = PlaceShipsOnBoard(name);
  return dummyBoard;
}

export default RestartGame;
