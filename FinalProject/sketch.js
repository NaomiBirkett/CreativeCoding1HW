let sky;
let rbody;
let rhead;

let leye;
let reye;
let rredeye;
let lredeye;

let door;
let dooropen;

let headX = 310;
let headY = 150;
let xspeed = 0.25;
let yspeed = 0.15;

function preload() {
  // Load the image files
  sky = loadImage("Sky.jpg");
  leye = loadImage("LeftEye.png");
  reye = loadImage("RightEye.png");
  rbody = loadImage("Body.png");
  rhead = loadImage("Head.png");
  rredeye = loadImage("RedRightEye.png");
  lredeye = loadImage("RedLeftEye.png");
  door = loadImage("Door.png");
  
  // Animate door opening
  dooropen = loadImage("DoorOpen.gif");
}
  
function setup() {
  // Set canvas
  createCanvas(668,956);
  
  // Position images 
  imageMode(CENTER);

  // Resize the images
  leye.resize(37, 35);
  reye.resize(36, 35);
  lredeye.resize(45, 44);
  rredeye.resize(44, 48);
  rbody.resize(668, 956);
  rhead.resize(184, 148);
  door.resize(98,83);
  dooropen.resize(112,110);
}

function draw() {
  background(52, 175, 209);
  image(sky,334,478);

  // Draw the robot
  image(rbody,320,500);
  image(rhead,headX,headY);
  image(leye,256,140);
  image(leye,345,145);
  
headX = headX + xspeed;
if(headX >= 312 || headX <= 307) {
      xspeed *= -1;
  }
headY = headY + yspeed;
if(headY >= 151 || headY <= 148) {
      yspeed *= -1;
  }
  
if (mouseIsPressed) {
  image(lredeye, 254,140);
  image(rredeye, 343,146);
  image(dooropen,305,324);
  dooropen.setFrame(0);
  dooropen.play();
  }
else {
  image(door,312,323);
  }
}

