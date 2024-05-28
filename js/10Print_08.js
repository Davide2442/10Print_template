let x = 0;
let y = 0;
let size = 30;
let waveHeight = 10; // Altezza della sinusoide

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(65,105,225);
}

function draw() {
  stroke(224,255,255);
  strokeWeight(10);
  noFill();
  
  // Disegna una sinusoide
  beginShape();
  for (let i = 0; i < size; i++) {
    let yOffset = sin((i + x) * 0.1) * waveHeight;
    curveVertex(x + i, y + yOffset);
  }
  endShape();
  
  // Incrementa la posizione
  x = x + size;
  if (x > width) {
    x = 0;
    y = y + size;
  }
}
