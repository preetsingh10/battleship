function createBoard() {
  const boardDiv = document.querySelector(".game-board");
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let cell = document.createElement("div");
      cell.id = `x:${i}, y:${j}`;
      cell.classList = 'cell'
      boardDiv.appendChild(cell);
    }
  }
  return boardDiv;
}
module.exports = createBoard;
