
var purrSound;

function preload() {

   purrSound = loadSound("Purring.mp3");

    img = loadImage('Hand.png');
    img2 = loadImage('kitty.jpg');


}

function setup() {

  createCanvas(600,windowHeight);

  purrSound.play();
  purrSound.setVolume(1);
  purrSound.loop();
}

function draw() {

  noCursor();
  image(img2, 0, 0, 600, windowHeight);
  image(img, mouseX, mouseY, 450, 450);


}
