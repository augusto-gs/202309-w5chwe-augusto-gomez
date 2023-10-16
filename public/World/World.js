import Cells from "../Cells/Cells.js";

class World {
  cells = [];

  cellInit(length) {
    for (let j = 0; j < length; j++) {
      this.cells[j] = [];
      for (let i = 0; i < length; i++) {
        this.cells[j][i] = new Cells();
      }
    }

    return this.cells;
  }

  countNeighbours(indexRow, indexColumn) {
    let counter = 0;
    const length = 10;

    const myCell = this.cells[indexRow][indexColumn];
    const leftRow = indexRow - 1 === -1 ? 0 : indexRow - 1;
    const rightRow = indexRow + 1 > length - 1 ? length - 1 : indexRow + 1;
    const leftColumn = indexColumn - 1 === -1 ? 0 : indexColumn - 1;
    const rightColumn =
      indexColumn + 1 > length - 1 ? length - 1 : indexColumn + 1;

    for (let x = leftRow; x <= rightRow; x++) {
      for (let y = leftColumn; y <= rightColumn; y++) {
        if (this.cells[x][y].state()) {
          counter += 1;
        }
      }
    }

    if (myCell.state()) {
      counter -= 1;
    }

    myCell.neighbours = counter;
  }
}

export default World;
