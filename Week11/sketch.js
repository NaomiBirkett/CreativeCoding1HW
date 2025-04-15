// player start
var squareX = 400
var squareY = 550

// movement key codes
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

// obstacle variations
var circleAX = 0;
var circleAY = 0;
var circleBX = 800;
var circleBY = 0;
var circleAXSpeed;
var circleAYSpeed;
var circleBXSpeed;
var circleBYSpeed;

// mouse click
var mousex;
var mousey;

function setup() 
{
    createCanvas(800, 600);
}

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

function draw()
{
  background(27, 24, 31);
  
  // movement
  if(keyIsDown(87))
    {
        squareY -= 5;   
    }
  else if(keyIsDown(83))
    {
        squareY += 5;   
    }
  else if(keyIsDown(65))
    {
        squareX -= 5;   
    }
  else if(keyIsDown(68))
    {
        squareX += 5;   
    }
  
  // player
  fill(16, 63, 232);
  stroke(189, 58, 180);
  square(squareX,squareY,40);
  
  // exit
  fill(237, 223, 237);
  stroke(0);
  rect(350,0,100,20);
  
  // mouse circle
  fill(51, 209, 27);
  stroke(0);
  circle(mousex,mousey,60);
  
  // obstacle 1
  fill(150, 8, 27);
  stroke(0);
  circle(circleAX,circleAY,30);
  
  // obstacle 2
  fill(150, 8, 27);
  stroke(0);
  circle(circleBX,circleBY,30);
  
  // obstacle speed
  circleAXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleAYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleBXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleBYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  // obstacle movement
  circleAX += circleAXSpeed;
  circleAY += circleAYSpeed;
  circleBX -= circleBXSpeed;
  circleBY -= circleBYSpeed;
  
  if(circleAX > 800)
    {
        circleAX = 0;
    }
  if(circleAX < 0)
    {
        circleAX = 0;
    }
  if(circleAY > 600)
    {
        circleAY = 0;
    }
  if(circleAY < 0)
    {
        circleAY = 0;
    }
  
  if(circleBX > 800)
    {
        circleBX = 0;
    }
  if(circleBX < 0)
    {
        circleBX = 800;
    }
  if(circleBY > 600)
    {
        circleBY = 600;
    }
  if(circleBY < 0)
    {
        circleBY = 600;
    }
  
  // win message
  if(squareX > 350 && squareX < 450 && squareY < 1)
    {
        fill(32, 185, 201);
        stroke(0);
        textSize(100);
        text("You Win!",200,200);
    }
  else if(squareY > 1)
    {
      fill(186, 45, 68);
      stroke(0);
      textSize(50);
      text("Get to the Exit",250,200);
    }
}