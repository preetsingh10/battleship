const GameBoard = require("./Gameboard")



let myBoard = new GameBoard()

myBoard.placeShip(myBoard.submarine, "horizontal", [2,5])

console.log(myBoard.receiveAttack(3,5))
console.log(myBoard.submarine.position)
console.log(myBoard.missedAttacks)
