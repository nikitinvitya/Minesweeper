import React from 'react';
import classes from './Cell.module.css'

const Cell = ({isMine, isOpen, neighboringMines, isMarked, isOdd, onCellClick, handleRightClick}) => {
    return (
        <div
            className={!isOpen ?
                isOdd ?
                    `${classes.cell} ${classes.closedOdd}`
                    :
                    `${classes.cell} ${classes.closedEven}`
                :
                isOdd ?
                    `${classes.cell} ${classes.openedOdd}`
                    :
                    `${classes.cell} ${classes.openedEven}`}
            onClick={onCellClick}
            onContextMenu={(event) => handleRightClick(event)}
        >
            {
                isOpen ?
                    (
                        isMine ?
                            <img src="/images/bomb.svg" alt="bomb"/>
                            :
                            <p data-value={neighboringMines}>{neighboringMines ? neighboringMines : ''}</p>

                    ) :
                    (
                        isMarked ?
                            <img src="/images/flag.png" alt="flag"/>
                            :
                            <br/>
                    )
            }
        </div>
    );
};

export default Cell;