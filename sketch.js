
x=50;
y=0;

function setup() {
  createCanvas(1900, 960);
  background(255);
  
 
}

function draw() {
  background(255,0.6);
  stroke(0);
  noFill();
  circle(x,y,random(60,64))
  circle(x,y,random(54,59));
  circle(x,y,random(49,53));
  
  fill(0);
  circle(x,y,mouseX/40);
 
  x=x+100;

  if(x>width+25){
    
    y=y+50;
    x=0;
  
  }
  
  if(x>width-25){
    y=y+50;
    x=50;
    
  }

  if (y > height) {
    x = 50;
    y = 0;
  }
}