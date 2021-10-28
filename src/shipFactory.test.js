import { ship } from "./shipFactory";
let shipFake = ship(5);

test("Hit function test", () => {
  expect(shipFake.hit(3)).toBe("The ship has been hit");
});

test("Check if ship has been sunk", () => {
  expect(shipFake.isSunk()).toBe("The ship has not been sunk yet");
});

test("Hit function test", () => {
  expect(shipFake.hit()).toBe("The ship has been hit");
});

test("Hit function test", () => {
  expect(shipFake.hit()).toBe("The ship has been hit");
});

test("Hit function test", () => {
  expect(shipFake.hit()).toBe("The ship has been hit");
});

test("Hit function test", () => {
  expect(shipFake.hit()).toBe("The ship has been hit");
});

test("Check if ship has been sunk", () => {
  expect(shipFake.isSunk()).toBe("Oh the ship has been sunk");
});
