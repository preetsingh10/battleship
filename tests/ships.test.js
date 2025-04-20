const Ship = require("../ship");

let myShip;
beforeEach(() => {
  myShip = new Ship(3);
});
describe("Ship - hit() method ", () => {
  test("should reduce the hitpoints when hit", () => {
    myShip.hit([1, 1]);
    expect(myShip.hitPoints).toBe(2);
  });
  test("should not register same coordinates of attacks", () => {
    myShip.hit([2, 2]);
    myShip.hit([2, 2]);
    myShip.hit([1, 2]);
    // two same attacks and one diffrent
    // it should only register two

    expect(myShip.attackedCoordinates).toEqual([
      [2, 2],
      [1, 2],
    ]);
  });
});

describe("Ship - isSunk() method", () => {
  test("should return true if  hitpoints become zero", () => {
    myShip.hit([1, 2]);
    myShip.hit([1, 3]);

    myShip.hit([1, 4]);
    expect(myShip.isSunk()).toBe(true);
  });
});
