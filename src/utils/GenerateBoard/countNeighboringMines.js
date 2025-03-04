import {DIRECTIONS} from "../constants/constants.js";

export const countNeighboringMines = (board, rowCount, colCount, x, y) => {
    let neighboringMines = 0

    for(let [dx, dy] of DIRECTIONS) {
        const newX = x + dx
        const newY = y + dy

        if((newX >= 0 && newX < rowCount) && (newY >=0 && newY < colCount)) {
            neighboringMines = board[newX][newY].isMine ? neighboringMines + 1 : neighboringMines
        }

    }

    return neighboringMines
}