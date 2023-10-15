import Cells from "../Cells/Cells.js";
import World from "..//World/World.js";

describe("Given a World class", () => {
  describe("When you call a cellInit method and select position 1 and 2 of cell property", () => {
    test("You receive an instance of the class Cell", () => {
      const earlierProduct = new World();

      earlierProduct.cellInit();
      const actualProduct = earlierProduct.cells[1][2];
      const expectedProduct = new Cells();

      expect(actualProduct).toStrictEqual(expectedProduct);
    });
  });

  describe("When you call a countNeighbours method and give paramenters 2 and 0", () => {
    test("Then the neighbours property on the cell on position 2 and 0 on the array should return 3", () => {
      const testWorld = new World();
      testWorld.cellInit();
      const expectedProduct = 3;

      testWorld.cells[1][1].live();
      testWorld.cells[2][0].live();
      testWorld.cells[2][1].live();
      testWorld.countNeighbours(2, 0);

      expect(testWorld.cells[2][0].neighbours).toBe(expectedProduct);
    });
  });
});
