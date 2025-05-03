let sky;
let rbody = [];
let index = 0;
let rhead;

let leye;
let reye;
let rredeye;
let lredeye;

let dooropen;

let headX = 310;
let headY = 150;
let xspeed = 0.25;
let yspeed = 0.15;

let music;

function preload() {
  // Load the image files
  sky = loadImage("Sky.jpg");
  leye = loadImage("LeftEye.png");
  reye = loadImage("RightEye.png");
  rbody[0] = loadImage("HeartTorso.png");
  rbody[1] = loadImage("RabbitTorso.png");
  rbody[2] = loadImage("SwirlTorso.png");
  rbody[3] = loadImage("UnicornTorso.png");
  rhead = loadImage("Head.png");
  rredeye = loadImage("RedRightEye.png");
  lredeye = loadImage("RedLeftEye.png");
  
  // Animate door opening
  dooropen = loadImage("DoorOpen.gif");
  
  // Music
  music = loadSound("IntimidatingCanvas.wav");
}
  
function setup() {
  // Set canvas
  createCanvas(668,956);

  // Play music
  music.play();
  
  // Position images 
  imageMode(CENTER);
  
  // Pause gif by default
  dooropen.pause();

  // Resize the images
  leye.resize(37, 35);
  reye.resize(36, 35);
  lredeye.resize(45, 44);
  rredeye.resize(44, 48);
  rbody[0].resize(668, 956);
  rbody[1].resize(668, 956);
  rbody[2].resize(668, 956);
  rbody[3].resize(668, 956);
  rhead.resize(184, 148);
  dooropen.resize(112,110);
}

function draw() {
  background(52, 175, 209);
  image(sky,334,478);

  // Draw the robot
  for(i = 0; i < rbody.length; i++){
  image(rbody[index],320,500);
  }
  
  image(rhead,headX,headY);
  image(leye,256,140);
  image(leye,345,145);
  
  image(dooropen,305,324);

// animate head bob
headX = headX + xspeed;
if(headX >= 312 || headX <= 307) {
      xspeed *= -1;
  }
headY = headY + yspeed;
if(headY >= 151 || headY <= 148) {
      yspeed *= -1;
  }
 
// open the door and reveal images  
if (mouseIsPressed) {
  index = index + 1;
  
  if (index == 4) {
    index = 0;
  }
  
  image(lredeye, 254,140);
  image(rredeye, 343,146);
  image(dooropen,305,324);
  dooropen.setFrame(0);
  dooropen.play();
  }

}

