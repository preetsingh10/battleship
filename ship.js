const arrayEqual = require("./utility/arrayEqual");
class Ship {
  // health of the ship is same as of its length
  constructor(length, name) {
    this.length = length;
    this.hitPoints = length;
    this.name = name;
  }
  sunk = false;
  // the ship positin is an array of [head coordinates , .. middle coordinates, tail coordinates]
  position = [];
  attackedCoordinates = [];
  direction;
  placed = false;

  isPlaced() {
    if (this.position.length === 0) {
      return this.placed;
    }
    this.placed = true;
    return this.placed;
  }
  hit(coordinates) {
    // expecting coordinates to be an array
    if (!Array.isArray(coordinates)) {
      return new Error("given coordinates were not in array");
    }
    let alreadyHit = false;
    this.attackedCoordinates.some((attackedCoordinate) => {
      if (arrayEqual(attackedCoordinate, coordinates)) {
        alreadyHit = true;
      }
    });
    if (alreadyHit === false) {
      this.attackedCoordinates.push(coordinates);
      this.hitPoints--;
    }
  }

  generateCordinates(start, length, direction) {
    // start is expected to be an array
    let coordinates = [];
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        coordinates.push([start[0] + i, start[1]]);
      }
    } else if (direction === "vertical") {
      for (let j = 0; j < length; j++) {
        coordinates.push([start[0], start[1] + j]);
      }
    }
    return coordinates;
  }
  isSunk() {
    return this.hitPoints === 0;
  }
}

module.exports = Ship;
