function setup() {
  createCanvas(480, 220);
}

function draw() {
 if(mouseIsPressed){
   fill(0);
 } else {
   fill(255);
 }
ellipse(mouseX, mouseY, 80, 80);
}
