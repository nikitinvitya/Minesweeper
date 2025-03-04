export const checkWin = (board, setIsGameActive) => {
    const row = board.length
    const col = board[0].length


    for(let x = 0; x < row; x++) {
        for(let y = 0; y < col; y++) {
            if(board[x][y].isMine === false && board[x][y].isOpen === false) {
                return false
            }
        }
    }

    return true

}