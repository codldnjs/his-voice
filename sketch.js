
x=50;
y=0;

function setup() {
  createCanvas(1920, 1080);
  background(0,90);
  
 
}

function draw() {

  fill(0);
  circle(x,y,50);
  
  x=x+100;

  if(x>width+25){
    
    y=y+50;
    x=0;
  
  }
  
  if(x>width-25){
    y=y+50;
    x=50;
    
  }
}