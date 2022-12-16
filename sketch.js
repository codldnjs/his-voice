let x,y

x=0;
y=0;
a=50;
b=50;

function setup() {
  createCanvas(1920, 1080);
  background(0,90);
  
 
}

function draw() {

  fill(0);
  circle(x,y,50);
  circle(a,b,50);
  
  x=x+100;
  a=a+100;

  if(x>width){
    
    y=y+100;
    x=0;
  }
  
  if(a>width){
    
    b=b+100;
    a=50;
  }
}