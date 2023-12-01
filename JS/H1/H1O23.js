var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');

  if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
  }

  yJager = constrain(yJager, 0, height - 100);
  xJager = constrain(xJager, 0, width - 100);

  // Controleer of de jager de prooi raakt en verander kleur
  if (xJager + 100 >= xProoi && xJager <= xProoi + 50 && yJager + 100 >= yProoi && yJager <= yProoi + 50) {
    fill('chartreuse'); // Jager raakt de prooi
  } else {
    fill('darkkhaki'); // Jager raakt de prooi niet
  }

  rect(xProoi, yProoi, 50, 50); // Teken de prooi
  fill('moccasin');
  rect(xJager, yJager, 100, 100); // Teken de jager
}
