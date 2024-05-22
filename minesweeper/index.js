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
        
        i = mineCoordY;
        j = mineCoordX;
        //if i and j no mines, then place
        if (board[i][j].isMine == false) {
            board[i][j].isMine == true;
            minesPlaced++;
        } 
        console.log(mineCoordY, mineCoordX);
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

function makeBoard() {
    for (let a = 0; a < 8; a++) {

    }
}

boardInitialize();
testing();
placeMines();