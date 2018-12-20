function Snake() {
  //start snake at center with no motion, tail, or score
  this.x = floor((width / scl) / 2) * scl;
  this.y = floor((height / scl) / 2) * scl;
  this.xspeed = 0;
  this.yspeed = 0;
  this.Score = 0;
  this.tail = [];

  this.dir = function(x, y) {
    //take in user control input
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < scl) {
      ++this.Score;
      return true;
    } else return false;
  }

  this.death = function() {
    //check if snake kills itself
    for (var i = 0; i < this.tail.length; ++i) {
      if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
        //game over message
        console.log('you loose at ');
        console.log(this.Score);
        background(250);
        background(0);
        background(50);
        //reset game
        this.x = floor((width / scl) / 2) * scl;
        this.y = floor((height / scl) / 2) * scl;
        this.xspeed = 0;
        this.yspeed = 0;
        this.Score = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    // shift tail and pop neck
    for (var i = 0; i < this.tail.length - 1; ++i)
      this.tail[i] = this.tail[i + 1];
    if (this.Score >= 1)
      this.tail[this.Score - 1] = createVector(this.x, this.y);

    // move head
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    // keep head in viewfield. notice tail still shifts forward
    // so automatic death if anything has been eaten
    this.x = constrain(this.x, scl, width - scl);
    this.y = constrain(this.y, scl, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; ++i)
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    if (this.Score == 0)
      ellipse(this.x, this.y, scl, scl);
    else if (this.xspeed != 0) triangle(this.x, this.y, this.tail[this.Score - 1].x, this.y + scl, this.tail[this.Score - 1].x, this.y - scl);
    else if (this.yspeed != 0) triangle(this.x, this.y, this.x + scl, this.tail[this.Score - 1].y, this.x - scl, this.tail[this.Score - 1].y);

  }
}