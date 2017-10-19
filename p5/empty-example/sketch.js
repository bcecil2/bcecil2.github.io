function setup() {
<<<<<<< HEAD
  // put setup code here
}

function draw() {
  // put drawing code here
=======
  createCanvas(480,120);
}

function draw() {
  if(mouseIsPressed) {
    fill(1);
  } else {
    fill(225);
  } 
    ellipse(mouseX,mouseY,80,80);
>>>>>>> master
}