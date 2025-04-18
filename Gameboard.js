// import arrayEqual from "./utility/arrayEqual";
// import Ship from "./ship";
const Ship = require("./ship")
const arrayEqual = require("./utility/arrayEqual")
/*
Todo:
1. to attack the ship, gameboard should know where does the attack hit the ship and if it does hit which coordinate it is and mark it
beacauae ships have length and thats why the are covered by their length should be known to gameboard 
*/
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
  allShipSunk;
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
      for(let j = 0; j < currentShip.position.length; j++){
        if(arrayEqual(currentShip.position[j], [x,y])){
          currentShip.hit([x,y])
          succesfulAttack = true
          return succesfulAttack        }
      }
    
 
    }
    if(!succesfulAttack){
      this.missedAttacks.push([x,y])
    }
    return succesfulAttack
  }
}

module.exports = Gameboard
