import InitializeGame from "./InitializeGame";

function AllShipsPlacedValidation(length, shipsCoordinatesArr, PlayerOne) {
  if (length < 6) {
    alert("Please place all the ships");
  } else {
    let btnCont = document.querySelector(".BtnCont");
    let gridContainer = document.querySelector(".BlocksContainer");
    btnCont.parentElement.removeChild(btnCont);
    gridContainer.parentElement.removeChild(gridContainer);
    return InitializeGame(shipsCoordinatesArr, PlayerOne);
  }
}

export default AllShipsPlacedValidation;
