import React, {useEffect, useState} from 'react';
import classes from './GameSettingsModal.module.css'
import {minesCountValidator, sizeValidator} from "../../utils/validators/gameSettingsValidators.js";
import {
    PRO_MINES_COUNT,
    PRO_SIZE,
    AMATEUR_MINES_COUNT,
    AMATEUR_SIZE,
    BEGINNER_MINES_COUNT,
    BEGINNER_SIZE,
    DEFAULT_SIZE,
    DEFAULT_MINES_COUNT,
} from "../../utils/constants/constants.js";

const GameSettingsModal = ({
                               rowCount,
                               colCount,
                               mineCount,
                               setRowCount,
                               setColCount,
                               setMineCount,
                               isActive,
                               setIsActive,
                                setTime,
                           }) => {

    const [gameMode, setGameMode] = useState('amateur');

    const [inputRowCount, setInputRowCount] = useState(rowCount)
    const [inputColCount, setInputColCount] = useState(colCount)
    const [inputMinesCount, setInputMinesCount] = useState(mineCount)

    useEffect(() => handleChangeMinesCount(), [rowCount, colCount, inputMinesCount])

    const handleChangeSettings = (setSettings, inputValue) => {
        const newSetting = inputValue.replace(/\D/g, '')
        setSettings(+newSetting)
    }

    const handleChangeMinesCount = () => {
        minesCountValidator(setMineCount, inputMinesCount, rowCount, colCount)
        minesCountValidator(setInputMinesCount, inputMinesCount, rowCount, colCount)
    }

    const handleGameSettingsChange = (mode, width, height, mines) => {
        setGameMode(mode)
        setInputColCount(width)
        setInputRowCount(height)
        setInputMinesCount(mines)
        setColCount(width)
        setRowCount(height)
        setMineCount(mines)
        setTime(0)
    }


    return (
        <div className={isActive ? `${classes.modal} ${classes.activeModal}` : classes.modal}
             onClick={() => setIsActive(false)}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                <div
                    className={gameMode === 'beginner' ? `${classes.settingsContainer} ${classes.activeMode}` : classes.settingsContainer}>
                    <label className={classes.gameMode}>
                        <input
                            type="radio"
                            name='gameMode'
                            checked={gameMode === 'beginner'}
                            onChange={() => handleGameSettingsChange('beginner', BEGINNER_SIZE, BEGINNER_SIZE, BEGINNER_MINES_COUNT)}
                        />
                        <h2>Beginner</h2>
                        <p>Field: {BEGINNER_SIZE}*{BEGINNER_SIZE}</p>
                        <p>Number of mines: {BEGINNER_MINES_COUNT}</p>
                    </label>
                </div>

                <div
                    className={gameMode === 'amateur' ? `${classes.settingsContainer} ${classes.activeMode}` : classes.settingsContainer}>
                    <label className={classes.gameMode}>
                        <input
                            type="radio"
                            name='gameMode'
                            checked={gameMode === 'amateur'}
                            onChange={() => handleGameSettingsChange('amateur', AMATEUR_SIZE, AMATEUR_SIZE, AMATEUR_MINES_COUNT)}
                        />
                        <h2>Amateur</h2>
                        <p>Field: {AMATEUR_SIZE}*{AMATEUR_SIZE}</p>
                        <p>Number of mines: {AMATEUR_MINES_COUNT}</p>
                    </label>
                </div>

                <div
                    className={gameMode === 'pro' ? `${classes.settingsContainer} ${classes.activeMode}` : classes.settingsContainer}>
                    <label className={classes.gameMode}>
                        <input
                            type="radio"
                            name='gameMode'
                            checked={gameMode === 'pro'}
                            onChange={() => handleGameSettingsChange('pro', PRO_SIZE, PRO_SIZE, PRO_MINES_COUNT)}
                        />
                        <h2>Pro</h2>
                        <p>Field: {PRO_SIZE}*{PRO_SIZE}</p>
                        <p>Number of mines: {PRO_MINES_COUNT}</p></label>
                </div>

                <div
                    className={gameMode === 'custom' ? `${classes.settingsContainer} ${classes.activeMode}` : classes.settingsContainer}>
                    <label className={classes.gameMode}>
                        <input
                            type="radio"
                            name='gameMode'
                            checked={gameMode === 'custom'}
                            onChange={() => handleGameSettingsChange('custom', DEFAULT_SIZE, DEFAULT_SIZE, DEFAULT_MINES_COUNT)}
                        />
                        <h2>Custom</h2>
                        <div className={gameMode === 'custom' ? classes.customSettings : classes.disabled}>
                            <label>
                                <p>Width:</p>
                                <input type="text"
                                       value={inputColCount}
                                       placeholder='width'
                                       onChange={(event) => handleChangeSettings(setInputColCount, event.target.value)}
                                       onBlur={() => {
                                           sizeValidator(setColCount, inputColCount)
                                           sizeValidator(setInputColCount, inputColCount)
                                       }}/>
                            </label>
                            <label>
                                <p>Height:</p>
                                <input type="text"
                                       value={inputRowCount}
                                       placeholder='height'
                                       onChange={(event) => handleChangeSettings(setInputRowCount, event.target.value)}
                                       onBlur={() => {
                                           sizeValidator(setRowCount, inputRowCount)
                                           sizeValidator(setInputRowCount, inputRowCount)
                                       }}/>
                            </label>
                            <label>
                                <p>Number of mines:</p>
                                <input type="text"
                                       value={inputMinesCount}
                                       onChange={(event) => handleChangeSettings(setInputMinesCount, event.target.value)
                                       }
                                       onBlur={handleChangeMinesCount}
                                />
                            </label>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default GameSettingsModal;