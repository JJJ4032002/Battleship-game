import Colors from "./components/Colors";
function CreateGrid(params, Board, name = "default") {
  let gameDiv = document.querySelector(".BlocksContainer");
  if (gameDiv === null) {
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("class", "BlocksContainer");
    if (Board === "DummyBoard") {
      gameDiv.setAttribute("id", "DummyBoardContainer");
    }
    let OuterContainer = document.querySelector(".OuterContainer");
    OuterContainer.appendChild(gameDiv);
  }
  const Container = document.createElement("div");
  Container.setAttribute("class", "container");
  Container.setAttribute("id", `${Board}`);
  let ParentContainer = document.createElement("div");
  ParentContainer.setAttribute("id", `${Board}Container`);
  ParentContainer.setAttribute("class", "parentContainer");
  if (name !== "default") {
    let nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    ParentContainer.appendChild(nameHeading);
  }
  ParentContainer.style.width = "100%";
  Container.style.width = "100%";
  ParentContainer.appendChild(Container);
  gameDiv.appendChild(ParentContainer);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.classList.add("Row");
    IndDiv.setAttribute("id", `Row${i}`);
    for (let j = 0; j < params; j++) {
      let indiBlock = document.createElement("div");
      indiBlock.classList.add("box-items");
      indiBlock.setAttribute("data-row", i);
      indiBlock.setAttribute("data-column", j);
      indiBlock.setAttribute("data-coordinates", `${i}${j}`);
      indiBlock.setAttribute("id", `${Board}${i}${j}`);
      indiBlock.style.border = `2px solid ${Colors.darkGreen}`;
      IndDiv.appendChild(indiBlock);
    }

    Container.appendChild(IndDiv);
  }
}

export default CreateGrid;
