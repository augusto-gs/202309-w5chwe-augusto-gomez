import World from "../World/World.js";

const board = new World();
// Console.log(cells);
// console.log(board.cells[0][1]);

board.cellInit(10);

// Board.cells[1][1].live();
// board.cells[2][0].live();
// board.cells[2][1].live();

// console.log(board);

// board.countNeighbours(2, 0);

// console.log(board.cells[2][0].neighbours);

const board2 = new World();
board2.cellInit(10);
board2.cells[2][4].live();
board2.cells[3][6].live();
board2.cells[4][6].live();
board2.cells[3][5].live();

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    board2.countNeighbours(i, j);
    board2.cells[i][j].changeState();
  }
}

board2.countNeighbours(3, 5);
console.log(board2.cells);
console.log(board2.cells[3][5].neighbours);
