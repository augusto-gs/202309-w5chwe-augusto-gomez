import World from "../public/World/World.js";
import Cells from "../public/Cells/Cells.js";

const cells = new Cells();

const board = new World(cells);
// Console.log(cells);
// console.log(board.cells[0][1]);

console.log(board.cellInit());
