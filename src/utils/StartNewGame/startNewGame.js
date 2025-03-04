import {generateBoard} from "../GenerateBoard/generateBoard.js";

export const startNewGame = (rowCount, colCount, mineCount, setBoard, setIsGameActive, setIsPause,setResultModalActive, setGameResult, setTime) => {
    const newBoard = generateBoard(rowCount, colCount, mineCount)
    setBoard(newBoard)
    setIsGameActive(true)
    setIsPause(false)
    setResultModalActive(false)
    setGameResult(null)
    setTime(0)
}