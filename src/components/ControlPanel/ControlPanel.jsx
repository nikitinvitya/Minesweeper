import React from 'react';
import PauseButton from "../PauseButton/PauseButton.jsx";
import classes from './ControlPanel.module.css'
import Timer from "../Timer/Timer.jsx";
import {checkGameStart} from "../../utils/CheckGameStart/checkGameStart.js";

const ControlPanel = ({isGameActive, isPause, setIsPause, mineCount, time, setTime, board, startNewGame}) => {
    return (
        <div className={classes.panel}>
            <PauseButton
                isGameActive={isGameActive}
                isPause={isPause}
                setIsPause={setIsPause}
                startNewGame={startNewGame}
            />
            <p>Mines: {mineCount}</p>
            <Timer
                isGameActive={isGameActive}
                isPause={isPause}
                time={time}
                setTime={setTime}
                checkGameStart={() => checkGameStart(board)}
                board={board}
            />
        </div>
    );
};

export default ControlPanel;