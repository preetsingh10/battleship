import { user } from ".."
import { computerPlayer } from ".."
import { gamaeStatus } from "./gameStatus"
import { renderBoard } from "./renderBoard"
import { renderDisplayBoard } from "./renderDisplayBoard"
export function enableAttacking(){
    const openantBoardDiv = document.querySelector('.openant-board')
    const allOpenantCells = openantBoardDiv.querySelectorAll('.cell')
    allOpenantCells.forEach(cell=>{
        cell.addEventListener('click',()=>{
            user.attack(computerPlayer.playerBoard, [+cell.dataset.x, +cell.dataset.y])
            renderBoard(computerPlayer,'openant-board')
            renderDisplayBoard(gamaeStatus())
            enableAttacking()
        })
    })
}