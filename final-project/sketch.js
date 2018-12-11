
var purrSound;

function preload() {

    purrSound = loadSound("Sound/Purring.mp3");

    img = loadImage('./Images/Hand.png');
    img2 = loadImage('./Images/kitty.jpg');


}

function setup() {

  createCanvas(600,windowHeight);

}

function draw() {

  noCursor();
  image(img2, 0, 0, 600, windowHeight);
  image(img, mouseX, mouseY, 450, 450);


}
