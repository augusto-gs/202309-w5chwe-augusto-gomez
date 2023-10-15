import World from "../public/World/World.js";

const board = new World();
// Console.log(cells);
// console.log(board.cells[0][1]);

board.cellInit();

board.cells[1][1].live();
board.cells[2][0].live();
board.cells[2][1].live();

console.log(board);

board.countNeighbours(2, 0);

console.log(board.cells[2][0].neighbours);
