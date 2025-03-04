import React, { useEffect } from "react";
import classes from './Timer.module.css'

const Timer = ({ isGameActive, isPause, time, setTime, checkGameStart, board }) => {

    useEffect(() => {
        let timer;

        if (isGameActive && !isPause && checkGameStart()) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isGameActive, isPause, board]);

    return (
        <div>
            <p>Time: <span>{time}</span></p>
        </div>);
};

export default Timer;
