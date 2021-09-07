import submitAndStart from "./components/submitAndStart";

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
        console.log(boards);
      }
    },
    false
  );
})();

export default gameLoop;
