const arrayEqual = require("./arrayEqual")

function placeAndDisplayShip(allGridCells, shipObject,playerObject, coOrdinate){
    if(shipObject === undefined){
        throw new Error("please select a ship to place ")
    }
    // coordintates are expected to be an array like [1,1]
    playerObject.placeShip(shipObject.name, 'horizontal', coOrdinate )
    shipObject.position.forEach(coOrdinate=>{
       allGridCells.forEach(cell=>{
        if(arrayEqual([+cell.dataset.x, +cell.dataset.y],coOrdinate)){
            cell.classList.add('ship-placed')
        }
       }) 
    })
}
module.exports = placeAndDisplayShip