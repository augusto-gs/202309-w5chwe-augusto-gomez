import Cells from "../Cells/Cells.js";
import World from "../World/World.js";

describe("Given a World class", () => {
  describe("When you call a cellInit method and select position 1 and 2 of cell property", () => {
    test("You receive an instance of the class Cell", () => {
      const earlierProduct = new World();

      earlierProduct.cellInit(3);
      const actualProduct = earlierProduct.cells[1][2];
      const expectedProduct = new Cells();

      expect(actualProduct).toStrictEqual(expectedProduct);
    });
  });

  describe("When you call a countNeighbours method and give paramenters 2 and 0", () => {
    test("Then the neighbours property on the cell on position 2 and 0 on the array should return 3", () => {
      const testWorld = new World();
      testWorld.cellInit(10);
      const expectedProduct = 3;

      testWorld.cells[1][1].live();
      testWorld.cells[2][0].live();
      testWorld.cells[2][1].live();
      testWorld.countNeighbours(2, 0);

      expect(testWorld.cells[2][0].neighbours).toBe(expectedProduct);
    });
  });

  describe("When its called with 3 and 5", () => {
    test("Then it should return 3", () => {
      const length = 10;
      const neighbours = 3;

      const board = new World();
      board.initBoard(length);
      board.cell[2][4].live();
      board.cell[3][6].live();
      board.cell[4][6].live();
      board.cell[3][5].live();

      board.countNeighbours(3, 5);

      expect(board.cell[3][5].neighbours).toBe(neighbours);
    });
  });
});
