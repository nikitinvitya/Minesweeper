import {MAX_SIZE, MIN_SIZE} from "../constants/constants.js";

export const sizeValidator = (setSize, inputSize) => {
    if(inputSize >= MIN_SIZE && inputSize <= MAX_SIZE) {
        return setSize(inputSize)
    }
    else if(inputSize < MIN_SIZE) {
        return setSize(MIN_SIZE)
    }
    else {
        return setSize(MAX_SIZE)
    }
}

export const minesCountValidator = (setMinesCount, minesCount, rowCount, colCount) => {
    if(minesCount > 0 && minesCount <= rowCount * colCount - 10) {
        return setMinesCount(+minesCount)
    }
    else if (minesCount > rowCount * colCount - 10) {
        return setMinesCount(+(rowCount * colCount - 10))
    }
    else {
        return setMinesCount(Math.min(rowCount, colCount))
    }
}