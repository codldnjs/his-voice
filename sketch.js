let x
x=50;

function setup() {
  createCanvas(1920, 1080);
  background(0,90);
  noStroke();
 
}

function draw() {

  fill('black');
  circle(x,500,100);
  x=x+100;
}