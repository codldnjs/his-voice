
x=50;
y=0;

function setup() {
  createCanvas(1900, 960);
  background(255); 
}

function draw() {
  
  
  noStroke();
  if (keyIsPressed==true) {
    fill('red');
  }else{
    fill('black');
  }
  circle(x,y,random(50,69));
 
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
