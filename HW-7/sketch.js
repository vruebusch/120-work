

let ball = {};
ball.width = 80;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
}



function draw() {

//creates random fill for the circles
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

//ball boundaries
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
         //ball appearance
    if (mouseIsPressed) {
      noStroke();
      fill('black');
      ellipse(ball.x, ball.y, ball.width, ball.width);
    } else {
      noStroke();
      fill(red,green,blue);
      ellipse(ball.x, ball.y, ball.width, ball.width);
    }



}



function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 1, 10);
    ball.scale_y = map(mouseY, 0, height, 1, 10);
}
