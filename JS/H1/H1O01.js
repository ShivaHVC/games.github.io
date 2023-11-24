function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function  draw() {
  // groene cirkel zonder rand
  
 strokeWeight(40);
 stroke('black')
  fill('white');
  ellipse(225,225,350);
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);
}
