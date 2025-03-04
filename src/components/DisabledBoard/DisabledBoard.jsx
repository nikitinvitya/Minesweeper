import React, {useEffect, useState} from 'react';
import {generateBoard} from "../../utils/GenerateBoard/generateBoard.js";
import DisabledCell from "../DisabledCell/DisabledCell.jsx";
import classes from '../Board/Board.module.css'

const DisabledBoard = ({rowCount, colCount, mineCount}) => {
    const [disabledBoard, setDisabledBoard] = useState([]);


    useEffect(() => {
        const newDisabledBoard = generateBoard(rowCount, colCount, mineCount)
        setDisabledBoard(newDisabledBoard)
    }, [rowCount, colCount, mineCount]);


    return (
        <div className={classes.board}>
            {disabledBoard.map((row, rowIndex) => (
                <div key={rowIndex} className={classes.cellColumn}>
                    {row.map((cell, colIndex) => (
                        <DisabledCell
                            key={`${rowIndex} ${colIndex}`}
                            isOdd={(colIndex + rowIndex) % 2}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DisabledBoard;