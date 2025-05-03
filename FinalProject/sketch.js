let sky;
let rhead;

let rbody = [];
let index = 0;

let eyes = [];
let index1 = 0;

let dooropen;

let headX = 310;
let headY = 150;
let xspeed = 0.25;
let yspeed = 0.15;

let mySong;

function preload() 
  {
    // Load the image files
    sky = loadImage('Sky.jpg');
    rhead = loadImage('Head.png');

    rbody[0] = loadImage('HeartTorso.png');
    rbody[1] = loadImage('RabbitTorso.png');
    rbody[2] = loadImage('SwirlTorso.png');
    rbody[3] = loadImage('UnicornTorso.png');

    eyes[0] = loadImage('Eyes.png');
    eyes[1] = loadImage('RedEyes.png');
    eyes[2] = loadImage('BlueEyes.png');
    eyes[3] = loadImage('YellowEyes.png');
    
    // Animate door opening
    dooropen = loadImage('DoorOpen.gif');

    // Load music - "Intimidating Canvas" by Juno Kids
    mySong = loadSound('IntimidatingCanvas.wav');
  }

function setup() 
  {
    // Set canvas
    createCanvas(668,956);

    // Music link
    let link = createA('https://soundcloud.com/user-217364399', 'SoundCloud');
    link.position(570,10);
  
    // Position images 
    imageMode(CENTER);

    // Play music on loop
    mySong.loop();

    // Pause gif by default
    dooropen.pause();
  
    // Resize the images
    rhead.resize(184, 148);

    rbody[0].resize(668, 956);
    rbody[1].resize(668, 956);
    rbody[2].resize(668, 956);
    rbody[3].resize(668, 956);

    eyes[0].resize(135, 49);
    eyes[1].resize(137, 51);
    eyes[2].resize(137, 51);
    eyes[3].resize(137, 51);
    
    dooropen.resize(112,110);
  }

function draw() 
  {
    background(52, 175, 209);
    image(sky,334,478);

    // Music credit
    fill(75, 144, 163);
    text("Music: Intimidating Canvas by Juno Kids", 20, 20);

    // Draw the robot
    for(i = 0; i < rbody.length; i++)
      {
      image(rbody[index],320,500);
      }
    
    image(rhead,headX,headY);
    
    for(i = 0; i < eyes.length; i++)
      {
      image(eyes[index1],300,144);
      }
    
    image(dooropen,305,324);
  
  // animate head bob
  headX = headX + xspeed;
  if(headX >= 312 || headX <= 307) 
    {
        xspeed *= -1;
    }
  headY = headY + yspeed;
  if(headY >= 151 || headY <= 148) 
    {
        yspeed *= -1;
    }
  }

  // open the door and reveal images  
function mousePressed()
  {
    index = index + 1;
    index1 = index1 + 1;
    
    if (index == 4) 
      {
      index = 0;
      }
    
    if (index1 == 4)
      {
        index1 = 0;
      }

    image(dooropen,305,324);
    dooropen.setFrame(0);
    dooropen.play();
  }
  

    
