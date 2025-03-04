import {openAllBombs} from "../OpenAllBombs/openAllBombs.js";

export const getLose= (setBoard, setGameResult, setIsGameActive, setResultModalActive) => {
    setGameResult(0)
    openAllBombs(setBoard)
    setIsGameActive(false)
    setResultModalActive(true)
}