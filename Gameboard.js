const Ship = require("./ship");
const arrayEqual = require("./utility/arrayEqual");

class Gameboard {
  // ships which every battleship game have
  carrier = new Ship(5, 'Carrier');
  battleship = new Ship(4, 'BattleShip');
  cruiser = new Ship(3, 'Cruiser');
  submarine = new Ship(3, 'Submarine');
  destroyer = new Ship(2, 'Destroyer');

  allShips = [
    this.carrier,
    this.battleship,
    this.cruiser,
    this.submarine,
    this.destroyer,
  ];

  missedAttacks = [];
  
  // helper function
  isOverlap(newCoordinates) {
    return this.allShips.some((ship) => {
      return ship.position.some((coord) => {
        return newCoordinates.some((newCoord) => {
          return arrayEqual(newCoord, coord);
        });
      });
    });
  }

  placeShip(ship, direction, start) {
    const BOARD_SIZE = 10;
    let newCoord = ship.generateCordinates(start, ship.length, direction);
    const outOfBounds = newCoord.some(([x, y]) => {
      return x < 0 || y < 0 || x > BOARD_SIZE || y > BOARD_SIZE;
    });
    if (outOfBounds) {
      throw new Error("out of bounds");
    }
    if (this.isOverlap(newCoord) === false) {
      ship.position = newCoord;
      ship.direction = direction
      ship.placed = true
    } else {
      throw new Error("overlaping co-ordinates");
    }
    return newCoord
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
    return this.allShips.every((ship) => ship.isSunk());
  }
}

module.exports = Gameboard;
