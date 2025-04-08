var headX = 450;
var headY = 325;
var headWidth = 400;
var headHeight = 450;
var headSize = 10;
var headXDirection;
var headYDirection;

var leftX = 310;
var leftY = 300;
var leftDirection;

var lglassX = 250;
var lglassY = 270;
var lDirection;

var rightX = 510;
var rightY = 300;
var rightDirection;

var rglassX = 435;
var rglassY = 270;
var rDirection;

var size = 35;
var count = 0;
var sizeDirection = 1;

function setup() {
    createCanvas(1650, 925);
    headXDirection = floor(random() * 10) + 1;
    headYDirection = floor(random() * 10) + 1;
    leftDirection = floor(random() * 10) + 1;
    rightDirection = floor(random() * 10) + 1;
    lDirection = floor(random() * 10) + 1;
    rDirection = floor(random() * 10) + 1;
  }
  
  function draw() {
    background(121,209,209);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *= -1;
      count = 0;
    }
    stroke(0,0,0);
    fill(224,49,131);
    text("Hellooooo.....", 600,600)
    textSize(20);
    stroke(0,0,0);
    strokeWeight(1);
    fill(0,0,0);
    text("Naomi Birkett", 1200,800);

    //head
    strokeWeight(2);
    stroke(0,0,0)
    fill(224,190,171);
    ellipse(headX,headY,headWidth,headHeight);
    headWidth+=headSize;
    headHeight+=headSize;
    headX+=headXDirection;
    headY+=headYDirection;
    if(headWidth >= 600 || headWidth <= 400)
    {
      headSize *= -1;
    }
    if(headX >= 1650 || headX <=0)
    {
      headXDirection *= -1;
    }
    if(headY >= 925 || headY <=0)
    {
      headYDirection *= -1;
    }
    
    // freckles
    strokeWeight(5);
    stroke(207,118,93);
    point(280,350);
    point(300,365);
    point(320,380);
    point(310,360);
    point(480,350);
    point(500,365);
    point(460,380);
    point(450,360);

    // left eye
    strokeWeight(5);
    stroke(0,0,0);
    fill(255,255,255);
    rect(lglassX,lglassY,100,60);
    strokeWeight(2);
    circle(300,300,50);
    fill(69,177,204);
    circle(leftX,leftY,30);
    leftX+=leftDirection;
    if(leftX >= 1650 || leftX <= 0)
    {
      leftDirection *= -1;
    }
    lglassY+=lDirection;
    if(lglassY >= 925 || lglassY <= 0)
    {
      lDirection *= -1;
    }


    // right eye
    strokeWeight(5);
    fill(255,255,255);
    rect(rglassX,rglassY,100,60);
    strokeWeight(2);
    circle(500,300,50);
    fill(69,177,204);
    circle(rightX,rightY,30);
    rightX+=rightDirection;
    if(rightX >= 1650 || rightX <= 0)
    {
      rightDirection *= -1;
    }
    rglassY+=rDirection;
    if(rglassY >= 925 || rglassY <= 0)
    {
      rDirection *= -1;
    }

    // glasses nose bridge
    strokeWeight(2);
    fill(0,0,0);
    rect(350,270,85,5);

    // nose
    strokeWeight(2);
    fill(227,161,183);
    triangle(350,425,380,290,390,425);

    // mouth
    strokeWeight(5);
    line(360,460,380,470);
    line(380,470,450,450);

    // hair
    strokeWeight(10);
    stroke(0,55,252);
    line(375,150,1200,325);
    line(380,140,1200,315);
    line(385,130,1200,305);
    line(390,120,1200,295);
    line(395,110,1200,285);
    line(400,100,1200,275);
    stroke(250,0,106);
    line(625,250,1200,340);
    line(625,225,1200,330);

  }