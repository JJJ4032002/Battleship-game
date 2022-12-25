import checkWinner from "./checkWinner";

import PlayersAttackShip from "./PlayersAttackShip";

function getWinner(element2, boards, checkArr) {
  let CoordinatesOneArr = getUniqueNumber(checkArr);

  let dataShip2Row = element2.getAttribute("data-row");
  let dataShip2Column = element2.getAttribute("data-column");
  let CoordinatesTwoArr = [dataShip2Row, dataShip2Column];
  let BothShipConditions = PlayersAttackShip(
    boards,
    CoordinatesOneArr,
    CoordinatesTwoArr
  );
  if (BothShipConditions.UserHitCondition === "The ship has already been hit") {
    checkArr.push(CoordinatesOneArr);
  }
  let whoWon = checkWinner(BothShipConditions);
  return whoWon;
}

function getUniqueNumber(checkArr) {
  let Coordinates = Math.floor(checkArr.length * Math.random());
  Coordinates = checkArr[Coordinates];
  let index = checkArr.indexOf(Coordinates);
  checkArr.splice(index, 1);
  console.log(checkArr);
  return Coordinates;
}

export default getWinner;
