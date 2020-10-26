// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
	createCanvas(900, 600);
	noFill();
       colorMode(HSB,360,100,100);
	background(0);
	noLoop();
	myTurtle = new Turtle();
}



function draw() {

      // let c=10;

       myTurtle.penUp(); 
       drawMoon();

       for (let i = 1; i<15; i++)
       {
       drawTree(400-(i*random(28,32)),300+(i*random(19,21)),i*15);
       drawTree(440+(i*random(28,32)),300+(i*random(19,21)),i*15);
       //drawTree(390,310,20);
       //console.log("i: " +i);
       }
}

function drawMoon() {
   let s2 = 1;
   //stroke(10,100,50,50);
   strokeWeight(1);
   myTurtle.penUp(); 
   myTurtle.moveTo(400,50);
   myTurtle.penDown(); 
   for (var n= 1 ; n<1000; n++)
   {
      s = map(s2,1,800,60,100);
      stroke(226,14,93);
      myTurtle.moveForward(1 + n * .1);
      myTurtle.turnRight(35); 
      s2++;
   }

}

function drawTree(x,y,size)
{
     
        stroke(250,random(60,100),random(60,100));
	myTurtle.penUp();
	myTurtle.moveTo(x,y);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	myTurtle.turnLeft(random(3,5));
	drawBranch(size);
}


function drawBranch(length) {

	if (length < 2) {
		return;
	}

	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();
	//myTurtle.turnLeft(random(30,45));
	myTurtle.turnLeft(random(35,45));
        let a = round(random(55,65));
        let b = a/100;
	//drawBranch(length * 0.65);
	drawBranch(length * b);
	//drawBranch(length * random(.5, .9));

	myTurtle.popState();
      
        //let rb = round(random(0,1);
  
	myTurtle.pushState();

	myTurtle.turnRight(random(35,40));

         a = round(random(55,65));
         b = a/100;
	drawBranch(length * b);
	//drawBranch(length * random(.5, .9));
	myTurtle.popState();

}

