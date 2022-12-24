/**
 * @jest-environment jsdom
 */

import CreateGrid from "./CreateGrid";

test("Creation of grid with correct length and default heading name", () => {
  document.body.innerHTML = `
     <div class = "OuterContainer">
     <div class = "BlocksContainer">
     </div>
     </div>
    `;
  CreateGrid(2, "Board1");
  expect(document.querySelector(".container").children.length).toBe(2);
  expect(document.querySelector("h2")).toBeNull();
});

test("Creation of grid with correct length and user-given heading name", () => {
  document.body.innerHTML = `
     <div class = "OuterContainer">
     <div class = "BlocksContainer">
     </div>
     </div>
    `;
  CreateGrid(2, "Board1", "Heading");
  expect(document.querySelector(".container").children.length).toBe(2);
  expect(document.querySelector("h2").textContent).toBe("Heading");
});

test("Creation of grid when params is 0 and default heading", () => {
  document.body.innerHTML = `
     <div class = "OuterContainer">
     <div class = "BlocksContainer">
     </div>
     </div>
    `;
  CreateGrid();
  expect(document.querySelector(".container").children.length).toBe(0);
  expect(document.querySelector("h2")).toBeNull();
});
