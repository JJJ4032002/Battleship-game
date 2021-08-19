import { gameBoard } from "./gameBoardFactory";

let gameLoop = (function () {
  let mainDiv = document.querySelector(".OuterContainer");
  let ClickButton = null;

  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }
  //Dom Interaction
  document.addEventListener(
    "click",
    function (e) {
      if (hasClass(e.target, "submitButton")) {
        let subButton = document.querySelector(".submitButton");
        console.log(subButton);
        submitAndStart();
      }
    },
    false
  );

  function CreateNav() {
    let nav = elementCreator("nav", { className: "navContainer" });
    let Heading = document.createElement("h1");
    Heading.textContent = "Battleship";
    nav.appendChild(Heading);
    mainDiv.appendChild(nav);
  }

  function StartGame() {
    let GameDiv = elementCreator("div", { id: "gameContainer" });
    GameDiv.innerHTML = `<label for="Name">Enter your Name</label>
    <br>
     <input type="text" id="name" value="">
     <br>
     <button class="submitButton">Play</button>
    `;
    mainDiv.appendChild(GameDiv);
    ClickButton = document.querySelector(".submitButton");
  }

  function submitAndStart() {
    let Input = document.querySelector("#name");
    let name = Input.value;
    if (name === "") {
      alert("Please Enter the name");
    } else {
      let gameDiv = document.querySelector("#gameContainer");
      gameDiv.innerHTML = "";
      startMainGame();
    }
  }

  function startMainGame() {
    let newBoard1 = gameBoard(100, "Board1");
    let newBoard2 = gameBoard(100, "Board2");
    PlaceAllShips(
      newBoard1,
      [
        { length: 1, position: 78 },
        { length: 2, position: 2 },
        { length: 3, position: 11 },
        { length: 4, position: 22 },
        { length: 5, position: 53 },
      ],
      "Board1"
    );
    PlaceAllShips(
      newBoard2,
      [
        { length: 1, position: 99 },
        { length: 2, position: 7 },
        { length: 3, position: 35 },
        { length: 4, position: 65 },
        { length: 5, position: 71 },
      ],
      "Board2"
    );
  }

  function PlaceAllShips(Board, shipsArr, BoardId) {
    shipsArr.forEach(function (e) {
      Board.placeShip(e.length, e.position, BoardId);
    });
  }

  function elementCreator(type, properties) {
    let ele = document.createElement(type);
    for (let prop in properties) {
      ele[prop] = properties[prop];
    }
    return ele;
  }

  return { CreateNav, StartGame };
})();

export default gameLoop;
