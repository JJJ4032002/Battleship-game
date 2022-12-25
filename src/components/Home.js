import ElementCreator from "./ElementCreator";
import HomeVideo from "../assets/HomeVideo.mp4";
function Home() {
  let OuterContainer = document.querySelector(".OuterContainer");
  OuterContainer.innerHTML = `
    <video id = "HomeVideo" autoplay muted loop>
  <source src="${HomeVideo}" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
 <div class="modal"></div>
  `;
  let GameDiv = ElementCreator("div", { id: "gameContainer" });
  let navbar = createNavbar();
  GameDiv.innerHTML = `
  <div class="Options">
       <Button class = "HomeButton">Single Player</Button>
       <Button class = "HomeButton ">Two Players</Button>
       <Button class = "HomeButton">Check Winners</Button>
      </div>`;
  OuterContainer.append(navbar, GameDiv);
}
function createNavbar() {
  let nav = ElementCreator("nav", { className: "navContainer" });
  let Heading = ElementCreator("h1", { textContent: "Battleship" });
  nav.appendChild(Heading);
  return nav;
}

export default Home;
