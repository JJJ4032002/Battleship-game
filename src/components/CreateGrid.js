import ElementCreator from "./ElementCreator";
import Colors from "../Colors";
function CreateGrid(RowsColumns, BoardName, name = "default") {
  const Container = ElementCreator("div", {
    className: "container",
    id: `${BoardName}`,
  });
  let ParentContainer = ElementCreator("div", {
    className: "parentContainer",
    id: `${BoardName}Container`,
  });
  if (name !== "default") {
    let nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    ParentContainer.appendChild(nameHeading);
  }
  ParentContainer.appendChild(Container);
  for (let i = 0; i < RowsColumns; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.classList.add("Row");
    IndDiv.setAttribute("id", `Row${i}`);
    for (let j = 0; j < RowsColumns; j++) {
      let indiBlock = document.createElement("div");
      indiBlock.classList.add("box-items");
      indiBlock.setAttribute("data-row", i);
      indiBlock.setAttribute("data-column", j);
      indiBlock.setAttribute("data-coordinates", `${i}${j}`);
      indiBlock.setAttribute("id", `${BoardName}${i}${j}`);
      indiBlock.style.border = `2px solid ${Colors.white}`;
      IndDiv.appendChild(indiBlock);
    }

    Container.appendChild(IndDiv);
  }
  return ParentContainer;
}

export default CreateGrid;
