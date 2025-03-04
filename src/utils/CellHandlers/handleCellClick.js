import {openEmptyCells} from "./OpenEmptyCells.js";
import {checkLose} from "../CheckResult/checkLose.js";
import {checkWin} from "../CheckResult/checkWin.js";
import {getLose} from "../getResult/getLose.js";
import {getWin} from "../getResult/getWin.js";

export const handleCellClick = (setBoard, board, x, y, colCount, rowCount, setIsGameActive, setGameResult, setResultModalActive) => {

    if(board[x][y].isMarked) {
        return
    }

    if (checkLose(board, x, y)) {
        getLose(setBoard, setGameResult, setIsGameActive, setResultModalActive)
        return
    }

    setBoard(prevBoard => {
        const newBoard = [...prevBoard]
        newBoard[x] = [...prevBoard[x]]
        openEmptyCells(newBoard, x, y, rowCount, colCount)

        if (checkWin(board)) {
            getWin(setBoard, setGameResult, setIsGameActive, setResultModalActive)
        }

        return newBoard
    })

}
