function Food() {
  this.x = random(scl, floor(width / scl)) * scl;
  this.y = random(scl, floor(height / scl)) * scl;
  this.gen = function() {
    this.x = random(scl, floor(width / scl)) * scl;
    this.y = random(scl, floor(height / scl)) * scl;
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