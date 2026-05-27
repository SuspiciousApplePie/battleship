import { Ship } from "./ship.js";

describe("isSunk", () => {
  test("Already Sunked", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
  test("Have not sunked", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
