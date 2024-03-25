//rudimentary checkers boardlogic
class CheckersBoard {
    constructor() {
        this.board = [];
        this.initializeBoard();
    }
//initialize the board
    initializeBoard() {
        for (let row = 0; row < 8; row++) {
            this.board[row] = [];
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 0) {
                    this.board[row][col] = " ";
                } else {
                    this.board[row][col] = "X";
                }
            }
        }
    }
//print the board
    printBoard() {
        for (let row = 0; row < 8; row++) {
            let rowString = "";
            for (let col = 0; col < 8; col++) {
                rowString += this.board[row][col] + " ";
            }
            console.log(rowString);
        }
    }
}

const checkersBoard = new CheckersBoard();
checkersBoard.printBoard();