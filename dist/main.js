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
  Container.style.display = "grid";
  Container.style.gridTemplateColumns = "repeat(10,1fr)";
  Container.style.gridTemplateRows = "repeat(10,1fr)";
  Container.style.width = "100%";
  gameDiv.appendChild(Container);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.style.border = "2px solid black";
    IndDiv.classList.add("box-items");
    IndDiv.setAttribute("id", i);
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
function PlaceAtPosition(e) {
  let StringNum = this.position.toString();

  if (e.id === StringNum && this.ShipCount < this.ShipLength) {
    e.textContent = "S";
    e.setAttribute("data-ship", this.ShipLength);
    this.position++;
    this.ShipCount++;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceAtPosition);


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
  placeShip: function (ShipLength, position, BoardId) {
    this.NoOfShips++;
    let ChildNodes = document.querySelector(`#${BoardId}`).children;
    ChildNodes = [...ChildNodes];
    let newShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.ship)(ShipLength);
    this.shipsArr.push(newShip);
    ChildNodes.forEach(_PlaceAtPosition__WEBPACK_IMPORTED_MODULE_1__.default, {
      ShipLength,
      position,
      ShipCount: 0,
    });
  },
  receiveAttack: function (position, shipLength) {
    let index = this.CoordinatesArr.indexOf(position);
    if (shipLength === undefined) {
      this.CoordinatesArr.push(position);
      return "Enemy Missed the attack";
    } else if (index === -1) {
      this.CoordinatesArr.push(position);
      function FindShip(params) {
        return shipLength === params.ShipLength;
      }
      let ShipIndex = this.shipsArr.findIndex(FindShip);
      let thatShip = this.shipsArr[ShipIndex];

      thatShip.hit(position);
      let shipCondition = thatShip.isSunk();
      if (shipCondition === "Oh the ship has been sunk") {
        this.ShipsSunkArr.push(thatShip);
      }

      return "The ship has been hit and Coordinates have been noted";
    } else {
      return "You have attacked this position";
    }
  },
  AllShipsSunk: function () {
    if (this.ShipsSunkArr.length === this.NoOfShips) {
      return "All the ships are sunk";
    } else {
      return "All the ships have not been sunk yet";
    }
  },
};

function gameBoard(length, Board) {
  let shipsArr = [];
  let CoordinatesArr = [];
  let NoOfShips = 0;
  let ShipsSunkArr = [];
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_0__.default)(length, Board);
  let gameBoardObj = Object.assign(Object.create(methodObj), {
    shipsArr,
    CoordinatesArr,
    NoOfShips,
    ShipsSunkArr,
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
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/gameBoardFactory.js");


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
     <button class="submitButton">PLAY</button>
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
    let newBoard1 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.gameBoard)(100, "Board1");
    let newBoard2 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.gameBoard)(100, "Board2");
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
  hit: function (position) {
    let index = this.arr.findIndex((x) => x === position);
    if (index === -1) {
      this.arr.push(position);
      this.length--;
      return "The ship has been hit";
    } else {
      return "This position has already been hit";
    }
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


_gameLoop__WEBPACK_IMPORTED_MODULE_0__.default.CreateNav();

_gameLoop__WEBPACK_IMPORTED_MODULE_0__.default.StartGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEMsd0RBQWtCOztBQUVsQix3REFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvQ3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvUGxhY2VBdFBvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENyZWF0ZUdyaWQocGFyYW1zLCBCb2FyZCkge1xuICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvY2tzQ29udGFpbmVyXCIpO1xuICBpZiAoZ2FtZURpdiA9PT0gbnVsbCkge1xuICAgIGdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJCbG9ja3NDb250YWluZXJcIik7XG4gICAgbGV0IE91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgICBPdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lRGl2KTtcbiAgfVxuICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gIENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtCb2FyZH1gKTtcbiAgQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCgxMCwxZnIpXCI7XG4gIENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJyZXBlYXQoMTAsMWZyKVwiO1xuICBDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgZ2FtZURpdi5hcHBlbmRDaGlsZChDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtczsgaSsrKSB7XG4gICAgY29uc3QgSW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBJbmREaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICBJbmREaXYuY2xhc3NMaXN0LmFkZChcImJveC1pdGVtc1wiKTtcbiAgICBJbmREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XG4gICAgQ29udGFpbmVyLmFwcGVuZENoaWxkKEluZERpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlR3JpZDtcbiIsImZ1bmN0aW9uIFBsYWNlQXRQb3NpdGlvbihlKSB7XG4gIGxldCBTdHJpbmdOdW0gPSB0aGlzLnBvc2l0aW9uLnRvU3RyaW5nKCk7XG5cbiAgaWYgKGUuaWQgPT09IFN0cmluZ051bSAmJiB0aGlzLlNoaXBDb3VudCA8IHRoaXMuU2hpcExlbmd0aCkge1xuICAgIGUudGV4dENvbnRlbnQgPSBcIlNcIjtcbiAgICBlLnNldEF0dHJpYnV0ZShcImRhdGEtc2hpcFwiLCB0aGlzLlNoaXBMZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24rKztcbiAgICB0aGlzLlNoaXBDb3VudCsrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlQXRQb3NpdGlvbjtcbiIsImltcG9ydCBDcmVhdGVHcmlkIGZyb20gXCIuL0NyZWF0ZUdyaWRcIjtcbmltcG9ydCBQbGFjZUF0UG9zaXRpb24gZnJvbSBcIi4vUGxhY2VBdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY29uc3QgbWV0aG9kT2JqID0ge1xuICBwbGFjZVNoaXA6IGZ1bmN0aW9uIChTaGlwTGVuZ3RoLCBwb3NpdGlvbiwgQm9hcmRJZCkge1xuICAgIHRoaXMuTm9PZlNoaXBzKys7XG4gICAgbGV0IENoaWxkTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtCb2FyZElkfWApLmNoaWxkcmVuO1xuICAgIENoaWxkTm9kZXMgPSBbLi4uQ2hpbGROb2Rlc107XG4gICAgbGV0IG5ld1NoaXAgPSBzaGlwKFNoaXBMZW5ndGgpO1xuICAgIHRoaXMuc2hpcHNBcnIucHVzaChuZXdTaGlwKTtcbiAgICBDaGlsZE5vZGVzLmZvckVhY2goUGxhY2VBdFBvc2l0aW9uLCB7XG4gICAgICBTaGlwTGVuZ3RoLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBTaGlwQ291bnQ6IDAsXG4gICAgfSk7XG4gIH0sXG4gIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2hpcExlbmd0aCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuQ29vcmRpbmF0ZXNBcnIuaW5kZXhPZihwb3NpdGlvbik7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5Db29yZGluYXRlc0Fyci5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBcIkVuZW15IE1pc3NlZCB0aGUgYXR0YWNrXCI7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuQ29vcmRpbmF0ZXNBcnIucHVzaChwb3NpdGlvbik7XG4gICAgICBmdW5jdGlvbiBGaW5kU2hpcChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGggPT09IHBhcmFtcy5TaGlwTGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGV0IFNoaXBJbmRleCA9IHRoaXMuc2hpcHNBcnIuZmluZEluZGV4KEZpbmRTaGlwKTtcbiAgICAgIGxldCB0aGF0U2hpcCA9IHRoaXMuc2hpcHNBcnJbU2hpcEluZGV4XTtcblxuICAgICAgdGhhdFNoaXAuaGl0KHBvc2l0aW9uKTtcbiAgICAgIGxldCBzaGlwQ29uZGl0aW9uID0gdGhhdFNoaXAuaXNTdW5rKCk7XG4gICAgICBpZiAoc2hpcENvbmRpdGlvbiA9PT0gXCJPaCB0aGUgc2hpcCBoYXMgYmVlbiBzdW5rXCIpIHtcbiAgICAgICAgdGhpcy5TaGlwc1N1bmtBcnIucHVzaCh0aGF0U2hpcCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlRoZSBzaGlwIGhhcyBiZWVuIGhpdCBhbmQgQ29vcmRpbmF0ZXMgaGF2ZSBiZWVuIG5vdGVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIllvdSBoYXZlIGF0dGFja2VkIHRoaXMgcG9zaXRpb25cIjtcbiAgICB9XG4gIH0sXG4gIEFsbFNoaXBzU3VuazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLlNoaXBzU3Vua0Fyci5sZW5ndGggPT09IHRoaXMuTm9PZlNoaXBzKSB7XG4gICAgICByZXR1cm4gXCJBbGwgdGhlIHNoaXBzIGFyZSBzdW5rXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIkFsbCB0aGUgc2hpcHMgaGF2ZSBub3QgYmVlbiBzdW5rIHlldFwiO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZChsZW5ndGgsIEJvYXJkKSB7XG4gIGxldCBzaGlwc0FyciA9IFtdO1xuICBsZXQgQ29vcmRpbmF0ZXNBcnIgPSBbXTtcbiAgbGV0IE5vT2ZTaGlwcyA9IDA7XG4gIGxldCBTaGlwc1N1bmtBcnIgPSBbXTtcbiAgQ3JlYXRlR3JpZChsZW5ndGgsIEJvYXJkKTtcbiAgbGV0IGdhbWVCb2FyZE9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShtZXRob2RPYmopLCB7XG4gICAgc2hpcHNBcnIsXG4gICAgQ29vcmRpbmF0ZXNBcnIsXG4gICAgTm9PZlNoaXBzLFxuICAgIFNoaXBzU3Vua0FycixcbiAgfSk7XG4gIHJldHVybiBnYW1lQm9hcmRPYmo7XG59XG5cbmV4cG9ydCB7IGdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuXG5sZXQgZ2FtZUxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3V0ZXJDb250YWluZXJcIik7XG4gIGxldCBDbGlja0J1dHRvbiA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cbiAgLy9Eb20gSW50ZXJhY3Rpb25cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhlLnRhcmdldCwgXCJzdWJtaXRCdXR0b25cIikpIHtcbiAgICAgICAgbGV0IHN1YkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdWJCdXR0b24pO1xuICAgICAgICBzdWJtaXRBbmRTdGFydCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICBmdW5jdGlvbiBDcmVhdGVOYXYoKSB7XG4gICAgbGV0IG5hdiA9IGVsZW1lbnRDcmVhdG9yKFwibmF2XCIsIHsgY2xhc3NOYW1lOiBcIm5hdkNvbnRhaW5lclwiIH0pO1xuICAgIGxldCBIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoSGVhZGluZyk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gU3RhcnRHYW1lKCkge1xuICAgIGxldCBHYW1lRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwgeyBpZDogXCJnYW1lQ29udGFpbmVyXCIgfSk7XG4gICAgR2FtZURpdi5pbm5lckhUTUwgPSBgPGxhYmVsIGZvcj1cIk5hbWVcIj5FbnRlciB5b3VyIE5hbWU8L2xhYmVsPlxuICAgIDxicj5cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9XCJcIj5cbiAgICAgPGJyPlxuICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0QnV0dG9uXCI+UExBWTwvYnV0dG9uPlxuICAgIGA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChHYW1lRGl2KTtcbiAgICBDbGlja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnV0dG9uXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0QW5kU3RhcnQoKSB7XG4gICAgbGV0IElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgIGxldCBuYW1lID0gSW5wdXQudmFsdWU7XG4gICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIHRoZSBuYW1lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZUNvbnRhaW5lclwiKTtcbiAgICAgIGdhbWVEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHN0YXJ0TWFpbkdhbWUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE1haW5HYW1lKCkge1xuICAgIGxldCBuZXdCb2FyZDEgPSBnYW1lQm9hcmQoMTAwLCBcIkJvYXJkMVwiKTtcbiAgICBsZXQgbmV3Qm9hcmQyID0gZ2FtZUJvYXJkKDEwMCwgXCJCb2FyZDJcIik7XG4gICAgUGxhY2VBbGxTaGlwcyhcbiAgICAgIG5ld0JvYXJkMSxcbiAgICAgIFtcbiAgICAgICAgeyBsZW5ndGg6IDEsIHBvc2l0aW9uOiA3OCB9LFxuICAgICAgICB7IGxlbmd0aDogMiwgcG9zaXRpb246IDIgfSxcbiAgICAgICAgeyBsZW5ndGg6IDMsIHBvc2l0aW9uOiAxMSB9LFxuICAgICAgICB7IGxlbmd0aDogNCwgcG9zaXRpb246IDIyIH0sXG4gICAgICAgIHsgbGVuZ3RoOiA1LCBwb3NpdGlvbjogNTMgfSxcbiAgICAgIF0sXG4gICAgICBcIkJvYXJkMVwiXG4gICAgKTtcbiAgICBQbGFjZUFsbFNoaXBzKFxuICAgICAgbmV3Qm9hcmQyLFxuICAgICAgW1xuICAgICAgICB7IGxlbmd0aDogMSwgcG9zaXRpb246IDk5IH0sXG4gICAgICAgIHsgbGVuZ3RoOiAyLCBwb3NpdGlvbjogNyB9LFxuICAgICAgICB7IGxlbmd0aDogMywgcG9zaXRpb246IDM1IH0sXG4gICAgICAgIHsgbGVuZ3RoOiA0LCBwb3NpdGlvbjogNjUgfSxcbiAgICAgICAgeyBsZW5ndGg6IDUsIHBvc2l0aW9uOiA3MSB9LFxuICAgICAgXSxcbiAgICAgIFwiQm9hcmQyXCJcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gUGxhY2VBbGxTaGlwcyhCb2FyZCwgc2hpcHNBcnIsIEJvYXJkSWQpIHtcbiAgICBzaGlwc0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBCb2FyZC5wbGFjZVNoaXAoZS5sZW5ndGgsIGUucG9zaXRpb24sIEJvYXJkSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudENyZWF0b3IodHlwZSwgcHJvcGVydGllcykge1xuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IHByb3AgaW4gcHJvcGVydGllcykge1xuICAgICAgZWxlW3Byb3BdID0gcHJvcGVydGllc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZTtcbiAgfVxuXG4gIHJldHVybiB7IENyZWF0ZU5hdiwgU3RhcnRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcbiIsImNvbnN0IG1ldGhvZHNPYmogPSB7XG4gIGhpdDogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5hcnIuZmluZEluZGV4KCh4KSA9PiB4ID09PSBwb3NpdGlvbik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5hcnIucHVzaChwb3NpdGlvbik7XG4gICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIGJlZW4gaGl0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlRoaXMgcG9zaXRpb24gaGFzIGFscmVhZHkgYmVlbiBoaXRcIjtcbiAgICB9XG4gIH0sXG4gIGlzU3VuazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiT2ggdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgbm90IGJlZW4gc3VuayB5ZXRcIjtcbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBzaGlwKGxlbmd0aCkge1xuICBsZXQgU2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IGFyciA9IFtdO1xuICBsZXQgU2hpcE9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShtZXRob2RzT2JqKSwge1xuICAgIGxlbmd0aCxcbiAgICBTaGlwTGVuZ3RoLFxuICAgIGFycixcbiAgfSk7XG4gIHJldHVybiBTaGlwT2JqO1xufVxuXG5leHBvcnQgeyBzaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnYW1lTG9vcCBmcm9tIFwiLi9nYW1lTG9vcFwiO1xuXG5nYW1lTG9vcC5DcmVhdGVOYXYoKTtcblxuZ2FtZUxvb3AuU3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=