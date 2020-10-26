//from Bhayva

function turtleLeft(d){this.angle-=d;}function turtleRight(d){this.angle+=d;}
function turtleForward(p){var rad=radians(this.angle);var newx=this.x+cos(rad)*p;
var newy=this.y+sin(rad)*p;this.goto(newx,newy);}function turtleBack(p){
this.forward(-p);}function turtlePenDown(){this.penIsDown=true;}
function turtlePenUp(){this.penIsDown = false;}function turtleGoTo(x,y){
if(this.penIsDown){stroke(this.color);strokeWeight(this.weight);
line(this.x,this.y,x,y);}this.x = x;this.y = y;}function turtleDistTo(x,y){
return sqrt(sq(this.x-x)+sq(this.y-y));}function turtleAngleTo(x,y){
var absAngle=degrees(atan2(y-this.y,x-this.x));
var angle=((absAngle-this.angle)+260)%360.0;return angle;}
function turtleTurnToward(x,y,d){var angle = this.angleTo(x,y);if(angle< 180){
this.angle+=d;}else{this.angle-=d;}}function turtleSetColor(c){this.color=c;}
function turtleSetWeight(w){this.weight=w;}function turtleFace(angle){
this.angle = angle;}function makeTurtle(tx,ty){var turtle={x:tx,y:ty,
angle:0.0,penIsDown:true,color:color(228),weight:3,left:turtleLeft,
right:turtleRight,forward:turtleForward, back:turtleBack,penDown:turtlePenDown,
penUp:turtlePenUp,goto:turtleGoTo, angleto:turtleAngleTo,
turnToward:turtleTurnToward,distanceTo:turtleDistTo, angleTo:turtleAngleTo,
setColor:turtleSetColor, setWeight:turtleSetWeight,face:turtleFace};
return turtle;}






//(******)
var myTurtle;



function setup() {
  createCanvas(900,800);
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
  simpleFlower();
  drawRose(20);
  noLoop();
}

//function simpleFlower(count,location) {
function simpleFlower() {
  //draw some random redish purple flowers along the bottom
  myTurtle.penUp();
  myTurtle.moveTo(250,250);
  myTurtle.penDown();

  let iX = 0;
  let iY = 100; 
  let space = 0;
  let rowspace =0;

for (var r=1; r < 5; r++)
  {
  //console.log("r: " + r);
  for (var q=1; q<10; q++)
     {
     myTurtle.penUp();
  //myTurtle.moveTo(random(100,width-100),random(height*(location-.2),height*location));
     console.log("move r: " + r);
     myTurtle.moveTo(iX+random(-20,20) +space,iY*r + random(-25,25));
     myTurtle.penDown();
     for (var s=0; s<9; s++) 
     {
      let col = random(10,50);
      stroke(col,100,100,100);
       for (var i=0; i<18; i++) 
       {
       myTurtle.moveForward(2);
       myTurtle.turnRight(10);
       } 
       myTurtle.turnLeft(140);
      }
     space += 90 + random(1,10);
     }
   space=0;
   }
}

//insert Bhayva's code
function drawRose(count) 
{
let mySize = 57;
let myStart = 100;
let pickOne = 1;
let c = 1;
  //background(0);
  //stroke(110);
	push();
	translate(0, 500);
 
  for (j=0; j<count; j++)
    {
      for (k=0; k<80; k++)
        {
					push();
          translate(j*mySize, k*mySize);
					c = color(random(260,360), 205, 255);
 					stroke(c);
					//myTurtle.setColor(c);
					myTurtle.penDown();
					for (i=0; i<mySize - 23; i=i+1) {
						myTurtle.moveForward(i);
						myTurtle.turnRight(random(42, 90));
						//myTurtle.face(j);
					}
					myTurtle.penUp();
					myTurtle.moveTo(0,0);
					//myTurtle.face(0);
					pop();
         } //end for k
			} //end for j
  pop();
} //end 

