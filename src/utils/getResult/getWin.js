import {markAllBombs} from "../MarkBombs/markAllBombs.js";

export const getWin = (setBoard, setGameResult, setIsGameActive, setResultModalActive) => {
    setGameResult(1)
    markAllBombs(setBoard)
    setIsGameActive(false)
    setResultModalActive(true)
}