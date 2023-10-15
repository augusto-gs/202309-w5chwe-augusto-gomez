class Cells {
  isAlive = false;
  neighbours;
  die() {
    this.isAlive = false;
  }

  live() {
    this.isAlive = true;
  }

  state() {
    return this.isAlive;
  }
}
export default Cells;
