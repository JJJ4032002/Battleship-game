import SinglePlayerShipPlacement from "./Components/SinglePlayer/ShipPlacement";
import {
  FillDetails as SinglePlayerFillDetails,
  DetailsValidation as SinglePlayerDetailsValidation,
} from "./Components/SinglePlayer/FillDetails";
let gameLoop = (function () {
  function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

  // Listening to mouseover events
  document.addEventListener("mouseover", function (e) {});

  //Dom Interaction
  document.addEventListener(
    "click",
    function (e) {
      console.log(e.target);
      if (hasClass(e.target, "HomeButton")) {
        let Option = e.target.textContent;
        if (Option === "Single Player") {
          SinglePlayerFillDetails();
        }
      } else if (e.target.id === "SinglePlayerDetailsButton") {
        let name = SinglePlayerDetailsValidation();
        if (name === "No Name") return;
        else {
          SinglePlayerShipPlacement(name);
        }
      }
    },
    false
  );
})();

export default gameLoop;
