import checkWhoWon from "./checkWhoWon";
import CheckUnique from "./checkUnique";
import PlayersAttackShip from "./PlayersAttackShip";

function getWinnerResult(element2, boards) {
  let CoordinatesOneArr = getUniqueNumber();

  let dataShip2Row = element2.getAttribute("data-row");
  let dataShip2Column = element2.getAttribute("data-column");
  let CoordinatesTwoArr = [dataShip2Row, dataShip2Column];
  let BothShipConditions = PlayersAttackShip(
    boards,
    CoordinatesOneArr,
    CoordinatesTwoArr
  );

  let whoWon = checkWhoWon(BothShipConditions);
  return whoWon;
}

function getUniqueNumber() {
  let row = Math.floor(10 * Math.random());
  let column = Math.floor(10 * Math.random());
  let CoordinatesArr = [row, column];
  CoordinatesArr = CheckUnique(CoordinatesArr);
  return CoordinatesArr;
}

export default getWinnerResult;
