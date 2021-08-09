function CreateGrid(params) {
  const Container = document.createElement("div");
  Container.setAttribute("id", "container");
  document.body.appendChild(Container);
  for (let i = 0; i < params; i++) {
    const IndDiv = document.createElement("div");
    IndDiv.setAttribute("id", i);
    Container.appendChild(IndDiv);
  }
}

export default CreateGrid;
