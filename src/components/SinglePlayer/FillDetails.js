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
  let submitButton = ElementCreator("Button", {
    className: "submitButton",
    type: Button,
    textContent: "Submit",
  });
  form.append(labelPlayer, inputPlayer, submitButton);
  SinglePlayerDiv.append(form);
  gameDiv.appendChild(SinglePlayerDiv);
}

function DetailsValidation() {
  let SinglePlayerName = document.querySelector("#singlePlayerName").value;
  if (SinglePlayerName === "") {
    alert("Player Name cannot be empty");
    return "No Name";
  }
  return SinglePlayerName;
}

export { FillDetails, DetailsValidation };
