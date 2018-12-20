function Food() {
  this.x = floor(random(1, cols)) * scl;
  this.y = floor(random(1, rows)) * scl;

  this.gen = function(x, y) {
    // is eaten. create new random food.
    this.x = floor(random(1, cols)) * scl;
    this.y = floor(random(1, rows)) * scl;
    // if on snake head re-randomize
    if (this.x == x && this.y == y)
      this.gen(x, y);
  }
  this.show = function() {
    //show food at x,y as rect
    fill(255, 0, 100);
    rect(this.x, this.y, scl, scl);
  }
}