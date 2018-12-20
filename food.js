function Food() {

  this.x = floor(random(1, cols)) * scl;
  this.y = floor(random(1, rows)) * scl;
  this.gen = function() {
    this.x = floor(random(1, cols)) * scl;
    this.y = floor(random(1, rows)) * scl;
  }
  this.show = function() {
    fill(255, 0, 100);
    rect(this.x, this.y, scl, scl);
  }

  // this.x = random(floor(width / scl));
  // this.y = random(floor(height / scl));
  // this.generate = function() {
  //   this.x = random(floor(width / scl));
  //   this.y = random(floor(height / scl));
  // }
  // this.show = function() {
  //   rect(this.x, this.y, scl, scl);
  // }
  // this.update = function(x, y) {
  //   this.generate();
  // }
}