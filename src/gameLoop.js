import submitAndStart from "./components/submitAndStart";
import checkWhoWon from "./components/checkWhoWon";
import CheckUnique from "./components/checkUnique";
let gameLoop = (function () {
  let boards;

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
        boards = submitAndStart();
      }
      if (e.target.parentNode?.id === "Board2") {
        console.log("Second Board clicked");
        let position1 = Math.floor(100 * Math.random());
        position1 = CheckUnique(position1);

        var element1 = document.querySelector(
          `div[data-box=Board1${position1}]`
        );
        let dataShip1 = element1.getAttribute("data-ship");
        let position2 = e.target.id;
        let dataShip2 = e.target.getAttribute("data-ship");

        checkWhoWon(boards, position1, dataShip1, position2, dataShip2);
      }
    },
    false
  );
})();

export default gameLoop;
