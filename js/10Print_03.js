let x = 0;
let y = 0;
let spacing = 10;
let randomValue = 0.9;
let ellipseRate = 88;
let rectRatio = 5;
let strokeW = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255,182,193);
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);

  if(random(1)<randomValue){
    line(x,y,x+spacing,y+spacing);
  }else{
    line(x,y+spacing,x+spacing,y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}