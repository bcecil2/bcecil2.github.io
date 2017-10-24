function setup() {
  
  createCanvas(480,600);
}

function draw() {
  if(mouseIsPressed) {
    fill(1);
  } else {
    fill(225);
  } 
    ellipse(mouseX,mouseY,80,80);
}


   
