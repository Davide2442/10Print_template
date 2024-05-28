let x = 0;
let y = 0;
let size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,205);
}

function draw(){
  stroke(176,224,230);
  strokeWeight(5);
  fill(0,0,128);
  ellipse(x , y , size);
   
 x = x + size;
     if(x > width){
  x = 0;
  y = y + size;
}
//y = y + 50
//x = x + 50
}
