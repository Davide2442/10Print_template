let x = 0;
let y = 0;
let spacing = 20;
let randomValue = 0.8;
let rectRatio = 2;
let strokeW = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);

  if(random(1) < randomValue){
    fill(255, 68, 88); 
    rect(x, y, spacing * rectRatio, spacing);
  } else {
    stroke(0, 255, 45); 
    line(x, y, x + spacing, y + spacing);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
}