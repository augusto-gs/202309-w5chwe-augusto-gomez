import Cells from "../Cells/Cells.js";

class World {
  cells = [];

  cellInit(...arg) {
    for (let j = 0; j < 10; j++) {
      this.cells[j] = arg;
      for (let i = 0; i < 10; i++) {
        this.cells[j][i] = new Cells();
      }
    }

    return this.cells;
  }
}

export default World;
