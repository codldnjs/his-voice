let x,y

x=50;
y=50;
a=100;
b=100;

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
    x=50;
  }
  
  if(a>width){
    
    b=b+100;
    a=100;
  }
}