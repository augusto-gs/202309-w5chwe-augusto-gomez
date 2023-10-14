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
});
