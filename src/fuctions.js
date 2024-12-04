import field from "./componentes/field"

const createBoard = ( rows, columns) => {
    return Array (rows).fill(0).map((_,row) =>{
        return Array(columns).fill(0).map((_, columns) =>{
        return {
            row,
            columns,
            opened: false,
            Flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
        }
        )
    })
}

const spreadMines = (board, minesAmount) =>{
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    
    while (minesPlanted < minesAmount){
        const rowSel = parseInt Math.random() * rows, 10)
        const columnsel = parseInt(Math.random() * columns, 10)


        if (!board[rowSel] [columnsel].mined){
            board [rowSel][columnsel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) =>{
    const board = createBoard (rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const cloneBoard = board =>{
    return board.map(rows=>{
        return row.map(field => {
            return {field}
        })
    })
}
const getNeighbors = (board, row, column) =>{
    const neighbors = []
    const rows = [ row-1, row , row +1]
    const columns = [column -1, column, column +1]
    rows.forEach(r => {
        columns.forEach(c =>{
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validcolumn = c >= 0 && c < board[0].length
            if(diferent && validRow && validcolumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) =>{
    const safe = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safe, true)
}

const openField = (board, row, column) =>{
    const Field = board[row][column]
    if(!Field.opened){
        field.opened = true
        if(field.mined){
        field.exploded = true}
        else if (safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column)
            .forEach(n => openfield(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n=> n.mined).length
        }
        }
    }
const fields = board => [].concat(board)
const hadExplosion = board => fields(board)
.filter(field => field.exploded).length > 0 
const pendding = field => (field.mined && !field.Flagged) || (!field.mined && !field.opened)

const wonGame = board => fields(board).filter(pendding).length === 0
const showMines = board => fields(board).filter(field => field.mined)
.forEach(field => field.opened = true) 

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.Flagged = !field.Flagged
}
const flagsUsed = board => fields(board)
.filter(field => field.Flagged).length

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}