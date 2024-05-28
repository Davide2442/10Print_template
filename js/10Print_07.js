let x = 0;
let y = 0;
let spacing = 35;
let strokeW = 2;

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

  // Disegna il quadrato
  rect(x, y, spacing, spacing);
  fill(	random(255), random(255), random(255));
  // Disegna la X dentro il quadrato
  line(x, y, x + spacing, y + spacing);
  line(x + spacing, y, x, y + spacing);

  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
  
  // Ferma il disegno quando il canvas è completamente riempito
  if(y > height){
    noLoop();
  }
}
