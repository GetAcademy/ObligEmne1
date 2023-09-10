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
    /*
        indeks, rad og kolonne for brettet: 
        |-------------------------|-------------------------|-------------------------|-------------------------|
        | indeks  0, col=0, rad=0 | indeks  1, col=1, rad=0 | indeks  2, col=2, rad=0 | indeks  3, col=3, rad=0 |
        | indeks  4, col=0, rad=1 | indeks  5, col=1, rad=1 | indeks  6, col=2, rad=1 | indeks  7, col=3, rad=1 | 
        | indeks  8, col=0, rad=2 | indeks  9, col=1, rad=2 | indeks 10, col=2, rad=2 | indeks 11, col=3, rad=2 | 
        | indeks 12, col=0, rad=3 | indeks 13, col=1, rad=3 | indeks 14, col=2, rad=3 | indeks 15, col=3, rad=3 | 
        |-------------------------|-------------------------|-------------------------|-------------------------|
    */
    board = [
        
    ];
    updateView();
}
