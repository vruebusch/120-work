//dog chases ball

//here I'm setting the x position of the clouds so that they will animate/move left
var cloudX = 800;
var cloudY = 850;
var cloudZ = 875;

var cloudA = 600;
var cloudB = 650;
var cloudC = 675;

var cloudD = 1000;
var cloudE = 1050;
var cloudF = 1075;

let armAngle = 0;

//declare setup function
function setup() {
    createCanvas( windowWidth, 800 );

}

function draw(){

    background('#aff4ff');

    noCursor()

//clouds
//I tried looping the clouds to make them continuous, but couldn't figure out how
push();

        fill('white');
        ellipse( cloudX , 150 , 80 );
        ellipse( cloudY , 100 , 80 );
        ellipse( cloudZ , 155 , 80 );
//they'll move left
          cloudX = cloudX - 2;
          cloudY = cloudY - 2;
          cloudZ = cloudZ - 2;

      ellipse( cloudA , 250 , 80 );
      ellipse( cloudB , 200 , 80 );
      ellipse( cloudC , 255 , 80 );

        cloudA = cloudA - 2;
        cloudB = cloudB - 2;
        cloudC = cloudC - 2;

      ellipse( cloudD , 250 , 80 );
      ellipse( cloudE , 200 , 80 );
      ellipse( cloudF , 255 , 80 );

        cloudD = cloudD - 2;
        cloudE = cloudE - 2;
        cloudF = cloudF - 2;


  pop();

//grass
    fill('#48a31f');
    rect( 0 , 700 , windowWidth , 200 );

//ball shadow
    fill('#2b6311');
    noStroke();
    ellipse( mouseX , 725, 100, 20);

//ball
    noStroke();
    fill('#ff1414');
    ellipse( mouseX, mouseY, 100);

push();
//dog shadow
    fill('#2b6311');
    noStroke();
    translate( 600 , 0 );
    ellipse( mouseX , 725 , 350 , 20 );

pop();
//dog (referenced from Getting Started with p5.js page 36)
push();

translate(mouseX, 430);
    scale(1.5);
    beginShape()

        vertex( 370, 120 );
        vertex( 360 , 90 );
        vertex( 290 , 80 );
        vertex( 340 , 70 );
        vertex( 280 , 50 );
        vertex( 420 , 10 );
        vertex( 390 , 50 );
        vertex( 410 , 90 );
        vertex( 460 , 120 );
        fill('#c69063');
        rect( 370 , 100 , 130 , 50 , 5 );
        endShape();
        fill(0);
        ellipse( 345, 50 , 10 , 10 );
//legs

        strokeWeight(20);
        stroke('#c69063');
        push();
        translate( 10, -10 );

            line( 380 , 150 , 380 , 190 );
            line( 405 , 150 , 405 , 190 );
            line( 455 , 150 , 455 , 190 );
            line( 480 , 150 , 480 , 190 );
pop();

push();

pop();


pop();
}
