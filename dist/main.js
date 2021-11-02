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
    PlayerOne: boards.PlayerOne.getName(),
    PlayerTwo: boards.PlayerTwo.getName(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0SHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDekJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDYTtBQUNBOztBQUUvQyw4REFBUzs7QUFFVCw4REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9DcmVhdGVHcmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9QbGFjZUF0UG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9DaGFuZ2VDb2xvckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL0NvbG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9Jbml0aWFsaXplTWFpbkdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUGxhY2VTaGlwc09uQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyc0F0dGFja1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUHJldmlld1NoaXBzT25Ib3Zlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9SZXN0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9TdGFydEdhbWVBZnRlclNoaXBQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NoZWNrVW5pcXVlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NoZWNrV2hvV29uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5hdi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9nZXRXaW5uZXJSZXN1bHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvcGxhY2VBbGxTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY29tcG9uZW50cy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3VibWl0QW5kU3RhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvdmFsaWRQbGFjZW1lbnRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcbmZ1bmN0aW9uIENyZWF0ZUdyaWQocGFyYW1zLCBCb2FyZCwgbmFtZSA9IFwiZGVmYXVsdFwiKSB7XG4gIGxldCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5CbG9ja3NDb250YWluZXJcIik7XG4gIGlmIChnYW1lRGl2ID09PSBudWxsKSB7XG4gICAgZ2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkJsb2Nrc0NvbnRhaW5lclwiKTtcbiAgICBpZiAoQm9hcmQgPT09IFwiRHVtbXlCb2FyZFwiKSB7XG4gICAgICBnYW1lRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRHVtbXlCb2FyZENvbnRhaW5lclwiKTtcbiAgICB9XG4gICAgbGV0IE91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgICBPdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lRGl2KTtcbiAgfVxuICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gIENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtCb2FyZH1gKTtcbiAgbGV0IFBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFBhcmVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtCb2FyZH1Db250YWluZXJgKTtcbiAgUGFyZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFyZW50Q29udGFpbmVyXCIpO1xuICBpZiAobmFtZSAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICBsZXQgbmFtZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIFBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSGVhZGluZyk7XG4gIH1cbiAgUGFyZW50Q29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBQYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoQ29udGFpbmVyKTtcbiAgZ2FtZURpdi5hcHBlbmRDaGlsZChQYXJlbnRDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtczsgaSsrKSB7XG4gICAgY29uc3QgSW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBJbmREaXYuY2xhc3NMaXN0LmFkZChcIlJvd1wiKTtcbiAgICBJbmREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYFJvdyR7aX1gKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcmFtczsgaisrKSB7XG4gICAgICBsZXQgaW5kaUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGluZGlCbG9jay5jbGFzc0xpc3QuYWRkKFwiYm94LWl0ZW1zXCIpO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGkpO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIsIGopO1xuICAgICAgaW5kaUJsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIiwgYCR7aX0ke2p9YCk7XG4gICAgICBpbmRpQmxvY2suc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Qm9hcmR9JHtpfSR7an1gKTtcbiAgICAgIGluZGlCbG9jay5zdHlsZS5ib3JkZXIgPSBgMnB4IHNvbGlkICR7Q29sb3JzLmRhcmtHcmVlbn1gO1xuICAgICAgSW5kRGl2LmFwcGVuZENoaWxkKGluZGlCbG9jayk7XG4gICAgfVxuXG4gICAgQ29udGFpbmVyLmFwcGVuZENoaWxkKEluZERpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlR3JpZDtcbiIsImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvcnNcIjtcblxuZnVuY3Rpb24gUGxhY2VBdFBvc2l0aW9uKFxuICByb3csXG4gIGNvbHVtbixcbiAgc2hpcExlbmd0aCxcbiAgYXhpc0RlY2lkZXIsXG4gIEJvYXJkSWQgPSBcIkR1bW15Qm9hcmRcIlxuKSB7XG4gIGxldCBzaGlwQ291bnQgPSAwO1xuICBsZXQgYXJyVG9Bdm9pZCA9IFtdO1xuICB3aGlsZSAoc2hpcENvdW50IDwgc2hpcExlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKHJvdywgY29sdW1uLCBCb2FyZElkKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2Ygcm93LCB0eXBlb2YgY29sdW1uKTtcbiAgICBsZXQgZWxlbWVudFRvQmVIaWdsaWdodGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtCb2FyZElkfSR7cm93fSR7Y29sdW1ufWBcbiAgICApO1xuXG4gICAgYXJyVG9Bdm9pZCA9IFsuLi5hcnJUb0F2b2lkLCBlbGVtZW50VG9CZUhpZ2xpZ2h0ZWRdO1xuICAgIGlmIChCb2FyZElkICE9PSBcIkJvYXJkMlwiKSB7XG4gICAgICBlbGVtZW50VG9CZUhpZ2xpZ2h0ZWQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLmdyZWVuO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50VG9CZUhpZ2xpZ2h0ZWQpO1xuICAgIH1cblxuICAgIGlmIChheGlzRGVjaWRlcikge1xuICAgICAgY29sdW1uKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdysrO1xuICAgIH1cbiAgICBzaGlwQ291bnQrKztcbiAgfVxuICByZXR1cm4gYXJyVG9Bdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VBdFBvc2l0aW9uO1xuIiwiY29uc3QgbWV0aG9kc09iaiA9IHtcbiAgQXR0YWNrQm9hcmQ6IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xuICAgIGxldCBTaGlwSGl0ID0gdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgbGV0IElmU2hpcHNTdW5rID0gdGhpcy5nYW1lQm9hcmQuQWxsU2hpcHNTdW5rKCk7XG4gICAgcmV0dXJuIHsgU2hpcEhpdCwgSWZTaGlwc1N1bmsgfTtcbiAgfSxcbiAgZ2V0TmFtZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgZ2FtZUJvYXJkKSB7XG4gIGxldCBQbGF5ZXJPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kc09iaiksIHtcbiAgICBuYW1lLFxuICAgIGdhbWVCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIFBsYXllck9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcbmZ1bmN0aW9uIENvbG9yQ2hhbmdlKFxuICBCb2FyZDJDb25kLFxuICBCb2FyZDFDb25kLFxuICBDb29yZGluYXRlc09uZUFycixcbiAgQ29vcmRpbmF0ZXNUd29BcnJcbikge1xuICBsZXQgW3JvdzEsIGNvbHVtbjFdID0gQ29vcmRpbmF0ZXNPbmVBcnI7XG4gIGxldCBbcm93MiwgY29sdW1uMl0gPSBDb29yZGluYXRlc1R3b0FycjtcbiAgbGV0IGVsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQm9hcmQyJHtyb3cyfSR7Y29sdW1uMn1gKTtcbiAgbGV0IGVsZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQm9hcmQxJHtyb3cxfSR7Y29sdW1uMX1gKTtcbiAgaWYgKEJvYXJkMkNvbmQgPT09IFwib29wcyB5b3UgbWlzc2VkIHRoZSBzaGlwXCIpIHtcbiAgICBlbGUyLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5ncmF5O1xuICB9IGVsc2Uge1xuICAgIGVsZTIuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLnJlZDtcbiAgfVxuXG4gIGlmIChCb2FyZDFDb25kID09PSBcIm9vcHMgeW91IG1pc3NlZCB0aGUgc2hpcFwiKSB7XG4gICAgZWxlMS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBDb2xvcnMuZ3JheTtcbiAgfSBlbHNlIHtcbiAgICBlbGUxLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5yZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JDaGFuZ2U7XG4iLCJjb25zdCBDb2xvcnMgPSB7XG4gIGdyZWVuOiBcIiM2ZWViNWVcIixcbiAgcmVkOiBcIiNkZTUyNGVcIixcbiAgZ3JheTogXCIjOTQ5MDhmXCIsXG4gIHdoaXRlOiBcIndoaXRlXCIsXG4gIGRhcmtHcmVlbjogXCIjNDA5MTZjXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG4iLCJpbXBvcnQgUGxhY2VBbGxTaGlwcyBmcm9tIFwiLi9wbGFjZUFsbFNoaXBzXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuaW1wb3J0IGVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi4vQ3JlYXRlR3JpZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XG5cbmZ1bmN0aW9uIEluaXRpYWxpemVNYWluR2FtZShhcnIsIG5hbWUpIHtcbiAgbGV0IG5ld0JvYXJkMSA9IGdhbWVCb2FyZCgxMCk7XG4gIGxldCBuZXdCb2FyZDIgPSBnYW1lQm9hcmQoMTApO1xuICBDcmVhdGVHcmlkKDEwLCBcIkJvYXJkMVwiLCBuYW1lKTtcbiAgQ3JlYXRlR3JpZCgxMCwgXCJCb2FyZDJcIiwgXCJBSVwiKTtcblxuICBQbGFjZUFsbFNoaXBzKG5ld0JvYXJkMSwgYXJyLCBcIkJvYXJkMVwiKTtcblxuICBQbGFjZUFsbFNoaXBzKFxuICAgIG5ld0JvYXJkMixcbiAgICBbXG4gICAgICB7IHJvdzogMSwgY29sdW1uOiAyLCBsZW5ndGg6IDEsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogMiwgY29sdW1uOiA3LCBsZW5ndGg6IDIsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogMywgY29sdW1uOiAwLCBsZW5ndGg6IDMsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogOCwgY29sdW1uOiAxLCBsZW5ndGg6IDQsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgICB7IHJvdzogNiwgY29sdW1uOiAzLCBsZW5ndGg6IDUsIGF4aXNEZWNpZGVyOiB0cnVlIH0sXG4gICAgXSxcbiAgICBcIkJvYXJkMlwiXG4gICk7XG5cbiAgbGV0IHJlc3RCdG5EaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJSZXN0YXJ0XCIgfSk7XG4gIGxldCByZXN0QnRuID0gZWxlbWVudENyZWF0b3IoXCJidXR0b25cIiwgeyBpZDogXCJSZXN0YXJ0QnRuXCIgfSk7XG4gIGxldCB3aW5uZXJwID0gZWxlbWVudENyZWF0b3IoXCJwXCIsIHsgaWQ6IFwiV2lubmVycGFyYVwiIH0pO1xuICByZXN0QnRuLnRleHRDb250ZW50ID0gXCJSZXN0YXJ0XCI7XG4gIHJlc3RCdG5EaXYuYXBwZW5kQ2hpbGQocmVzdEJ0bik7XG4gIGNvbnNvbGUubG9nKG5ld0JvYXJkMS5ib2FyZEJsb2Nrcyk7XG4gIGNvbnNvbGUubG9nKG5ld0JvYXJkMi5ib2FyZEJsb2Nrcyk7XG4gIGxldCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XG4gIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lcnApO1xuICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0QnRuRGl2KTtcbiAgbGV0IFBsYXllck9uZSA9IFBsYXllcihuYW1lLCBuZXdCb2FyZDIpO1xuICBsZXQgUGxheWVyVHdvID0gUGxheWVyKFwiQUlcIiwgbmV3Qm9hcmQxKTtcblxuICByZXR1cm4geyBuZXdCb2FyZDEsIG5ld0JvYXJkMiwgUGxheWVyT25lLCBQbGF5ZXJUd28gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbGl6ZU1haW5HYW1lO1xuIiwiaW1wb3J0IENyZWF0ZUdyaWQgZnJvbSBcIi4uL0NyZWF0ZUdyaWRcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuLi9nYW1lQm9hcmRGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIFBsYWNlU2hpcHNPbkJvYXJkKG5hbWUpIHtcbiAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IGBQbGVhc2UgJHtuYW1lfSBwbGFjZSB5b3VyIHNoaXBzYDtcbiAgYnRuRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiQnRuQ29udFwiKTtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImF4aXNCdG5cIik7XG4gIFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1YkJ0blwiKTtcbiAgU3ViQnRuLnRleHRDb250ZW50ID0gXCJTVUJNSVRcIjtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJYLUFYSVNcIjtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKFN1YkJ0bik7XG4gIGxldCBPdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XG4gIE91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgbGV0IGR1bW15Qm9hcmQgPSBnYW1lQm9hcmQoMTAsIFwiRHVtbXlCb2FyZFwiKTtcbiAgQ3JlYXRlR3JpZCgxMCwgXCJEdW1teUJvYXJkXCIpO1xuXG4gIHJldHVybiB7IGR1bW15Qm9hcmQsIG5hbWUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VTaGlwc09uQm9hcmQ7XG4iLCJpbXBvcnQgQ29sb3JDaGFuZ2UgZnJvbSBcIi4vQ2hhbmdlQ29sb3JCb2FyZFwiO1xuZnVuY3Rpb24gUGxheWVyc0F0dGFja1NoaXAoYm9hcmRzLCBDb29yZGluYXRlc09uZUFyciwgQ29vcmRpbmF0ZXNUd29BcnIpIHtcbiAgbGV0IFtyb3cxLCBjb2x1bW4xXSA9IENvb3JkaW5hdGVzT25lQXJyO1xuICBsZXQgW3JvdzIsIGNvbHVtbjJdID0gQ29vcmRpbmF0ZXNUd29BcnI7XG5cbiAgbGV0IEJvYXJkMkF0dGFja2VkT2JqID0gYm9hcmRzLlBsYXllck9uZS5BdHRhY2tCb2FyZChyb3cyLCBjb2x1bW4yKTtcbiAgbGV0IEJvYXJkMUF0dGFja2VkT2JqID0ge307XG4gIGlmIChCb2FyZDJBdHRhY2tlZE9iai5TaGlwSGl0ICE9PSBcIlRoZSBzaGlwIGhhcyBhbHJlYWR5IGJlZW4gaGl0XCIpIHtcbiAgICBCb2FyZDFBdHRhY2tlZE9iaiA9IGJvYXJkcy5QbGF5ZXJUd28uQXR0YWNrQm9hcmQocm93MSwgY29sdW1uMSk7XG5cbiAgICBDb2xvckNoYW5nZShcbiAgICAgIEJvYXJkMkF0dGFja2VkT2JqLlNoaXBIaXQsXG4gICAgICBCb2FyZDFBdHRhY2tlZE9iai5TaGlwSGl0LFxuICAgICAgQ29vcmRpbmF0ZXNPbmVBcnIsXG4gICAgICBDb29yZGluYXRlc1R3b0FyclxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJTdG9wcGVkIGFpIGZyb20gbWFraW5nIHRoZSBtb3ZlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZkFsbFNoaXBzQjE6IEJvYXJkMUF0dGFja2VkT2JqLklmU2hpcHNTdW5rLFxuICAgIGlmQWxsU2hpcHNCMjogQm9hcmQyQXR0YWNrZWRPYmouSWZTaGlwc1N1bmssXG4gICAgUGxheWVyT25lOiBib2FyZHMuUGxheWVyT25lLmdldE5hbWUoKSxcbiAgICBQbGF5ZXJUd286IGJvYXJkcy5QbGF5ZXJUd28uZ2V0TmFtZSgpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJzQXR0YWNrU2hpcDtcbiIsImltcG9ydCBDb2xvcnMgZnJvbSBcIi4vQ29sb3JzXCI7XG5mdW5jdGlvbiBQcmV2aWV3U2hpcHNPbkhvdmVyKGUsIHNoaXBDb3VudCwgYXJyLCBhcnJSZWQsIGJ0bikge1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcblxuICBsZXQgcm93ID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgbGV0IGNvbHVtbiA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XG5cbiAgLy9DYWxjdWxhdGluZyBpZiBzaGlwIGNhbiBiZSBwbGFjZWQgaW4gdGhlIHJvdy4gVGhlIHRvdGFsIHNob3VsZCBhbHdheXMgYmUgbGVzc2VyIG9yIGVxdWFsIHRvIGVuZFZhbCB0byBiZSBwbGFjZWQuXG5cbiAgd2hpbGUgKGogPCBzaGlwQ291bnQgLSAxKSB7XG4gICAgaWYgKGJ0bikge1xuICAgICAgY29sdW1uKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdysrO1xuICAgIH1cbiAgICBqKys7XG4gIH1cblxuICB3aGlsZSAoaSA8IHNoaXBDb3VudCkge1xuICAgIGlmICgoYnRuICYmIGNvbHVtbiA8PSA5KSB8fCAoIWJ0biAmJiByb3cgPD0gOSkpIHtcbiAgICAgIGUuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gQ29sb3JzLmdyZWVuO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IENvbG9ycy5yZWQ7XG4gICAgICBhcnJSZWQucHVzaChlKTtcbiAgICB9XG5cbiAgICBhcnIucHVzaChlKTtcbiAgICBpZiAoYnRuICYmIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIikgPCA5KSB7XG4gICAgICBlID0gZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIGlmICghYnRuICYmIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikgPCA5KSB7XG4gICAgICBsZXQgcm93Q29sb3IgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgICAgbGV0IGNvbHVtbkNvbG9yID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKTtcblxuICAgICAgcm93Q29sb3IrKztcbiAgICAgIGxldCBuZXh0RWwgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1Db29yZGluYXRlcyA9IFwiJHtyb3dDb2xvcn0ke2NvbHVtbkNvbG9yfVwiXWBcbiAgICAgICk7XG4gICAgICBlID0gbmV4dEVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdCB1cGRhdGVcIik7XG4gICAgfVxuXG4gICAgaSsrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdTaGlwc09uSG92ZXI7XG4iLCJpbXBvcnQgUGxhY2VTaGlwc09uQm9hcmQgZnJvbSBcIi4vUGxhY2VTaGlwc09uQm9hcmRcIjtcbmZ1bmN0aW9uIFJlc3RhcnRHYW1lKCkge1xuICBsZXQgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk91dGVyQ29udGFpbmVyXCIpO1xuICBsZXQgQmxvY2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5CbG9ja3NDb250YWluZXJcIik7XG4gIGxldCBXaW5uZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNXaW5uZXJwYXJhXCIpO1xuICBsZXQgcmVzdGFydEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUmVzdGFydFwiKTtcbiAgb3V0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoQmxvY2tzQ29udGFpbmVyKTtcbiAgb3V0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQocmVzdGFydEJ0bkNvbnRhaW5lcik7XG4gIG91dGVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKFdpbm5lclBhcmEpO1xuICBsZXQgZHVtbXlCb2FyZCA9IFBsYWNlU2hpcHNPbkJvYXJkKFwiUm9oYW5cIik7XG4gIHJldHVybiBkdW1teUJvYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXJ0R2FtZTtcbiIsImltcG9ydCBJbml0aWFsaXplTWFpbkdhbWUgZnJvbSBcIi4vSW5pdGlhbGl6ZU1haW5HYW1lXCI7XG5cbmZ1bmN0aW9uIFN0YXJ0R2FtZUFmdGVyUGxhY2VtZW50KGxlbmd0aCwgc2hpcHNDb29yZGluYXRlc0FyciwgUGxheWVyT25lKSB7XG4gIGlmIChsZW5ndGggPCA2KSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgcGxhY2UgYWxsIHRoZSBzaGlwc1wiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgYnRuQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQnRuQ29udFwiKTtcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xuICAgIGJ0bkNvbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChidG5Db250KTtcbiAgICBncmlkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gSW5pdGlhbGl6ZU1haW5HYW1lKHNoaXBzQ29vcmRpbmF0ZXNBcnIsIFBsYXllck9uZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRHYW1lQWZ0ZXJQbGFjZW1lbnQ7XG4iLCIvLyBpdGVyYXRlIG92ZXIgYW4gYXJyYXkgYW5kIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBpdC5cbmZ1bmN0aW9uIGNoYW5nZUFyckJhY2tncm91bmRDb2xvcihhcnIsIGNvbG9yKSB7XG4gIGFyci5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBgJHtjb2xvcn1gO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yO1xuIiwibGV0IGNoZWNrQXJyID0gW107XG5cbmZ1bmN0aW9uIENoZWNrVW5pcXVlKGFycikge1xuICBsZXQgRmlsdGVyZWRBcnIgPSBjaGVja0Fyci5maWx0ZXIoKGUpID0+IHtcbiAgICByZXR1cm4gZVswXSA9PT0gYXJyWzBdICYmIGVbMV0gPT09IGFyclsxXTtcbiAgfSk7XG4gIGlmIChGaWx0ZXJlZEFyci5sZW5ndGggPT09IDApIHtcbiAgICBjaGVja0Fyci5wdXNoKGFycik7XG4gICAgY29uc29sZS5sb2coXCJUaGUgY29vcmRpbmF0ZXMgYXJlIHVuaXF1ZVwiKTtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3cgPSBNYXRoLmZsb29yKDEwICogTWF0aC5yYW5kb20oKSk7XG4gICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoMTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICBhcnIgPSBbcm93LCBjb2x1bW5dO1xuICAgIGxldCBlbHNlVmFsID0gQ2hlY2tVbmlxdWUoYXJyKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBudW1iZXIgd2FzIG5vdCB1bmlxdWUgYW5kIGEgbmV3IG51bWJlciBpcyByZXR1cm5lZFwiKTtcbiAgICByZXR1cm4gZWxzZVZhbDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tVbmlxdWU7XG4iLCJmdW5jdGlvbiBjaGVja1dob1dvbihwcm9wcykge1xuICBpZiAocHJvcHMuaWZBbGxTaGlwc0IxID09PSBcIkFsbCB0aGUgc2hpcHMgYXJlIHN1bmtcIikge1xuICAgIHJldHVybiBgQm9hcmQxIGhhcyBsb3N0IHRoZSBnYW1lIEFuZCAke3Byb3BzLlBsYXllclR3b30gaXMgdGhlIHdpbm5lcmA7XG4gIH0gZWxzZSBpZiAoXG4gICAgcHJvcHMuaWZBbGxTaGlwc0IyID09PSBcIkFsbCB0aGUgc2hpcHMgYXJlIHN1bmtcIiAmJlxuICAgIHByb3BzLmlmQWxsU2hpcHNCMSA9PT0gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCJcbiAgKSB7XG4gICAgcmV0dXJuIFwiVGhlIGdhbWUgaGFzIHRpZWRcIjtcbiAgfSBlbHNlIGlmIChwcm9wcy5pZkFsbFNoaXBzQjIgPT09IFwiQWxsIHRoZSBzaGlwcyBhcmUgc3Vua1wiKSB7XG4gICAgcmV0dXJuIGBCb2FyZCAyIGhhcyBsb3N0IHRoZSBnYW1lIEFuZCAke3Byb3BzLlBsYXllck9uZX0gaXMgdGhlIHdpbm5lcmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTm8gYm9hcmQgaGFzIHdvbiB0aGUgZ2FtZSB5ZXRcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja1dob1dvbjtcbiIsImltcG9ydCBlbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk91dGVyQ29udGFpbmVyXCIpO1xuZnVuY3Rpb24gQ3JlYXRlTmF2KCkge1xuICBsZXQgbmF2ID0gZWxlbWVudENyZWF0b3IoXCJuYXZcIiwgeyBjbGFzc05hbWU6IFwibmF2Q29udGFpbmVyXCIgfSk7XG4gIGxldCBIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBIZWFkaW5nLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChIZWFkaW5nKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYXYpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmF2O1xuIiwiZnVuY3Rpb24gZWxlbWVudENyZWF0b3IodHlwZSwgcHJvcGVydGllcykge1xuICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgZWxlW3Byb3BdID0gcHJvcGVydGllc1twcm9wXTtcbiAgfVxuICByZXR1cm4gZWxlO1xufVxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudENyZWF0b3I7XG4iLCJpbXBvcnQgY2hlY2tXaG9Xb24gZnJvbSBcIi4vY2hlY2tXaG9Xb25cIjtcbmltcG9ydCBDaGVja1VuaXF1ZSBmcm9tIFwiLi9jaGVja1VuaXF1ZVwiO1xuaW1wb3J0IFBsYXllcnNBdHRhY2tTaGlwIGZyb20gXCIuL1BsYXllcnNBdHRhY2tTaGlwXCI7XG5cbmZ1bmN0aW9uIGdldFdpbm5lclJlc3VsdChlbGVtZW50MiwgYm9hcmRzKSB7XG4gIGxldCBDb29yZGluYXRlc09uZUFyciA9IGdldFVuaXF1ZU51bWJlcigpO1xuXG4gIGxldCBkYXRhU2hpcDJSb3cgPSBlbGVtZW50Mi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgbGV0IGRhdGFTaGlwMkNvbHVtbiA9IGVsZW1lbnQyLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpO1xuICBsZXQgQ29vcmRpbmF0ZXNUd29BcnIgPSBbZGF0YVNoaXAyUm93LCBkYXRhU2hpcDJDb2x1bW5dO1xuICBsZXQgQm90aFNoaXBDb25kaXRpb25zID0gUGxheWVyc0F0dGFja1NoaXAoXG4gICAgYm9hcmRzLFxuICAgIENvb3JkaW5hdGVzT25lQXJyLFxuICAgIENvb3JkaW5hdGVzVHdvQXJyXG4gICk7XG5cbiAgbGV0IHdob1dvbiA9IGNoZWNrV2hvV29uKEJvdGhTaGlwQ29uZGl0aW9ucyk7XG4gIHJldHVybiB3aG9Xb247XG59XG5cbmZ1bmN0aW9uIGdldFVuaXF1ZU51bWJlcigpIHtcbiAgbGV0IHJvdyA9IE1hdGguZmxvb3IoMTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoMTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IENvb3JkaW5hdGVzQXJyID0gW3JvdywgY29sdW1uXTtcbiAgQ29vcmRpbmF0ZXNBcnIgPSBDaGVja1VuaXF1ZShDb29yZGluYXRlc0Fycik7XG4gIHJldHVybiBDb29yZGluYXRlc0Fycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2lubmVyUmVzdWx0O1xuIiwiaW1wb3J0IFBsYWNlQXRQb3NpdGlvbiBmcm9tIFwiLi4vUGxhY2VBdFBvc2l0aW9uXCI7XG5cbmZ1bmN0aW9uIFBsYWNlQWxsU2hpcHMoQm9hcmQsIHNoaXBzQXJyLCBCb2FyZElkKSB7XG4gIHNoaXBzQXJyLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICBCb2FyZC5wbGFjZVNoaXAoZS5yb3csIGUuY29sdW1uLCBlLmxlbmd0aCwgZS5heGlzRGVjaWRlcik7XG4gICAgUGxhY2VBdFBvc2l0aW9uKGUucm93LCBlLmNvbHVtbiwgZS5sZW5ndGgsIGUuYXhpc0RlY2lkZXIsIEJvYXJkSWQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VBbGxTaGlwcztcbiIsImltcG9ydCBlbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk91dGVyQ29udGFpbmVyXCIpO1xubGV0IENsaWNrQnV0dG9uID0gbnVsbDtcbmZ1bmN0aW9uIFN0YXJ0R2FtZSgpIHtcbiAgbGV0IEdhbWVEaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLCB7IGlkOiBcImdhbWVDb250YWluZXJcIiB9KTtcbiAgR2FtZURpdi5pbm5lckhUTUwgPSBgPGxhYmVsIGZvcj1cIk5hbWVcIj5FbnRlciB5b3VyIE5hbWU8L2xhYmVsPlxuICAgIDxicj5cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9XCJcIj5cbiAgICAgPGJyPlxuICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0QnV0dG9uXCI+UExBWTwvYnV0dG9uPlxuICAgIGA7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoR2FtZURpdik7XG4gIENsaWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG59XG5leHBvcnQgZGVmYXVsdCBTdGFydEdhbWU7XG4iLCJpbXBvcnQgUGxhY2VTaGlwc09uQm9hcmQgZnJvbSBcIi4vUGxhY2VTaGlwc09uQm9hcmRcIjtcblxuZnVuY3Rpb24gc3VibWl0QW5kU3RhcnQoKSB7XG4gIGxldCBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgbGV0IG5hbWUgPSBJbnB1dC52YWx1ZTtcbiAgaWYgKG5hbWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciB0aGUgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZUNvbnRhaW5lclwiKTtcbiAgICBnYW1lRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2FtZURpdik7XG4gICAgbGV0IHJldHVybkJvYXJkID0gUGxhY2VTaGlwc09uQm9hcmQobmFtZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuQm9hcmQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdEFuZFN0YXJ0O1xuIiwiaW1wb3J0IFBsYWNlQXRQb3NpdGlvbiBmcm9tIFwiLi4vUGxhY2VBdFBvc2l0aW9uXCI7XG5mdW5jdGlvbiB2YWxpZFBsYWNlbWVudFNoaXAoe1xuICBlbGVtZW50LFxuICBsZW5ndGgsXG4gIEFyclRvQmVDb3BpZWQsXG4gIHNoaXBDb29yZGluYXRlc0FycixcbiAgYm9hcmQsXG4gIGF4aXNEZWNpZGVyLFxufSkge1xuICBsZXQgcm93ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgbGV0IGNvbHVtbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XG4gIGxldCBpZlNoaXBDYW5CZVBsYWNlZCA9IGJvYXJkLmNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KFxuICAgIHJvdyxcbiAgICBjb2x1bW4sXG4gICAgbGVuZ3RoLFxuICAgIGF4aXNEZWNpZGVyXG4gICk7XG4gIGlmIChpZlNoaXBDYW5CZVBsYWNlZCkge1xuICAgIGJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBheGlzRGVjaWRlcik7XG4gICAgbGV0IEFyclRvQXZvaWRDdXJyZW50ID0gUGxhY2VBdFBvc2l0aW9uKHJvdywgY29sdW1uLCBsZW5ndGgsIGF4aXNEZWNpZGVyKTtcbiAgICBBcnJUb0JlQ29waWVkID0gWy4uLkFyclRvQmVDb3BpZWQsIC4uLkFyclRvQXZvaWRDdXJyZW50XTtcblxuICAgIHNoaXBDb29yZGluYXRlc0FyciA9IFtcbiAgICAgIC4uLnNoaXBDb29yZGluYXRlc0FycixcbiAgICAgIHsgcm93OiByb3csIGNvbHVtbjogY29sdW1uLCBsZW5ndGg6IGxlbmd0aCwgYXhpc0RlY2lkZXI6IGF4aXNEZWNpZGVyIH0sXG4gICAgXTtcbiAgICBsZW5ndGgrKztcbiAgfVxuICByZXR1cm4geyBsZW5ndGgsIEFyclRvQmVDb3BpZWQsIHNoaXBDb29yZGluYXRlc0FyciB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZFBsYWNlbWVudFNoaXA7XG4iLCJpbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi9DcmVhdGVHcmlkXCI7XG5pbXBvcnQgUGxhY2VBdFBvc2l0aW9uIGZyb20gXCIuL1BsYWNlQXRQb3NpdGlvblwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmNvbnN0IG1ldGhvZE9iaiA9IHtcbiAgcGxhY2VTaGlwOiBmdW5jdGlvbiAocm93LCBjb2x1bW4sIHNoaXBMZW5ndGgsIGF4aXNEZWNpZGVyKSB7XG4gICAgdGhpcy5Ob09mU2hpcHMrKztcblxuICAgIGxldCBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgc2hpcExlbmd0aCkge1xuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddW2NvbHVtbl0gPSBgJHtzaGlwTGVuZ3RofWA7XG5cbiAgICAgIGlmIChheGlzRGVjaWRlcikge1xuICAgICAgICBjb2x1bW4rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdysrO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGxldCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoKTtcbiAgICB0aGlzLnNoaXBzQXJyLnB1c2gobmV3U2hpcCk7XG4gIH0sXG4gIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xuICAgIGxldCBlbGVtZW50ID0gW3JvdywgY29sdW1uXTtcbiAgICBsZXQgc2hpcExlbmd0aCA9IHRoaXMuYm9hcmRCbG9ja3Nbcm93XVtjb2x1bW5dO1xuICAgIGxldCBpbmRleCA9IHRoaXMuQ29vcmRpbmF0ZXNBcnIuZmluZEluZGV4KChlKSA9PiB7XG4gICAgICByZXR1cm4gZVswXSA9PT0gZWxlbWVudFswXSAmJiBlWzFdID09PSBlbGVtZW50WzFdO1xuICAgIH0pO1xuICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBoaXRcIjtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSAmJiBzaGlwTGVuZ3RoICE9IFwiXCIpIHtcbiAgICAgIHRoaXMuQ29vcmRpbmF0ZXNBcnIucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgIGZ1bmN0aW9uIEZpbmRTaGlwKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHNoaXBMZW5ndGgpID09PSBwYXJhbXMuU2hpcExlbmd0aDtcbiAgICAgIH1cbiAgICAgIGxldCBTaGlwSW5kZXggPSB0aGlzLnNoaXBzQXJyLmZpbmRJbmRleChGaW5kU2hpcCk7XG4gICAgICBsZXQgdGhhdFNoaXAgPSB0aGlzLnNoaXBzQXJyW1NoaXBJbmRleF07XG5cbiAgICAgIHRoYXRTaGlwLmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddW2NvbHVtbl0gPSBcImhpdFwiO1xuICAgICAgbGV0IHNoaXBDb25kaXRpb24gPSB0aGF0U2hpcC5pc1N1bmsoKTtcbiAgICAgIGlmIChzaGlwQ29uZGl0aW9uID09PSBcIk9oIHRoZSBzaGlwIGhhcyBiZWVuIHN1bmtcIikge1xuICAgICAgICB0aGlzLlNoaXBzU3Vua0Fyci5wdXNoKHRoYXRTaGlwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIGJlZW4gaGl0IGFuZCBjb29yZGluYXRlcyBoYXZlIGJlZW4gbm90ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5Db29yZGluYXRlc0Fyci5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgICAgcmV0dXJuIFwib29wcyB5b3UgbWlzc2VkIHRoZSBzaGlwXCI7XG4gICAgfVxuICB9LFxuICBBbGxTaGlwc1N1bms6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5TaGlwc1N1bmtBcnIubGVuZ3RoID09PSB0aGlzLk5vT2ZTaGlwcykge1xuICAgICAgcmV0dXJuIFwiQWxsIHRoZSBzaGlwcyBhcmUgc3Vua1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJBbGwgdGhlIHNoaXBzIGhhdmUgbm90IGJlZW4gc3VuayB5ZXRcIjtcbiAgICB9XG4gIH0sXG4gIGNoZWNrVmFsaWRTaGlwUGxhY2VtZW50OiBmdW5jdGlvbiAocm93LCBjb2x1bW4sIHNoaXBMZW5ndGgsIGF4aXNEZWNpZGVyKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBBcnJUb0JlQ2hlY2tlZCA9IFtdO1xuICAgIHdoaWxlIChpIDwgc2hpcExlbmd0aCkge1xuICAgICAgQXJyVG9CZUNoZWNrZWQucHVzaChbTnVtYmVyKHJvdyksIE51bWJlcihjb2x1bW4pXSk7XG4gICAgICBpZiAoYXhpc0RlY2lkZXIpIHtcbiAgICAgICAgY29sdW1uKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3crKztcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoYXhpc0RlY2lkZXIpIHtcbiAgICAgIC8vUmV2ZXJ0aW5nIGJhY2sgdG8gY29ycmVjdCBjb29yZGluYXRlc1xuICAgICAgY29sdW1uID0gY29sdW1uIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm93ID0gcm93IC0gMTtcbiAgICB9XG5cbiAgICBsZXQgRmlsdGVyZWRBcnIgPSBbXTtcbiAgICBpZiAodGhpcy5zaGlwc1BsYWNlZEFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIlNoaXAgZm9yIHRoZSBmaXJzdCBpdGVyYXRpb24gYXMgdGhlcmUgd2lsbCBiZSBubyBvdmVybGFwcGluZ1wiXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9DaGVja0FyciA9IFtdO1xuICAgICAgQXJyVG9CZUNoZWNrZWQuZm9yRWFjaCgoYXJyYXlFbGVtZW50KSA9PiB7XG4gICAgICAgIC8vW1sxLDIsM10sWzQsNV1dIGluaXRpYWwgYXJyYXlcbiAgICAgICAgdGhpcy5zaGlwc1BsYWNlZEFyci5mb3JFYWNoKChpbmRpQXJyKSA9PiB7XG4gICAgICAgICAgLy8gQXJyYXkgdG8gYmUgY2hlY2tlZCBmcm9tLlxuICAgICAgICAgIGluZGlBcnIuZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZSA9PT0gYXJyYXlFbGVtZW50W2luZGV4XSkgdG9DaGVja0Fyci5wdXNoKGVsZSk7IC8vY2hlY2tpbmcgZXZlcnkgZWxlbWVudCBvZiBzaGlwc1BsYWNlZEFyciB3aXRoIGFycmF5RWxlbWVudFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0b0NoZWNrQXJyLmxlbmd0aCA9PT0gYXJyYXlFbGVtZW50Lmxlbmd0aClcbiAgICAgICAgICAgIEZpbHRlcmVkQXJyLnB1c2godG9DaGVja0Fycik7XG5cbiAgICAgICAgICB0b0NoZWNrQXJyID0gW107XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogQ29uZGl0aW9ucyB3aGVyZSBzaGlwcyBjYW5ub3QgYmUgcGxhY2VkIGlmIHRoZSByb3dzIG51bWJlciBpcyB1bmRlZmluZWQgZWcgLSB4Q29sID0gNCBidXQgdGhlcmUgYXJlIG9ubHkgdGhyZWUgcm93cyBkZWZpbmVkLlxuICAgIG9yIFNoaXBzIGFyZSBvdmVybGFwcGluZyBpbiB0aGlzIGNhc2VkIHRoZSBmaWx0ZXJlZCBhcnJheSB3b3VsZCBiZSBmaWxsZWQuXG4gICAgb3IgY29uZGl0aW9uIHdoZXJlIHRoZSBzaGlwcyBpbiBob3Jpem9udGFsIGNvbmRpdGlvbiBjYW5ub3QgYmUgcGxhY2VkIGJvYXJkQmxvY2tzWzBdWzEwXS4gQnV0IGl0IHdpbGwgYmUgdW5kZWZpbmVkIGFzIHRoZXJlIGFyZSBvbmx5IDkgY29sdW1ucy5cbiAgICAqL1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddID09PSB1bmRlZmluZWQgfHxcbiAgICAgIEZpbHRlcmVkQXJyLmxlbmd0aCAhPT0gMCB8fFxuICAgICAgdGhpcy5ib2FyZEJsb2Nrc1tyb3ddW2NvbHVtbl0gPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2hpcHNQbGFjZWRBcnIgPSBbLi4udGhpcy5zaGlwc1BsYWNlZEFyciwgLi4uQXJyVG9CZUNoZWNrZWRdO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNQbGFjZWRBcnIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBnZXRCb2FyZDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkQmxvY2tzO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKGxlbmd0aCkge1xuICBsZXQgc2hpcHNBcnIgPSBbXTtcbiAgbGV0IENvb3JkaW5hdGVzQXJyID0gW107XG4gIGxldCBOb09mU2hpcHMgPSAwO1xuICBsZXQgU2hpcHNTdW5rQXJyID0gW107XG4gIGxldCBzaGlwc1BsYWNlZEFyciA9IFtdO1xuICBsZXQgYm9hcmRCbG9ja3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBsZW5ndGggfSwgKGUpID0+IEFycmF5KDEwKS5maWxsKFwiXCIpKTtcbiAgbGV0IGdhbWVCb2FyZE9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShtZXRob2RPYmopLCB7XG4gICAgc2hpcHNBcnIsXG4gICAgQ29vcmRpbmF0ZXNBcnIsXG4gICAgTm9PZlNoaXBzLFxuICAgIFNoaXBzU3Vua0FycixcbiAgICBib2FyZEJsb2NrcyxcbiAgICBzaGlwc1BsYWNlZEFycixcbiAgfSk7XG4gIHJldHVybiBnYW1lQm9hcmRPYmo7XG59XG5cbmV4cG9ydCB7IGdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IHN1Ym1pdEFuZFN0YXJ0IGZyb20gXCIuL2NvbXBvbmVudHMvc3VibWl0QW5kU3RhcnRcIjtcblxuaW1wb3J0IFByZXZpZXdTaGlwc09uSG92ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9QcmV2aWV3U2hpcHNPbkhvdmVyXCI7XG5pbXBvcnQgY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yIGZyb20gXCIuL2NvbXBvbmVudHMvY2hhbmdlQXJyQmFja2dyb3VuZENvbG9yXCI7XG5pbXBvcnQgQ29sb3JzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sb3JzXCI7XG5pbXBvcnQgdmFsaWRQbGFjZW1lbnRTaGlwIGZyb20gXCIuL2NvbXBvbmVudHMvdmFsaWRQbGFjZW1lbnRTaGlwXCI7XG5pbXBvcnQgU3RhcnRHYW1lQWZ0ZXJQbGFjZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9TdGFydEdhbWVBZnRlclNoaXBQbGFjZW1lbnRcIjtcbmltcG9ydCBnZXRXaW5uZXJSZXN1bHQgZnJvbSBcIi4vY29tcG9uZW50cy9nZXRXaW5uZXJSZXN1bHRcIjtcbmltcG9ydCBSZXN0YXJ0R2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3RhcnRHYW1lXCI7XG5sZXQgZ2FtZUxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmRzT2JqO1xuICBsZXQgZHVtbXlCb2FyZDtcbiAgbGV0IFNoaXBDb3VudCA9IDE7XG4gIGxldCBIb3ZlcmVkQXJyID0gW107XG4gIGxldCBhcnJUb0F2b2lkID0gW107XG4gIGxldCBhcnJCbG9ja3NSZWQgPSBbXTtcbiAgbGV0IHNoaXBDb29yZGluYXRlc0FyciA9IFtdO1xuICBsZXQgYnRuQ2hlY2sgPSB0cnVlO1xuICBsZXQgUGxheWVyT25lID0gXCJcIjtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIExpc3RlbmluZyB0byBtb3VzZW92ZXIgZXZlbnRzXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlPy5pZCA9PT0gXCJEdW1teUJvYXJkXCIpIHtcbiAgICAgIGNoYW5nZUFyckJhY2tncm91bmRDb2xvcihIb3ZlcmVkQXJyLCBDb2xvcnMud2hpdGUpO1xuXG4gICAgICBjaGFuZ2VBcnJCYWNrZ3JvdW5kQ29sb3IoYXJyVG9Bdm9pZCwgQ29sb3JzLmdyZWVuKTtcbiAgICAgIC8vIEVtcHRpZWQgdGhlIGFycmF5IHRvIGFkZCBvbmx5IHRob3NlIGVsZW1lbnRzIGluIFwiYXJyVG9Bdm9pZFwiIHRoYXQgaGFkIEJhY2stY29sb3IgZ3JlZW4uXG4gICAgICBIb3ZlcmVkQXJyID0gW107XG4gICAgICBhcnJCbG9ja3NSZWQgPSBbXTtcbiAgICAgIFByZXZpZXdTaGlwc09uSG92ZXIoXG4gICAgICAgIGUudGFyZ2V0LFxuICAgICAgICBTaGlwQ291bnQsXG4gICAgICAgIEhvdmVyZWRBcnIsXG4gICAgICAgIGFyckJsb2Nrc1JlZCxcbiAgICAgICAgYnRuQ2hlY2tcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICAvL0RvbSBJbnRlcmFjdGlvblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGhhc0NsYXNzKGUudGFyZ2V0LCBcInN1Ym1pdEJ1dHRvblwiKSkge1xuICAgICAgICBsZXQgc3ViQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1YkJ1dHRvbik7XG4gICAgICAgIGxldCBkdW1teUJvYXJkT2JqID0gc3VibWl0QW5kU3RhcnQoKTtcbiAgICAgICAgZHVtbXlCb2FyZCA9IGR1bW15Qm9hcmRPYmouZHVtbXlCb2FyZDtcbiAgICAgICAgUGxheWVyT25lID0gZHVtbXlCb2FyZE9iai5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZT8uaWQgPT09IFwiRHVtbXlCb2FyZFwiKSB7XG4gICAgICAgIGxldCBib3hJZCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGxldCBjaGFuZ2VWYWxPYmogPSB2YWxpZFBsYWNlbWVudFNoaXAoe1xuICAgICAgICAgIGVsZW1lbnQ6IGJveElkLFxuICAgICAgICAgIGxlbmd0aDogU2hpcENvdW50LFxuICAgICAgICAgIEFyclRvQmVDb3BpZWQ6IGFyclRvQXZvaWQsXG4gICAgICAgICAgc2hpcENvb3JkaW5hdGVzQXJyOiBzaGlwQ29vcmRpbmF0ZXNBcnIsXG4gICAgICAgICAgYm9hcmQ6IGR1bW15Qm9hcmQsXG4gICAgICAgICAgYXhpc0RlY2lkZXI6IGJ0bkNoZWNrLFxuICAgICAgICB9KTtcbiAgICAgICAgU2hpcENvdW50ID0gY2hhbmdlVmFsT2JqLmxlbmd0aDtcbiAgICAgICAgYXJyVG9Bdm9pZCA9IGNoYW5nZVZhbE9iai5BcnJUb0JlQ29waWVkO1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBjaGFuZ2VWYWxPYmouc2hpcENvb3JkaW5hdGVzQXJyO1xuXG4gICAgICAgIGlmIChTaGlwQ291bnQgPiA1KSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNEdW1teUJvYXJkXCIpLnN0eWxlW1wicG9pbnRlci1ldmVudHNcIl0gPVxuICAgICAgICAgICAgXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldD8uaWQgPT09IFwiYXhpc0J0blwiKSB7XG4gICAgICAgIGlmIChidG5DaGVjaykge1xuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJZLUFYSVNcIjtcbiAgICAgICAgICBidG5DaGVjayA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJYLUFYSVNcIjtcbiAgICAgICAgICBidG5DaGVjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0Py5pZCA9PT0gXCJzdWJCdG5cIikge1xuICAgICAgICBib2FyZHNPYmogPSBTdGFydEdhbWVBZnRlclBsYWNlbWVudChcbiAgICAgICAgICBTaGlwQ291bnQsXG4gICAgICAgICAgc2hpcENvb3JkaW5hdGVzQXJyLFxuICAgICAgICAgIFBsYXllck9uZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0Py5pZCA9PT0gXCJSZXN0YXJ0QnRuXCIpIHtcbiAgICAgICAgU2hpcENvdW50ID0gMTtcbiAgICAgICAgSG92ZXJlZEFyciA9IFtdO1xuICAgICAgICBhcnJUb0F2b2lkID0gW107XG4gICAgICAgIGFyckJsb2Nrc1JlZCA9IFtdO1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBbXTtcbiAgICAgICAgYnRuQ2hlY2sgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtzXCIpO1xuICAgICAgICBsZXQgZHVtbXlCb2FyZE9iaiA9IFJlc3RhcnRHYW1lKCk7XG4gICAgICAgIGR1bW15Qm9hcmQgPSBkdW1teUJvYXJkT2JqLmR1bW15Qm9hcmQ7XG4gICAgICAgIFBsYXllck9uZSA9IGR1bW15Qm9hcmRPYmoubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU/LmlkID09PSBcIkJvYXJkMlwiKSB7XG4gICAgICAgIGxldCBlbGVtZW50MiA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgd2hvV29uID0gZ2V0V2lubmVyUmVzdWx0KGVsZW1lbnQyLCBib2FyZHNPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyh3aG9Xb24pO1xuICAgICAgICBpZiAod2hvV29uICE9PSBcIk5vIGJvYXJkIGhhcyB3b24gdGhlIGdhbWUgeWV0XCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1dpbm5lcnBhcmFcIikudGV4dENvbnRlbnQgPSB3aG9Xb247XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCb2FyZDFcIikuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQm9hcmQyXCIpLnN0eWxlW1wicG9pbnRlci1ldmVudHNcIl0gPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuIiwiY29uc3QgbWV0aG9kc09iaiA9IHtcbiAgaGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgYmVlbiBoaXRcIjtcbiAgfSxcbiAgaXNTdW5rOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJPaCB0aGUgc2hpcCBoYXMgYmVlbiBzdW5rXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlRoZSBzaGlwIGhhcyBub3QgYmVlbiBzdW5rIHlldFwiO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XG4gIGxldCBTaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgYXJyID0gW107XG4gIGxldCBTaGlwT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG1ldGhvZHNPYmopLCB7XG4gICAgbGVuZ3RoLFxuICAgIFNoaXBMZW5ndGgsXG4gICAgYXJyLFxuICB9KTtcbiAgcmV0dXJuIFNoaXBPYmo7XG59XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgQ3JlYXRlTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvY3JlYXRlTmF2XCI7XG5pbXBvcnQgU3RhcnRHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhcnRHYW1lXCI7XG5cbkNyZWF0ZU5hdigpO1xuXG5TdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==