var rij = 0;
var oranjeKolom = 6; // Kolomnummer van de oranje gemarkeerde cel
var oranjeRij = 3; // Rijnummer van de oranje gemarkeerde cel

function setup() {
  canvas = createCanvas(451, 451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
  for (var rij = 0; rij < 450; rij += 50) {
    for (var kolom = 0; kolom < 450; kolom += 50) {
      if (rij === oranjeRij * 50 && kolom === oranjeKolom * 50) {
        fill('orange');
      } else {
        fill('white');
      }
      rect(kolom, rij, 50, 50);
    }
  }
}


