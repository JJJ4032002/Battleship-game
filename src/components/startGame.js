import elementCreator from "./elementCreator";
let mainDiv = document.querySelector(".OuterContainer");
let ClickButton = null;
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
export default StartGame;
