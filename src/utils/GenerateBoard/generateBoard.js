import {countNeighboringMines} from "./countNeighboringMines.js";

export const generateBoard = (rowCount, colCount, mineCount) => {
    const board = Array.from({length: rowCount}, () =>
        Array.from({length: colCount}, () =>
            ({
                isMine: false,
                isOpen: false,
                isMarked: false,
                neighboringMines: 0,
            })))
    
    const minesCoords = new Set()
    while(minesCoords.size < mineCount) {
        const x = Math.floor(Math.random() * rowCount)
        const y = Math.floor(Math.random() * colCount)

        minesCoords.add(`${x} ${y}`);
    }

    const minesCoordsArray = Array.from(minesCoords).map((coords) => {
        const [x, y] = coords.split(' ').map((el) => Number(el))
        return {x, y}
    })

    minesCoordsArray.forEach(({x, y}) => {
        board[x][y].isMine = true
    })

    for(let x = 0; x < rowCount; x++) {
        for(let y = 0; y < colCount; y++) {
            board[x][y].neighboringMines = countNeighboringMines(board, rowCount, colCount, x, y)
        }
    }

    return board

}

