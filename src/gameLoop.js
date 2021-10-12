import submitAndStart from "./components/submitAndStart";
import checkWhoWon from "./components/checkWhoWon";
import CheckUnique from "./components/checkUnique";
import ColorChange from "./components/ChangeColorBoard";
import PreviewShipsOnHover from "./components/PreviewShipsOnHover";
import changeArrBackgroundColor from "./components/changeArrBackgroundColor";
import Colors from "./components/Colors";
import validPlacementShip from "./components/validPlacementShip";
let gameLoop = (function () {
  let boards;
  let dummyBoard;
  let ShipCount = 1;
  let HoveredArr = [];
  let arrToAvoid = [];
  let arrBlocksRed = [];
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

        let changeValObj = validPlacementShip(
          boxId,
          ShipCount,
          arrToAvoid,
          HoveredArr,
          arrBlocksRed,
          dummyBoard,
          btnCheck
        );
        ShipCount = changeValObj.length;
        arrToAvoid = changeValObj.ArrToBeCopied;
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

      if (e.target.parentNode?.id === "Board2") {
        console.log("Second Board clicked");
        let position1 = Math.floor(100 * Math.random());
        position1 = CheckUnique(position1);

        let element2 = e.target;
        let element1 = document.querySelector(
          `div[data-box=Board1${position1}]`
        );
        let dataShip1 = element1.getAttribute("data-ship");
        let position2 = element2.id;
        let dataShip2 = element2.getAttribute("data-ship");
        ColorChange(dataShip1, dataShip2, element1, element2);
        let whoWon = checkWhoWon(
          boards,
          position1,
          dataShip1,
          position2,
          dataShip2
        );
        console.log(whoWon);
      }
    },
    false
  );
})();

export default gameLoop;
