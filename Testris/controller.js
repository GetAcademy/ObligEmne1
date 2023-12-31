function init() {
    blank();
    updateView();
}

function blank() {
    board = [
        '', '', '', '', // rad 1
        '', '', '', '', // rad 2
        '', '', '', '', // rad 3
        '', '', '', '', // rad 4
    ];
}

function addL(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[10] = color;
    updateView();
}

function addT(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[6] = color;
    board[9] = color;
    updateView();
}

function addI(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[13] = color;
    updateView();
}

function rotate() {
    let tmpBoard = [];
    for (let index = 0; index < board.length; index++) {
        const newIndex = getRotatedIndex(index);
        tmpBoard[newIndex] = board[index];
    }
    board = tmpBoard;
    updateView();
}

function getRotatedIndex(oldIndex){
    let rowIndex = Math.floor(oldIndex / 4);
    let colIndex = oldIndex % 4;
    let newColIndex = 3 - rowIndex;
    let newRowIndex = colIndex;
    let newIndex = newRowIndex * 4 + newColIndex;
    return newIndex;
}
