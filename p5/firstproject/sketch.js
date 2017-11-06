function setup() {
    createCanvas(1000, 600);
    background(254,0,0)

}



function draw() {
    
    if(mouseIsPressed) {
        rect(mouseX,mouseY,80,80);
    } else {
        ellipse(mouseX,mouseY,100,100);
    } 
    
    
    fill(0,0,254)
  }


