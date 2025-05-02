// player start
var squareX = 400;
var squareY = 550;

// movement key codes
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

// obstacle arrays
var circleXs = [52,230,450,506,666];
var circleYs = [17,139,380,440,585];
var circleDiameters = [10,20,30,40,50];
var rfill = [255,127,32,135,201];
var gfill = [187,219,145,60,20];
var bfill = [0,99,201,176,93];

// mouse click
var mousex;
var mousey;

function setup() 
{
    createCanvas(800, 600);

    // obstacle speed
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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
  stroke(0);
  for (let i = 0; i < 5; i++){
    fill(rfill[i],gfill[i],bfill[i]);
    circle(circleXs[i],circleYs[i],circleDiameters[i])
  }
}

function moveObstacles()
{    
    // obstacle movement
    for (let i = 0;i < circleXs.length; i++);
    circleXs[i].x += circleXs[i].circleXSpeed;
    circleYs[i].y += circleYs[i].circleYSpeed;
    
    if (circleXs[i].x < 0 || circleXs[i].x > width) {
      circleXs[i].circleXSpeed = -circleXs[i].circleXSpeed;
    }
    if (objectsYs[i].y < 0 || objectsYs[i].y > height) {
      objectsYs[i].circleYSpeed = -objectsYs[i].circleYSpeed;
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