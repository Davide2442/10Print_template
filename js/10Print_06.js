let x = 0;
let y = 0;
let size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(		240,248,250);
}

function draw() {
  let colors = [color(0,0,128), color(0,255,255), color(	221,160,221), color(		128,0,128)]; // Colori freddi
  let index = int((x + y) / size) % colors.length; // Alterna i colori
  fill(colors[index]);
  stroke(0,0,205);
  strokeWeight(0);
  
  // Disegna un triangolo
  if ((x / size + y / size) % 2 == 0) {
    // Triangolo orientato in alto
    triangle(x, y + size, x + size / 2, y, x + size, y + size);
  } else {
    // Triangolo orientato in basso
    triangle(x, y, x + size / 2, y + size, x + size, y);
  }

  x = x + size;
  if (x >= width) {
    x = 0;
    y = y + size;
  }

  if (y >= height) {
    noLoop(); // Ferma il disegno quando il canvas è completo
  }
}
