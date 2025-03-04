export const handleRightClick = (event, x, y, setBoard) => {
    event.preventDefault()

    setBoard(prevBoard => {
        const newBoard = [...prevBoard]
        newBoard[x] = [...prevBoard[x]]
        newBoard[x][y] = {...prevBoard[x][y], isMarked: !prevBoard[x][y].isMarked}
        return newBoard
    })
}