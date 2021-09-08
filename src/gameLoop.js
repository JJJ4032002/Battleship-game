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
        let index = Math.floor(100 * Math.random());
        index = CheckUnique(index);
        console.log(index);
        let boxClicked = e.target.id;
        let dataShip = e.target.getAttribute("data-ship");

        checkWhoWon(boards);
      }
    },
    false
  );
})();

export default gameLoop;
