import checkWhoWon from "./checkWhoWon";
import CheckUnique from "./checkUnique";
import PlayersAttackShip from "./PlayersAttackShip";

function getWinnerResult(element2, boards) {
  let position1 = getUniqueNumber();
  let element1 = document.querySelector(`div[data-box=Board1${position1}]`);
  let dataShip1 = element1.getAttribute("data-ship");
  let position2 = element2.id;
  let dataShip2 = element2.getAttribute("data-ship");
  let BothShipConditions = PlayersAttackShip(
    boards,
    position1,
    dataShip1,
    position2,
    dataShip2,
    element1,
    element2
  );

  let whoWon = checkWhoWon(BothShipConditions);
  return whoWon;
}

function getUniqueNumber() {
  let position1 = Math.floor(100 * Math.random());
  position1 = CheckUnique(position1);
  return position1;
}

export default getWinnerResult;
