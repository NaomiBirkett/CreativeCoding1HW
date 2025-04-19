// player start
var squareX = 400;
var squareY = 550;

// movement key codes
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

// obstacle variations
var circleX = 0;
var circleY = 0;
var circle2X = 800;
var circle2Y = 0;

// mouse click
var mousex;
var mousey;

function setup() 
{
    createCanvas(800, 600);
    // obstacle speed
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
  background(27, 24, 31);
  mouseCircle();
  createBorder();
  createPlayer();
  movePlayer();
  createObstacles();
  moveObstacles();
  createExit();
  youWin();
}

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

function mouseCircle()
{
  // mouse circle
  fill(70, 201, 227);
  stroke(0);
  circle(mousex,mousey,60);
}

function createBorder()
{
    fill(0)
    rect(0,0,800,20);
    rect(0,0,20,600);
    rect(0, 600-20,800, 20);
    rect(800-20,0,20,600);
}

function createPlayer()
{
  // player
  fill(16, 63, 232);
  stroke(189, 58, 180);
  square(squareX,squareY,40);
}

function movePlayer()
{
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
}

function createObstacles()
{
  // obstacle 1
  fill(150, 8, 27);
  stroke(0);
  circle(circleX,circleY,30);

  // obstacle 2
  fill(26, 163, 33);
  stroke(0);
  circle(circle2X,circle2Y,50);
}

function moveObstacles()
{    
    // obstacle movement
    circleX += circleXSpeed;
    circleY += circleYSpeed;
    circle2X -= circle2XSpeed;
    circle2Y -= circle2YSpeed;
    
    if(circleX > 800)
      {
          circleX = 0;
      }
    if(circleX < 0)
      {
          circleX = 0;
      }
    if(circleY > 600)
      {
          circleY = 0;
      }
    if(circleY < 0)
      {
          circleY = 0;
      }
    
    if(circle2X > 800)
      {
          circle2X = 0;
      }
    if(circle2X < 0)
      {
          circle2X = 800;
      }
    if(circle2Y > 600)
      {
          circle2Y = 600;
      }
    if(circle2Y < 0)
      {
          circle2Y = 600;
      }
}

function createExit()
{
   // exit
   fill(237, 223, 237);
   stroke(0);
   rect(350,0,100,20);
}

function youWin()
{
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