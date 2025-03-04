import React from 'react';
import classes from "../Cell/Cell.module.css";

const DisabledCell = ({isOdd}) => {
    return (
        <div
            className={
                isOdd ?
                    `${classes.cell} ${classes.closedOdd}`
                    :
                    `${classes.cell} ${classes.closedEven}`}
        >
        </div>
    );
};

export default DisabledCell;