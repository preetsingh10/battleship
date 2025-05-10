function updateShipButton(allShipButtons, allShips){
    allShipButtons.forEach(button=>{
        allShips.forEach(shipObject=>{
            if(shipObject.name === button.textContent && shipObject.position.length !== 0){
                button.style.backgroundColor = 'green'
                button.dataset.placed = 'true'
            }
        })
    })
}
function allShipsPlaced(allShipButtons){
    return allShipButtons.every(button=>{
        return button.dataset.placed === 'true'
    })
}

module.exports = {
    updateShipButton,
    allShipsPlaced
}
