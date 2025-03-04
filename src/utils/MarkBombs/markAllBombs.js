export const markAllBombs = (setBoard) => {
    setBoard(prevBoard => {
        const newBoard = [...prevBoard]
        const row = prevBoard.length
        const col = prevBoard[0].length

        for (let x = 0; x < row; x++) {
            newBoard[x] = [...prevBoard[x]]
            for (let y = 0; y < col; y++) {
                if (newBoard[x][y].isMine) {
                    newBoard[x][y] = {...prevBoard[x][y], isMarked: true}
                }
            }
        }

        return newBoard
    })
}