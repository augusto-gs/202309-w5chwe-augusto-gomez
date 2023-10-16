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

  changeState() {
    if (this.neighbours === 2) {
      this.isAlive = this.isAlive;
    } else if (this.neighbours === 3) {
      this.live();
    } else {
      this.die();
    }
  }
}
export default Cells;
