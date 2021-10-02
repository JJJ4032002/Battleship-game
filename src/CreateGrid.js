function CreateGrid(params, Board) {
  let gameDiv = document.querySelector(".BlocksContainer");
  if (gameDiv === null) {
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("class", "BlocksContainer");
    let OuterContainer = document.querySelector(".OuterContainer");
    OuterContainer.appendChild(gameDiv);
  }
  const Container = document.createElement("div");
  Container.setAttribute("class", "container");
  Container.setAttribute("id", `${Board}`);
  Container.style.display = "grid";
  Container.style.gridTemplateColumns = "repeat(10,1fr)";
  Container.style.gridTemplateRows = "repeat(10,minmax(35px,1fr)";
  Container.style.width = "100%";
  gameDiv.appendChild(Container);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.style.border = "2px solid #40916c";
    IndDiv.classList.add("box-items");
    IndDiv.setAttribute("data-box", `${Board}${i}`);
    IndDiv.setAttribute("data-box-number", i);
    IndDiv.setAttribute("id", i);
    if (Board === "Board2") {
      IndDiv.style["cursor"] = "pointer";
    }

    Container.appendChild(IndDiv);
  }
}

export default CreateGrid;
