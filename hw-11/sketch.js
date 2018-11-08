let droplets = [];

function setup() {
    createCanvas(windowWidth, 800)
    let d = new Rain(width, height, 10);
    droplets.push(d);
}



function draw() {
  background('#a0a5af');
  for (let i = 0; i < droplets.length; i ++){
    droplets[i].move();
    droplets[i].show();
  }
}

class Rain {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    move() {
      this.x = this.x + random(0, 5);
      this.y = this.y + random(0, 5);
    }

    show() {
      noStroke();
      fill('#326adb');
      ellipse(this.x, this.y, this.w, this.h);
    }
}
