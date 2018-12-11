let x = 100;
let y = 350;
let box_size = 600;
var purrSound;

function preload() {

   purrSound = loadSound("Purring.mp3");
   meowSound = loadSound("meow.mp3");

    img = loadImage('Hand.png');
    img2 = loadImage('kitty.jpg');
    img3 = loadImage('closed-eyes.jpg');
}

function setup() {

  createCanvas(600,windowHeight);

  purrSound.play();
  purrSound.setVolume(.7);
  purrSound.loop();
}

function mousePressed() {
  meowSound.play();
}

function draw() {

    noCursor();

// kitty closes eyes when pet. open when not
  if ((mouseX > x) && (mouseX < x + box_size) && (mouseY > y) && (mouseY < y +box_size)) {
    image(img3, 0, 0, 600, windowHeight);
  } else {
    image(img2, 0, 0, 600, windowHeight);
  }

// HAND
image(img, mouseX, mouseY, 300, 250);

}
