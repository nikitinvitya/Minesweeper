import React from 'react';
import classes from './InfoModal.module.css'
import {
    AMATEUR_MINES_COUNT,
    AMATEUR_SIZE,
    BEGINNER_MINES_COUNT,
    BEGINNER_SIZE,
    PRO_MINES_COUNT,
    PRO_SIZE
} from "../../utils/constants/constants.js";

const InfoModal = ({isActive, setIsActive}) => {
    return (
        <div className={isActive ? `${classes.modal} ${classes.active}` : classes.modal} onClick={() => setIsActive(false)}>
            <div className={classes.modalContent} onClick={(event) => event.stopPropagation()}>
                <div className={classes.header}>
                    <h2>Help</h2>
                    <button onClick={() => setIsActive(false)}>
                        <img src="/images/cross.svg" alt="exit"/>
                    </button>
                </div>

                <section>
                    <h3>Rules</h3>
                    <p><b>Goal</b></p>
                    <p>Find empty cells while avoiding mines. The faster you uncover the entire field, the better your score.</p>

                    <p><b>How to Play</b></p>
                    <ul>
                        <li>If you uncover a mine, the game is over.</li>
                        <li>If you uncover an empty cell, you remain in the game.</li>
                        <li>If you uncover a number, you receive a hint about how many mines are hidden in the eight surrounding cells. You can use this information to determine which neighboring cells are safe to click.</li>
                    </ul>
                    <p><b>Marking Mines</b></p>
                    <p>If you believe a cell contains a mine, you can mark it by placing a flag on that cell. Check the Control section for more details on how to flag mines.</p>
                </section>

                <section>
                    <h3>Control</h3>
                    <p>Right-click to open a cell</p>
                    <p>To mark a cell, click the left mouse button</p>
                </section>

                <section>
                    <h3>Difficulty Levels</h3>
                    <p>Minesweeper offers three classic game board options to choose from, with each subsequent field being more difficult than the previous one.</p>
                    <ul>
                        <li>
                            Beginner <br/>
                            {BEGINNER_SIZE * BEGINNER_SIZE} cells
                            ({BEGINNER_SIZE}×{BEGINNER_SIZE}), {BEGINNER_MINES_COUNT} mines
                        </li>
                        <li>
                            Intermediate <br/>
                            {AMATEUR_SIZE * AMATEUR_SIZE} cells
                            ({AMATEUR_SIZE}×{AMATEUR_SIZE}), {AMATEUR_MINES_COUNT} mines
                        </li>
                        <li>
                            Expert <br/>
                            {PRO_SIZE * PRO_SIZE} cells ({PRO_SIZE}×{PRO_SIZE}), {PRO_MINES_COUNT} mines
                        </li>
                    </ul>
                    <p>You can also create custom fields of any size. Minesweeper supports fields up to 256 cells (16×16) with 246 mines.
                        You can change the current difficulty (field) in the Game Type section under Settings. To access game settings, press the Settings button on the main screen of the application.</p>
                </section>
            </div>
        </div>
    );
};

export default InfoModal;