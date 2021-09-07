import startMainGame from "./startMainGame";

function submitAndStart() {
  let Input = document.querySelector("#name");
  let name = Input.value;
  if (name === "") {
    alert("Please Enter the name");
  } else {
    let gameDiv = document.querySelector("#gameContainer");
    gameDiv.innerHTML = "";
    let returnBoards = startMainGame();
    console.log(returnBoards);
    return returnBoards;
  }
}
export default submitAndStart;
