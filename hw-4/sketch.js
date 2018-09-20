// SKELETON MONSTER

function setup() {
  //create a canvas to draw my portrait on
  createCanvas(750,900);
}

function draw(){
  //set the background color
  background('#ff7200');

// Create a Sandbox For the Entire Character
push();

//move the entire grid for this character to the center of the canvas
    translate( 375, 450 );

// BODY
push();

// NECK
  strokeWeight(2)
    rect( 0, -250, 25, 25, 10);
  strokeWeight(2)
    rect( 0, -225, 25, 25, 10);
// END NECK

// RIBS
    rect( -85, -200, 200, 20, 10);
    rect( -70, -175, 75, 20, 10);
    rect( 20, -175, 75, 20, 10);
    rect( 20, -150, 50, 20, 10);
    rect( -45, -150, 50, 20, 10);
    rect( 20, -125, 30, 20, 10);
    rect( -26, -125, 30, 20, 10);

// SPINE
    rect( 0, -180, 25, 25, 10);
    rect( 0, -155, 25, 25, 10);
    rect( 0, -130, 25, 25, 10);
    rect( 0, -105, 25, 25, 10);
    rect( 0, -80, 25, 25, 10);

// HIPS
    rect( -45, -55, 115, 55, 10);

pop();
// END BODY

// ARMS
    push();
    strokeWeight(2);
        rect(-90,-200,20,140,10);
        rect( 95,-200,20,140,10);
        rect(-90,-60,18,100,8);
        rect( 95,-60,18,100,8);
        ellipse(-80,-190,25)
        ellipse( 105,-190,25)
        ellipse( -88,-60, 18)
        ellipse( -73,-60, 18)
        ellipse( 113,-60, 18)
        ellipse( 98,-60, 18)
        ellipse( 113, 40, 16)
        ellipse( 98, 40, 16)
        ellipse( -88, 40, 16)
        ellipse( -73, 40, 16)
    pop();
// END ARMS

// FINGERS
push();
    strokeWeight(8)
    stroke('white')
    //right hand
        line(-68,50,-63,65)
        line(-78,40,-75 ,80)
        line(-85,20,-85,80)
        line(-80,10,-95,85)
        line(-90,40,-105,80)
    //left hand
        line( 90,40,85,65)
        line( 100,45,95,80)
        line( 103,45,105,80)
        line( 110,45,115,80)
        line( 117,45,125,70)
pop();
// END FINGERS

// LEGS
    push();
        strokeWeight(2);
            rect(-40,0,30,150,10);
            rect( 35,0,30,150,10);
            rect(-40,150,30,200,10);
            rect( 35,150,30,200,10);
            ellipse(-35,150,23);
            ellipse(-15,150,23);
            ellipse( 60,150,23);
            ellipse( 40,150,23);
        // feet
            rect(-70,340,60,30,15);
            rect( 30,340,60,30,15);
    pop();
// END LEGS


// HEAD
    push();

    strokeWeight(2);
// cranium
    arc(12,-290,150,225,PI,TWO_PI,CHORD);
// jaw
    arc(12,-285,100,70,TWO_PI,PI,CHORD);
// cheekbones?
  noStroke();
    ellipse(-55,-295,40,40);
    ellipse(80,-295,40,40);

// NOSE
    push();
// triangle skeleton nose with purple stroke
  fill('black');
  stroke('#9e67f7');
  strokeWeight(3);
    triangle( 15, -325, 26, -300, 3, -300 );

    pop();
// END NOSE


// TEETH
    push();
// the teeth will be multicolored. each being a diffirent color

fill('#ff4719');
rect(-40,-293,10,10,3);

fill('#f4ff2d');
rect(-30,-293,10,10,3);

fill('#922bf2');
rect(-20,-293,10,10,3);

fill('#30fff8');
rect(-10,-293,10,10,3);

fill('#ff30f8');
rect(0,-293,10,10,3);

fill('#30ff52');
rect(10,-293,10,10,3);

fill('#009e07');
rect(20,-293,10,10,3);

fill('#ff9000');
rect(30,-293,10,10,3);

fill('#9e67f7');
rect(40,-293,10,10,3);

fill('#ff1c1c');
rect(50,-293,10,10,3);

    pop();
// END TEETH

// EYES
    push();
// round black eyes with purple stroke
  fill('black');
  stroke('#9e67f7');
  strokeWeight(3);
    ellipse(-15,-335,30)
    ellipse(42,-335,30)

    pop();
// END EYES

push();
// EYEBROWS
  stroke('black');
  strokeWeight(4);
      line(-30, -354, -5, -356);
      line( 30, -356, 55, -354);
pop();
// END EYEBROWS

// DECORATIVE FLOWERS
    push();
//left cheek (center)
    stroke('#f73392');
    strokeWeight(2);
fill('#ff87c1');
ellipse(-20,-306,8);
  pop();

  push();
//left cheek (pedals)
  stroke('#ffb14c');
  strokeWeight(2);
  fill('#ffc85b');
    ellipse(-12,-310,9);
    ellipse(-11,-300,9);
    ellipse(-21,-297,9);
    ellipse(-29,-304,9);
    ellipse(-26,-313,9);
    ellipse(-19,-315,9);
  pop();

  push();
//right cheek (center)
    stroke('#f73392');
    strokeWeight(2);
fill('#ff87c1');
ellipse(45,-306,8);
  pop();

  push();
//right cheek (pedals)
  stroke('#036057');
  strokeWeight(2);
  fill('#077c67');
    ellipse(52,-313,9);
    ellipse(55,-304,9);
    ellipse(48,-298,9);
    ellipse(38,-299,9);
    ellipse(36,-309,9);
    ellipse(43,-315,9);

    pop();
// END FLOWERS

push();
// Chin Decorations
  stroke('#02698e');
  strokeWeight(2);
  fill('#60badb');
      ellipse(40,-265,11);
      ellipse(27,-260,11);
      ellipse(12,-258,11);
      ellipse(-4,-260,11);
      ellipse(-17,-266,11);
pop();
// END CHIN Decorations

push();
// Forehead Decorations
  stroke('#fc6abd');
  strokeWeight(5);
      line(-20, -382, -10, -360);
      line( 15, -390, 15, -360);
      line(45, -382, 35, -360);

pop();
// END Forehead Decorations

    pop();
// END HEAD


// End Charachter Sandbox
    pop();

}
