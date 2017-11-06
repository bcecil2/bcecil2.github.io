function setup() {
  
  <canvas id="defaultCanvas0" width="1000" height="400" style="width: 1000px; height: 400px; position: absolute; left: -94.5px; top: 118.5px;"></canvas>;
}

function draw() {
  if(mouseIsPressed) {
    fill(1);
  } else {
    fill(225);
  } 
    ellipse(mouseX,mouseY,80,80);
}


   
