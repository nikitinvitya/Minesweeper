import React from 'react';
import classes from './PauseButton.module.css'


const PauseButton = ({isGameActive ,isPause, setIsPause, startNewGame}) => {
    return (
        <button>
            {
                isGameActive ? 
                isPause ?
                    <img src="/images/play.svg" alt="play" onClick={() => setIsPause(prev => !prev)}/>
                    :
                    <img src="/images/pause.svg" alt="pause" onClick={() => setIsPause(prev => !prev)}/>
                :
                    <img src="/images/repeat.svg" alt="repeat" onClick={() => startNewGame()}/>
            }
        </button>
    );
};

export default PauseButton;