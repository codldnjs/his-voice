
x=-50;
y=0;

function setup() {
  createCanvas(2000, 960);
  background(255); 
}

function draw() {
  
  
  noStroke();
  fill('black')
  circle(x,y,random(50,69));

  if (keyIsPressed==true) {
    fill('red');
  }else{
    fill('black');
  }

  x=x+100;

  if(x>width+40){
    
    y=y+50;
    x=0;
  
  }
  
  if(x>width-10){
    y=y+50;
    x=50;
    
  }
   
  if (y > height) {
    background(255,200);
    x = 50;
    y = 0;
  }
  noFill();
  stroke('black');
  strokeWeight(5);
   circle(x,y,mouseX/20);
 
}
