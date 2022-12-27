import Colors from "../Colors";
import CheckWinner from "./CheckWinner";
function GetWinner(element2, boards, checkArr) {
  let CoordinatesOneArr = getUniqueNumber(checkArr);
  console.log(CoordinatesOneArr);
  let EnemyShipRow = element2.getAttribute("data-row");
  let EnemyShipColumn = element2.getAttribute("data-column");
  let CoordinatesTwoArr = [EnemyShipRow, EnemyShipColumn];
  console.log(CoordinatesTwoArr);
  let BothShipConditions = PlayersAttackShip(
    boards,
    CoordinatesOneArr,
    CoordinatesTwoArr
  );
  if (BothShipConditions.UserHitCondition === "The ship has already been hit") {
    checkArr.push(CoordinatesOneArr);
  }
  let whoWon = CheckWinner(BothShipConditions);
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

function PlayersAttackShip(boards, CoordinatesOneArr, CoordinatesTwoArr) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;

  let EnemyBoardAttackedObj = boards.User.AttackBoard(row2, column2);
  let PlayerBoardAttackedObj = {};
  if (EnemyBoardAttackedObj.ShipHit !== "The ship has already been hit") {
    PlayerBoardAttackedObj = boards.Enemy.AttackBoard(+row1, +column1);
    ColorChange(
      EnemyBoardAttackedObj.ShipHit,
      PlayerBoardAttackedObj.ShipHit,
      CoordinatesOneArr,
      CoordinatesTwoArr
    );
  } else {
    console.log("Stopped ai from making the move");
  }

  return {
    ifAllShipsB1: PlayerBoardAttackedObj.IfShipsSunk,
    ifAllShipsB2: EnemyBoardAttackedObj.IfShipsSunk,
    User: boards.User.getName(),
    Enemy: boards.Enemy.getName(),
    UserHitCondition: EnemyBoardAttackedObj.ShipHit,
  };
}

function ColorChange(
  EnemyBoardCondition,
  PlayerBoardCondition,
  CoordinatesOneArr,
  CoordinatesTwoArr
) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;
  let ele2 = document.querySelector(`#EnemyBoard${row2}${column2}`);
  let ele1 = document.querySelector(`#PlayerBoard${row1}${column1}`);
  if (EnemyBoardCondition === "oops you missed the ship") {
    ele2.style["background-color"] = Colors.gray;
  } else {
    ele2.style["background-color"] = Colors.red;
  }

  if (PlayerBoardCondition === "oops you missed the ship") {
    ele1.style["background-color"] = Colors.gray;
  } else {
    ele1.style["background-color"] = Colors.red;
  }
}

export default GetWinner;
