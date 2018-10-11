Victoria Ruebusch

[Live Sketch Link](https://vruebusch.github.io/120-work/HW-7/)

# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->


## How did you alter the sketch?

For my sketch I altered the appearance of the circles by randomizing each circle's fill color, removing the stroke, and changing the size. Also, everytime the mouse gets held down, the circles turns black which makes it blend in with the black background. I was able to accomplish the mouse pressing feature by using 'if' and 'else'.

``  if (mouseIsPressed) {
          noStroke();
          fill('black');
          ellipse(ball.x, ball.y, ball.width, ball.width);
  } else {
        noStroke();
        fill(red,green,blue);
        ellipse(ball.x, ball.y, ball.width, ball.width);
  }``

![Homework 7 Screenshot](circles_ss.png)
