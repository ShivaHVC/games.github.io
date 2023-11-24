var kleur = 'indianred';
var afstand;
var marge = 25; // De marge die gebruikt zal worden
var bolStraal = 50; // Straal van de bol
var josX, josY; // Variabelen voor de positie van Jos

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  fill('black');

  josX = constrain(mouseX, marge, width - marge);
  josY = constrain(mouseY, marge, height - marge);

  afstand = dist(josX, josY, width / 2, height / 2);

  // Toon de afstand bovenaan
  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY), 10, 20);
  text("Afstand tot het middelpunt: " + round(afstand), 10, 40);
  text("Jos positie | x = " + round(josX) + " en y = " + round(josY), 10, 60); // Tonen van Jos' x en y coördinaten

  if (
    (josX >= width - marge || josX <= marge || josY >= height - marge || josY <= marge) ||
    afstand <= bolStraal // Controleer of Jos binnen de bol is
  ) {
    kleur = 'red';
  } else {
    kleur = 'indianred';
  }

  if (josX <= width / 2) {
    background('yellow'); // Als JOS zich op de linkerhelft bevindt, verander achtergrond in geel
  } else {
    background('white'); // Als JOS zich op de rechterhelft bevindt, verander achtergrond in wit
  }

  ellipse(width / 2, height / 2, 2 * bolStraal);
  tekenJos(josX, josY, kleur);
}

function tekenJos(x, y, kleur) {
  push();
  translate(x, y);
  scale(1);
  noStroke();
  fill(kleur);
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}




