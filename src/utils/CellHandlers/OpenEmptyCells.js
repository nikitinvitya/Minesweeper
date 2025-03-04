import {DIRECTIONS} from "../constants/constants.js";

export const openEmptyCells = (board, x, y, colCount, rowCount) => {
    if(x < 0 || x >= rowCount || y < 0 || y >= colCount) return

    if(board[x][y].isOpen) return

    board[x][y].isOpen = true

    if(!board[x][y].neighboringMines) {
        for(const [dx, dy] of DIRECTIONS) {
            openEmptyCells(board, x+dx, y+dy, colCount, rowCount)
        }
    }

}