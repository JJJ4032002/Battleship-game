import BoardInitialization from "./Components/BoardInitialization";
import SinglePlayerFillDetails from "./Components/SinglePlayer/FillDetails";
import TwoPlayersFillDetails from "./Components/TwoPlayers/FillDetails";
import DetailsValidation from "./Components/DetailsValidation";
import ChangeElementsArrayBgColor from "./Components/ChangeElementsArrayBgColor";
import Colors from "./Colors";
import PreviewShipOnHover from "./Components/PreviewShipOnHover";
import ValidShipPlacement from "./Components/ValidShipPlacement";
import InitializeGame from "./Components/InitializeGame";
import FillArrayWithCoordinates from "./Components/FillArrayWithCoordinates";
import GetWinner from "./Components/GetWinner";
import Restart from "./Components/Restart";
let gameLoop = (function () {
  let gameObject;
  let SinglePlayerName = "";
  let PlayerOne = "";
  let PlayerTwo = "";
  let ShipCount = 1;
  let axisBtn = true;
  let GreenElementsArray = [];
  let ElementsToAvoidArray = [];
  let RedElementsArray = [];
  let checkArr = FillArrayWithCoordinates();
  let shipCoordinatesObject = {
    "#DummyBoard": "",
    "#DummyBoardPlayerOne": "",
    "#DummyBoardPlayerTwo": "",
  };
  let BoardObject = {
    "#DummyBoard": "",
    "#DummyBoardPlayerOne": "",
    "#DummyBoardPlayerTwo": "",
  };
  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

  // Listening to mouseover events
  document.addEventListener("mouseover", function (e) {
    if (
      e.target.parentNode.parentNode.id === "DummyBoard" ||
      e.target.parentNode.parentNode.id === "DummyBoardPlayerOne" ||
      e.target.parentNode.parentNode.id === "DummyBoardPlayerTwo"
    ) {
      console.log("Hello This works");
      //Change the white colored elements to transparent which are not selected as ships.
      ChangeElementsArrayBgColor(GreenElementsArray, Colors.transparent);
      //Change the color of ship elements to green. (Avoid coloring selected ship elements to any other color)
      ChangeElementsArrayBgColor(ElementsToAvoidArray, Colors.white);
      PreviewShipOnHover(
        e.target,
        ShipCount,
        GreenElementsArray,
        RedElementsArray,
        axisBtn
      );
    }
  });

  //Dom Interaction
  document.addEventListener(
    "click",
    function (e) {
      if (hasClass(e.target, "HomeButton")) {
        let Option = e.target.textContent;
        if (Option === "Single Player") {
          SinglePlayerFillDetails();
        } else if (Option === "Two Players") {
          TwoPlayersFillDetails();
        }
      } else if (e.target.id === "SinglePlayerDetailsButton") {
        let name = DetailsValidation("#singlePlayerName", "#EmptyName");
        SinglePlayerName = name;
        if (name === "No Name") return;
        else {
          BoardObject["DummyBoard"] = BoardInitialization(
            name,
            "SinglePlayerShipsSubmit",
            "PlaceAllShips",
            "DummyBoard"
          );
        }
      } else if (e.target.id === "TwoPlayersDetailsButton") {
        PlayerOne = DetailsValidation("#PlayerOne", "#EmptyNameOne");
        PlayerTwo = DetailsValidation("#PlayerTwo", "#EmptyNameTwo");
        if (PlayerOne === "No Name" || PlayerTwo === "No Name") {
          return;
        } else {
          BoardObject["DummyBoardPlayerOne"] = BoardInitialization(
            PlayerOne,
            "PlayerOneShipsSubmit",
            "PlaceAllShipsPlayerOne",
            "DummyBoardPlayerOne"
          );
        }
      } else if (e.target?.id === "axisBtn") {
        if (e.target.textContent === "Y-AXIS") {
          e.target.textContent = "X-AXIS";
          axisBtn = true;
        } else {
          e.target.textContent = "Y-AXIS";
          axisBtn = false;
        }
      } else if (
        e.target.parentNode.parentNode.id === "DummyBoard" ||
        e.target.parentNode.parentNode.id === "DummyBoardPlayerOne" ||
        e.target.parentNode.parentNode.id === "DummyBoardPlayerTwo"
      ) {
        let boxId = e.target;
        let changeValObj = ValidShipPlacement({
          element: boxId,
          length: ShipCount,
          ElementsToAvoidArray: ElementsToAvoidArray,
          shipCoordinatesArr: shipCoordinatesArr,
          board: BoardObject[`#${e.target.parentNode.parentNode.id}`],
          axisDecider: axisBtn,
        });
        ShipCount = changeValObj.length;
        ElementsToAvoidArray = changeValObj.ElementsToAvoidArray;
        shipCoordinatesObject[`#${e.target.parentNode.parentNode.id}`] =
          changeValObj.shipCoordinatesArr;

        if (ShipCount > 5) {
          document.querySelector(`#${e.target.parentNode.parentNode.id}`).style[
            "pointer-events"
          ] = "none";
        }
      } else if (e.target.id === "SinglePlayerShipsSubmit") {
        if (ShipCount < 6) {
          AllShipsPlacedValidation("#PlaceAllShips");
        } else {
          gameObject = InitializeGame(
            shipCoordinatesObject["#DummyBoard"],
            SinglePlayerName
          );
        }
      } else if (e.target.id === "PlayerOneShipsSubmit") {
        if (ShipCount < 6) {
          AllShipsPlacedValidation("#PlaceAllShipsPlayerOne");
        } else {
          ShipCount = 1;
          GreenElementsArray = [];
          ElementsToAvoidArray = [];
          RedElementsArray = [];
          checkArr = FillArrayWithCoordinates();
          axisBtn = true;
          BoardObject["DummyBoardPlayerTwo"] = BoardInitialization(
            PlayerOne,
            "PlayerTwoShipsSubmit",
            "PlaceAllShipsPlayerTwo",
            "DummyBoardPlayerTwo"
          );
        }
      } else if (e.target.id === "PlayerTwoShipsSubmit") {
        if (ShipCount < 6) {
          AllShipsPlacedValidation("#PlaceAllShipsPlayerTwo");
        } else {
        }
      } else if (e.target.parentNode.parentNode.id === "EnemyBoard") {
        let Winner = GetWinner(e.target, gameObject, checkArr);
        if (Winner !== "No board has won the game yet") {
          document.querySelector("#Winnerpara").textContent = Winner;
          document.querySelector("#PlayerBoard").style["pointer-events"] =
            "none";
          document.querySelector("#EnemyBoard").style["pointer-events"] =
            "none";
        }
      } else if (e.target.id === "RestartBtn") {
        ShipCount = 1;
        GreenElementsArray = [];
        ElementsToAvoidArray = [];
        RedElementsArray = [];
        checkArr = FillArrayWithCoordinates();
        axisBtn = true;
        Restart();
      }
    },
    false
  );
})();
function AllShipsPlacedValidation(errorSpanId) {
  let errorSpan = document.querySelector(errorSpanId);
  errorSpan.style.display = "block";
  setTimeout(() => {
    errorSpan.style.display = "none";
  }, 2000);
}
export default gameLoop;
