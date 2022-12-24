/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CreateGrid.js":
/*!***************************!*\
  !*** ./src/CreateGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Colors */ "./src/components/Colors.js");

function CreateGrid(params, Board, name = "default") {
  let gameDiv = document.querySelector(".BlocksContainer");
  if (gameDiv === null) {
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("class", "BlocksContainer");
    if (Board === "DummyBoard") {
      gameDiv.setAttribute("id", "DummyBoardContainer");
    }
    let OuterContainer = document.querySelector(".OuterContainer");
    OuterContainer.appendChild(gameDiv);
  }
  const Container = document.createElement("div");
  Container.setAttribute("class", "container");
  Container.setAttribute("id", `${Board}`);
  let ParentContainer = document.createElement("div");
  ParentContainer.setAttribute("id", `${Board}Container`);
  ParentContainer.setAttribute("class", "parentContainer");
  if (name !== "default") {
    let nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    ParentContainer.appendChild(nameHeading);
  }
  ParentContainer.style.width = "100%";
  Container.style.width = "100%";
  ParentContainer.appendChild(Container);
  gameDiv.appendChild(ParentContainer);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.classList.add("Row");
    IndDiv.setAttribute("id", `Row${i}`);
    for (let j = 0; j < params; j++) {
      let indiBlock = document.createElement("div");
      indiBlock.classList.add("box-items");
      indiBlock.setAttribute("data-row", i);
      indiBlock.setAttribute("data-column", j);
      indiBlock.setAttribute("data-coordinates", `${i}${j}`);
      indiBlock.setAttribute("id", `${Board}${i}${j}`);
      indiBlock.style.border = `2px solid ${_components_Colors__WEBPACK_IMPORTED_MODULE_0__.default.darkGreen}`;
      IndDiv.appendChild(indiBlock);
    }

    Container.appendChild(IndDiv);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateGrid);


/***/ }),

/***/ "./src/PlaceAtPosition.js":
/*!********************************!*\
  !*** ./src/PlaceAtPosition.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Colors */ "./src/components/Colors.js");


function PlaceAtPosition(
  row,
  column,
  shipLength,
  axisDecider,
  BoardId = "DummyBoard"
) {
  let shipCount = 0;
  let arrToAvoid = [];
  while (shipCount < shipLength) {
    console.log(row, column, BoardId);
    console.log(typeof row, typeof column);
    let elementToBeHiglighted = document.querySelector(
      `#${BoardId}${row}${column}`
    );

    arrToAvoid = [...arrToAvoid, elementToBeHiglighted];
    if (BoardId !== "Board2") {
      elementToBeHiglighted.style["background-color"] = _components_Colors__WEBPACK_IMPORTED_MODULE_0__.default.green;

      console.log("done");
      console.log(elementToBeHiglighted);
    }

    if (axisDecider) {
      column++;
    } else {
      row++;
    }
    shipCount++;
  }
  return arrToAvoid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceAtPosition);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const methodsObj = {
  AttackBoard: function (row, column) {
    let ShipHit = this.gameBoard.receiveAttack(row, column);
    let IfShipsSunk = this.gameBoard.AllShipsSunk();
    return { ShipHit, IfShipsSunk };
  },
  getName: function () {
    return this.name;
  },
};

function Player(name, gameBoard) {
  let PlayerObj = Object.assign(Object.create(methodsObj), {
    name,
    gameBoard,
  });

  return PlayerObj;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/components/ChangeColorBoard.js":
/*!********************************************!*\
  !*** ./src/components/ChangeColorBoard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors */ "./src/components/Colors.js");

function ColorChange(
  Board2Cond,
  Board1Cond,
  CoordinatesOneArr,
  CoordinatesTwoArr
) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;
  let ele2 = document.querySelector(`#Board2${row2}${column2}`);
  let ele1 = document.querySelector(`#Board1${row1}${column1}`);
  if (Board2Cond === "oops you missed the ship") {
    ele2.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.gray;
  } else {
    ele2.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.red;
  }

  if (Board1Cond === "oops you missed the ship") {
    ele1.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.gray;
  } else {
    ele1.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.red;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorChange);


/***/ }),

/***/ "./src/components/Colors.js":
/*!**********************************!*\
  !*** ./src/components/Colors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Colors = {
  green: "#6eeb5e",
  red: "#de524e",
  gray: "#94908f",
  white: "white",
  darkGreen: "#40916c",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);


/***/ }),

/***/ "./src/components/FillArrWithCoordinates.js":
/*!**************************************************!*\
  !*** ./src/components/FillArrWithCoordinates.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function FillArrCordinates() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    let coordinate = "";
    if (i < 10) {
      coordinate = "0" + i;
    } else {
      coordinate = String(i);
    }
    arr.push(coordinate);
  }
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FillArrCordinates);


/***/ }),

/***/ "./src/components/InitializeMainGame.js":
/*!**********************************************!*\
  !*** ./src/components/InitializeMainGame.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _placeAllShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeAllShips */ "./src/components/placeAllShips.js");
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameBoardFactory */ "./src/gameBoardFactory.js");
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementCreator */ "./src/components/elementCreator.js");
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CreateGrid */ "./src/CreateGrid.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player */ "./src/Player.js");






function InitializeMainGame(arr, name) {
  let newBoard1 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(10);
  let newBoard2 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(10);
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_3__.default)(10, "Board1", name);
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_3__.default)(10, "Board2", "AI");

  (0,_placeAllShips__WEBPACK_IMPORTED_MODULE_0__.default)(newBoard1, arr, "Board1");

  (0,_placeAllShips__WEBPACK_IMPORTED_MODULE_0__.default)(
    newBoard2,
    [
      { row: 1, column: 2, length: 1, axisDecider: true },
      { row: 2, column: 7, length: 2, axisDecider: true },
      { row: 3, column: 0, length: 3, axisDecider: true },
      { row: 8, column: 1, length: 4, axisDecider: true },
      { row: 6, column: 3, length: 5, axisDecider: true },
    ],
    "Board2"
  );

  let restBtnDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)("div", { className: "Restart" });
  let restBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)("button", { id: "RestartBtn" });
  let winnerp = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)("p", { id: "Winnerpara" });
  restBtn.textContent = "Restart";
  restBtnDiv.appendChild(restBtn);
  console.log(newBoard1.boardBlocks);
  console.log(newBoard2.boardBlocks);
  let outerContainer = document.querySelector(".OuterContainer");
  outerContainer.appendChild(winnerp);
  outerContainer.appendChild(restBtnDiv);
  let PlayerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_4__.default)(name, newBoard2);
  let PlayerTwo = (0,_Player__WEBPACK_IMPORTED_MODULE_4__.default)("AI", newBoard1);

  return { newBoard1, newBoard2, PlayerOne, PlayerTwo };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitializeMainGame);


/***/ }),

/***/ "./src/components/PlaceShipsOnBoard.js":
/*!*********************************************!*\
  !*** ./src/components/PlaceShipsOnBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CreateGrid */ "./src/CreateGrid.js");
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameBoardFactory */ "./src/gameBoardFactory.js");



function PlaceShipsOnBoard(name) {
  let btnDiv = document.createElement("div");
  let SubBtn = document.createElement("button");
  let heading = document.createElement("h2");
  heading.textContent = `Please ${name} place your ships`;
  btnDiv.setAttribute("class", "BtnCont");
  let btn = document.createElement("button");
  btn.setAttribute("id", "axisBtn");
  SubBtn.setAttribute("id", "subBtn");
  SubBtn.textContent = "SUBMIT";
  btn.textContent = "X-AXIS";
  btnDiv.appendChild(heading);
  btnDiv.appendChild(btn);
  btnDiv.appendChild(SubBtn);
  let OuterContainer = document.querySelector(".OuterContainer");
  OuterContainer.appendChild(btnDiv);

  let dummyBoard = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(10, "DummyBoard");
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_0__.default)(10, "DummyBoard");

  return { dummyBoard, name };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceShipsOnBoard);


/***/ }),

/***/ "./src/components/PlayersAttackShip.js":
/*!*********************************************!*\
  !*** ./src/components/PlayersAttackShip.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangeColorBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeColorBoard */ "./src/components/ChangeColorBoard.js");

function PlayersAttackShip(boards, CoordinatesOneArr, CoordinatesTwoArr) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;

  let Board2AttackedObj = boards.PlayerOne.AttackBoard(row2, column2);
  let Board1AttackedObj = {};
  if (Board2AttackedObj.ShipHit !== "The ship has already been hit") {
    Board1AttackedObj = boards.PlayerTwo.AttackBoard(+row1, +column1);

    (0,_ChangeColorBoard__WEBPACK_IMPORTED_MODULE_0__.default)(
      Board2AttackedObj.ShipHit,
      Board1AttackedObj.ShipHit,
      CoordinatesOneArr,
      CoordinatesTwoArr
    );
  } else {
    console.log("Stopped ai from making the move");
  }

  return {
    ifAllShipsB1: Board1AttackedObj.IfShipsSunk,
    ifAllShipsB2: Board2AttackedObj.IfShipsSunk,
    PlayerOne: boards.PlayerOne.getName(),
    PlayerTwo: boards.PlayerTwo.getName(),
    UserHitCondition: Board2AttackedObj.ShipHit,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayersAttackShip);


/***/ }),

/***/ "./src/components/PreviewShipsOnHover.js":
/*!***********************************************!*\
  !*** ./src/components/PreviewShipsOnHover.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors */ "./src/components/Colors.js");

function PreviewShipsOnHover(e, shipCount, arr, arrRed, btn) {
  let i = 0;
  let j = 0;

  let row = e.getAttribute("data-row");
  let column = e.getAttribute("data-column");

  //Calculating if ship can be placed in the row. The total should always be lesser or equal to endVal to be placed.

  while (j < shipCount - 1) {
    if (btn) {
      column++;
    } else {
      row++;
    }
    j++;
  }

  while (i < shipCount) {
    if ((btn && column <= 9) || (!btn && row <= 9)) {
      e.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.green;
    } else {
      e.style["background-color"] = _Colors__WEBPACK_IMPORTED_MODULE_0__.default.red;
      arrRed.push(e);
    }

    arr.push(e);
    if (btn && e.getAttribute("data-column") < 9) {
      e = e.nextElementSibling;
    } else if (!btn && e.getAttribute("data-row") < 9) {
      let rowColor = e.getAttribute("data-row");
      let columnColor = e.getAttribute("data-column");

      rowColor++;
      let nextEl = document.body.querySelector(
        `[data-Coordinates = "${rowColor}${columnColor}"]`
      );
      e = nextEl;
    } else {
      console.log("Do not update");
    }

    i++;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewShipsOnHover);


/***/ }),

/***/ "./src/components/RestartGame.js":
/*!***************************************!*\
  !*** ./src/components/RestartGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceShipsOnBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceShipsOnBoard */ "./src/components/PlaceShipsOnBoard.js");

function RestartGame() {
  let outerContainer = document.querySelector(".OuterContainer");
  let BlocksContainer = document.querySelector(".BlocksContainer");
  let WinnerPara = document.querySelector("#Winnerpara");
  let restartBtnContainer = document.querySelector(".Restart");
  outerContainer.removeChild(BlocksContainer);
  outerContainer.removeChild(restartBtnContainer);
  outerContainer.removeChild(WinnerPara);
  let dummyBoard = (0,_PlaceShipsOnBoard__WEBPACK_IMPORTED_MODULE_0__.default)("Rohan");
  return dummyBoard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestartGame);


/***/ }),

/***/ "./src/components/StartGameAfterShipPlacement.js":
/*!*******************************************************!*\
  !*** ./src/components/StartGameAfterShipPlacement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InitializeMainGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitializeMainGame */ "./src/components/InitializeMainGame.js");


function StartGameAfterPlacement(length, shipsCoordinatesArr, PlayerOne) {
  if (length < 6) {
    alert("Please place all the ships");
  } else {
    let btnCont = document.querySelector(".BtnCont");
    let gridContainer = document.querySelector(".BlocksContainer");
    btnCont.parentElement.removeChild(btnCont);
    gridContainer.parentElement.removeChild(gridContainer);

    return (0,_InitializeMainGame__WEBPACK_IMPORTED_MODULE_0__.default)(shipsCoordinatesArr, PlayerOne);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartGameAfterPlacement);


/***/ }),

/***/ "./src/components/changeArrBackgroundColor.js":
/*!****************************************************!*\
  !*** ./src/components/changeArrBackgroundColor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// iterate over an array and change the background color of the elements present in it.
function changeArrBackgroundColor(arr, color) {
  arr.forEach((e) => {
    e.style["background-color"] = `${color}`;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeArrBackgroundColor);


/***/ }),

/***/ "./src/components/checkWhoWon.js":
/*!***************************************!*\
  !*** ./src/components/checkWhoWon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkWhoWon(props) {
  if (props.ifAllShipsB1 === "All the ships are sunk") {
    return `Board1 has lost the game And ${props.PlayerTwo} is the winner`;
  } else if (
    props.ifAllShipsB2 === "All the ships are sunk" &&
    props.ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (props.ifAllShipsB2 === "All the ships are sunk") {
    return `Board 2 has lost the game And ${props.PlayerOne} is the winner`;
  } else {
    return "No board has won the game yet";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWhoWon);


/***/ }),

/***/ "./src/components/createNav.js":
/*!*************************************!*\
  !*** ./src/components/createNav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/components/elementCreator.js");

let mainDiv = document.querySelector(".OuterContainer");
function CreateNav() {
  let nav = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.default)("nav", { className: "navContainer" });
  let Heading = document.createElement("h1");
  Heading.textContent = "Battleship";
  nav.appendChild(Heading);
  mainDiv.appendChild(nav);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateNav);


/***/ }),

/***/ "./src/components/elementCreator.js":
/*!******************************************!*\
  !*** ./src/components/elementCreator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function elementCreator(type, properties) {
  let ele = document.createElement(type);
  for (let prop in properties) {
    ele[prop] = properties[prop];
  }
  return ele;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementCreator);


/***/ }),

/***/ "./src/components/getWinnerResult.js":
/*!*******************************************!*\
  !*** ./src/components/getWinnerResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkWhoWon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWhoWon */ "./src/components/checkWhoWon.js");
/* harmony import */ var _PlayersAttackShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayersAttackShip */ "./src/components/PlayersAttackShip.js");




function getWinnerResult(element2, boards, checkArr) {
  let CoordinatesOneArr = getUniqueNumber(checkArr);

  let dataShip2Row = element2.getAttribute("data-row");
  let dataShip2Column = element2.getAttribute("data-column");
  let CoordinatesTwoArr = [dataShip2Row, dataShip2Column];
  let BothShipConditions = (0,_PlayersAttackShip__WEBPACK_IMPORTED_MODULE_1__.default)(
    boards,
    CoordinatesOneArr,
    CoordinatesTwoArr
  );
  if (BothShipConditions.UserHitCondition === "The ship has already been hit") {
    checkArr.push(CoordinatesOneArr);
  }
  let whoWon = (0,_checkWhoWon__WEBPACK_IMPORTED_MODULE_0__.default)(BothShipConditions);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWinnerResult);


/***/ }),

/***/ "./src/components/placeAllShips.js":
/*!*****************************************!*\
  !*** ./src/components/placeAllShips.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceAtPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PlaceAtPosition */ "./src/PlaceAtPosition.js");


function PlaceAllShips(Board, shipsArr, BoardId) {
  shipsArr.forEach(function (e) {
    Board.placeShip(e.row, e.column, e.length, e.axisDecider);
    (0,_PlaceAtPosition__WEBPACK_IMPORTED_MODULE_0__.default)(e.row, e.column, e.length, e.axisDecider, BoardId);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceAllShips);


/***/ }),

/***/ "./src/components/startGame.js":
/*!*************************************!*\
  !*** ./src/components/startGame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/components/elementCreator.js");

let mainDiv = document.querySelector(".OuterContainer");
let ClickButton = null;
function StartGame() {
  let GameDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.default)("div", { id: "gameContainer" });
  GameDiv.innerHTML = `<label for="Name">Enter your Name</label>
    <br>
     <input type="text" id="name" value="">
     <br>
     <button class="submitButton">PLAY</button>
    `;
  mainDiv.appendChild(GameDiv);
  ClickButton = document.querySelector(".submitButton");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartGame);


/***/ }),

/***/ "./src/components/submitAndStart.js":
/*!******************************************!*\
  !*** ./src/components/submitAndStart.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceShipsOnBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceShipsOnBoard */ "./src/components/PlaceShipsOnBoard.js");


function submitAndStart() {
  let Input = document.querySelector("#name");
  let name = Input.value;
  if (name === "") {
    alert("Please Enter the name");
  } else {
    let gameDiv = document.querySelector("#gameContainer");
    gameDiv.parentElement.removeChild(gameDiv);
    let returnBoard = (0,_PlaceShipsOnBoard__WEBPACK_IMPORTED_MODULE_0__.default)(name);

    return returnBoard;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitAndStart);


/***/ }),

/***/ "./src/components/validPlacementShip.js":
/*!**********************************************!*\
  !*** ./src/components/validPlacementShip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceAtPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PlaceAtPosition */ "./src/PlaceAtPosition.js");

function validPlacementShip({
  element,
  length,
  ArrToBeCopied,
  shipCoordinatesArr,
  board,
  axisDecider,
}) {
  let row = element.getAttribute("data-row");
  let column = element.getAttribute("data-column");
  let ifShipCanBePlaced = board.checkValidShipPlacement(
    row,
    column,
    length,
    axisDecider
  );
  if (ifShipCanBePlaced) {
    board.placeShip(row, column, length, axisDecider);
    let ArrToAvoidCurrent = (0,_PlaceAtPosition__WEBPACK_IMPORTED_MODULE_0__.default)(row, column, length, axisDecider);
    ArrToBeCopied = [...ArrToBeCopied, ...ArrToAvoidCurrent];

    shipCoordinatesArr = [
      ...shipCoordinatesArr,
      { row: row, column: column, length: length, axisDecider: axisDecider },
    ];
    length++;
  }
  return { length, ArrToBeCopied, shipCoordinatesArr };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validPlacementShip);


/***/ }),

/***/ "./src/gameBoardFactory.js":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");


const methodObj = {
  placeShip: function (row, column, shipLength, axisDecider) {
    this.NoOfShips++;
    let i = 0;
    while (i < shipLength) {
      this.boardBlocks[row][column] = `${shipLength}`;
      if (axisDecider) {
        column++;
      } else {
        row++;
      }
      i++;
    }
    let newShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.ship)(shipLength);
    this.shipsArr.push(newShip);
  },
  receiveAttack: function (row, column) {
    let element = [row, column];
    let shipLength = this.boardBlocks[row][column];
    let index = this.CoordinatesArr.findIndex((e) => {
      return e[0] === element[0] && e[1] === element[1];
    });
    if (index != -1) {
      return "The ship has already been hit";
    } else if (index === -1 && shipLength != "") {
      this.CoordinatesArr.push([row, column]);
      function FindShip(params) {
        return Number(shipLength) === params.ShipLength;
      }
      let ShipIndex = this.shipsArr.findIndex(FindShip);
      console.log();
      console.log(ShipIndex);
      let thatShip = this.shipsArr[ShipIndex];

      thatShip.hit();
      this.boardBlocks[row][column] = "hit";
      let shipCondition = thatShip.isSunk();
      if (shipCondition === "Oh the ship has been sunk") {
        this.ShipsSunkArr.push(thatShip);
      }

      return "The ship has been hit and coordinates have been noted";
    } else {
      this.CoordinatesArr.push([row, column]);
      return "oops you missed the ship";
    }
  },
  AllShipsSunk: function () {
    if (this.ShipsSunkArr.length === this.NoOfShips) {
      return "All the ships are sunk";
    } else {
      return "All the ships have not been sunk yet";
    }
  },
  checkValidShipPlacement: function (row, column, shipLength, axisDecider) {
    let i = 0;
    let ArrToBeChecked = [];
    while (i < shipLength) {
      ArrToBeChecked.push([Number(row), Number(column)]);
      if (axisDecider) {
        column++;
      } else {
        row++;
      }
      i++;
    }

    if (axisDecider) {
      //Reverting back to correct coordinates
      column = column - 1;
    } else {
      row = row - 1;
    }

    let FilteredArr = [];
    if (this.shipsPlacedArr.length === 0) {
      console.log(
        "Ship for the first iteration as there will be no overlapping"
      );
    } else {
      let toCheckArr = [];
      ArrToBeChecked.forEach((arrayElement) => {
        //[[1,2,3],[4,5]] initial array
        this.shipsPlacedArr.forEach((indiArr) => {
          // Array to be checked from.
          indiArr.forEach((ele, index) => {
            if (ele === arrayElement[index]) toCheckArr.push(ele); //checking every element of shipsPlacedArr with arrayElement
          });
          if (toCheckArr.length === arrayElement.length)
            FilteredArr.push(toCheckArr);

          toCheckArr = [];
        });
      });
    }

    /* Conditions where ships cannot be placed if the rows number is undefined eg - xCol = 4 but there are only three rows defined.
    or Ships are overlapping in this cased the filtered array would be filled.
    or condition where the ships in horizontal condition cannot be placed boardBlocks[0][10]. But it will be undefined as there are only 9 columns.
    */

    if (
      this.boardBlocks[row] === undefined ||
      FilteredArr.length !== 0 ||
      this.boardBlocks[row][column] === undefined
    ) {
      return false;
    }

    this.shipsPlacedArr = [...this.shipsPlacedArr, ...ArrToBeChecked];
    console.log(this.shipsPlacedArr);
    return true;
  },
  getBoard: function () {
    return this.boardBlocks;
  },
};

function gameBoard(length) {
  let shipsArr = [];
  let CoordinatesArr = [];
  let NoOfShips = 0;
  let ShipsSunkArr = [];
  let shipsPlacedArr = [];
  let boardBlocks = Array.from({ length: length }, (e) => Array(10).fill(""));
  let gameBoardObj = Object.assign(Object.create(methodObj), {
    shipsArr,
    CoordinatesArr,
    NoOfShips,
    ShipsSunkArr,
    boardBlocks,
    shipsPlacedArr,
  });
  return gameBoardObj;
}




/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_submitAndStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/submitAndStart */ "./src/components/submitAndStart.js");
/* harmony import */ var _components_PreviewShipsOnHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PreviewShipsOnHover */ "./src/components/PreviewShipsOnHover.js");
/* harmony import */ var _components_changeArrBackgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/changeArrBackgroundColor */ "./src/components/changeArrBackgroundColor.js");
/* harmony import */ var _components_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Colors */ "./src/components/Colors.js");
/* harmony import */ var _components_validPlacementShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validPlacementShip */ "./src/components/validPlacementShip.js");
/* harmony import */ var _components_StartGameAfterShipPlacement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StartGameAfterShipPlacement */ "./src/components/StartGameAfterShipPlacement.js");
/* harmony import */ var _components_getWinnerResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/getWinnerResult */ "./src/components/getWinnerResult.js");
/* harmony import */ var _components_RestartGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RestartGame */ "./src/components/RestartGame.js");
/* harmony import */ var _components_FillArrWithCoordinates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FillArrWithCoordinates */ "./src/components/FillArrWithCoordinates.js");










let gameLoop = (function () {
  let boardsObj;
  let dummyBoard;
  let ShipCount = 1;
  let HoveredArr = [];
  let arrToAvoid = [];
  let arrBlocksRed = [];
  let shipCoordinatesArr = [];
  let btnCheck = true;
  let PlayerOne = "";
  let checkArr = (0,_components_FillArrWithCoordinates__WEBPACK_IMPORTED_MODULE_8__.default)();

  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

  // Listening to mouseover events
  document.addEventListener("mouseover", function (e) {
    if (e.target.parentNode.parentNode?.id === "DummyBoard") {
      (0,_components_changeArrBackgroundColor__WEBPACK_IMPORTED_MODULE_2__.default)(HoveredArr, _components_Colors__WEBPACK_IMPORTED_MODULE_3__.default.white);

      (0,_components_changeArrBackgroundColor__WEBPACK_IMPORTED_MODULE_2__.default)(arrToAvoid, _components_Colors__WEBPACK_IMPORTED_MODULE_3__.default.green);
      // Emptied the array to add only those elements in "arrToAvoid" that had Back-color green.
      HoveredArr = [];
      arrBlocksRed = [];
      (0,_components_PreviewShipsOnHover__WEBPACK_IMPORTED_MODULE_1__.default)(
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
        let dummyBoardObj = (0,_components_submitAndStart__WEBPACK_IMPORTED_MODULE_0__.default)();
        dummyBoard = dummyBoardObj.dummyBoard;
        PlayerOne = dummyBoardObj.name;
      }
      if (e.target.parentNode.parentNode?.id === "DummyBoard") {
        let boxId = e.target;

        let changeValObj = (0,_components_validPlacementShip__WEBPACK_IMPORTED_MODULE_4__.default)({
          element: boxId,
          length: ShipCount,
          ArrToBeCopied: arrToAvoid,
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
        boardsObj = (0,_components_StartGameAfterShipPlacement__WEBPACK_IMPORTED_MODULE_5__.default)(
          ShipCount,
          shipCoordinatesArr,
          PlayerOne
        );
      }
      if (e.target?.id === "RestartBtn") {
        ShipCount = 1;
        HoveredArr = [];
        arrToAvoid = [];
        arrBlocksRed = [];
        checkArr = (0,_components_FillArrWithCoordinates__WEBPACK_IMPORTED_MODULE_8__.default)();
        shipCoordinatesArr = [];
        btnCheck = true;
        console.log("works");
        let dummyBoardObj = (0,_components_RestartGame__WEBPACK_IMPORTED_MODULE_7__.default)();
        dummyBoard = dummyBoardObj.dummyBoard;
        PlayerOne = dummyBoardObj.name;
      }
      if (e.target.parentNode.parentNode?.id === "Board2") {
        let element2 = e.target;
        let whoWon = (0,_components_getWinnerResult__WEBPACK_IMPORTED_MODULE_6__.default)(element2, boardsObj, checkArr);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);


/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
const methodsObj = {
  hit: function () {
    this.length--;
    return "The ship has been hit";
  },
  isSunk: function () {
    if (this.length === 0) {
      return "Oh the ship has been sunk";
    } else {
      return "The ship has not been sunk yet";
    }
  },
};

function ship(length) {
  let ShipLength = length;
  let ShipObj = Object.assign(Object.create(methodsObj), {
    length,
    ShipLength,
  });
  return ShipObj;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _components_createNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/createNav */ "./src/components/createNav.js");
/* harmony import */ var _components_startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/startGame */ "./src/components/startGame.js");




(0,_components_createNav__WEBPACK_IMPORTED_MODULE_1__.default)();

(0,_components_startGame__WEBPACK_IMPORTED_MODULE_2__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aGlwLWdhbWUvLi9zcmMvQ3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvUGxhY2VBdFBvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvQ2hhbmdlQ29sb3JCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9Db2xvcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvRmlsbEFycldpdGhDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9Jbml0aWFsaXplTWFpbkdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUGxhY2VTaGlwc09uQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyc0F0dGFja1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUHJldmlld1NoaXBzT25Ib3Zlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9SZXN0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9TdGFydEdhbWVBZnRlclNoaXBQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NoZWNrV2hvV29uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5hdi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9nZXRXaW5uZXJSZXN1bHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvcGxhY2VBbGxTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3VibWl0QW5kU3RhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvdmFsaWRQbGFjZW1lbnRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcclxuZnVuY3Rpb24gQ3JlYXRlR3JpZChwYXJhbXMsIEJvYXJkLCBuYW1lID0gXCJkZWZhdWx0XCIpIHtcclxuICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xyXG4gIGlmIChnYW1lRGl2ID09PSBudWxsKSB7XHJcbiAgICBnYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJCbG9ja3NDb250YWluZXJcIik7XHJcbiAgICBpZiAoQm9hcmQgPT09IFwiRHVtbXlCb2FyZFwiKSB7XHJcbiAgICAgIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEdW1teUJvYXJkQ29udGFpbmVyXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IE91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcclxuICAgIE91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVEaXYpO1xyXG4gIH1cclxuICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhaW5lclwiKTtcclxuICBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Qm9hcmR9YCk7XHJcbiAgbGV0IFBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgUGFyZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke0JvYXJkfUNvbnRhaW5lcmApO1xyXG4gIFBhcmVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhcmVudENvbnRhaW5lclwiKTtcclxuICBpZiAobmFtZSAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgIGxldCBuYW1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG5hbWVIZWFkaW5nLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIFBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSGVhZGluZyk7XHJcbiAgfVxyXG4gIFBhcmVudENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIFBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWluZXIpO1xyXG4gIGdhbWVEaXYuYXBwZW5kQ2hpbGQoUGFyZW50Q29udGFpbmVyKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtczsgaSsrKSB7XHJcbiAgICBjb25zdCBJbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgSW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJSb3dcIik7XHJcbiAgICBJbmREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYFJvdyR7aX1gKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFyYW1zOyBqKyspIHtcclxuICAgICAgbGV0IGluZGlCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGluZGlCbG9jay5jbGFzc0xpc3QuYWRkKFwiYm94LWl0ZW1zXCIpO1xyXG4gICAgICBpbmRpQmxvY2suc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaSk7XHJcbiAgICAgIGluZGlCbG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiLCBqKTtcclxuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIiwgYCR7aX0ke2p9YCk7XHJcbiAgICAgIGluZGlCbG9jay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtCb2FyZH0ke2l9JHtqfWApO1xyXG4gICAgICBpbmRpQmxvY2suc3R5bGUuYm9yZGVyID0gYDJweCBzb2xpZCAke0NvbG9ycy5kYXJrR3JlZW59YDtcclxuICAgICAgSW5kRGl2LmFwcGVuZENoaWxkKGluZGlCbG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgQ29udGFpbmVyLmFwcGVuZENoaWxkKEluZERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVHcmlkO1xyXG4iLCJpbXBvcnQgQ29sb3JzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sb3JzXCI7XHJcblxyXG5mdW5jdGlvbiBQbGFjZUF0UG9zaXRpb24oXHJcbiAgcm93LFxyXG4gIGNvbHVtbixcclxuICBzaGlwTGVuZ3RoLFxyXG4gIGF4aXNEZWNpZGVyLFxyXG4gIEJvYXJkSWQgPSBcIkR1bW15Qm9hcmRcIlxyXG4pIHtcclxuICBsZXQgc2hpcENvdW50ID0gMDtcclxuICBsZXQgYXJyVG9Bdm9pZCA9IFtdO1xyXG4gIHdoaWxlIChzaGlwQ291bnQgPCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3csIGNvbHVtbiwgQm9hcmRJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2Ygcm93LCB0eXBlb2YgY29sdW1uKTtcclxuICAgIGxldCBlbGVtZW50VG9CZUhpZ2xpZ2h0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7Qm9hcmRJZH0ke3Jvd30ke2NvbHVtbn1gXHJcbiAgICApO1xyXG5cclxuICAgIGFyclRvQXZvaWQgPSBbLi4uYXJyVG9Bdm9pZCwgZWxlbWVudFRvQmVIaWdsaWdodGVkXTtcclxuICAgIGlmIChCb2FyZElkICE9PSBcIkJvYXJkMlwiKSB7XHJcbiAgICAgIGVsZW1lbnRUb0JlSGlnbGlnaHRlZC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMuZ3JlZW47XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUb0JlSGlnbGlnaHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF4aXNEZWNpZGVyKSB7XHJcbiAgICAgIGNvbHVtbisrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93Kys7XHJcbiAgICB9XHJcbiAgICBzaGlwQ291bnQrKztcclxuICB9XHJcbiAgcmV0dXJuIGFyclRvQXZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlQXRQb3NpdGlvbjtcclxuIiwiY29uc3QgbWV0aG9kc09iaiA9IHtcclxuICBBdHRhY2tCb2FyZDogZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7XHJcbiAgICBsZXQgU2hpcEhpdCA9IHRoaXMuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xyXG4gICAgbGV0IElmU2hpcHNTdW5rID0gdGhpcy5nYW1lQm9hcmQuQWxsU2hpcHNTdW5rKCk7XHJcbiAgICByZXR1cm4geyBTaGlwSGl0LCBJZlNoaXBzU3VuayB9O1xyXG4gIH0sXHJcbiAgZ2V0TmFtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGdhbWVCb2FyZCkge1xyXG4gIGxldCBQbGF5ZXJPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kc09iaiksIHtcclxuICAgIG5hbWUsXHJcbiAgICBnYW1lQm9hcmQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBQbGF5ZXJPYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcclxuZnVuY3Rpb24gQ29sb3JDaGFuZ2UoXHJcbiAgQm9hcmQyQ29uZCxcclxuICBCb2FyZDFDb25kLFxyXG4gIENvb3JkaW5hdGVzT25lQXJyLFxyXG4gIENvb3JkaW5hdGVzVHdvQXJyXHJcbikge1xyXG4gIGxldCBbcm93MSwgY29sdW1uMV0gPSBDb29yZGluYXRlc09uZUFycjtcclxuICBsZXQgW3JvdzIsIGNvbHVtbjJdID0gQ29vcmRpbmF0ZXNUd29BcnI7XHJcbiAgbGV0IGVsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQm9hcmQyJHtyb3cyfSR7Y29sdW1uMn1gKTtcclxuICBsZXQgZWxlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNCb2FyZDEke3JvdzF9JHtjb2x1bW4xfWApO1xyXG4gIGlmIChCb2FyZDJDb25kID09PSBcIm9vcHMgeW91IG1pc3NlZCB0aGUgc2hpcFwiKSB7XHJcbiAgICBlbGUyLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5ncmF5O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGUyLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5yZWQ7XHJcbiAgfVxyXG5cclxuICBpZiAoQm9hcmQxQ29uZCA9PT0gXCJvb3BzIHlvdSBtaXNzZWQgdGhlIHNoaXBcIikge1xyXG4gICAgZWxlMS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMuZ3JheTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlMS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMucmVkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JDaGFuZ2U7XHJcbiIsImNvbnN0IENvbG9ycyA9IHtcclxuICBncmVlbjogXCIjNmVlYjVlXCIsXHJcbiAgcmVkOiBcIiNkZTUyNGVcIixcclxuICBncmF5OiBcIiM5NDkwOGZcIixcclxuICB3aGl0ZTogXCJ3aGl0ZVwiLFxyXG4gIGRhcmtHcmVlbjogXCIjNDA5MTZjXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XHJcbiIsImZ1bmN0aW9uIEZpbGxBcnJDb3JkaW5hdGVzKCkge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICBsZXQgY29vcmRpbmF0ZSA9IFwiXCI7XHJcbiAgICBpZiAoaSA8IDEwKSB7XHJcbiAgICAgIGNvb3JkaW5hdGUgPSBcIjBcIiArIGk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb29yZGluYXRlID0gU3RyaW5nKGkpO1xyXG4gICAgfVxyXG4gICAgYXJyLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGxBcnJDb3JkaW5hdGVzO1xyXG4iLCJpbXBvcnQgUGxhY2VBbGxTaGlwcyBmcm9tIFwiLi9wbGFjZUFsbFNoaXBzXCI7XHJcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuLi9nYW1lQm9hcmRGYWN0b3J5XCI7XHJcbmltcG9ydCBlbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xyXG5pbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi4vQ3JlYXRlR3JpZFwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemVNYWluR2FtZShhcnIsIG5hbWUpIHtcclxuICBsZXQgbmV3Qm9hcmQxID0gZ2FtZUJvYXJkKDEwKTtcclxuICBsZXQgbmV3Qm9hcmQyID0gZ2FtZUJvYXJkKDEwKTtcclxuICBDcmVhdGVHcmlkKDEwLCBcIkJvYXJkMVwiLCBuYW1lKTtcclxuICBDcmVhdGVHcmlkKDEwLCBcIkJvYXJkMlwiLCBcIkFJXCIpO1xyXG5cclxuICBQbGFjZUFsbFNoaXBzKG5ld0JvYXJkMSwgYXJyLCBcIkJvYXJkMVwiKTtcclxuXHJcbiAgUGxhY2VBbGxTaGlwcyhcclxuICAgIG5ld0JvYXJkMixcclxuICAgIFtcclxuICAgICAgeyByb3c6IDEsIGNvbHVtbjogMiwgbGVuZ3RoOiAxLCBheGlzRGVjaWRlcjogdHJ1ZSB9LFxyXG4gICAgICB7IHJvdzogMiwgY29sdW1uOiA3LCBsZW5ndGg6IDIsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXHJcbiAgICAgIHsgcm93OiAzLCBjb2x1bW46IDAsIGxlbmd0aDogMywgYXhpc0RlY2lkZXI6IHRydWUgfSxcclxuICAgICAgeyByb3c6IDgsIGNvbHVtbjogMSwgbGVuZ3RoOiA0LCBheGlzRGVjaWRlcjogdHJ1ZSB9LFxyXG4gICAgICB7IHJvdzogNiwgY29sdW1uOiAzLCBsZW5ndGg6IDUsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gICAgXCJCb2FyZDJcIlxyXG4gICk7XHJcblxyXG4gIGxldCByZXN0QnRuRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiUmVzdGFydFwiIH0pO1xyXG4gIGxldCByZXN0QnRuID0gZWxlbWVudENyZWF0b3IoXCJidXR0b25cIiwgeyBpZDogXCJSZXN0YXJ0QnRuXCIgfSk7XHJcbiAgbGV0IHdpbm5lcnAgPSBlbGVtZW50Q3JlYXRvcihcInBcIiwgeyBpZDogXCJXaW5uZXJwYXJhXCIgfSk7XHJcbiAgcmVzdEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzdGFydFwiO1xyXG4gIHJlc3RCdG5EaXYuYXBwZW5kQ2hpbGQocmVzdEJ0bik7XHJcbiAgY29uc29sZS5sb2cobmV3Qm9hcmQxLmJvYXJkQmxvY2tzKTtcclxuICBjb25zb2xlLmxvZyhuZXdCb2FyZDIuYm9hcmRCbG9ja3MpO1xyXG4gIGxldCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XHJcbiAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVycCk7XHJcbiAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdEJ0bkRpdik7XHJcbiAgbGV0IFBsYXllck9uZSA9IFBsYXllcihuYW1lLCBuZXdCb2FyZDIpO1xyXG4gIGxldCBQbGF5ZXJUd28gPSBQbGF5ZXIoXCJBSVwiLCBuZXdCb2FyZDEpO1xyXG5cclxuICByZXR1cm4geyBuZXdCb2FyZDEsIG5ld0JvYXJkMiwgUGxheWVyT25lLCBQbGF5ZXJUd28gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbGl6ZU1haW5HYW1lO1xyXG4iLCJpbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi4vQ3JlYXRlR3JpZFwiO1xyXG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xyXG5cclxuZnVuY3Rpb24gUGxhY2VTaGlwc09uQm9hcmQobmFtZSkge1xyXG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBgUGxlYXNlICR7bmFtZX0gcGxhY2UgeW91ciBzaGlwc2A7XHJcbiAgYnRuRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQnRuQ29udFwiKTtcclxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJheGlzQnRuXCIpO1xyXG4gIFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1YkJ0blwiKTtcclxuICBTdWJCdG4udGV4dENvbnRlbnQgPSBcIlNVQk1JVFwiO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiWC1BWElTXCI7XHJcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChTdWJCdG4pO1xyXG4gIGxldCBPdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XHJcbiAgT3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcclxuXHJcbiAgbGV0IGR1bW15Qm9hcmQgPSBnYW1lQm9hcmQoMTAsIFwiRHVtbXlCb2FyZFwiKTtcclxuICBDcmVhdGVHcmlkKDEwLCBcIkR1bW15Qm9hcmRcIik7XHJcblxyXG4gIHJldHVybiB7IGR1bW15Qm9hcmQsIG5hbWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2VTaGlwc09uQm9hcmQ7XHJcbiIsImltcG9ydCBDb2xvckNoYW5nZSBmcm9tIFwiLi9DaGFuZ2VDb2xvckJvYXJkXCI7XHJcbmZ1bmN0aW9uIFBsYXllcnNBdHRhY2tTaGlwKGJvYXJkcywgQ29vcmRpbmF0ZXNPbmVBcnIsIENvb3JkaW5hdGVzVHdvQXJyKSB7XHJcbiAgbGV0IFtyb3cxLCBjb2x1bW4xXSA9IENvb3JkaW5hdGVzT25lQXJyO1xyXG4gIGxldCBbcm93MiwgY29sdW1uMl0gPSBDb29yZGluYXRlc1R3b0FycjtcclxuXHJcbiAgbGV0IEJvYXJkMkF0dGFja2VkT2JqID0gYm9hcmRzLlBsYXllck9uZS5BdHRhY2tCb2FyZChyb3cyLCBjb2x1bW4yKTtcclxuICBsZXQgQm9hcmQxQXR0YWNrZWRPYmogPSB7fTtcclxuICBpZiAoQm9hcmQyQXR0YWNrZWRPYmouU2hpcEhpdCAhPT0gXCJUaGUgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIGhpdFwiKSB7XHJcbiAgICBCb2FyZDFBdHRhY2tlZE9iaiA9IGJvYXJkcy5QbGF5ZXJUd28uQXR0YWNrQm9hcmQoK3JvdzEsICtjb2x1bW4xKTtcclxuXHJcbiAgICBDb2xvckNoYW5nZShcclxuICAgICAgQm9hcmQyQXR0YWNrZWRPYmouU2hpcEhpdCxcclxuICAgICAgQm9hcmQxQXR0YWNrZWRPYmouU2hpcEhpdCxcclxuICAgICAgQ29vcmRpbmF0ZXNPbmVBcnIsXHJcbiAgICAgIENvb3JkaW5hdGVzVHdvQXJyXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN0b3BwZWQgYWkgZnJvbSBtYWtpbmcgdGhlIG1vdmVcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaWZBbGxTaGlwc0IxOiBCb2FyZDFBdHRhY2tlZE9iai5JZlNoaXBzU3VuayxcclxuICAgIGlmQWxsU2hpcHNCMjogQm9hcmQyQXR0YWNrZWRPYmouSWZTaGlwc1N1bmssXHJcbiAgICBQbGF5ZXJPbmU6IGJvYXJkcy5QbGF5ZXJPbmUuZ2V0TmFtZSgpLFxyXG4gICAgUGxheWVyVHdvOiBib2FyZHMuUGxheWVyVHdvLmdldE5hbWUoKSxcclxuICAgIFVzZXJIaXRDb25kaXRpb246IEJvYXJkMkF0dGFja2VkT2JqLlNoaXBIaXQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyc0F0dGFja1NoaXA7XHJcbiIsImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vQ29sb3JzXCI7XHJcbmZ1bmN0aW9uIFByZXZpZXdTaGlwc09uSG92ZXIoZSwgc2hpcENvdW50LCBhcnIsIGFyclJlZCwgYnRuKSB7XHJcbiAgbGV0IGkgPSAwO1xyXG4gIGxldCBqID0gMDtcclxuXHJcbiAgbGV0IHJvdyA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XHJcbiAgbGV0IGNvbHVtbiA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XHJcblxyXG4gIC8vQ2FsY3VsYXRpbmcgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGluIHRoZSByb3cuIFRoZSB0b3RhbCBzaG91bGQgYWx3YXlzIGJlIGxlc3NlciBvciBlcXVhbCB0byBlbmRWYWwgdG8gYmUgcGxhY2VkLlxyXG5cclxuICB3aGlsZSAoaiA8IHNoaXBDb3VudCAtIDEpIHtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgY29sdW1uKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3crKztcclxuICAgIH1cclxuICAgIGorKztcclxuICB9XHJcblxyXG4gIHdoaWxlIChpIDwgc2hpcENvdW50KSB7XHJcbiAgICBpZiAoKGJ0biAmJiBjb2x1bW4gPD0gOSkgfHwgKCFidG4gJiYgcm93IDw9IDkpKSB7XHJcbiAgICAgIGUuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLmdyZWVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMucmVkO1xyXG4gICAgICBhcnJSZWQucHVzaChlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcnIucHVzaChlKTtcclxuICAgIGlmIChidG4gJiYgZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKSA8IDkpIHtcclxuICAgICAgZSA9IGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgfSBlbHNlIGlmICghYnRuICYmIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikgPCA5KSB7XHJcbiAgICAgIGxldCByb3dDb2xvciA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XHJcbiAgICAgIGxldCBjb2x1bW5Db2xvciA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XHJcblxyXG4gICAgICByb3dDb2xvcisrO1xyXG4gICAgICBsZXQgbmV4dEVsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1Db29yZGluYXRlcyA9IFwiJHtyb3dDb2xvcn0ke2NvbHVtbkNvbG9yfVwiXWBcclxuICAgICAgKTtcclxuICAgICAgZSA9IG5leHRFbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90IHVwZGF0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpKys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3U2hpcHNPbkhvdmVyO1xyXG4iLCJpbXBvcnQgUGxhY2VTaGlwc09uQm9hcmQgZnJvbSBcIi4vUGxhY2VTaGlwc09uQm9hcmRcIjtcclxuZnVuY3Rpb24gUmVzdGFydEdhbWUoKSB7XHJcbiAgbGV0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcclxuICBsZXQgQmxvY2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5CbG9ja3NDb250YWluZXJcIik7XHJcbiAgbGV0IFdpbm5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1dpbm5lcnBhcmFcIik7XHJcbiAgbGV0IHJlc3RhcnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlJlc3RhcnRcIik7XHJcbiAgb3V0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoQmxvY2tzQ29udGFpbmVyKTtcclxuICBvdXRlckNvbnRhaW5lci5yZW1vdmVDaGlsZChyZXN0YXJ0QnRuQ29udGFpbmVyKTtcclxuICBvdXRlckNvbnRhaW5lci5yZW1vdmVDaGlsZChXaW5uZXJQYXJhKTtcclxuICBsZXQgZHVtbXlCb2FyZCA9IFBsYWNlU2hpcHNPbkJvYXJkKFwiUm9oYW5cIik7XHJcbiAgcmV0dXJuIGR1bW15Qm9hcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhcnRHYW1lO1xyXG4iLCJpbXBvcnQgSW5pdGlhbGl6ZU1haW5HYW1lIGZyb20gXCIuL0luaXRpYWxpemVNYWluR2FtZVwiO1xyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lQWZ0ZXJQbGFjZW1lbnQobGVuZ3RoLCBzaGlwc0Nvb3JkaW5hdGVzQXJyLCBQbGF5ZXJPbmUpIHtcclxuICBpZiAobGVuZ3RoIDwgNikge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgcGxhY2UgYWxsIHRoZSBzaGlwc1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGJ0bkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkJ0bkNvbnRcIik7XHJcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xyXG4gICAgYnRuQ29udC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJ0bkNvbnQpO1xyXG4gICAgZ3JpZENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdyaWRDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBJbml0aWFsaXplTWFpbkdhbWUoc2hpcHNDb29yZGluYXRlc0FyciwgUGxheWVyT25lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0R2FtZUFmdGVyUGxhY2VtZW50O1xyXG4iLCIvLyBpdGVyYXRlIG92ZXIgYW4gYXJyYXkgYW5kIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBpdC5cclxuZnVuY3Rpb24gY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yKGFyciwgY29sb3IpIHtcclxuICBhcnIuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgZS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBgJHtjb2xvcn1gO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3I7XHJcbiIsImZ1bmN0aW9uIGNoZWNrV2hvV29uKHByb3BzKSB7XHJcbiAgaWYgKHByb3BzLmlmQWxsU2hpcHNCMSA9PT0gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCIpIHtcclxuICAgIHJldHVybiBgQm9hcmQxIGhhcyBsb3N0IHRoZSBnYW1lIEFuZCAke3Byb3BzLlBsYXllclR3b30gaXMgdGhlIHdpbm5lcmA7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHByb3BzLmlmQWxsU2hpcHNCMiA9PT0gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCIgJiZcclxuICAgIHByb3BzLmlmQWxsU2hpcHNCMSA9PT0gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCJcclxuICApIHtcclxuICAgIHJldHVybiBcIlRoZSBnYW1lIGhhcyB0aWVkXCI7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5pZkFsbFNoaXBzQjIgPT09IFwiQWxsIHRoZSBzaGlwcyBhcmUgc3Vua1wiKSB7XHJcbiAgICByZXR1cm4gYEJvYXJkIDIgaGFzIGxvc3QgdGhlIGdhbWUgQW5kICR7cHJvcHMuUGxheWVyT25lfSBpcyB0aGUgd2lubmVyYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiTm8gYm9hcmQgaGFzIHdvbiB0aGUgZ2FtZSB5ZXRcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrV2hvV29uO1xyXG4iLCJpbXBvcnQgZWxlbWVudENyZWF0b3IgZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcclxubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk91dGVyQ29udGFpbmVyXCIpO1xyXG5mdW5jdGlvbiBDcmVhdGVOYXYoKSB7XHJcbiAgbGV0IG5hdiA9IGVsZW1lbnRDcmVhdG9yKFwibmF2XCIsIHsgY2xhc3NOYW1lOiBcIm5hdkNvbnRhaW5lclwiIH0pO1xyXG4gIGxldCBIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcclxuICBuYXYuYXBwZW5kQ2hpbGQoSGVhZGluZyk7XHJcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU5hdjtcclxuIiwiZnVuY3Rpb24gZWxlbWVudENyZWF0b3IodHlwZSwgcHJvcGVydGllcykge1xyXG4gIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGZvciAobGV0IHByb3AgaW4gcHJvcGVydGllcykge1xyXG4gICAgZWxlW3Byb3BdID0gcHJvcGVydGllc1twcm9wXTtcclxuICB9XHJcbiAgcmV0dXJuIGVsZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50Q3JlYXRvcjtcclxuIiwiaW1wb3J0IGNoZWNrV2hvV29uIGZyb20gXCIuL2NoZWNrV2hvV29uXCI7XHJcblxyXG5pbXBvcnQgUGxheWVyc0F0dGFja1NoaXAgZnJvbSBcIi4vUGxheWVyc0F0dGFja1NoaXBcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFdpbm5lclJlc3VsdChlbGVtZW50MiwgYm9hcmRzLCBjaGVja0Fycikge1xyXG4gIGxldCBDb29yZGluYXRlc09uZUFyciA9IGdldFVuaXF1ZU51bWJlcihjaGVja0Fycik7XHJcblxyXG4gIGxldCBkYXRhU2hpcDJSb3cgPSBlbGVtZW50Mi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcclxuICBsZXQgZGF0YVNoaXAyQ29sdW1uID0gZWxlbWVudDIuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XHJcbiAgbGV0IENvb3JkaW5hdGVzVHdvQXJyID0gW2RhdGFTaGlwMlJvdywgZGF0YVNoaXAyQ29sdW1uXTtcclxuICBsZXQgQm90aFNoaXBDb25kaXRpb25zID0gUGxheWVyc0F0dGFja1NoaXAoXHJcbiAgICBib2FyZHMsXHJcbiAgICBDb29yZGluYXRlc09uZUFycixcclxuICAgIENvb3JkaW5hdGVzVHdvQXJyXHJcbiAgKTtcclxuICBpZiAoQm90aFNoaXBDb25kaXRpb25zLlVzZXJIaXRDb25kaXRpb24gPT09IFwiVGhlIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBoaXRcIikge1xyXG4gICAgY2hlY2tBcnIucHVzaChDb29yZGluYXRlc09uZUFycik7XHJcbiAgfVxyXG4gIGxldCB3aG9Xb24gPSBjaGVja1dob1dvbihCb3RoU2hpcENvbmRpdGlvbnMpO1xyXG4gIHJldHVybiB3aG9Xb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVuaXF1ZU51bWJlcihjaGVja0Fycikge1xyXG4gIGxldCBDb29yZGluYXRlcyA9IE1hdGguZmxvb3IoY2hlY2tBcnIubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcbiAgQ29vcmRpbmF0ZXMgPSBjaGVja0FycltDb29yZGluYXRlc107XHJcbiAgbGV0IGluZGV4ID0gY2hlY2tBcnIuaW5kZXhPZihDb29yZGluYXRlcyk7XHJcbiAgY2hlY2tBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICBjb25zb2xlLmxvZyhjaGVja0Fycik7XHJcbiAgcmV0dXJuIENvb3JkaW5hdGVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5uZXJSZXN1bHQ7XHJcbiIsImltcG9ydCBQbGFjZUF0UG9zaXRpb24gZnJvbSBcIi4uL1BsYWNlQXRQb3NpdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gUGxhY2VBbGxTaGlwcyhCb2FyZCwgc2hpcHNBcnIsIEJvYXJkSWQpIHtcclxuICBzaGlwc0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBCb2FyZC5wbGFjZVNoaXAoZS5yb3csIGUuY29sdW1uLCBlLmxlbmd0aCwgZS5heGlzRGVjaWRlcik7XHJcbiAgICBQbGFjZUF0UG9zaXRpb24oZS5yb3csIGUuY29sdW1uLCBlLmxlbmd0aCwgZS5heGlzRGVjaWRlciwgQm9hcmRJZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlQWxsU2hpcHM7XHJcbiIsImltcG9ydCBlbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xyXG5sZXQgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XHJcbmxldCBDbGlja0J1dHRvbiA9IG51bGw7XHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZSgpIHtcclxuICBsZXQgR2FtZURpdiA9IGVsZW1lbnRDcmVhdG9yKFwiZGl2XCIsIHsgaWQ6IFwiZ2FtZUNvbnRhaW5lclwiIH0pO1xyXG4gIEdhbWVEaXYuaW5uZXJIVE1MID0gYDxsYWJlbCBmb3I9XCJOYW1lXCI+RW50ZXIgeW91ciBOYW1lPC9sYWJlbD5cclxuICAgIDxicj5cclxuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2YWx1ZT1cIlwiPlxyXG4gICAgIDxicj5cclxuICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0QnV0dG9uXCI+UExBWTwvYnV0dG9uPlxyXG4gICAgYDtcclxuICBtYWluRGl2LmFwcGVuZENoaWxkKEdhbWVEaXYpO1xyXG4gIENsaWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnRHYW1lO1xyXG4iLCJpbXBvcnQgUGxhY2VTaGlwc09uQm9hcmQgZnJvbSBcIi4vUGxhY2VTaGlwc09uQm9hcmRcIjtcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEFuZFN0YXJ0KCkge1xyXG4gIGxldCBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcclxuICBsZXQgbmFtZSA9IElucHV0LnZhbHVlO1xyXG4gIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciB0aGUgbmFtZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVDb250YWluZXJcIik7XHJcbiAgICBnYW1lRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2FtZURpdik7XHJcbiAgICBsZXQgcmV0dXJuQm9hcmQgPSBQbGFjZVNoaXBzT25Cb2FyZChuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gcmV0dXJuQm9hcmQ7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdEFuZFN0YXJ0O1xyXG4iLCJpbXBvcnQgUGxhY2VBdFBvc2l0aW9uIGZyb20gXCIuLi9QbGFjZUF0UG9zaXRpb25cIjtcclxuZnVuY3Rpb24gdmFsaWRQbGFjZW1lbnRTaGlwKHtcclxuICBlbGVtZW50LFxyXG4gIGxlbmd0aCxcclxuICBBcnJUb0JlQ29waWVkLFxyXG4gIHNoaXBDb29yZGluYXRlc0FycixcclxuICBib2FyZCxcclxuICBheGlzRGVjaWRlcixcclxufSkge1xyXG4gIGxldCByb3cgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xyXG4gIGxldCBjb2x1bW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpO1xyXG4gIGxldCBpZlNoaXBDYW5CZVBsYWNlZCA9IGJvYXJkLmNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KFxyXG4gICAgcm93LFxyXG4gICAgY29sdW1uLFxyXG4gICAgbGVuZ3RoLFxyXG4gICAgYXhpc0RlY2lkZXJcclxuICApO1xyXG4gIGlmIChpZlNoaXBDYW5CZVBsYWNlZCkge1xyXG4gICAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGF4aXNEZWNpZGVyKTtcclxuICAgIGxldCBBcnJUb0F2b2lkQ3VycmVudCA9IFBsYWNlQXRQb3NpdGlvbihyb3csIGNvbHVtbiwgbGVuZ3RoLCBheGlzRGVjaWRlcik7XHJcbiAgICBBcnJUb0JlQ29waWVkID0gWy4uLkFyclRvQmVDb3BpZWQsIC4uLkFyclRvQXZvaWRDdXJyZW50XTtcclxuXHJcbiAgICBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBbXHJcbiAgICAgIC4uLnNoaXBDb29yZGluYXRlc0FycixcclxuICAgICAgeyByb3c6IHJvdywgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCBheGlzRGVjaWRlcjogYXhpc0RlY2lkZXIgfSxcclxuICAgIF07XHJcbiAgICBsZW5ndGgrKztcclxuICB9XHJcbiAgcmV0dXJuIHsgbGVuZ3RoLCBBcnJUb0JlQ29waWVkLCBzaGlwQ29vcmRpbmF0ZXNBcnIgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRQbGFjZW1lbnRTaGlwO1xyXG4iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IG1ldGhvZE9iaiA9IHtcclxuICBwbGFjZVNoaXA6IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgc2hpcExlbmd0aCwgYXhpc0RlY2lkZXIpIHtcclxuICAgIHRoaXMuTm9PZlNoaXBzKys7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IHNoaXBMZW5ndGgpIHtcclxuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddW2NvbHVtbl0gPSBgJHtzaGlwTGVuZ3RofWA7XHJcbiAgICAgIGlmIChheGlzRGVjaWRlcikge1xyXG4gICAgICAgIGNvbHVtbisrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdysrO1xyXG4gICAgICB9XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIGxldCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoKTtcclxuICAgIHRoaXMuc2hpcHNBcnIucHVzaChuZXdTaGlwKTtcclxuICB9LFxyXG4gIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBbcm93LCBjb2x1bW5dO1xyXG4gICAgbGV0IHNoaXBMZW5ndGggPSB0aGlzLmJvYXJkQmxvY2tzW3Jvd11bY29sdW1uXTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuQ29vcmRpbmF0ZXNBcnIuZmluZEluZGV4KChlKSA9PiB7XHJcbiAgICAgIHJldHVybiBlWzBdID09PSBlbGVtZW50WzBdICYmIGVbMV0gPT09IGVsZW1lbnRbMV07XHJcbiAgICB9KTtcclxuICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIGhpdFwiO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEgJiYgc2hpcExlbmd0aCAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuQ29vcmRpbmF0ZXNBcnIucHVzaChbcm93LCBjb2x1bW5dKTtcclxuICAgICAgZnVuY3Rpb24gRmluZFNoaXAocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaGlwTGVuZ3RoKSA9PT0gcGFyYW1zLlNoaXBMZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IFNoaXBJbmRleCA9IHRoaXMuc2hpcHNBcnIuZmluZEluZGV4KEZpbmRTaGlwKTtcclxuICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgY29uc29sZS5sb2coU2hpcEluZGV4KTtcclxuICAgICAgbGV0IHRoYXRTaGlwID0gdGhpcy5zaGlwc0FycltTaGlwSW5kZXhdO1xyXG5cclxuICAgICAgdGhhdFNoaXAuaGl0KCk7XHJcbiAgICAgIHRoaXMuYm9hcmRCbG9ja3Nbcm93XVtjb2x1bW5dID0gXCJoaXRcIjtcclxuICAgICAgbGV0IHNoaXBDb25kaXRpb24gPSB0aGF0U2hpcC5pc1N1bmsoKTtcclxuICAgICAgaWYgKHNoaXBDb25kaXRpb24gPT09IFwiT2ggdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1wiKSB7XHJcbiAgICAgICAgdGhpcy5TaGlwc1N1bmtBcnIucHVzaCh0aGF0U2hpcCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBcIlRoZSBzaGlwIGhhcyBiZWVuIGhpdCBhbmQgY29vcmRpbmF0ZXMgaGF2ZSBiZWVuIG5vdGVkXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLkNvb3JkaW5hdGVzQXJyLnB1c2goW3JvdywgY29sdW1uXSk7XHJcbiAgICAgIHJldHVybiBcIm9vcHMgeW91IG1pc3NlZCB0aGUgc2hpcFwiO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQWxsU2hpcHNTdW5rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5TaGlwc1N1bmtBcnIubGVuZ3RoID09PSB0aGlzLk5vT2ZTaGlwcykge1xyXG4gICAgICByZXR1cm4gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJBbGwgdGhlIHNoaXBzIGhhdmUgbm90IGJlZW4gc3VuayB5ZXRcIjtcclxuICAgIH1cclxuICB9LFxyXG4gIGNoZWNrVmFsaWRTaGlwUGxhY2VtZW50OiBmdW5jdGlvbiAocm93LCBjb2x1bW4sIHNoaXBMZW5ndGgsIGF4aXNEZWNpZGVyKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgQXJyVG9CZUNoZWNrZWQgPSBbXTtcclxuICAgIHdoaWxlIChpIDwgc2hpcExlbmd0aCkge1xyXG4gICAgICBBcnJUb0JlQ2hlY2tlZC5wdXNoKFtOdW1iZXIocm93KSwgTnVtYmVyKGNvbHVtbildKTtcclxuICAgICAgaWYgKGF4aXNEZWNpZGVyKSB7XHJcbiAgICAgICAgY29sdW1uKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93Kys7XHJcbiAgICAgIH1cclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChheGlzRGVjaWRlcikge1xyXG4gICAgICAvL1JldmVydGluZyBiYWNrIHRvIGNvcnJlY3QgY29vcmRpbmF0ZXNcclxuICAgICAgY29sdW1uID0gY29sdW1uIC0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdyA9IHJvdyAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IEZpbHRlcmVkQXJyID0gW107XHJcbiAgICBpZiAodGhpcy5zaGlwc1BsYWNlZEFyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJTaGlwIGZvciB0aGUgZmlyc3QgaXRlcmF0aW9uIGFzIHRoZXJlIHdpbGwgYmUgbm8gb3ZlcmxhcHBpbmdcIlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRvQ2hlY2tBcnIgPSBbXTtcclxuICAgICAgQXJyVG9CZUNoZWNrZWQuZm9yRWFjaCgoYXJyYXlFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgLy9bWzEsMiwzXSxbNCw1XV0gaW5pdGlhbCBhcnJheVxyXG4gICAgICAgIHRoaXMuc2hpcHNQbGFjZWRBcnIuZm9yRWFjaCgoaW5kaUFycikgPT4ge1xyXG4gICAgICAgICAgLy8gQXJyYXkgdG8gYmUgY2hlY2tlZCBmcm9tLlxyXG4gICAgICAgICAgaW5kaUFyci5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGUgPT09IGFycmF5RWxlbWVudFtpbmRleF0pIHRvQ2hlY2tBcnIucHVzaChlbGUpOyAvL2NoZWNraW5nIGV2ZXJ5IGVsZW1lbnQgb2Ygc2hpcHNQbGFjZWRBcnIgd2l0aCBhcnJheUVsZW1lbnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHRvQ2hlY2tBcnIubGVuZ3RoID09PSBhcnJheUVsZW1lbnQubGVuZ3RoKVxyXG4gICAgICAgICAgICBGaWx0ZXJlZEFyci5wdXNoKHRvQ2hlY2tBcnIpO1xyXG5cclxuICAgICAgICAgIHRvQ2hlY2tBcnIgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29uZGl0aW9ucyB3aGVyZSBzaGlwcyBjYW5ub3QgYmUgcGxhY2VkIGlmIHRoZSByb3dzIG51bWJlciBpcyB1bmRlZmluZWQgZWcgLSB4Q29sID0gNCBidXQgdGhlcmUgYXJlIG9ubHkgdGhyZWUgcm93cyBkZWZpbmVkLlxyXG4gICAgb3IgU2hpcHMgYXJlIG92ZXJsYXBwaW5nIGluIHRoaXMgY2FzZWQgdGhlIGZpbHRlcmVkIGFycmF5IHdvdWxkIGJlIGZpbGxlZC5cclxuICAgIG9yIGNvbmRpdGlvbiB3aGVyZSB0aGUgc2hpcHMgaW4gaG9yaXpvbnRhbCBjb25kaXRpb24gY2Fubm90IGJlIHBsYWNlZCBib2FyZEJsb2Nrc1swXVsxMF0uIEJ1dCBpdCB3aWxsIGJlIHVuZGVmaW5lZCBhcyB0aGVyZSBhcmUgb25seSA5IGNvbHVtbnMuXHJcbiAgICAqL1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgRmlsdGVyZWRBcnIubGVuZ3RoICE9PSAwIHx8XHJcbiAgICAgIHRoaXMuYm9hcmRCbG9ja3Nbcm93XVtjb2x1bW5dID09PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGlwc1BsYWNlZEFyciA9IFsuLi50aGlzLnNoaXBzUGxhY2VkQXJyLCAuLi5BcnJUb0JlQ2hlY2tlZF07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzUGxhY2VkQXJyKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcbiAgZ2V0Qm9hcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkQmxvY2tzO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnYW1lQm9hcmQobGVuZ3RoKSB7XHJcbiAgbGV0IHNoaXBzQXJyID0gW107XHJcbiAgbGV0IENvb3JkaW5hdGVzQXJyID0gW107XHJcbiAgbGV0IE5vT2ZTaGlwcyA9IDA7XHJcbiAgbGV0IFNoaXBzU3Vua0FyciA9IFtdO1xyXG4gIGxldCBzaGlwc1BsYWNlZEFyciA9IFtdO1xyXG4gIGxldCBib2FyZEJsb2NrcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGxlbmd0aCB9LCAoZSkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpO1xyXG4gIGxldCBnYW1lQm9hcmRPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kT2JqKSwge1xyXG4gICAgc2hpcHNBcnIsXHJcbiAgICBDb29yZGluYXRlc0FycixcclxuICAgIE5vT2ZTaGlwcyxcclxuICAgIFNoaXBzU3Vua0FycixcclxuICAgIGJvYXJkQmxvY2tzLFxyXG4gICAgc2hpcHNQbGFjZWRBcnIsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGdhbWVCb2FyZE9iajtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2FtZUJvYXJkIH07XHJcbiIsImltcG9ydCBzdWJtaXRBbmRTdGFydCBmcm9tIFwiLi9jb21wb25lbnRzL3N1Ym1pdEFuZFN0YXJ0XCI7XHJcblxyXG5pbXBvcnQgUHJldmlld1NoaXBzT25Ib3ZlciBmcm9tIFwiLi9jb21wb25lbnRzL1ByZXZpZXdTaGlwc09uSG92ZXJcIjtcclxuaW1wb3J0IGNoYW5nZUFyckJhY2tncm91bmRDb2xvciBmcm9tIFwiLi9jb21wb25lbnRzL2NoYW5nZUFyckJhY2tncm91bmRDb2xvclwiO1xyXG5pbXBvcnQgQ29sb3JzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sb3JzXCI7XHJcbmltcG9ydCB2YWxpZFBsYWNlbWVudFNoaXAgZnJvbSBcIi4vY29tcG9uZW50cy92YWxpZFBsYWNlbWVudFNoaXBcIjtcclxuaW1wb3J0IFN0YXJ0R2FtZUFmdGVyUGxhY2VtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvU3RhcnRHYW1lQWZ0ZXJTaGlwUGxhY2VtZW50XCI7XHJcbmltcG9ydCBnZXRXaW5uZXJSZXN1bHQgZnJvbSBcIi4vY29tcG9uZW50cy9nZXRXaW5uZXJSZXN1bHRcIjtcclxuaW1wb3J0IFJlc3RhcnRHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvUmVzdGFydEdhbWVcIjtcclxuaW1wb3J0IEZpbGxBcnJDb3JkaW5hdGVzIGZyb20gXCIuL2NvbXBvbmVudHMvRmlsbEFycldpdGhDb29yZGluYXRlc1wiO1xyXG5sZXQgZ2FtZUxvb3AgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBib2FyZHNPYmo7XHJcbiAgbGV0IGR1bW15Qm9hcmQ7XHJcbiAgbGV0IFNoaXBDb3VudCA9IDE7XHJcbiAgbGV0IEhvdmVyZWRBcnIgPSBbXTtcclxuICBsZXQgYXJyVG9Bdm9pZCA9IFtdO1xyXG4gIGxldCBhcnJCbG9ja3NSZWQgPSBbXTtcclxuICBsZXQgc2hpcENvb3JkaW5hdGVzQXJyID0gW107XHJcbiAgbGV0IGJ0bkNoZWNrID0gdHJ1ZTtcclxuICBsZXQgUGxheWVyT25lID0gXCJcIjtcclxuICBsZXQgY2hlY2tBcnIgPSBGaWxsQXJyQ29yZGluYXRlcygpO1xyXG5cclxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlzdGVuaW5nIHRvIG1vdXNlb3ZlciBldmVudHNcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlPy5pZCA9PT0gXCJEdW1teUJvYXJkXCIpIHtcclxuICAgICAgY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yKEhvdmVyZWRBcnIsIENvbG9ycy53aGl0ZSk7XHJcblxyXG4gICAgICBjaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3IoYXJyVG9Bdm9pZCwgQ29sb3JzLmdyZWVuKTtcclxuICAgICAgLy8gRW1wdGllZCB0aGUgYXJyYXkgdG8gYWRkIG9ubHkgdGhvc2UgZWxlbWVudHMgaW4gXCJhcnJUb0F2b2lkXCIgdGhhdCBoYWQgQmFjay1jb2xvciBncmVlbi5cclxuICAgICAgSG92ZXJlZEFyciA9IFtdO1xyXG4gICAgICBhcnJCbG9ja3NSZWQgPSBbXTtcclxuICAgICAgUHJldmlld1NoaXBzT25Ib3ZlcihcclxuICAgICAgICBlLnRhcmdldCxcclxuICAgICAgICBTaGlwQ291bnQsXHJcbiAgICAgICAgSG92ZXJlZEFycixcclxuICAgICAgICBhcnJCbG9ja3NSZWQsXHJcbiAgICAgICAgYnRuQ2hlY2tcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9Eb20gSW50ZXJhY3Rpb25cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGhhc0NsYXNzKGUudGFyZ2V0LCBcInN1Ym1pdEJ1dHRvblwiKSkge1xyXG4gICAgICAgIGxldCBzdWJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEJ1dHRvblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWJCdXR0b24pO1xyXG4gICAgICAgIGxldCBkdW1teUJvYXJkT2JqID0gc3VibWl0QW5kU3RhcnQoKTtcclxuICAgICAgICBkdW1teUJvYXJkID0gZHVtbXlCb2FyZE9iai5kdW1teUJvYXJkO1xyXG4gICAgICAgIFBsYXllck9uZSA9IGR1bW15Qm9hcmRPYmoubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlPy5pZCA9PT0gXCJEdW1teUJvYXJkXCIpIHtcclxuICAgICAgICBsZXQgYm94SWQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZVZhbE9iaiA9IHZhbGlkUGxhY2VtZW50U2hpcCh7XHJcbiAgICAgICAgICBlbGVtZW50OiBib3hJZCxcclxuICAgICAgICAgIGxlbmd0aDogU2hpcENvdW50LFxyXG4gICAgICAgICAgQXJyVG9CZUNvcGllZDogYXJyVG9Bdm9pZCxcclxuICAgICAgICAgIHNoaXBDb29yZGluYXRlc0Fycjogc2hpcENvb3JkaW5hdGVzQXJyLFxyXG4gICAgICAgICAgYm9hcmQ6IGR1bW15Qm9hcmQsXHJcbiAgICAgICAgICBheGlzRGVjaWRlcjogYnRuQ2hlY2ssXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU2hpcENvdW50ID0gY2hhbmdlVmFsT2JqLmxlbmd0aDtcclxuICAgICAgICBhcnJUb0F2b2lkID0gY2hhbmdlVmFsT2JqLkFyclRvQmVDb3BpZWQ7XHJcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzQXJyID0gY2hhbmdlVmFsT2JqLnNoaXBDb29yZGluYXRlc0FycjtcclxuXHJcbiAgICAgICAgaWYgKFNoaXBDb3VudCA+IDUpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjRHVtbXlCb2FyZFwiKS5zdHlsZVtcInBvaW50ZXItZXZlbnRzXCJdID1cclxuICAgICAgICAgICAgXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnRhcmdldD8uaWQgPT09IFwiYXhpc0J0blwiKSB7XHJcbiAgICAgICAgaWYgKGJ0bkNoZWNrKSB7XHJcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiWS1BWElTXCI7XHJcbiAgICAgICAgICBidG5DaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiWC1BWElTXCI7XHJcbiAgICAgICAgICBidG5DaGVjayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZS50YXJnZXQ/LmlkID09PSBcInN1YkJ0blwiKSB7XHJcbiAgICAgICAgYm9hcmRzT2JqID0gU3RhcnRHYW1lQWZ0ZXJQbGFjZW1lbnQoXHJcbiAgICAgICAgICBTaGlwQ291bnQsXHJcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnIsXHJcbiAgICAgICAgICBQbGF5ZXJPbmVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnRhcmdldD8uaWQgPT09IFwiUmVzdGFydEJ0blwiKSB7XHJcbiAgICAgICAgU2hpcENvdW50ID0gMTtcclxuICAgICAgICBIb3ZlcmVkQXJyID0gW107XHJcbiAgICAgICAgYXJyVG9Bdm9pZCA9IFtdO1xyXG4gICAgICAgIGFyckJsb2Nrc1JlZCA9IFtdO1xyXG4gICAgICAgIGNoZWNrQXJyID0gRmlsbEFyckNvcmRpbmF0ZXMoKTtcclxuICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBbXTtcclxuICAgICAgICBidG5DaGVjayA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3Jrc1wiKTtcclxuICAgICAgICBsZXQgZHVtbXlCb2FyZE9iaiA9IFJlc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgZHVtbXlCb2FyZCA9IGR1bW15Qm9hcmRPYmouZHVtbXlCb2FyZDtcclxuICAgICAgICBQbGF5ZXJPbmUgPSBkdW1teUJvYXJkT2JqLm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZT8uaWQgPT09IFwiQm9hcmQyXCIpIHtcclxuICAgICAgICBsZXQgZWxlbWVudDIgPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgd2hvV29uID0gZ2V0V2lubmVyUmVzdWx0KGVsZW1lbnQyLCBib2FyZHNPYmosIGNoZWNrQXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aG9Xb24pO1xyXG4gICAgICAgIGlmICh3aG9Xb24gIT09IFwiTm8gYm9hcmQgaGFzIHdvbiB0aGUgZ2FtZSB5ZXRcIikge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNXaW5uZXJwYXJhXCIpLnRleHRDb250ZW50ID0gd2hvV29uO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCb2FyZDFcIikuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCb2FyZDJcIikuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xyXG4iLCJjb25zdCBtZXRob2RzT2JqID0ge1xyXG4gIGhpdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5sZW5ndGgtLTtcclxuICAgIHJldHVybiBcIlRoZSBzaGlwIGhhcyBiZWVuIGhpdFwiO1xyXG4gIH0sXHJcbiAgaXNTdW5rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFwiT2ggdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIG5vdCBiZWVuIHN1bmsgeWV0XCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XHJcbiAgbGV0IFNoaXBMZW5ndGggPSBsZW5ndGg7XHJcbiAgbGV0IFNoaXBPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kc09iaiksIHtcclxuICAgIGxlbmd0aCxcclxuICAgIFNoaXBMZW5ndGgsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIFNoaXBPYmo7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNoaXAgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2FtZUxvb3AgZnJvbSBcIi4vZ2FtZUxvb3BcIjtcclxuaW1wb3J0IENyZWF0ZU5hdiBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZU5hdlwiO1xyXG5pbXBvcnQgU3RhcnRHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhcnRHYW1lXCI7XHJcblxyXG5DcmVhdGVOYXYoKTtcclxuXHJcblN0YXJ0R2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=