let balls = [];
const numOfBalls = 30;


function setup() {

    createCanvas(windowWidth, windowHeight);

    let init_x = 150;
    let init_y = 200;
    for ( let i = 0; i < numOfBalls; i++ ) {
        balls.push( new Ball( init_x, init_y ) );

        init_x += 100;
        if( init_x > width ) {
            init_x = 20;
            init_y += 100;
        }
    }

}

function draw() {
    background('#633787');

    for (let i = 0; i < balls.length; i++) {

        balls[i].move();
        balls[i].edgeCheck();
        balls[i].display();
        balls[i].ballCheck(balls, i);
        balls[i].hover(mouseX, mouseY);
    }
}

function mousePressed() {
    for (let i = 0; i < balls.length; i++)
      balls[i].hover(mouseX, mouseY);
}

// BALL CLASS //

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


    display() {
        push();
        noStroke();
        fill(this.hoverColor);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    hover(hx, hy) {
      let d = dist(hx, hy, this.posX, this.posY);
      if (d < this.rad) {
        this.hoverColor = '#ff30ba';
      } else {
        this.hoverColor = this.color;
      }
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

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
    ballCheck(otherBalls, MR) {

      for (let n = 0; n < otherBalls.length; n++) {

        if (n != MR) {
        let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
        let combinedR = this.rad + otherBalls[n].rad;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;


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
