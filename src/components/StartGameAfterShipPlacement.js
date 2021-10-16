import startMainGame from "./startMainGame";

function StartGameAfterPlacement(length, shipsCoordinatesArr) {
  if (length < 6) {
    alert("Please place all the ships");
  } else {
    let btnCont = document.querySelector(".BtnCont");
    let gridContainer = document.querySelector(".BlocksContainer");
    btnCont.parentElement.removeChild(btnCont);
    gridContainer.parentElement.removeChild(gridContainer);

    return startMainGame(shipsCoordinatesArr);
  }
}

export default StartGameAfterPlacement;
