let x = 0;
let y = 0;
let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
    strokeWeight(5);
  if(random(1) < 0.5){
    rect(x,y, x + size, y + size);
  } else {
    line(x, y + size, x + size,y);
    }
  x += size;
  
  if(x>width){
    x = 0;
    y +=size
  }
}