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
  gameDiv.appendChild(Container);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyx3REFBa0I7O0FBRWxCLHdEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9DcmVhdGVHcmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9QbGFjZUF0UG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ3JlYXRlR3JpZChwYXJhbXMsIEJvYXJkKSB7XG4gIGxldCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5CbG9ja3NDb250YWluZXJcIik7XG4gIGlmIChnYW1lRGl2ID09PSBudWxsKSB7XG4gICAgZ2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkJsb2Nrc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgT3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk91dGVyQ29udGFpbmVyXCIpO1xuICAgIE91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVEaXYpO1xuICB9XG4gIGNvbnN0IENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhaW5lclwiKTtcbiAgQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke0JvYXJkfWApO1xuICBnYW1lRGl2LmFwcGVuZENoaWxkKENvbnRhaW5lcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zOyBpKyspIHtcbiAgICBjb25zdCBJbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIEluZERpdi5jbGFzc0xpc3QuYWRkKFwiYm94LWl0ZW1zXCIpO1xuICAgIEluZERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKTtcbiAgICBDb250YWluZXIuYXBwZW5kQ2hpbGQoSW5kRGl2KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVHcmlkO1xuIiwiZnVuY3Rpb24gUGxhY2VBdFBvc2l0aW9uKGUpIHtcbiAgbGV0IFN0cmluZ051bSA9IHRoaXMucG9zaXRpb24udG9TdHJpbmcoKTtcblxuICBpZiAoZS5pZCA9PT0gU3RyaW5nTnVtICYmIHRoaXMuU2hpcENvdW50IDwgdGhpcy5TaGlwTGVuZ3RoKSB7XG4gICAgZS50ZXh0Q29udGVudCA9IFwiU1wiO1xuICAgIGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwXCIsIHRoaXMuU2hpcExlbmd0aCk7XG4gICAgdGhpcy5wb3NpdGlvbisrO1xuICAgIHRoaXMuU2hpcENvdW50Kys7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VBdFBvc2l0aW9uO1xuIiwiaW1wb3J0IENyZWF0ZUdyaWQgZnJvbSBcIi4vQ3JlYXRlR3JpZFwiO1xuaW1wb3J0IFBsYWNlQXRQb3NpdGlvbiBmcm9tIFwiLi9QbGFjZUF0UG9zaXRpb25cIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuXG5jb25zdCBtZXRob2RPYmogPSB7XG4gIHBsYWNlU2hpcDogZnVuY3Rpb24gKFNoaXBMZW5ndGgsIHBvc2l0aW9uLCBCb2FyZElkKSB7XG4gICAgdGhpcy5Ob09mU2hpcHMrKztcbiAgICBsZXQgQ2hpbGROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0JvYXJkSWR9YCkuY2hpbGRyZW47XG4gICAgQ2hpbGROb2RlcyA9IFsuLi5DaGlsZE5vZGVzXTtcbiAgICBsZXQgbmV3U2hpcCA9IHNoaXAoU2hpcExlbmd0aCk7XG4gICAgdGhpcy5zaGlwc0Fyci5wdXNoKG5ld1NoaXApO1xuICAgIENoaWxkTm9kZXMuZm9yRWFjaChQbGFjZUF0UG9zaXRpb24sIHtcbiAgICAgIFNoaXBMZW5ndGgsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIFNoaXBDb3VudDogMCxcbiAgICB9KTtcbiAgfSxcbiAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5Db29yZGluYXRlc0Fyci5pbmRleE9mKHBvc2l0aW9uKTtcbiAgICBpZiAoc2hpcExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLkNvb3JkaW5hdGVzQXJyLnB1c2gocG9zaXRpb24pO1xuICAgICAgcmV0dXJuIFwiRW5lbXkgTWlzc2VkIHRoZSBhdHRhY2tcIjtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5Db29yZGluYXRlc0Fyci5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIGZ1bmN0aW9uIEZpbmRTaGlwKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc2hpcExlbmd0aCA9PT0gcGFyYW1zLlNoaXBMZW5ndGg7XG4gICAgICB9XG4gICAgICBsZXQgU2hpcEluZGV4ID0gdGhpcy5zaGlwc0Fyci5maW5kSW5kZXgoRmluZFNoaXApO1xuICAgICAgbGV0IHRoYXRTaGlwID0gdGhpcy5zaGlwc0FycltTaGlwSW5kZXhdO1xuXG4gICAgICB0aGF0U2hpcC5oaXQocG9zaXRpb24pO1xuICAgICAgbGV0IHNoaXBDb25kaXRpb24gPSB0aGF0U2hpcC5pc1N1bmsoKTtcbiAgICAgIGlmIChzaGlwQ29uZGl0aW9uID09PSBcIk9oIHRoZSBzaGlwIGhhcyBiZWVuIHN1bmtcIikge1xuICAgICAgICB0aGlzLlNoaXBzU3Vua0Fyci5wdXNoKHRoYXRTaGlwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiVGhlIHNoaXAgaGFzIGJlZW4gaGl0IGFuZCBDb29yZGluYXRlcyBoYXZlIGJlZW4gbm90ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiWW91IGhhdmUgYXR0YWNrZWQgdGhpcyBwb3NpdGlvblwiO1xuICAgIH1cbiAgfSxcbiAgQWxsU2hpcHNTdW5rOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuU2hpcHNTdW5rQXJyLmxlbmd0aCA9PT0gdGhpcy5Ob09mU2hpcHMpIHtcbiAgICAgIHJldHVybiBcIkFsbCB0aGUgc2hpcHMgYXJlIHN1bmtcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiQWxsIHRoZSBzaGlwcyBoYXZlIG5vdCBiZWVuIHN1bmsgeWV0XCI7XG4gICAgfVxuICB9LFxufTtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKGxlbmd0aCwgQm9hcmQpIHtcbiAgbGV0IHNoaXBzQXJyID0gW107XG4gIGxldCBDb29yZGluYXRlc0FyciA9IFtdO1xuICBsZXQgTm9PZlNoaXBzID0gMDtcbiAgbGV0IFNoaXBzU3Vua0FyciA9IFtdO1xuICBDcmVhdGVHcmlkKGxlbmd0aCwgQm9hcmQpO1xuICBsZXQgZ2FtZUJvYXJkT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG1ldGhvZE9iaiksIHtcbiAgICBzaGlwc0FycixcbiAgICBDb29yZGluYXRlc0FycixcbiAgICBOb09mU2hpcHMsXG4gICAgU2hpcHNTdW5rQXJyLFxuICB9KTtcbiAgcmV0dXJuIGdhbWVCb2FyZE9iajtcbn1cblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRGYWN0b3J5XCI7XG5cbmxldCBnYW1lTG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PdXRlckNvbnRhaW5lclwiKTtcbiAgbGV0IENsaWNrQnV0dG9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuICAvL0RvbSBJbnRlcmFjdGlvblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGhhc0NsYXNzKGUudGFyZ2V0LCBcInN1Ym1pdEJ1dHRvblwiKSkge1xuICAgICAgICBsZXQgc3ViQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1YkJ1dHRvbik7XG4gICAgICAgIHN1Ym1pdEFuZFN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIGZ1bmN0aW9uIENyZWF0ZU5hdigpIHtcbiAgICBsZXQgbmF2ID0gZWxlbWVudENyZWF0b3IoXCJuYXZcIiwgeyBjbGFzc05hbWU6IFwibmF2Q29udGFpbmVyXCIgfSk7XG4gICAgbGV0IEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChIZWFkaW5nKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG5hdik7XG4gIH1cblxuICBmdW5jdGlvbiBTdGFydEdhbWUoKSB7XG4gICAgbGV0IEdhbWVEaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLCB7IGlkOiBcImdhbWVDb250YWluZXJcIiB9KTtcbiAgICBHYW1lRGl2LmlubmVySFRNTCA9IGA8bGFiZWwgZm9yPVwiTmFtZVwiPkVudGVyIHlvdXIgTmFtZTwvbGFiZWw+XG4gICAgPGJyPlxuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2YWx1ZT1cIlwiPlxuICAgICA8YnI+XG4gICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRCdXR0b25cIj5QTEFZPC9idXR0b24+XG4gICAgYDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKEdhbWVEaXYpO1xuICAgIENsaWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJtaXRBbmRTdGFydCgpIHtcbiAgICBsZXQgSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgbGV0IG5hbWUgPSBJbnB1dC52YWx1ZTtcbiAgICBpZiAobmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgdGhlIG5hbWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lQ29udGFpbmVyXCIpO1xuICAgICAgZ2FtZURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgc3RhcnRNYWluR2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TWFpbkdhbWUoKSB7XG4gICAgbGV0IG5ld0JvYXJkMSA9IGdhbWVCb2FyZCgxMDAsIFwiQm9hcmQxXCIpO1xuICAgIGxldCBuZXdCb2FyZDIgPSBnYW1lQm9hcmQoMTAwLCBcIkJvYXJkMlwiKTtcbiAgICBQbGFjZUFsbFNoaXBzKFxuICAgICAgbmV3Qm9hcmQxLFxuICAgICAgW1xuICAgICAgICB7IGxlbmd0aDogMSwgcG9zaXRpb246IDc4IH0sXG4gICAgICAgIHsgbGVuZ3RoOiAyLCBwb3NpdGlvbjogMiB9LFxuICAgICAgICB7IGxlbmd0aDogMywgcG9zaXRpb246IDExIH0sXG4gICAgICAgIHsgbGVuZ3RoOiA0LCBwb3NpdGlvbjogMjIgfSxcbiAgICAgICAgeyBsZW5ndGg6IDUsIHBvc2l0aW9uOiA1MyB9LFxuICAgICAgXSxcbiAgICAgIFwiQm9hcmQxXCJcbiAgICApO1xuICAgIFBsYWNlQWxsU2hpcHMoXG4gICAgICBuZXdCb2FyZDIsXG4gICAgICBbXG4gICAgICAgIHsgbGVuZ3RoOiAxLCBwb3NpdGlvbjogOTkgfSxcbiAgICAgICAgeyBsZW5ndGg6IDIsIHBvc2l0aW9uOiA3IH0sXG4gICAgICAgIHsgbGVuZ3RoOiAzLCBwb3NpdGlvbjogMzUgfSxcbiAgICAgICAgeyBsZW5ndGg6IDQsIHBvc2l0aW9uOiA2NSB9LFxuICAgICAgICB7IGxlbmd0aDogNSwgcG9zaXRpb246IDcxIH0sXG4gICAgICBdLFxuICAgICAgXCJCb2FyZDJcIlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBQbGFjZUFsbFNoaXBzKEJvYXJkLCBzaGlwc0FyciwgQm9hcmRJZCkge1xuICAgIHNoaXBzQXJyLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIEJvYXJkLnBsYWNlU2hpcChlLmxlbmd0aCwgZS5wb3NpdGlvbiwgQm9hcmRJZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50Q3JlYXRvcih0eXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBlbGVbcHJvcF0gPSBwcm9wZXJ0aWVzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlO1xuICB9XG5cbiAgcmV0dXJuIHsgQ3JlYXRlTmF2LCBTdGFydEdhbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuIiwiY29uc3QgbWV0aG9kc09iaiA9IHtcbiAgaGl0OiBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmFyci5maW5kSW5kZXgoKHgpID0+IHggPT09IHBvc2l0aW9uKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmFyci5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICByZXR1cm4gXCJUaGUgc2hpcCBoYXMgYmVlbiBoaXRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiVGhpcyBwb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGhpdFwiO1xuICAgIH1cbiAgfSxcbiAgaXNTdW5rOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJPaCB0aGUgc2hpcCBoYXMgYmVlbiBzdW5rXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlRoZSBzaGlwIGhhcyBub3QgYmVlbiBzdW5rIHlldFwiO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XG4gIGxldCBTaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgYXJyID0gW107XG4gIGxldCBTaGlwT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG1ldGhvZHNPYmopLCB7XG4gICAgbGVuZ3RoLFxuICAgIFNoaXBMZW5ndGgsXG4gICAgYXJyLFxuICB9KTtcbiAgcmV0dXJuIFNoaXBPYmo7XG59XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWVMb29wXCI7XG5cbmdhbWVMb29wLkNyZWF0ZU5hdigpO1xuXG5nYW1lTG9vcC5TdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==