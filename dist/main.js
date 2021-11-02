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

function CreateGrid(params, Board) {
  let gameDiv = document.querySelector(".BlocksContainer");
  if (gameDiv === null) {
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("class", "BlocksContainer");
    let OuterContainer = document.querySelector(".OuterContainer");
    OuterContainer.appendChild(gameDiv);
  }
  const Container = document.createElement("div");
  Container.setAttribute("class", "container");
  Container.setAttribute("id", `${Board}`);

  Container.style.width = "100%";
  gameDiv.appendChild(Container);
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
    Board1AttackedObj = boards.PlayerTwo.AttackBoard(row1, column1);

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
  let restartBtnContainer = document.querySelector(".Restart");
  outerContainer.removeChild(BlocksContainer);
  outerContainer.removeChild(restartBtnContainer);
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
/* harmony import */ var _startMainGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startMainGame */ "./src/components/startMainGame.js");


function StartGameAfterPlacement(length, shipsCoordinatesArr, PlayerOne) {
  if (length < 6) {
    alert("Please place all the ships");
  } else {
    let btnCont = document.querySelector(".BtnCont");
    let gridContainer = document.querySelector(".BlocksContainer");
    btnCont.parentElement.removeChild(btnCont);
    gridContainer.parentElement.removeChild(gridContainer);

    return (0,_startMainGame__WEBPACK_IMPORTED_MODULE_0__.default)(shipsCoordinatesArr, PlayerOne);
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

/***/ "./src/components/checkUnique.js":
/*!***************************************!*\
  !*** ./src/components/checkUnique.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let checkArr = [];

function CheckUnique(arr) {
  let FilteredArr = checkArr.filter((e) => {
    return e[0] === arr[0] && e[1] === arr[1];
  });
  if (FilteredArr.length === 0) {
    checkArr.push(arr);
    console.log("The coordinates are unique");
    return arr;
  } else {
    let row = Math.floor(10 * Math.random());
    let column = Math.floor(10 * Math.random());
    arr = [row, column];
    let elseVal = CheckUnique(arr);
    console.log("The number was not unique and a new number is returned");
    return elseVal;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckUnique);


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
    return "Board1 has lost the game";
  } else if (
    props.ifAllShipsB2 === "All the ships are sunk" &&
    props.ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (props.ifAllShipsB2 === "All the ships are sunk") {
    return "Board 2 has lost the game";
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
/* harmony import */ var _checkUnique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkUnique */ "./src/components/checkUnique.js");
/* harmony import */ var _PlayersAttackShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayersAttackShip */ "./src/components/PlayersAttackShip.js");




function getWinnerResult(element2, boards) {
  let CoordinatesOneArr = getUniqueNumber();

  let dataShip2Row = element2.getAttribute("data-row");
  let dataShip2Column = element2.getAttribute("data-column");
  let CoordinatesTwoArr = [dataShip2Row, dataShip2Column];
  let BothShipConditions = (0,_PlayersAttackShip__WEBPACK_IMPORTED_MODULE_2__.default)(
    boards,
    CoordinatesOneArr,
    CoordinatesTwoArr
  );

  let whoWon = (0,_checkWhoWon__WEBPACK_IMPORTED_MODULE_0__.default)(BothShipConditions);
  return whoWon;
}

function getUniqueNumber() {
  let row = Math.floor(10 * Math.random());
  let column = Math.floor(10 * Math.random());
  let CoordinatesArr = [row, column];
  CoordinatesArr = (0,_checkUnique__WEBPACK_IMPORTED_MODULE_1__.default)(CoordinatesArr);
  return CoordinatesArr;
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

/***/ "./src/components/startMainGame.js":
/*!*****************************************!*\
  !*** ./src/components/startMainGame.js ***!
  \*****************************************/
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






function startMainGame(arr, name) {
  let newBoard1 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(10);
  let newBoard2 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(10);
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_3__.default)(10, "Board1");
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_3__.default)(10, "Board2");

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
  restBtn.textContent = "Restart";
  restBtnDiv.appendChild(restBtn);
  console.log(newBoard1.boardBlocks);
  console.log(newBoard2.boardBlocks);
  document.querySelector(".OuterContainer").appendChild(restBtnDiv);
  let PlayerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_4__.default)(name, newBoard2);
  let PlayerTwo = (0,_Player__WEBPACK_IMPORTED_MODULE_4__.default)("AI", newBoard1);

  return { newBoard1, newBoard2, PlayerOne, PlayerTwo };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startMainGame);


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
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateGrid */ "./src/CreateGrid.js");
/* harmony import */ var _PlaceAtPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceAtPosition */ "./src/PlaceAtPosition.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");




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

    let newShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.ship)(shipLength);
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
        shipCoordinatesArr = [];
        btnCheck = true;
        console.log("works");
        let dummyBoardObj = (0,_components_RestartGame__WEBPACK_IMPORTED_MODULE_7__.default)();
        dummyBoard = dummyBoardObj.dummyBoard;
        PlayerOne = dummyBoardObj.name;
      }
      if (e.target.parentNode.parentNode?.id === "Board2") {
        let element2 = e.target;
        let whoWon = (0,_components_getWinnerResult__WEBPACK_IMPORTED_MODULE_6__.default)(element2, boardsObj);
        console.log(whoWon);
        if (whoWon !== "No board has won the game yet") {
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
  let arr = [];
  let ShipObj = Object.assign(Object.create(methodsObj), {
    length,
    ShipLength,
    arr,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUN6QmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNhO0FBQ0E7O0FBRS9DLDhEQUFTOztBQUVULDhEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL1BsYWNlQXRQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL0NoYW5nZUNvbG9yQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL1BsYWNlU2hpcHNPbkJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL1BsYXllcnNBdHRhY2tTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXdTaGlwc09uSG92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUmVzdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvU3RhcnRHYW1lQWZ0ZXJTaGlwUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NoYW5nZUFyckJhY2tncm91bmRDb2xvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9jaGVja1VuaXF1ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9jaGVja1dob1dvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOYXYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2V0V2lubmVyUmVzdWx0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3BsYWNlQWxsU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3N0YXJ0TWFpbkdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3VibWl0QW5kU3RhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvdmFsaWRQbGFjZW1lbnRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcbmZ1bmN0aW9uIENyZWF0ZUdyaWQocGFyYW1zLCBCb2FyZCkge1xuICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xuICBpZiAoZ2FtZURpdiA9PT0gbnVsbCkge1xuICAgIGdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJCbG9ja3NDb250YWluZXJcIik7XG4gICAgbGV0IE91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgICBPdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lRGl2KTtcbiAgfVxuICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gIENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtCb2FyZH1gKTtcblxuICBDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgZ2FtZURpdi5hcHBlbmRDaGlsZChDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtczsgaSsrKSB7XG4gICAgY29uc3QgSW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBJbmREaXYuY2xhc3NMaXN0LmFkZChcIlJvd1wiKTtcbiAgICBJbmREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYFJvdyR7aX1gKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcmFtczsgaisrKSB7XG4gICAgICBsZXQgaW5kaUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGluZGlCbG9jay5jbGFzc0xpc3QuYWRkKFwiYm94LWl0ZW1zXCIpO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGkpO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIsIGopO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIiwgYCR7aX0ke2p9YCk7XG4gICAgICBpbmRpQmxvY2suc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Qm9hcmR9JHtpfSR7an1gKTtcbiAgICAgIGluZGlCbG9jay5zdHlsZS5ib3JkZXIgPSBgMnB4IHNvbGlkICR7Q29sb3JzLmRhcmtHcmVlbn1gO1xuICAgICAgSW5kRGl2LmFwcGVuZENoaWxkKGluZGlCbG9jayk7XG4gICAgfVxuXG4gICAgQ29udGFpbmVyLmFwcGVuZENoaWxkKEluZERpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlR3JpZDtcbiIsImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcblxuZnVuY3Rpb24gUGxhY2VBdFBvc2l0aW9uKFxuICByb3csXG4gIGNvbHVtbixcbiAgc2hpcExlbmd0aCxcbiAgYXhpc0RlY2lkZXIsXG4gIEJvYXJkSWQgPSBcIkR1bW15Qm9hcmRcIlxuKSB7XG4gIGxldCBzaGlwQ291bnQgPSAwO1xuICBsZXQgYXJyVG9Bdm9pZCA9IFtdO1xuICB3aGlsZSAoc2hpcENvdW50IDwgc2hpcExlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKHJvdywgY29sdW1uLCBCb2FyZElkKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2Ygcm93LCB0eXBlb2YgY29sdW1uKTtcbiAgICBsZXQgZWxlbWVudFRvQmVIaWdsaWdodGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtCb2FyZElkfSR7cm93fSR7Y29sdW1ufWBcbiAgICApO1xuXG4gICAgYXJyVG9Bdm9pZCA9IFsuLi5hcnJUb0F2b2lkLCBlbGVtZW50VG9CZUhpZ2xpZ2h0ZWRdO1xuICAgIGlmIChCb2FyZElkICE9PSBcIkJvYXJkMlwiKSB7XG4gICAgICBlbGVtZW50VG9CZUhpZ2xpZ2h0ZWQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLmdyZWVuO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50VG9CZUhpZ2xpZ2h0ZWQpO1xuICAgIH1cblxuICAgIGlmIChheGlzRGVjaWRlcikge1xuICAgICAgY29sdW1uKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdysrO1xuICAgIH1cbiAgICBzaGlwQ291bnQrKztcbiAgfVxuICByZXR1cm4gYXJyVG9Bdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VBdFBvc2l0aW9uO1xuIiwiY29uc3QgbWV0aG9kc09iaiA9IHtcbiAgQXR0YWNrQm9hcmQ6IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xuICAgIGxldCBTaGlwSGl0ID0gdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgbGV0IElmU2hpcHNTdW5rID0gdGhpcy5nYW1lQm9hcmQuQWxsU2hpcHNTdW5rKCk7XG4gICAgcmV0dXJuIHsgU2hpcEhpdCwgSWZTaGlwc1N1bmsgfTtcbiAgfSxcbiAgZ2V0TmFtZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgZ2FtZUJvYXJkKSB7XG4gIGxldCBQbGF5ZXJPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kc09iaiksIHtcbiAgICBuYW1lLFxuICAgIGdhbWVCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIFBsYXllck9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcbmZ1bmN0aW9uIENvbG9yQ2hhbmdlKFxuICBCb2FyZDJDb25kLFxuICBCb2FyZDFDb25kLFxuICBDb29yZGluYXRlc09uZUFycixcbiAgQ29vcmRpbmF0ZXNUd29BcnJcbikge1xuICBsZXQgW3JvdzEsIGNvbHVtbjFdID0gQ29vcmRpbmF0ZXNPbmVBcnI7XG4gIGxldCBbcm93MiwgY29sdW1uMl0gPSBDb29yZGluYXRlc1R3b0FycjtcbiAgbGV0IGVsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQm9hcmQyJHtyb3cyfSR7Y29sdW1uMn1gKTtcbiAgbGV0IGVsZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQm9hcmQxJHtyb3cxfSR7Y29sdW1uMX1gKTtcbiAgaWYgKEJvYXJkMkNvbmQgPT09IFwib29wcyB5b3UgbWlzc2VkIHRoZSBzaGlwXCIpIHtcbiAgICBlbGUyLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5ncmF5O1xuICB9IGVsc2Uge1xuICAgIGVsZTIuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLnJlZDtcbiAgfVxuXG4gIGlmIChCb2FyZDFDb25kID09PSBcIm9vcHMgeW91IG1pc3NlZCB0aGUgc2hpcFwiKSB7XG4gICAgZWxlMS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMuZ3JheTtcbiAgfSBlbHNlIHtcbiAgICBlbGUxLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5yZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JDaGFuZ2U7XG4iLCJjb25zdCBDb2xvcnMgPSB7XG4gIGdyZWVuOiBcIiM2ZWViNWVcIixcbiAgcmVkOiBcIiNkZTUyNGVcIixcbiAgZ3JheTogXCIjOTQ5MDhmXCIsXG4gIHdoaXRlOiBcIndoaXRlXCIsXG4gIGRhcmtHcmVlbjogXCIjNDA5MTZjXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG4iLCJpbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi4vQ3JlYXRlR3JpZFwiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4uL2dhbWVCb2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gUGxhY2VTaGlwc09uQm9hcmQobmFtZSkge1xuICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IFN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gYFBsZWFzZSAke25hbWV9IHBsYWNlIHlvdXIgc2hpcHNgO1xuICBidG5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJCdG5Db250XCIpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXhpc0J0blwiKTtcbiAgU3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViQnRuXCIpO1xuICBTdWJCdG4udGV4dENvbnRlbnQgPSBcIlNVQk1JVFwiO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlgtQVhJU1wiO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoU3ViQnRuKTtcbiAgbGV0IE91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgT3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICBsZXQgZHVtbXlCb2FyZCA9IGdhbWVCb2FyZCgxMCwgXCJEdW1teUJvYXJkXCIpO1xuICBDcmVhdGVHcmlkKDEwLCBcIkR1bW15Qm9hcmRcIik7XG5cbiAgcmV0dXJuIHsgZHVtbXlCb2FyZCwgbmFtZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZVNoaXBzT25Cb2FyZDtcbiIsImltcG9ydCBDb2xvckNoYW5nZSBmcm9tIFwiLi9DaGFuZ2VDb2xvckJvYXJkXCI7XG5mdW5jdGlvbiBQbGF5ZXJzQXR0YWNrU2hpcChib2FyZHMsIENvb3JkaW5hdGVzT25lQXJyLCBDb29yZGluYXRlc1R3b0Fycikge1xuICBsZXQgW3JvdzEsIGNvbHVtbjFdID0gQ29vcmRpbmF0ZXNPbmVBcnI7XG4gIGxldCBbcm93MiwgY29sdW1uMl0gPSBDb29yZGluYXRlc1R3b0FycjtcblxuICBsZXQgQm9hcmQyQXR0YWNrZWRPYmogPSBib2FyZHMuUGxheWVyT25lLkF0dGFja0JvYXJkKHJvdzIsIGNvbHVtbjIpO1xuICBsZXQgQm9hcmQxQXR0YWNrZWRPYmogPSB7fTtcbiAgaWYgKEJvYXJkMkF0dGFja2VkT2JqLlNoaXBIaXQgIT09IFwiVGhlIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBoaXRcIikge1xuICAgIEJvYXJkMUF0dGFja2VkT2JqID0gYm9hcmRzLlBsYXllclR3by5BdHRhY2tCb2FyZChyb3cxLCBjb2x1bW4xKTtcblxuICAgIENvbG9yQ2hhbmdlKFxuICAgICAgQm9hcmQyQXR0YWNrZWRPYmouU2hpcEhpdCxcbiAgICAgIEJvYXJkMUF0dGFja2VkT2JqLlNoaXBIaXQsXG4gICAgICBDb29yZGluYXRlc09uZUFycixcbiAgICAgIENvb3JkaW5hdGVzVHdvQXJyXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIlN0b3BwZWQgYWkgZnJvbSBtYWtpbmcgdGhlIG1vdmVcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlmQWxsU2hpcHNCMTogQm9hcmQxQXR0YWNrZWRPYmouSWZTaGlwc1N1bmssXG4gICAgaWZBbGxTaGlwc0IyOiBCb2FyZDJBdHRhY2tlZE9iai5JZlNoaXBzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyc0F0dGFja1NoaXA7XG4iLCJpbXBvcnQgQ29sb3JzIGZyb20gXCIuL0NvbG9yc1wiO1xuZnVuY3Rpb24gUHJldmlld1NoaXBzT25Ib3ZlcihlLCBzaGlwQ291bnQsIGFyciwgYXJyUmVkLCBidG4pIHtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG5cbiAgbGV0IHJvdyA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gIGxldCBjb2x1bW4gPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpO1xuXG4gIC8vQ2FsY3VsYXRpbmcgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGluIHRoZSByb3cuIFRoZSB0b3RhbCBzaG91bGQgYWx3YXlzIGJlIGxlc3NlciBvciBlcXVhbCB0byBlbmRWYWwgdG8gYmUgcGxhY2VkLlxuXG4gIHdoaWxlIChqIDwgc2hpcENvdW50IC0gMSkge1xuICAgIGlmIChidG4pIHtcbiAgICAgIGNvbHVtbisrO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3crKztcbiAgICB9XG4gICAgaisrO1xuICB9XG5cbiAgd2hpbGUgKGkgPCBzaGlwQ291bnQpIHtcbiAgICBpZiAoKGJ0biAmJiBjb2x1bW4gPD0gOSkgfHwgKCFidG4gJiYgcm93IDw9IDkpKSB7XG4gICAgICBlLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5ncmVlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMucmVkO1xuICAgICAgYXJyUmVkLnB1c2goZSk7XG4gICAgfVxuXG4gICAgYXJyLnB1c2goZSk7XG4gICAgaWYgKGJ0biAmJiBlLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpIDwgOSkge1xuICAgICAgZSA9IGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH0gZWxzZSBpZiAoIWJ0biAmJiBlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpIDwgOSkge1xuICAgICAgbGV0IHJvd0NvbG9yID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICAgIGxldCBjb2x1bW5Db2xvciA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XG5cbiAgICAgIHJvd0NvbG9yKys7XG4gICAgICBsZXQgbmV4dEVsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtQ29vcmRpbmF0ZXMgPSBcIiR7cm93Q29sb3J9JHtjb2x1bW5Db2xvcn1cIl1gXG4gICAgICApO1xuICAgICAgZSA9IG5leHRFbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJEbyBub3QgdXBkYXRlXCIpO1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3U2hpcHNPbkhvdmVyO1xuIiwiaW1wb3J0IFBsYWNlU2hpcHNPbkJvYXJkIGZyb20gXCIuL1BsYWNlU2hpcHNPbkJvYXJkXCI7XG5mdW5jdGlvbiBSZXN0YXJ0R2FtZSgpIHtcbiAgbGV0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgbGV0IEJsb2Nrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xuICBsZXQgcmVzdGFydEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUmVzdGFydFwiKTtcbiAgb3V0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoQmxvY2tzQ29udGFpbmVyKTtcbiAgb3V0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQocmVzdGFydEJ0bkNvbnRhaW5lcik7XG4gIGxldCBkdW1teUJvYXJkID0gUGxhY2VTaGlwc09uQm9hcmQoXCJSb2hhblwiKTtcbiAgcmV0dXJuIGR1bW15Qm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhcnRHYW1lO1xuIiwiaW1wb3J0IHN0YXJ0TWFpbkdhbWUgZnJvbSBcIi4vc3RhcnRNYWluR2FtZVwiO1xuXG5mdW5jdGlvbiBTdGFydEdhbWVBZnRlclBsYWNlbWVudChsZW5ndGgsIHNoaXBzQ29vcmRpbmF0ZXNBcnIsIFBsYXllck9uZSkge1xuICBpZiAobGVuZ3RoIDwgNikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIHBsYWNlIGFsbCB0aGUgc2hpcHNcIik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGJ0bkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkJ0bkNvbnRcIik7XG4gICAgbGV0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkJsb2Nrc0NvbnRhaW5lclwiKTtcbiAgICBidG5Db250LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYnRuQ29udCk7XG4gICAgZ3JpZENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdyaWRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHN0YXJ0TWFpbkdhbWUoc2hpcHNDb29yZGluYXRlc0FyciwgUGxheWVyT25lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydEdhbWVBZnRlclBsYWNlbWVudDtcbiIsIi8vIGl0ZXJhdGUgb3ZlciBhbiBhcnJheSBhbmQgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGl0LlxuZnVuY3Rpb24gY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yKGFyciwgY29sb3IpIHtcbiAgYXJyLmZvckVhY2goKGUpID0+IHtcbiAgICBlLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IGAke2NvbG9yfWA7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3I7XG4iLCJsZXQgY2hlY2tBcnIgPSBbXTtcblxuZnVuY3Rpb24gQ2hlY2tVbmlxdWUoYXJyKSB7XG4gIGxldCBGaWx0ZXJlZEFyciA9IGNoZWNrQXJyLmZpbHRlcigoZSkgPT4ge1xuICAgIHJldHVybiBlWzBdID09PSBhcnJbMF0gJiYgZVsxXSA9PT0gYXJyWzFdO1xuICB9KTtcbiAgaWYgKEZpbHRlcmVkQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIGNoZWNrQXJyLnB1c2goYXJyKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjb29yZGluYXRlcyBhcmUgdW5pcXVlXCIpO1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoMTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcigxMCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIGFyciA9IFtyb3csIGNvbHVtbl07XG4gICAgbGV0IGVsc2VWYWwgPSBDaGVja1VuaXF1ZShhcnIpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIG51bWJlciB3YXMgbm90IHVuaXF1ZSBhbmQgYSBuZXcgbnVtYmVyIGlzIHJldHVybmVkXCIpO1xuICAgIHJldHVybiBlbHNlVmFsO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja1VuaXF1ZTtcbiIsImZ1bmN0aW9uIGNoZWNrV2hvV29uKHByb3BzKSB7XG4gIGlmIChwcm9wcy5pZkFsbFNoaXBzQjEgPT09IFwiQWxsIHRoZSBzaGlwcyBhcmUgc3Vua1wiKSB7XG4gICAgcmV0dXJuIFwiQm9hcmQxIGhhcyBsb3N0IHRoZSBnYW1lXCI7XG4gIH0gZWxzZSBpZiAoXG4gICAgcHJvcHMuaWZBbGxTaGlwc0IyID09PSBcIkFsbCB0aGUgc2hpcHMgYXJlIHN1bmtcIiAmJlxuICAgIHByb3BzLmlmQWxsU2hpcHNCMSA9PT0gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCJcbiAgKSB7XG4gICAgcmV0dXJuIFwiVGhlIGdhbWUgaGFzIHRpZWRcIjtcbiAgfSBlbHNlIGlmIChwcm9wcy5pZkFsbFNoaXBzQjIgPT09IFwiQWxsIHRoZSBzaGlwcyBhcmUgc3Vua1wiKSB7XG4gICAgcmV0dXJuIFwiQm9hcmQgMiBoYXMgbG9zdCB0aGUgZ2FtZVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIk5vIGJvYXJkIGhhcyB3b24gdGhlIGdhbWUgeWV0XCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tXaG9Xb247XG4iLCJpbXBvcnQgZWxlbWVudENyZWF0b3IgZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmxldCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbmZ1bmN0aW9uIENyZWF0ZU5hdigpIHtcbiAgbGV0IG5hdiA9IGVsZW1lbnRDcmVhdG9yKFwibmF2XCIsIHsgY2xhc3NOYW1lOiBcIm5hdkNvbnRhaW5lclwiIH0pO1xuICBsZXQgSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICBuYXYuYXBwZW5kQ2hpbGQoSGVhZGluZyk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobmF2KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU5hdjtcbiIsImZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKHR5cGUsIHByb3BlcnRpZXMpIHtcbiAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IHByb3AgaW4gcHJvcGVydGllcykge1xuICAgIGVsZVtwcm9wXSA9IHByb3BlcnRpZXNbcHJvcF07XG4gIH1cbiAgcmV0dXJuIGVsZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRDcmVhdG9yO1xuIiwiaW1wb3J0IGNoZWNrV2hvV29uIGZyb20gXCIuL2NoZWNrV2hvV29uXCI7XG5pbXBvcnQgQ2hlY2tVbmlxdWUgZnJvbSBcIi4vY2hlY2tVbmlxdWVcIjtcbmltcG9ydCBQbGF5ZXJzQXR0YWNrU2hpcCBmcm9tIFwiLi9QbGF5ZXJzQXR0YWNrU2hpcFwiO1xuXG5mdW5jdGlvbiBnZXRXaW5uZXJSZXN1bHQoZWxlbWVudDIsIGJvYXJkcykge1xuICBsZXQgQ29vcmRpbmF0ZXNPbmVBcnIgPSBnZXRVbmlxdWVOdW1iZXIoKTtcblxuICBsZXQgZGF0YVNoaXAyUm93ID0gZWxlbWVudDIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gIGxldCBkYXRhU2hpcDJDb2x1bW4gPSBlbGVtZW50Mi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKTtcbiAgbGV0IENvb3JkaW5hdGVzVHdvQXJyID0gW2RhdGFTaGlwMlJvdywgZGF0YVNoaXAyQ29sdW1uXTtcbiAgbGV0IEJvdGhTaGlwQ29uZGl0aW9ucyA9IFBsYXllcnNBdHRhY2tTaGlwKFxuICAgIGJvYXJkcyxcbiAgICBDb29yZGluYXRlc09uZUFycixcbiAgICBDb29yZGluYXRlc1R3b0FyclxuICApO1xuXG4gIGxldCB3aG9Xb24gPSBjaGVja1dob1dvbihCb3RoU2hpcENvbmRpdGlvbnMpO1xuICByZXR1cm4gd2hvV29uO1xufVxuXG5mdW5jdGlvbiBnZXRVbmlxdWVOdW1iZXIoKSB7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKDEwICogTWF0aC5yYW5kb20oKSk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKDEwICogTWF0aC5yYW5kb20oKSk7XG4gIGxldCBDb29yZGluYXRlc0FyciA9IFtyb3csIGNvbHVtbl07XG4gIENvb3JkaW5hdGVzQXJyID0gQ2hlY2tVbmlxdWUoQ29vcmRpbmF0ZXNBcnIpO1xuICByZXR1cm4gQ29vcmRpbmF0ZXNBcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbm5lclJlc3VsdDtcbiIsImltcG9ydCBQbGFjZUF0UG9zaXRpb24gZnJvbSBcIi4uL1BsYWNlQXRQb3NpdGlvblwiO1xuXG5mdW5jdGlvbiBQbGFjZUFsbFNoaXBzKEJvYXJkLCBzaGlwc0FyciwgQm9hcmRJZCkge1xuICBzaGlwc0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgQm9hcmQucGxhY2VTaGlwKGUucm93LCBlLmNvbHVtbiwgZS5sZW5ndGgsIGUuYXhpc0RlY2lkZXIpO1xuICAgIFBsYWNlQXRQb3NpdGlvbihlLnJvdywgZS5jb2x1bW4sIGUubGVuZ3RoLCBlLmF4aXNEZWNpZGVyLCBCb2FyZElkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlQWxsU2hpcHM7XG4iLCJpbXBvcnQgZWxlbWVudENyZWF0b3IgZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmxldCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbmxldCBDbGlja0J1dHRvbiA9IG51bGw7XG5mdW5jdGlvbiBTdGFydEdhbWUoKSB7XG4gIGxldCBHYW1lRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwgeyBpZDogXCJnYW1lQ29udGFpbmVyXCIgfSk7XG4gIEdhbWVEaXYuaW5uZXJIVE1MID0gYDxsYWJlbCBmb3I9XCJOYW1lXCI+RW50ZXIgeW91ciBOYW1lPC9sYWJlbD5cbiAgICA8YnI+XG4gICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHZhbHVlPVwiXCI+XG4gICAgIDxicj5cbiAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdEJ1dHRvblwiPlBMQVk8L2J1dHRvbj5cbiAgICBgO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKEdhbWVEaXYpO1xuICBDbGlja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnV0dG9uXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgU3RhcnRHYW1lO1xuIiwiaW1wb3J0IFBsYWNlQWxsU2hpcHMgZnJvbSBcIi4vcGxhY2VBbGxTaGlwc1wiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4uL2dhbWVCb2FyZEZhY3RvcnlcIjtcbmltcG9ydCBlbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IENyZWF0ZUdyaWQgZnJvbSBcIi4uL0NyZWF0ZUdyaWRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xuXG5mdW5jdGlvbiBzdGFydE1haW5HYW1lKGFyciwgbmFtZSkge1xuICBsZXQgbmV3Qm9hcmQxID0gZ2FtZUJvYXJkKDEwKTtcbiAgbGV0IG5ld0JvYXJkMiA9IGdhbWVCb2FyZCgxMCk7XG4gIENyZWF0ZUdyaWQoMTAsIFwiQm9hcmQxXCIpO1xuICBDcmVhdGVHcmlkKDEwLCBcIkJvYXJkMlwiKTtcblxuICBQbGFjZUFsbFNoaXBzKG5ld0JvYXJkMSwgYXJyLCBcIkJvYXJkMVwiKTtcblxuICBQbGFjZUFsbFNoaXBzKFxuICAgIG5ld0JvYXJkMixcbiAgICBbXG4gICAgICB7IHJvdzogMSwgY29sdW1uOiAyLCBsZW5ndGg6IDEsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogMiwgY29sdW1uOiA3LCBsZW5ndGg6IDIsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogMywgY29sdW1uOiAwLCBsZW5ndGg6IDMsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogOCwgY29sdW1uOiAxLCBsZW5ndGg6IDQsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogNiwgY29sdW1uOiAzLCBsZW5ndGg6IDUsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgXSxcbiAgICBcIkJvYXJkMlwiXG4gICk7XG5cbiAgbGV0IHJlc3RCdG5EaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJSZXN0YXJ0XCIgfSk7XG4gIGxldCByZXN0QnRuID0gZWxlbWVudENyZWF0b3IoXCJidXR0b25cIiwgeyBpZDogXCJSZXN0YXJ0QnRuXCIgfSk7XG4gIHJlc3RCdG4udGV4dENvbnRlbnQgPSBcIlJlc3RhcnRcIjtcbiAgcmVzdEJ0bkRpdi5hcHBlbmRDaGlsZChyZXN0QnRuKTtcbiAgY29uc29sZS5sb2cobmV3Qm9hcmQxLmJvYXJkQmxvY2tzKTtcbiAgY29uc29sZS5sb2cobmV3Qm9hcmQyLmJvYXJkQmxvY2tzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChyZXN0QnRuRGl2KTtcbiAgbGV0IFBsYXllck9uZSA9IFBsYXllcihuYW1lLCBuZXdCb2FyZDIpO1xuICBsZXQgUGxheWVyVHdvID0gUGxheWVyKFwiQUlcIiwgbmV3Qm9hcmQxKTtcblxuICByZXR1cm4geyBuZXdCb2FyZDEsIG5ld0JvYXJkMiwgUGxheWVyT25lLCBQbGF5ZXJUd28gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRNYWluR2FtZTtcbiIsImltcG9ydCBQbGFjZVNoaXBzT25Cb2FyZCBmcm9tIFwiLi9QbGFjZVNoaXBzT25Cb2FyZFwiO1xuXG5mdW5jdGlvbiBzdWJtaXRBbmRTdGFydCgpIHtcbiAgbGV0IElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICBsZXQgbmFtZSA9IElucHV0LnZhbHVlO1xuICBpZiAobmFtZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIHRoZSBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lQ29udGFpbmVyXCIpO1xuICAgIGdhbWVEaXYucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChnYW1lRGl2KTtcbiAgICBsZXQgcmV0dXJuQm9hcmQgPSBQbGFjZVNoaXBzT25Cb2FyZChuYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5Cb2FyZDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgc3VibWl0QW5kU3RhcnQ7XG4iLCJpbXBvcnQgUGxhY2VBdFBvc2l0aW9uIGZyb20gXCIuLi9QbGFjZUF0UG9zaXRpb25cIjtcbmZ1bmN0aW9uIHZhbGlkUGxhY2VtZW50U2hpcCh7XG4gIGVsZW1lbnQsXG4gIGxlbmd0aCxcbiAgQXJyVG9CZUNvcGllZCxcbiAgc2hpcENvb3JkaW5hdGVzQXJyLFxuICBib2FyZCxcbiAgYXhpc0RlY2lkZXIsXG59KSB7XG4gIGxldCByb3cgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICBsZXQgY29sdW1uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKTtcbiAgbGV0IGlmU2hpcENhbkJlUGxhY2VkID0gYm9hcmQuY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQoXG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBsZW5ndGgsXG4gICAgYXhpc0RlY2lkZXJcbiAgKTtcbiAgaWYgKGlmU2hpcENhbkJlUGxhY2VkKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGF4aXNEZWNpZGVyKTtcbiAgICBsZXQgQXJyVG9Bdm9pZEN1cnJlbnQgPSBQbGFjZUF0UG9zaXRpb24ocm93LCBjb2x1bW4sIGxlbmd0aCwgYXhpc0RlY2lkZXIpO1xuICAgIEFyclRvQmVDb3BpZWQgPSBbLi4uQXJyVG9CZUNvcGllZCwgLi4uQXJyVG9Bdm9pZEN1cnJlbnRdO1xuXG4gICAgc2hpcENvb3JkaW5hdGVzQXJyID0gW1xuICAgICAgLi4uc2hpcENvb3JkaW5hdGVzQXJyLFxuICAgICAgeyByb3c6IHJvdywgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCBheGlzRGVjaWRlcjogYXhpc0RlY2lkZXIgfSxcbiAgICBdO1xuICAgIGxlbmd0aCsrO1xuICB9XG4gIHJldHVybiB7IGxlbmd0aCwgQXJyVG9CZUNvcGllZCwgc2hpcENvb3JkaW5hdGVzQXJyIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkUGxhY2VtZW50U2hpcDtcbiIsImltcG9ydCBDcmVhdGVHcmlkIGZyb20gXCIuL0NyZWF0ZUdyaWRcIjtcbmltcG9ydCBQbGFjZUF0UG9zaXRpb24gZnJvbSBcIi4vUGxhY2VBdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY29uc3QgbWV0aG9kT2JqID0ge1xuICBwbGFjZVNoaXA6IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgc2hpcExlbmd0aCwgYXhpc0RlY2lkZXIpIHtcbiAgICB0aGlzLk5vT2ZTaGlwcysrO1xuXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBzaGlwTGVuZ3RoKSB7XG4gICAgICB0aGlzLmJvYXJkQmxvY2tzW3Jvd11bY29sdW1uXSA9IGAke3NoaXBMZW5ndGh9YDtcblxuICAgICAgaWYgKGF4aXNEZWNpZGVyKSB7XG4gICAgICAgIGNvbHVtbisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93Kys7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgbGV0IG5ld1NoaXAgPSBzaGlwKHNoaXBMZW5ndGgpO1xuICAgIHRoaXMuc2hpcHNBcnIucHVzaChuZXdTaGlwKTtcbiAgfSxcbiAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBbcm93LCBjb2x1bW5dO1xuICAgIGxldCBzaGlwTGVuZ3RoID0gdGhpcy5ib2FyZEJsb2Nrc1tyb3ddW2NvbHVtbl07XG4gICAgbGV0IGluZGV4ID0gdGhpcy5Db29yZGluYXRlc0Fyci5maW5kSW5kZXgoKGUpID0+IHtcbiAgICAgIHJldHVybiBlWzBdID09PSBlbGVtZW50WzBdICYmIGVbMV0gPT09IGVsZW1lbnRbMV07XG4gICAgfSk7XG4gICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIGhpdFwiO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xICYmIHNoaXBMZW5ndGggIT0gXCJcIikge1xuICAgICAgdGhpcy5Db29yZGluYXRlc0Fyci5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgICAgZnVuY3Rpb24gRmluZFNoaXAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIoc2hpcExlbmd0aCkgPT09IHBhcmFtcy5TaGlwTGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGV0IFNoaXBJbmRleCA9IHRoaXMuc2hpcHNBcnIuZmluZEluZGV4KEZpbmRTaGlwKTtcbiAgICAgIGxldCB0aGF0U2hpcCA9IHRoaXMuc2hpcHNBcnJbU2hpcEluZGV4XTtcblxuICAgICAgdGhhdFNoaXAuaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkQmxvY2tzW3Jvd11bY29sdW1uXSA9IFwiaGl0XCI7XG4gICAgICBsZXQgc2hpcENvbmRpdGlvbiA9IHRoYXRTaGlwLmlzU3VuaygpO1xuICAgICAgaWYgKHNoaXBDb25kaXRpb24gPT09IFwiT2ggdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1wiKSB7XG4gICAgICAgIHRoaXMuU2hpcHNTdW5rQXJyLnB1c2godGhhdFNoaXApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgYmVlbiBoaXQgYW5kIGNvb3JkaW5hdGVzIGhhdmUgYmVlbiBub3RlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLkNvb3JkaW5hdGVzQXJyLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICByZXR1cm4gXCJvb3BzIHlvdSBtaXNzZWQgdGhlIHNoaXBcIjtcbiAgICB9XG4gIH0sXG4gIEFsbFNoaXBzU3VuazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLlNoaXBzU3Vua0Fyci5sZW5ndGggPT09IHRoaXMuTm9PZlNoaXBzKSB7XG4gICAgICByZXR1cm4gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIkFsbCB0aGUgc2hpcHMgaGF2ZSBub3QgYmVlbiBzdW5rIHlldFwiO1xuICAgIH1cbiAgfSxcbiAgY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQ6IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgc2hpcExlbmd0aCwgYXhpc0RlY2lkZXIpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IEFyclRvQmVDaGVja2VkID0gW107XG4gICAgd2hpbGUgKGkgPCBzaGlwTGVuZ3RoKSB7XG4gICAgICBBcnJUb0JlQ2hlY2tlZC5wdXNoKFtOdW1iZXIocm93KSwgTnVtYmVyKGNvbHVtbildKTtcbiAgICAgIGlmIChheGlzRGVjaWRlcikge1xuICAgICAgICBjb2x1bW4rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdysrO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChheGlzRGVjaWRlcikge1xuICAgICAgLy9SZXZlcnRpbmcgYmFjayB0byBjb3JyZWN0IGNvb3JkaW5hdGVzXG4gICAgICBjb2x1bW4gPSBjb2x1bW4gLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3cgPSByb3cgLSAxO1xuICAgIH1cblxuICAgIGxldCBGaWx0ZXJlZEFyciA9IFtdO1xuICAgIGlmICh0aGlzLnNoaXBzUGxhY2VkQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiU2hpcCBmb3IgdGhlIGZpcnN0IGl0ZXJhdGlvbiBhcyB0aGVyZSB3aWxsIGJlIG5vIG92ZXJsYXBwaW5nXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b0NoZWNrQXJyID0gW107XG4gICAgICBBcnJUb0JlQ2hlY2tlZC5mb3JFYWNoKChhcnJheUVsZW1lbnQpID0+IHtcbiAgICAgICAgLy9bWzEsMiwzXSxbNCw1XV0gaW5pdGlhbCBhcnJheVxuICAgICAgICB0aGlzLnNoaXBzUGxhY2VkQXJyLmZvckVhY2goKGluZGlBcnIpID0+IHtcbiAgICAgICAgICAvLyBBcnJheSB0byBiZSBjaGVja2VkIGZyb20uXG4gICAgICAgICAgaW5kaUFyci5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlID09PSBhcnJheUVsZW1lbnRbaW5kZXhdKSB0b0NoZWNrQXJyLnB1c2goZWxlKTsgLy9jaGVja2luZyBldmVyeSBlbGVtZW50IG9mIHNoaXBzUGxhY2VkQXJyIHdpdGggYXJyYXlFbGVtZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRvQ2hlY2tBcnIubGVuZ3RoID09PSBhcnJheUVsZW1lbnQubGVuZ3RoKVxuICAgICAgICAgICAgRmlsdGVyZWRBcnIucHVzaCh0b0NoZWNrQXJyKTtcblxuICAgICAgICAgIHRvQ2hlY2tBcnIgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBDb25kaXRpb25zIHdoZXJlIHNoaXBzIGNhbm5vdCBiZSBwbGFjZWQgaWYgdGhlIHJvd3MgbnVtYmVyIGlzIHVuZGVmaW5lZCBlZyAtIHhDb2wgPSA0IGJ1dCB0aGVyZSBhcmUgb25seSB0aHJlZSByb3dzIGRlZmluZWQuXG4gICAgb3IgU2hpcHMgYXJlIG92ZXJsYXBwaW5nIGluIHRoaXMgY2FzZWQgdGhlIGZpbHRlcmVkIGFycmF5IHdvdWxkIGJlIGZpbGxlZC5cbiAgICBvciBjb25kaXRpb24gd2hlcmUgdGhlIHNoaXBzIGluIGhvcml6b250YWwgY29uZGl0aW9uIGNhbm5vdCBiZSBwbGFjZWQgYm9hcmRCbG9ja3NbMF1bMTBdLiBCdXQgaXQgd2lsbCBiZSB1bmRlZmluZWQgYXMgdGhlcmUgYXJlIG9ubHkgOSBjb2x1bW5zLlxuICAgICovXG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmJvYXJkQmxvY2tzW3Jvd10gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgRmlsdGVyZWRBcnIubGVuZ3RoICE9PSAwIHx8XG4gICAgICB0aGlzLmJvYXJkQmxvY2tzW3Jvd11bY29sdW1uXSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaGlwc1BsYWNlZEFyciA9IFsuLi50aGlzLnNoaXBzUGxhY2VkQXJyLCAuLi5BcnJUb0JlQ2hlY2tlZF07XG4gICAgY29uc29sZS5sb2codGhpcy5zaGlwc1BsYWNlZEFycik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGdldEJvYXJkOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRCbG9ja3M7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnYW1lQm9hcmQobGVuZ3RoKSB7XG4gIGxldCBzaGlwc0FyciA9IFtdO1xuICBsZXQgQ29vcmRpbmF0ZXNBcnIgPSBbXTtcbiAgbGV0IE5vT2ZTaGlwcyA9IDA7XG4gIGxldCBTaGlwc1N1bmtBcnIgPSBbXTtcbiAgbGV0IHNoaXBzUGxhY2VkQXJyID0gW107XG4gIGxldCBib2FyZEJsb2NrcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGxlbmd0aCB9LCAoZSkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpO1xuICBsZXQgZ2FtZUJvYXJkT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG1ldGhvZE9iaiksIHtcbiAgICBzaGlwc0FycixcbiAgICBDb29yZGluYXRlc0FycixcbiAgICBOb09mU2hpcHMsXG4gICAgU2hpcHNTdW5rQXJyLFxuICAgIGJvYXJkQmxvY2tzLFxuICAgIHNoaXBzUGxhY2VkQXJyLFxuICB9KTtcbiAgcmV0dXJuIGdhbWVCb2FyZE9iajtcbn1cblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgc3VibWl0QW5kU3RhcnQgZnJvbSBcIi4vY29tcG9uZW50cy9zdWJtaXRBbmRTdGFydFwiO1xuXG5pbXBvcnQgUHJldmlld1NoaXBzT25Ib3ZlciBmcm9tIFwiLi9jb21wb25lbnRzL1ByZXZpZXdTaGlwc09uSG92ZXJcIjtcbmltcG9ydCBjaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3IgZnJvbSBcIi4vY29tcG9uZW50cy9jaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3JcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcbmltcG9ydCB2YWxpZFBsYWNlbWVudFNoaXAgZnJvbSBcIi4vY29tcG9uZW50cy92YWxpZFBsYWNlbWVudFNoaXBcIjtcbmltcG9ydCBTdGFydEdhbWVBZnRlclBsYWNlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL1N0YXJ0R2FtZUFmdGVyU2hpcFBsYWNlbWVudFwiO1xuaW1wb3J0IGdldFdpbm5lclJlc3VsdCBmcm9tIFwiLi9jb21wb25lbnRzL2dldFdpbm5lclJlc3VsdFwiO1xuaW1wb3J0IFJlc3RhcnRHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvUmVzdGFydEdhbWVcIjtcbmxldCBnYW1lTG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZHNPYmo7XG4gIGxldCBkdW1teUJvYXJkO1xuICBsZXQgU2hpcENvdW50ID0gMTtcbiAgbGV0IEhvdmVyZWRBcnIgPSBbXTtcbiAgbGV0IGFyclRvQXZvaWQgPSBbXTtcbiAgbGV0IGFyckJsb2Nrc1JlZCA9IFtdO1xuICBsZXQgc2hpcENvb3JkaW5hdGVzQXJyID0gW107XG4gIGxldCBidG5DaGVjayA9IHRydWU7XG4gIGxldCBQbGF5ZXJPbmUgPSBcIlwiO1xuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gTGlzdGVuaW5nIHRvIG1vdXNlb3ZlciBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU/LmlkID09PSBcIkR1bW15Qm9hcmRcIikge1xuICAgICAgY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yKEhvdmVyZWRBcnIsIENvbG9ycy53aGl0ZSk7XG5cbiAgICAgIGNoYW5nZUFyckJhY2tncm91bmRDb2xvcihhcnJUb0F2b2lkLCBDb2xvcnMuZ3JlZW4pO1xuICAgICAgLy8gRW1wdGllZCB0aGUgYXJyYXkgdG8gYWRkIG9ubHkgdGhvc2UgZWxlbWVudHMgaW4gXCJhcnJUb0F2b2lkXCIgdGhhdCBoYWQgQmFjay1jb2xvciBncmVlbi5cbiAgICAgIEhvdmVyZWRBcnIgPSBbXTtcbiAgICAgIGFyckJsb2Nrc1JlZCA9IFtdO1xuICAgICAgUHJldmlld1NoaXBzT25Ib3ZlcihcbiAgICAgICAgZS50YXJnZXQsXG4gICAgICAgIFNoaXBDb3VudCxcbiAgICAgICAgSG92ZXJlZEFycixcbiAgICAgICAgYXJyQmxvY2tzUmVkLFxuICAgICAgICBidG5DaGVja1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vRG9tIEludGVyYWN0aW9uXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZS50YXJnZXQsIFwic3VibWl0QnV0dG9uXCIpKSB7XG4gICAgICAgIGxldCBzdWJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3ViQnV0dG9uKTtcbiAgICAgICAgbGV0IGR1bW15Qm9hcmRPYmogPSBzdWJtaXRBbmRTdGFydCgpO1xuICAgICAgICBkdW1teUJvYXJkID0gZHVtbXlCb2FyZE9iai5kdW1teUJvYXJkO1xuICAgICAgICBQbGF5ZXJPbmUgPSBkdW1teUJvYXJkT2JqLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlPy5pZCA9PT0gXCJEdW1teUJvYXJkXCIpIHtcbiAgICAgICAgbGV0IGJveElkID0gZS50YXJnZXQ7XG5cbiAgICAgICAgbGV0IGNoYW5nZVZhbE9iaiA9IHZhbGlkUGxhY2VtZW50U2hpcCh7XG4gICAgICAgICAgZWxlbWVudDogYm94SWQsXG4gICAgICAgICAgbGVuZ3RoOiBTaGlwQ291bnQsXG4gICAgICAgICAgQXJyVG9CZUNvcGllZDogYXJyVG9Bdm9pZCxcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnI6IHNoaXBDb29yZGluYXRlc0FycixcbiAgICAgICAgICBib2FyZDogZHVtbXlCb2FyZCxcbiAgICAgICAgICBheGlzRGVjaWRlcjogYnRuQ2hlY2ssXG4gICAgICAgIH0pO1xuICAgICAgICBTaGlwQ291bnQgPSBjaGFuZ2VWYWxPYmoubGVuZ3RoO1xuICAgICAgICBhcnJUb0F2b2lkID0gY2hhbmdlVmFsT2JqLkFyclRvQmVDb3BpZWQ7XG4gICAgICAgIHNoaXBDb29yZGluYXRlc0FyciA9IGNoYW5nZVZhbE9iai5zaGlwQ29vcmRpbmF0ZXNBcnI7XG5cbiAgICAgICAgaWYgKFNoaXBDb3VudCA+IDUpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0R1bW15Qm9hcmRcIikuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9XG4gICAgICAgICAgICBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0Py5pZCA9PT0gXCJheGlzQnRuXCIpIHtcbiAgICAgICAgaWYgKGJ0bkNoZWNrKSB7XG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcIlktQVhJU1wiO1xuICAgICAgICAgIGJ0bkNoZWNrID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcIlgtQVhJU1wiO1xuICAgICAgICAgIGJ0bkNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQ/LmlkID09PSBcInN1YkJ0blwiKSB7XG4gICAgICAgIGJvYXJkc09iaiA9IFN0YXJ0R2FtZUFmdGVyUGxhY2VtZW50KFxuICAgICAgICAgIFNoaXBDb3VudCxcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnIsXG4gICAgICAgICAgUGxheWVyT25lXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQ/LmlkID09PSBcIlJlc3RhcnRCdG5cIikge1xuICAgICAgICBTaGlwQ291bnQgPSAxO1xuICAgICAgICBIb3ZlcmVkQXJyID0gW107XG4gICAgICAgIGFyclRvQXZvaWQgPSBbXTtcbiAgICAgICAgYXJyQmxvY2tzUmVkID0gW107XG4gICAgICAgIHNoaXBDb29yZGluYXRlc0FyciA9IFtdO1xuICAgICAgICBidG5DaGVjayA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya3NcIik7XG4gICAgICAgIGxldCBkdW1teUJvYXJkT2JqID0gUmVzdGFydEdhbWUoKTtcbiAgICAgICAgZHVtbXlCb2FyZCA9IGR1bW15Qm9hcmRPYmouZHVtbXlCb2FyZDtcbiAgICAgICAgUGxheWVyT25lID0gZHVtbXlCb2FyZE9iai5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZT8uaWQgPT09IFwiQm9hcmQyXCIpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQyID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCB3aG9Xb24gPSBnZXRXaW5uZXJSZXN1bHQoZWxlbWVudDIsIGJvYXJkc09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKHdob1dvbik7XG4gICAgICAgIGlmICh3aG9Xb24gIT09IFwiTm8gYm9hcmQgaGFzIHdvbiB0aGUgZ2FtZSB5ZXRcIikge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQm9hcmQxXCIpLnN0eWxlW1wicG9pbnRlci1ldmVudHNcIl0gPSBcIm5vbmVcIjtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JvYXJkMlwiKS5zdHlsZVtcInBvaW50ZXItZXZlbnRzXCJdID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcbiIsImNvbnN0IG1ldGhvZHNPYmogPSB7XG4gIGhpdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGVuZ3RoLS07XG4gICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIGJlZW4gaGl0XCI7XG4gIH0sXG4gIGlzU3VuazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiT2ggdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgbm90IGJlZW4gc3VuayB5ZXRcIjtcbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBzaGlwKGxlbmd0aCkge1xuICBsZXQgU2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IGFyciA9IFtdO1xuICBsZXQgU2hpcE9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShtZXRob2RzT2JqKSwge1xuICAgIGxlbmd0aCxcbiAgICBTaGlwTGVuZ3RoLFxuICAgIGFycixcbiAgfSk7XG4gIHJldHVybiBTaGlwT2JqO1xufVxuXG5leHBvcnQgeyBzaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnYW1lTG9vcCBmcm9tIFwiLi9nYW1lTG9vcFwiO1xuaW1wb3J0IENyZWF0ZU5hdiBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZU5hdlwiO1xuaW1wb3J0IFN0YXJ0R2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXJ0R2FtZVwiO1xuXG5DcmVhdGVOYXYoKTtcblxuU3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=