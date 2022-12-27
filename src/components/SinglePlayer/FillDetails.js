import ElementCreator from "../ElementCreator";

function FillDetails() {
  let gameDiv = document.querySelector("#gameContainer");
  gameDiv.innerHTML = "";
  let SinglePlayerDiv = ElementCreator("div", { className: "SinglePlayer" });
  let form = ElementCreator("form", {
    action: "",
    className: "SinglePlayerForm",
  });
  let labelPlayer = ElementCreator("label", {
    for: "name",
    textContent: "Please Enter your name",
  });
  let inputPlayer = ElementCreator("input", {
    id: "singlePlayerName",
    name: "singlePlayerName",
    placeholder: "Please enter your name",
    value: "",
  });
  let errorSpan = ElementCreator("span", {
    className: "ErrorText",
    id: "EmptyName",
    textContent: "Player name cannot be empty!",
  });
  let submitButton = ElementCreator("Button", {
    className: "submitButton",
    id: "SinglePlayerDetailsButton",
    type: "Button",
    textContent: "Submit",
  });
  form.append(labelPlayer, inputPlayer, errorSpan, submitButton);
  SinglePlayerDiv.append(form);
  gameDiv.appendChild(SinglePlayerDiv);
}

export default FillDetails;
