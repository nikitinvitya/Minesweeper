import React from 'react';
import classes from './ResultModal.module.css'

const ResultModal = ({isActive, setIsActive, gameResult, board, mineCount, time, startNewGame}) => {

    if(!board[0]) return

    return (
        <div className={isActive ? `${classes.modal} ${classes.active}` : classes.modal} onClick={() => setIsActive(false)}>
            <div className={classes.modalContent} onClick={(event) => event.stopPropagation()}>
                    <img src="/images/cross.svg" alt="exit"
                         onClick={() => setIsActive(false)}
                         className={classes.exitImage}
                    />
                {
                    gameResult ?
                        <h2>You're a winner!!!</h2>
                        :
                        <h2>You lost...</h2>
                }
                <div className={classes.settingsList}>
                    <p>Game settings:</p>
                    <div className={classes.setting}>
                        <img src="/images/width.svg" alt="width"/>
                        <p>{board[0].length}</p>
                    </div>
                    <div className={classes.setting}>
                        <img src="/images/height.svg" alt="height"/>
                        <p>{board.length}</p>
                    </div>
                    <div className={`${classes.setting} ${classes.bombInfo}`}>
                        <img src="/images/bomb.svg" alt="bombs"/>
                        <p>{mineCount}</p>
                    </div>
                </div>
                <div>
                    Time: {time} sec
                </div>
                <button onClick={() => startNewGame()}>
                    Play again
                </button>
            </div>
        </div>
    );
};

export default ResultModal;