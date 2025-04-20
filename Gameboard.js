
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
    if (typeof x !== "number" && typeof y !== "number") {
      return new Error("this function only recieves two numbers");
    }

    const isHit = this.allShips.some((ship) => {
      return ship.position.some((coord) => {
        if (arrayEqual(coord, [x, y])) {
          ship.hit([x, y]);
          return true;
        }
        return false;
      });
    });
    if (!isHit) {
      this.missedAttacks.push([x, y]);
    }
    return isHit;
  }
  allShipsSunk() {
    return this.allShips.every(ship=>ship.isSunk())
  }
}

module.exports = Gameboard;
