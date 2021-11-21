// Original source code provided by MIT xPRO
// added X and Y position for the animation, velocity set to 50
var positionX = 0;
var positionY = 0;
var velocity = 50;
// added Boolean value for reversing the ball
var reverse = false;
var ball = document.getElementById("ball");
// Function to move the ball with boolean value "reverse"
function moveBall() {
  var Xmin = 0;
  var Xmax = 400;

  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 100 + "px";
    ball.style.top = positionY + 50 + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + 20 + "px";
    ball.style.top = positionY + 100 + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}
// set interval to for the ball function
setInterval(moveBall, 75);
