const Gameboard = require("../Gameboard");

const gameboard = new Gameboard();
gameboard.placeShip(gameboard.carrier, "horizontal", [1, 1]);
gameboard.placeShip(gameboard.battleship, "vertical", [7, 7]);

describe("Gameboard - receiveAttack", () => {
  test("attacking a ship", () => {
    expect(gameboard.receiveAttack(1, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 7)).toBe(false);
    expect(gameboard.receiveAttack(5, 5)).toBe(false);
  });
});

describe("keep track of the missed attacks", () => {
  test("recording missed attacks ", () => {
    expect(gameboard.missedAttacks).toEqual([
      [2, 7],
      [5, 5],
    ]);
  });
});

describe("Ship placement", () => {
  test("testing ship placement", () => {
    expect(gameboard.battleship.position).toEqual([
      [7, 7],
      [7, 8],
      [7, 9],
      [7, 10],
    ]);
  });
});
