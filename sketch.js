
x=50;
y=0;

function setup() {
  createCanvas(1920, 1080);
  background(0,90);
  
 
}

function draw() {

  
  stroke(0);
  noFill();
  circle(x,y,random(65,70));
  circle(x,y,random(60,64))
  circle(x,y,random(54,59));
  circle(x,y,random(49,53));
  
  fill(0);
  circle(x,y,random(40,48));
  
  
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