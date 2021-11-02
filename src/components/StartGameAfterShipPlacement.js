import InitializeMainGame from "./InitializeMainGame";

function StartGameAfterPlacement(length, shipsCoordinatesArr, PlayerOne) {
  if (length < 6) {
    alert("Please place all the ships");
  } else {
    let btnCont = document.querySelector(".BtnCont");
    let gridContainer = document.querySelector(".BlocksContainer");
    btnCont.parentElement.removeChild(btnCont);
    gridContainer.parentElement.removeChild(gridContainer);

    return InitializeMainGame(shipsCoordinatesArr, PlayerOne);
  }
}

export default StartGameAfterPlacement;
