var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
  canvas = createCanvas(1000,400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');

  // Beweging voor de jager met pijltjestoetsen
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
  }

  // Beperk de beweging binnen het canvas voor de jager
  xJager = constrain(xJager, 0, width - 100);
  yJager = constrain(yJager, 0, height - 100);

  // Beweging voor de prooi met w, a, s, d
  if (keyIsDown(87)) { // W key
    yProoi -= 5;
  }
  if (keyIsDown(65)) { // A key
    xProoi -= 5;
  }
  if (keyIsDown(83)) { // S key
    yProoi += 5;
  }
  if (keyIsDown(68)) { // D key
    xProoi += 5;
  }

  // Beperk de beweging binnen het canvas voor de prooi
  xProoi = constrain(xProoi, 0, width - 100);
  yProoi = constrain(yProoi, 0, height - 100);

  // Controleer of de jager de prooi raakt en verander kleur
  if (dist(xJager + 50, yJager + 50, xProoi + 25, yProoi + 25) < 75) {
    fill('chartreuse'); // Jager raakt de prooi
    eindScherm(); // Roep eindScherm aan omdat de jager de prooi raakt
  } else {
    fill('darkkhaki'); // Jager raakt de prooi niet
  }
  
  // Teken de prooi
  fill('darkkhaki');
  rect(xProoi, yProoi, 50, 50);

  // Teken de jager
  fill('moccasin');
  rect(xJager, yJager, 100, 100);
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!", 75, 250);
  noLoop();
}
