

let fluff = [];
let num_fluff = 50;
let bg_color;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);
    bg_color = color('#f4b0d1');

    for (let i = 0; i < num_fluff; i++) {
        fluff.push( new Fluff() );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < fluff.length; i++) {
        fluff[i].frame();
    }
}



class Fluff {

    constructor() {
        this.size_w = random(5, 50);
        this.size_h = random(5, 50);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(-2, 2);
        this.move_y = random(-2, 2);
        this.color = color(random(255), random(255), random(255));
        this.size_w = this.size_w;

    }
  }

    display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.color);

        ellipse(0, 0, this.size_w, this.size_h);



        pop();
    }



    move() {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if (this.loc_x >= width) {
            this.move_x *= -1;
            this.loc_x = width - abs(this.move_x);
        } else if (this.loc_x <= 0) {
            this.move_x *= -1;
            this.loc_x = abs(this.move_x);
        } else if (this.loc_y >= height) {
            this.move_y *= -1;
            this.loc_y = height - abs(this.move_y);
        } else if (this.loc_y <= 0) {
            this.move_y *= -1;
            this.loc_y = abs(this.move_y);
        }
    }
}
