const player = require("../Player");
let preet, arsh;
beforeEach(() => {
  preet = new player("Preet", false);
  arsh = new player("arsh", false);

  preet.placeShip("BattleShip", "horizontal", [5, 5]);
  preet.placeShip("Carrier", "vertical", [1, 1]);
  preet.placeShip("Destroyer", "vertical", [2, 2]);
  preet.placeShip("Submarine", "vertical", [3, 3]);
  preet.placeShip("Cruiser", "vertical", [4, 4]);
  arsh.placeShip("Carrier", "vertical", [4, 4]);
});

describe("To check if player receive and attack functions work properly", () => {
  test("should reduce hitpoints of the enemy ship", () => {
    expect(arsh.allShips[0].hitPoints).toBe(5);
    preet.attack(arsh.playerBoard, [4, 4]);
    expect(arsh.allShips[0].hitPoints).toBe(4);
  });

  test("should reduce hitpoints when receive attack", () => {
    expect(preet.allShips[1].hitPoints).toBe(4);
    arsh.attack(preet.playerBoard, [6, 5]);
    expect(preet.allShips[1].hitPoints).toBe(3);
  });
});
describe("To check if attack is missed or not", () => {
  test("should note the missed attack", () => {
    preet.attack(arsh.playerBoard, [1, 1]);
    preet.attack(arsh.playerBoard, [2, 2]);
    expect(arsh.playerBoard.missedAttacks[0]).toEqual([1, 1]);
    expect(arsh.playerBoard.missedAttacks[1]).toEqual([2, 2]);
  });
});
describe("how many ships left of a player", () => {
  test("three ships should be left", () => {
    arsh.attack(preet.playerBoard, [1, 1]);
    arsh.attack(preet.playerBoard, [1, 2]);
    arsh.attack(preet.playerBoard, [1, 3]);
    arsh.attack(preet.playerBoard, [1, 4]);
    arsh.attack(preet.playerBoard, [1, 5]);
    arsh.attack(preet.playerBoard, [2, 2]);
    arsh.attack(preet.playerBoard, [2, 3]);

    expect(preet.shipsLeft()).toBe(3);
  });
});
