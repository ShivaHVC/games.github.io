var x = 120;
var snelheid = 5;
var diameter = 200;

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0, 0, width, 40);
  fill('black');
  text("De bol beweegt heen en weer (snelheid = " + snelheid + "). | Klik met je muis!", 10, 30);
  stroke('white');
  strokeWeight(10);

  if ((x > 880 || x < 120) || mouseIsPressed || snelheid > 0) {
    snelheid = -1 * snelheid;
  }

  if (mouseIsPressed) {
    fill('red');
    diameter = 100;
  } else if (snelheid > 0) {
    fill('green');
    diameter = 200;
  } else {
    fill('dodgerblue');
    diameter = 200;
  }

  x += snelheid;
  ellipse(x, 170, diameter);
}
je muis!",10,30);
}
