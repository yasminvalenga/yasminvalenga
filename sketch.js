function setup() {
  createCanvas(800, 800);
  cor_do_circulo = color(random(0, 255), random(0, 255), random(0, 255))
  posicaoX = random (0, 400)
  posicaoY = random (0,400)
}

function draw() {
  background('pink');
  stroke('white');
  fill(cor_do_circulo);
  circle(posicaoX, posicaoY, 100);
}