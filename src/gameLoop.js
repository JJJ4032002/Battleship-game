import submitAndStart from "./components/submitAndStart";

import PreviewShipsOnHover from "./components/PreviewShipsOnHover";
import changeArrBackgroundColor from "./components/changeArrBackgroundColor";
import Colors from "./components/Colors";
import validPlacementShip from "./components/validPlacementShip";
import StartGameAfterPlacement from "./components/StartGameAfterShipPlacement";
import getWinnerResult from "./components/getWinnerResult";
let gameLoop = (function () {
  let boards;
  let dummyBoard;
  let ShipCount = 1;
  let HoveredArr = [];
  let arrToAvoid = [];
  let arrBlocksRed = [];
  let shipCoordinatesArr = [];
  let btnCheck = true;

  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

  // Listening to mouseover events
  document.addEventListener("mouseover", function (e) {
    if (e.target.parentNode?.id === "DummyBoard") {
      changeArrBackgroundColor(HoveredArr, Colors.white);

      changeArrBackgroundColor(arrToAvoid, Colors.green);
      // Emptied the array to add only those elements in "arrToAvoid" that had Back-color green.
      HoveredArr = [];
      arrBlocksRed = [];
      PreviewShipsOnHover(
        e.target,
        ShipCount,
        HoveredArr,
        arrBlocksRed,
        btnCheck
      );
    }
  });

  //Dom Interaction
  document.addEventListener(
    "click",
    function (e) {
      if (hasClass(e.target, "submitButton")) {
        let subButton = document.querySelector(".submitButton");
        console.log(subButton);
        dummyBoard = submitAndStart();
        console.log(dummyBoard);
      }
      if (e.target.parentNode?.id === "DummyBoard") {
        let boxId = e.target;

        let changeValObj = validPlacementShip({
          element: boxId,
          length: ShipCount,
          ArrToBeCopied: arrToAvoid,
          ArrToBeCopiedFrom: HoveredArr,
          arrRed: arrBlocksRed,
          shipCoordinatesArr: shipCoordinatesArr,
          board: dummyBoard,
          axisDecider: btnCheck,
        });
        ShipCount = changeValObj.length;
        arrToAvoid = changeValObj.ArrToBeCopied;
        shipCoordinatesArr = changeValObj.shipCoordinatesArr;
        if (ShipCount > 5) {
          document.querySelector("#DummyBoard").style["pointer-events"] =
            "none";
        }
      }
      if (e.target?.id === "axisBtn") {
        if (btnCheck) {
          e.target.textContent = "Y-AXIS";
          btnCheck = false;
        } else {
          e.target.textContent = "X-AXIS";
          btnCheck = true;
        }
      }

      if (e.target?.id === "subBtn") {
        boards = StartGameAfterPlacement(ShipCount, shipCoordinatesArr);
      }
      if (e.target.parentNode?.id === "Board2") {
        let element2 = e.target;
        let whoWon = getWinnerResult(element2, boards);
        console.log(whoWon);
      }
    },
    false
  );
})();

export default gameLoop;
