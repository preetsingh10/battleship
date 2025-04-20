const Gameboard = require("../Gameboard");
let gameboard
beforeEach(() => {
   gameboard = new Gameboard();
  gameboard.placeShip(gameboard.carrier, "horizontal", [1, 1]);
  gameboard.placeShip(gameboard.battleship, "vertical", [7, 7]);
});

describe("Gameboard - receiveAttack", () => {
  test("attacking a ship", () => {
    expect(gameboard.receiveAttack(1, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 1)).toBe(true);
    expect(gameboard.receiveAttack(2, 7)).toBe(false);
    expect(gameboard.receiveAttack(5, 5)).toBe(false);
    expect(gameboard.receiveAttack(6, 6)).toBe(false);
  });
});

describe("keep track of the missed attacks", () => {
  test("recording missed attacks ", () => {
    expect(gameboard.receiveAttack(2, 7));
    expect(gameboard.receiveAttack(5, 5));
    expect(gameboard.receiveAttack(6, 6));
    expect(gameboard.receiveAttack(7, 8));
    expect(gameboard.receiveAttack(10, 10));
    expect(gameboard.missedAttacks).toEqual([
      [2, 7],
      [5, 5],
      [6, 6],
      [10,10]
    ]);
    console.log("missed attacks: ", gameboard.missedAttacks);
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
    console.log("battleship position: ",gameboard.battleship.position);
  });
});

// describe("to check if all ships are sunk", ()=>{
//   expect(gameboard.allShipsSunk).toBe(true)
// })

describe("to check if one ship is sunk or not", () => {
  // gameboard.receiveAttack([7,7])
  // gameboard.receiveAttack([7,8])
  // gameboard.receiveAttack([7,9])
  // gameboard.receiveAttack([7,10])
  // expect(gameboard.battleship.isSunk()).toBe(true)
  // expect(gameboard.battleship.position).toEqual([[7,7],[7,8],[7,9],[7,10]])
 
  
});
