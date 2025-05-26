export function renderBoard(parentDivName) {
  const parentDiv = document.querySelector(`.${parentDivName}`);
  parentDiv.innerHTML = " ";

  // double for loops make the cells of the board
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("div");
      cell.id = `${parentDivName}: x:${j}, y:${i}`;
      cell.dataset.x = j;
      cell.dataset.y = i;
      cell.classList.add("cell");
      parentDiv.appendChild(cell);
    }
  }
}
export function updateBoard(playerObject, parentDivName, hideShips) {
  const allShips = playerObject.allShips;
  // below code will display the ships based upon playerObject
  if (hideShips === true) {
    allShips.forEach((ship) => {
      // below code will mark the attacked coordinates
      if (ship.attackedCoordinates !== 0) {
        ship.attackedCoordinates.forEach(([x, y]) => {
          const cell = document.getElementById(
            `${parentDivName}: x:${x}, y:${y}`
          );
          cell.classList.add("ship-attacked");
          cell.dataset.attacked = "true";
        });
      }
    });
  } else {
    allShips.forEach((ship) => {
      ship.position.forEach(([x, y]) => {
        const cell = document.getElementById(
          `${parentDivName}: x:${x}, y:${y}`
        );
        cell.classList.add(`${ship.name}`);
      });
      // below code will mark the attacked coordinates
      if (ship.attackedCoordinates !== 0) {
        ship.attackedCoordinates.forEach(([x, y]) => {
          const cell = document.getElementById(
            `${parentDivName}: x:${x}, y:${y}`
          );
          cell.classList.add("ship-attacked");
          cell.dataset.attacked = "true";
        });
      }
    });
  }
  // below code will mark the missed attacks
  if (playerObject.playerBoard.missedAttacks !== 0) {
    playerObject.playerBoard.missedAttacks.forEach(([x, y]) => {
      const cell = document.getElementById(`${parentDivName}: x:${x}, y:${y}`);
      cell.classList.add("missed-attack");
      cell.dataset.attacked = "true";
    });
  }
}
