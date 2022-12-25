import submitName from "./components/submitName";
import PreviewShipsOnHover from "./components/PreviewShipsOnHover";
import changeElementBackgroundColor from "./components/changeElementBackgroundColor";
import Colors from "./components/Colors";
import validPlacementShip from "./components/validPlacementShip";
import AllShipsPlacedValidation from "./components/AllShipsPlacedValidation";
import getWinner from "./components/getWinner";
import RestartGame from "./components/RestartGame";
import FillArrayWithCoordinates from "./components/FillArrayWithCoordinates";
let gameLoop = (function () {
  let boardsObj;
  let dummyBoard;
  let ShipCount = 1;
  let GreenElementsArray = [];
  let ElementsToAvoidArray = [];
  let RedElementsArray = [];
  let shipCoordinatesArr = [];
  let btnCheck = true;
  let PlayerOne = "";
  let checkArr = FillArrayWithCoordinates();

  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

  // Listening to mouseover events
  document.addEventListener("mouseover", function (e) {
    if (e.target.parentNode.parentNode?.id === "DummyBoard") {
      changeElementBackgroundColor(GreenElementsArray, Colors.white);
      changeElementBackgroundColor(ElementsToAvoidArray, Colors.green);
      // Emptied the array to add only those elements in "ElementsToAvoidArray" that had Back-color green.
      GreenElementsArray = [];
      RedElementsArray = [];
      PreviewShipsOnHover(
        e.target,
        ShipCount,
        GreenElementsArray,
        RedElementsArray,
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
        let dummyBoardObj = submitName();
        dummyBoard = dummyBoardObj.dummyBoard;
        PlayerOne = dummyBoardObj.name;
      }
      if (e.target.parentNode.parentNode?.id === "DummyBoard") {
        let boxId = e.target;
        let changeValObj = validPlacementShip({
          element: boxId,
          length: ShipCount,
          ArrToBeCopied: ElementsToAvoidArray,
          shipCoordinatesArr: shipCoordinatesArr,
          board: dummyBoard,
          axisDecider: btnCheck,
        });
        ShipCount = changeValObj.length;
        ElementsToAvoidArray = changeValObj.ArrToBeCopied;
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
        boardsObj = AllShipsPlacedValidation(
          ShipCount,
          shipCoordinatesArr,
          PlayerOne
        );
      }
      if (e.target?.id === "RestartBtn") {
        ShipCount = 1;
        GreenElementsArray = [];
        ElementsToAvoidArray = [];
        RedElementsArray = [];
        checkArr = FillArrayWithCoordinates();
        shipCoordinatesArr = [];
        btnCheck = true;
        console.log("works");
        let dummyBoardObj = RestartGame(dummyBoardObj.name);
        dummyBoard = dummyBoardObj.dummyBoard;
        PlayerOne = dummyBoardObj.name;
      }
      if (e.target.parentNode.parentNode?.id === "Board2") {
        let element2 = e.target;
        let whoWon = getWinner(element2, boardsObj, checkArr);
        console.log(whoWon);
        if (whoWon !== "No board has won the game yet") {
          document.querySelector("#Winnerpara").textContent = whoWon;
          document.querySelector("#Board1").style["pointer-events"] = "none";
          document.querySelector("#Board2").style["pointer-events"] = "none";
        }
      }
    },
    false
  );
})();

export default gameLoop;
