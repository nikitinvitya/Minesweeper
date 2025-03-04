//TODO: generation after the first click

import React, {useEffect, useState} from 'react';
import GameSettingsModal from "../GameSettingsModal/GameSettingsModal.jsx";
import Board from "../Board/Board.jsx";
import {DEFAULT_MINES_COUNT, DEFAULT_SIZE} from "../../utils/constants/constants.js";
import classes from './App.module.css'
import DisabledBoard from "../DisabledBoard/DisabledBoard.jsx";
import {generateBoard} from "../../utils/GenerateBoard/generateBoard.js";
import {startNewGame} from "../../utils/StartNewGame/startNewGame.js";
import ResultModal from "../ResultModal/ResultModal.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ControlPanel from "../ControlPanel/ControlPanel.jsx";
import InfoModal from "../InfoModal/InfoModal.jsx";


const App = () => {

    const [rowCount, setRowCount] = useState(DEFAULT_SIZE)
    const [colCount, setColCount] = useState(DEFAULT_SIZE)
    const [mineCount, setMineCount] = useState(DEFAULT_MINES_COUNT)
    const [gameResult, setGameResult] = useState(null) // 1 - win 0 - lose
    const [isGameSettingModalActive, setIsGameSettingModalActive] = useState(false)
    const [isResultModalActive, setIsResultModalActive] = useState(false)
    const [isInfoModalActive, setIsInfoModalActive] = useState(true)
    const [isGameActive, setIsGameActive] = useState(true)
    const [isPause, setIsPause] = useState(false)
    const [board, setBoard] = useState([])
    const [time, setTime] = useState(0)


    useEffect(() => {
        const newBoard = generateBoard(rowCount, colCount, mineCount)
        setBoard(newBoard)
    }, [rowCount, colCount, mineCount]);



    return (
        <div className={classes.content}>
            <Header
                setSettingModalActive={setIsGameSettingModalActive}
                setInfoModalActive={setIsInfoModalActive}
            />
            <main>
                <ControlPanel
                    board={board}
                    mineCount={mineCount}
                    time={time}
                    setTime={setTime}
                    isGameActive={isGameActive}
                    isPause={isPause}
                    setIsPause={setIsPause}
                    startNewGame={() => startNewGame(rowCount, colCount, mineCount, setBoard, setIsGameActive, setIsPause, setIsResultModalActive, setGameResult, setTime)}
                />
                {
                    !isPause ?
                        <Board
                            board={board}
                            setBoard={setBoard}
                            isGameActive={isGameActive}
                            setIsGameActive={setIsGameActive}
                            setGameResult={setGameResult}
                            setResultModalActive={setIsResultModalActive}
                        />
                        :
                        <DisabledBoard
                            rowCount={rowCount}
                            colCount={colCount}
                            mineCount={mineCount}
                        />
                }
            </main>
            <Footer/>
            <ResultModal
                isActive={isResultModalActive}
                setIsActive={setIsResultModalActive}
                gameResult={gameResult}
                board={board}
                mineCount={mineCount}
                time={time}
                startNewGame={() => startNewGame(rowCount, colCount, mineCount, setBoard, setIsGameActive, setIsPause, setIsResultModalActive, setGameResult, setTime)}
            />
            <GameSettingsModal
                isActive={isGameSettingModalActive}
                setIsActive={setIsGameSettingModalActive}
                rowCount={rowCount}
                colCount={colCount}
                mineCount={mineCount}
                setRowCount={setRowCount}
                setColCount={setColCount}
                setMineCount={setMineCount}
                setTime={setTime}
            />
            <InfoModal setIsActive={setIsInfoModalActive} isActive={isInfoModalActive}/>

        </div>
    );
};

export default App;