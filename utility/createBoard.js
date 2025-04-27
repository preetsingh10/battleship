function createBoard() {
  const grid = document.createElement("div");
  
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let cell = document.createElement("div");
      cell.id = `x:${j}, y:${i}`;
      cell.dataset.x = j
      cell.dataset.y = i
      cell.classList.add('cell')
      grid.appendChild(cell);
      cell.addEventListener('dragover',()=>{
        cell.classList.add('dragOver')
      })
      cell.addEventListener('dragleave',()=>{
        cell.classList.remove('dragOver')
      })
    }
  }
  
  return grid;
}
module.exports = createBoard;
