import elementCreator from "./elementCreator";
let mainDiv = document.querySelector(".OuterContainer");
function createNavbar() {
  let nav = elementCreator("nav", { className: "navContainer" });
  let Heading = document.createElement("h1");
  Heading.textContent = "Battleship";
  nav.appendChild(Heading);
  mainDiv.appendChild(nav);
}
export default createNavbar;
