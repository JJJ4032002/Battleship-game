/**
 * @jest-environment jsdom
 */

import PlaceAtPosition from "./PlaceAtPosition";

test("Ships placed correctly on player board - showed by the array filled with places to avoid", () => {
  document.body.innerHTML = `
     <div  id = "Board100">
     </div>
      <div id = "Board101">
     </div>
    `;
  expect(PlaceAtPosition(0, 0, 2, true, "Board1").length).toBe(2);
  expect(document.querySelector("#Board100").style.backgroundColor).toBe(
    "rgb(110, 235, 94)"
  );
});
test("Placing ship with length 0", () => {
  document.body.innerHTML = `
     <div  id = "Board100">
     </div>
      <div id = "Board101">
     </div>
    `;
  expect(PlaceAtPosition(0, 0, 0, true, "Board1").length).toBe(0);
});
test("No parameters passed", () => {
  document.body.innerHTML = `
     <div  id = "Board100">
     </div>
      <div id = "Board101">
     </div>
    `;
  expect(PlaceAtPosition().length).toBe(0);
});

test("Ships placed correctly on enemy board - showed by the array filled with places to avoid", () => {
  document.body.innerHTML = `
     <div  id = "Board200">
     </div>
      <div id = "Board201">
     </div>
    `;

  expect(PlaceAtPosition(0, 0, 2, true, "Board2").length).toBe(2);
  expect(document.querySelector("#Board200").style.backgroundColor).toBe("");
});
