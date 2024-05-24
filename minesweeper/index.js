const numRows = 9;
const numColumns = 9;
const numMines = 10;

const gameBoard = document.getElementById("gameBoard");

let board = [];

function boardInitialize(){
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numColumns; j++) {
            board[i][j] = {
                isMine: false,
                reveal: false,
                count: 0
            };
        }
    }
}

function getRandomNum(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let minesPlaced = 0;
let i = 0;
let j = 0;

function placeMines() {
    while (minesPlaced < 10) { //account for repeated generation
        let mineCoordY = getRandomNum(0, 9);
        let mineCoordX = getRandomNum(0, 9);
        
        i = mineCoordY; //row
        j = mineCoordX;
        //if i and j no mines, then place
        if (board[i][j].isMine == false) {
            board[i][j].isMine = true;
            minesPlaced++;
        } 
        console.log(mineCoordY, mineCoordX); //test
    }
}

function adjacentMines() {
    let rowCounter = 0;
    let columnCounter = 0;
    for (let a = 0; a < numRows; a++) {
        for (let b = 0; b < numColumns; b++) {
            if (board[a][b].isMine == false) {
                // a = 0, can't count up, a = 9, down
                //b = 0, can't count left, b = 8, right
                //case for center cells
                for (rowCounter = a - 1; rowCounter < a + 2; rowCounter++) {
                    for (columnCounter = b - 1; columnCounter < b + 2; columnCounter++) {
                        if (rowCounter >= 0 && rowCounter < numRows && columnCounter >= 0 && columnCounter < numColumns && board[rowCounter][columnCounter].isMine == true) {
                            board[a][b].count = board[a][b].count + 1;
                        }
                    }
                }
            }
        }
    }
}
    

function testing() {
    //console.log(mineCoordY, mineCoordX);
}

/*function createBoard() {
    for(let a=0; a<8; a++) {
        const row = document.createElement("div");
        document.getElementById("board").appendChild(row);
        row.className = 'row';

        for(let b=0; b<10; b++) {
            const column = document.createElement("div");
            column.className = 'column';
            row.appendChild(column);
        }
    }

    
}*/


boardInitialize();
testing();
placeMines();
adjacentMines();
console.log(board);