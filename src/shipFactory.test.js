import { shipFake } from "./shipFactory";

test("Hit function test", () => {
  expect(shipFake.hit(3)).toBe("The ship has been hit");
});

test("Check if ship has been sunk", () => {
  expect(shipFake.isSunk()).toBe("The ship has not been sunk yet");
});

test("Hit function test", () => {
  expect(shipFake.hit(3)).toBe("This position has already been hit");
});

test("Hit function test", () => {
  expect(shipFake.hit(2)).toBe("The ship has been hit");
});

test("Hit function test", () => {
  expect(shipFake.hit(1)).toBe("The ship has been hit");
});

test("Check if ship has been sunk", () => {
  expect(shipFake.isSunk()).toBe("Oh the ship has been sunk");
});
