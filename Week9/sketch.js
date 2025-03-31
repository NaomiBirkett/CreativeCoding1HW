function setup() {
    createCanvas(1650, 925);
  }
  
  function draw() {
    background(121,209,209);
    textSize(35);
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
    ellipse(450,325,400,450);

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
    rect(250,270,100,60);
    strokeWeight(2);
    circle(300,300,50);
    fill(69,177,204);
    circle(310,300,30);

    // right eye
    strokeWeight(5);
    fill(255,255,255);
    rect(435,270,100,60);
    strokeWeight(2);
    circle(500,300,50);
    fill(69,177,204);
    circle(510,300,30);

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