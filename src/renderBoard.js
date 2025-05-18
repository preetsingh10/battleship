import arrayEqual from "../utility/arrayEqual";

export function renderBoard(playerObject, parentDiv) {
  // required parentDiv is the DOM element not just the name

  const allShips = playerObject.allShips;

  // double for loops make the cells of the board
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("div");
      cell.id = `x:${j}, y:${i}`;
      cell.dataset.x = j;
      cell.dataset.y = i;
      cell.classList.add("cell");
      parentDiv.appendChild(cell);
      // below code will display the ships based upon playerObject
      allShips.forEach((ship) => {
        ship.position.forEach((coordinate) => {
          if (arrayEqual([j, i], coordinate)) {
            cell.classList.add(`${ship.name}`)
          }
        });
      });
    }
  }
}
