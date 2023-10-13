function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  
  strokeWeight(5);
  stroke('darkred');
  fill('darkred');
  beginShape();
  vertex(225,450);
  vertex(450,450);
  vertex(450,450);
  vertex(450,450);
  endShape(CLOSE);

  noStroke();
  fill('pink');
  triangle(0,225,450,450,450,0);

  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  vertex(450,225);
  vertex(450,225);
  vertex(0,450);
  vertex(0,0);
  endShape(CLOSE);
}




  



