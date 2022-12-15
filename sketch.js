let x,y

x=5;
y=5;

function setup() {
  createCanvas(1920, 1080);
  background(0,90);
  
 
}

function draw() {

  fill(0);
  circle(x,y,10);
  
  x=x+10;
  if(x>width){
    
    y=y+10;
    x=5;
  }
}