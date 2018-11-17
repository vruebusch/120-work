// ball variable for array
let balls = [];
// number of balls
const numOfBalls = 30;

//declared function setup
function setup() {

// created canvas and parameters
    createCanvas(windowWidth, windowHeight);
// parameters for new ball
    let init_x = 150;
    let init_y = 200;
    for ( let i = 0; i < numOfBalls; i++ ) {
// created new object
        balls.push( new Ball( init_x, init_y ) );
// where the balls will start
        init_x += 100;
        if( init_x > width ) {
            init_x = 20;
            init_y += 100;
        }
    }

}
// declared draw function
function draw() {
// background color
    background('#633787');
//parameters for when the ball is called
    for (let i = 0; i < balls.length; i++) {

        balls[i].move();
        balls[i].edgeCheck();
        balls[i].display();
        balls[i].ballCheck(balls, i);
        balls[i].hover(mouseX, mouseY);
    }
}
// declared mousePressed function. When mouse hovers over a ball, it will change color
function mousePressed() {
    for (let i = 0; i < balls.length; i++)
      balls[i].hover(mouseX, mouseY);
}

// BALL CLASS //

// sets Ball class variables
class Ball {
    constructor(x, y, size) {
        this.color = '#42f4ad';
        this.size = random(30, 80);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(0, 5);
        this.deltaY = random(0, 5);
        this.hoverColor = this.color;
    }

// what the balls will look like on the canvas
    display() {
        push();
        noStroke();
        fill(this.hoverColor);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }
// how the hover works
    hover(hx, hy) {
      let d = dist(hx, hy, this.posX, this.posY);
      if (d < this.rad) {
        this.hoverColor = '#ff30ba';
      } else {
        this.hoverColor = this.color;
      }
    }
// how the balls will move across the canvas
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }
// balls will bounce off the edges of canvas
    edgeCheck() {

        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = '#7fdbbc';
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = '#d4f96d';
        }
    }

    // balls will bounce off of each other
    ballCheck(otherBalls, MR) {

      for (let n = 0; n < otherBalls.length; n++) {

        if (n != MR) {
        let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
        let combinedR = this.rad + otherBalls[n].rad;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;

// balls will change color according to what they bounce off of
        if( this.color == '#7fdbbc') {
            this.color = '#d4f96d';
        } else {
            this.color = '#e989ff';
                    }
                }
            }
        }
    }
}
