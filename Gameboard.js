// import arrayEqual from "./utility/arrayEqual";
// import Ship from "./ship";
const Ship = require("./ship");
const arrayEqual = require("./utility/arrayEqual");

class Gameboard {
  // ships which every battleship game have
  carrier = new Ship(5);
  battleship = new Ship(4);
  cruiser = new Ship(3);
  submarine = new Ship(3);
  destroyer = new Ship(2);

  allShips = [
    this.carrier,
    this.battleship,
    this.cruiser,
    this.submarine,
    this.destroyer,
  ];

  missedAttacks = [];

  placeShip(ship, direction, start) {
    // start and end are coordinates like [x1,y1] and [x2,y2]
    ship.position = ship.generateCordinates(start, ship.length, direction);
  }
  receiveAttack(x, y) {
    let currentShip;
    let succesfulAttack = false;
    // here we are looping all of the ships on board to check if they are attacked or not
    for (let i = 0; i < this.allShips.length; i++) {
      currentShip = this.allShips[i];

      // here we are looping all of the coordinates of the current ship which is in the loop
      if (currentShip.position.length !== 0) {
        for (let j = 0; j < currentShip.position.length; j++) {
          if (arrayEqual(currentShip.position[j], [x, y])) {
            currentShip.hit([x, y]);
            succesfulAttack = true;
            return succesfulAttack;
          }
        }
      }
    }
    if (succesfulAttack === false) {
      this.missedAttacks.push([x, y]);
    }
    return succesfulAttack;
  }
  allShipsSunk() {
    this.allShips.forEach((ship) => {
      if (ship.hitPoints === 0) {
      }
    });
  }
}

module.exports = Gameboard;
