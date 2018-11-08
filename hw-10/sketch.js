


var words = ["morning" , "noon" , "evening" , "midnight" ];

var index = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

}
function draw() {
    background(0);
    fill(255);
    textSize(50);
    text(words[index], width/2, height/2);
}

function mousePressed() {
    index = index + 1;

    if (index == words.length) {
      index = 0;
    }

if ('morning') {
  noStroke();
  fill('#ffe349');
  rect(100, 80, 45, 80);
}

if ("noon") {
  noStroke();
  fill('#2edcf7');
  rect(100, 80, 45, 80);
}
if ("evening") {
  noStroke();
  fill('#1d5b87');
  rect(100, 80, 45, 80);
}
if ("midnight") {
  noStroke();
  fill('#100b2d');
  rect(100, 80, 45, 80);
}
}
