
var col = 0;

function setup() {

      createCanvas( windowWidth , 800 );
      background('#ffc1f4');

}

function draw() {

// bubble spawn
push();
let bubble_size = random( 10, 400 );
let bubble_locx = random( 0, width);
let bubble_locy = random( 0, 800);

// bubble color
let red = floor( random(256) );
let green = floor( random(256) );
let blue = floor( random(256) );


// bubbles

      round(fill( red, blue, green, 50 ));
      strokeWeight(20)
      stroke(red, blue, green, 10)
      ellipse( bubble_locx, bubble_locy, bubble_size );
pop();

// Center circle

col = map( mouseX , 0, width, 0, 255 );
      noStroke();
      fill(col)
      ellipse( width/2 , height/2 , 500, 500);



}
