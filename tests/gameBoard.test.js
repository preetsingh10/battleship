// import Gameboard from "../gameBoard";
// import Ship from "../ship";
const Ship = require("../ship");
const Gameboard = require("../Gameboard");

describe("Gameboard - receiveAttack", () => {
  test("attacking a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);
    gameboard.placeShip(ship, "horizontal", [1, 1]);
    expect(gameboard.receiveAttack(1, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 7)).toBe(false);
  });
});
