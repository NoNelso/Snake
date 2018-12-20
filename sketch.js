var s;
var scl = 20;
var food;
var cols;
var rows;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  rectMode(CENTER);
  frameRate(10);
  s = new Snake();
  food = new Food();
  food.gen(s.x, s.y);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    food.gen();
  }
  s.death();
  s.update();
  s.show();
  food.show();
}

function keyPressed() {
  //Direction
  if (keyCode === UP_ARROW) s.dir(0, -1);
  else if (keyCode === DOWN_ARROW) s.dir(0, 1);
  else if (keyCode === RIGHT_ARROW) s.dir(1, 0);
  else if (keyCode === LEFT_ARROW) s.dir(-1, 0);
  //speed boost
  else if (key == ' ') frameRate(20);
  //PAUSE AND RESET
  else if (keyCode === ALT) noLoop();
  else if (keyCode === ESCAPE) s.dir(0, 0);
}

function keyReleased() {
  //release speedboost & pause
  if (key == ' ') frameRate(10);
  else if (keyCode === ALT) Loop();

}