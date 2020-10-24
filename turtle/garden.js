var myTurtle;

function setup() {
  createCanvas(900,500);
  colorMode(HSB,360,100,100);
  myTurtle = new Turtle();

  let nSlider_label = createP('Number');
  nSlider = createSlider(1, 100, 1, 20);

}

function draw() {
  background(0);
  noFill();
  strokeWeight(3);
  // count location
  // for location, closer to 0 means top, closer to 1 means bottom
  simpleFlower(5,.90);
  noLoop();
}

function simpleFlower(count,location) {
  //draw some random redish purple flowers along the bottom
  myTurtle.penUp();
  myTurtle.moveTo(250,250);
  myTurtle.penDown();
for (var q=1; q<count; q++)
 {
  myTurtle.penUp();
  myTurtle.moveTo(random(100,width-100),random(height*(location-.2),height*location));
  myTurtle.penDown();
  for (var s=0; s<9; s++) 
 {
    let col = random(300,360);
    stroke(col,100,100,100);
    for (var i=0; i<18; i++) 
    {
    myTurtle.moveForward(2);
    myTurtle.turnRight(10);
    } 
    myTurtle.turnLeft(140);
 }
}
}



