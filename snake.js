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
      this.Score++;
      return true;
    } else return false;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        //game over message
        console.log('you loose at ');
        console.log(Score);
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
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.Score >= 1) {
      this.tail[this.Score - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}