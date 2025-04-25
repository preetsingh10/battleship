const player = require("../Player");
let preet, arsh
beforeEach(() => {
   preet = new player("Preet", false);
   arsh = new player("arsh", false);

  preet.placeShip("BattleShip", "horizontal", [5, 5]);
  arsh.placeShip("Carrier", "vertical", [4, 4]);
});

describe("To check if player receive and attack functions work properly", () => {
  test("should reduce hitpoints of the enemy ship", () => {
    expect(arsh.allShips[0].hitPoints).toBe(5);
    preet.attack(arsh.playerBoard, [4, 4]);
    expect(arsh.allShips[0].hitPoints).toBe(4);
  });

  test("should reduce hitpoints when receive attack", () => {
    expect(preet.allShips[1].hitPoints).toBe(4)
    arsh.attack(preet.playerBoard, [6,5])
    expect(preet.allShips[1].hitPoints).toBe(3)
    
  });
});
describe("To check if attack is missed or not", () => {
  test("should note the missed attack", () => {
    preet.attack(arsh.playerBoard, [1,1])
    preet.attack(arsh.playerBoard, [2,2]) 
    expect(arsh.playerBoard.missedAttacks[0]).toEqual([1,1])
    expect(arsh.playerBoard.missedAttacks[1]).toEqual([2,2])
  });
});
