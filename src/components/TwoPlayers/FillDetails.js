import ElementCreator from "../ElementCreator";

function FillDetails() {
  let gameDiv = document.querySelector("#gameContainer");
  gameDiv.innerHTML = "";
  let TwoPlayersDiv = ElementCreator("div", { className: "TwoPlayers" });
  let form = ElementCreator("form", {
    action: "",
    className: "TwoPlayersForm",
  });
  let labelPlayerOne = ElementCreator("label", {
    for: "PlayerOne",
    textContent: "Player One",
  });
  let inputPlayerOne = ElementCreator("input", {
    id: "PlayerOne",
    name: "PlayerOne",
    placeholder: "Please enter your name",
    value: "",
  });
  let errorSpanOne = ElementCreator("span", {
    className: "ErrorText",
    id: "EmptyNameOne",
    textContent: "Player name cannot be empty!",
  });
  let labelPlayerTwo = ElementCreator("label", {
    for: "PlayerTwo",
    textContent: "Player Two",
  });
  let inputPlayerTwo = ElementCreator("input", {
    id: "PlayerTwo",
    name: "PlayerTwo",
    placeholder: "Please enter your name",
    value: "",
  });
  let errorSpanTwo = ElementCreator("span", {
    className: "ErrorText",
    id: "EmptyNameTwo",
    textContent: "Player name cannot be empty!",
  });
  let submitButton = ElementCreator("Button", {
    className: "submitButton",
    id: "TwoPlayersDetailsButton",
    type: "Button",
    textContent: "Submit",
  });
  form.append(
    labelPlayerOne,
    inputPlayerOne,
    errorSpanOne,
    labelPlayerTwo,
    inputPlayerTwo,
    errorSpanTwo,
    submitButton
  );
  TwoPlayersDiv.append(form);
  gameDiv.appendChild(TwoPlayersDiv);
}

export default FillDetails;
