// declare the setup function
// these need to occur at the very beginning and only once of ever p5 sketch

function setup() {

// create the canvas 600px wide by 400px high
// canvases hold all of the graphics which will show up in the webpage
// the pixels state how big the canvas size will be
  createCanvas(600,400);

// color the background 'pink'
  background('pink');
}

// declare draw function
function draw() {
  //using the text function, have p5 write "hello world!"
  // positioned at 250 x by 200 y.
  text("Hello World!", 250,200);
}
