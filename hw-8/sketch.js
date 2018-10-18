// victoria ruebusch

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
}

function draw() {

let red = floor( random(255) );
let blue = floor( random(255) );

background(0);
  for (let y = 10; y <= height; y += 50) {
    for (let x = 10; x <= width; x += 50) {
        noStroke();
        fill(red,0,blue);
        rect(x, y, 40 - y/20, 40 - y/20);
    }

  }







}
