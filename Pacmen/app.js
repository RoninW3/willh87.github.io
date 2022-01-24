// vars

let focus = 0;
let dir = 0;
let pos = 0;

// img array
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];

const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let dir = 0;
  let velocity = setToRandom(20);
  let position = setToRandom(500);
  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "./images/PacMan1.png";
  newimg.width = 100;
  newimg.style.left = position.x + "px";
  newimg.style.top = position.y + "px";
  game.appendChild(newimg);
  // return details in an object
  return {
    position,
    velocity,
    newimg,
    dir,
  };
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  focus = (focus + 1) % 2;
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.newimg.src = pacArray[item.dir][focus];
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 75);
}

// checks boundaries and reverses image dir

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  ) {
    item.velocity.x = -item.velocity.x;
    item.dir = 1;
  }
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  ) {
    item.velocity.y = -item.velocity.y;
    item.dir = 0;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
