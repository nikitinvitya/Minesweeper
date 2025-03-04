import React from 'react';
import Cell from "../Cell/Cell.jsx";
import classes from './Board.module.css'
import {handleCellClick} from "../../utils/CellHandlers/handleCellClick.js";
import {handleRightClick} from "../../utils/CellHandlers/handleRightClick.js";

const Board = ({board, setBoard, isGameActive, setIsGameActive, setGameResult, setResultModalActive}) => {

    return (
        <main className={isGameActive ?
            classes.board
            :
            `${classes.board} ${classes.disabled}`}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={classes.cellColumn}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex} ${colIndex}`}
                            isMine={cell.isMine}
                            isOpen={cell.isOpen}
                            isMarked={cell.isMarked}
                            neighboringMines={cell.neighboringMines}
                            isOdd={(colIndex + rowIndex) % 2}
                            onCellClick={() => handleCellClick(setBoard, board, rowIndex, colIndex, board.length, row.length, setIsGameActive, setGameResult, setResultModalActive)}
                            handleRightClick={(event) => handleRightClick(event, rowIndex, colIndex, setBoard)}
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

export default Board;