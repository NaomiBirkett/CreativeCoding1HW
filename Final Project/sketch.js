let leye;
let reye;
let rbody;
let rhead;
let headX = 310;

function preload() {
  // Load the image files.
  leye = loadImage("LeftEye.png");
  reye = loadImage("RightEye.png");
  rbody = loadImage("Body.png");
  rhead = loadImage("Head.png");
}

function setup() {
  // Set canvas.
  createCanvas(668,956);
  
  // Position images using
  // center coordinates.
  imageMode(CENTER);

  // Resize the images.
  leye.resize(37, 35);
  reye.resize(36, 35);
  rbody.resize(668, 956);
  rhead.resize(184, 148);
}

function draw() {
  background(52, 175, 209);

  // Draw the robot
  image(rbody,320,500);
  image(rhead,headX,150);
  image(leye, 256,140);
  image(leye, 345,145);
}