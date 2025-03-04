export const checkGameStart = (board) => {

    if(!board || board.length === 0) return false

    const row = board.length
    const col = board[0].length

    for(let x = 0; x < row; x++) {
        for(let y = 0; y < col; y++) {
            if(board[x][y].isOpen === true) {
                return true
            }
        }
    }

    return false
}