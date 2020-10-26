// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle;

var x=100;
var y= 100;
var space = 100;

function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(255);
	strokeWeight(3);

	// put the pen down to draw
	//myTurtle.penDown();
	myTurtle.penUp();

        myTurtle.moveTo(x,y);

        for (let n = 0; n < 4 ; n++)
            { 
	    myTurtle.penDown();
            stroke(random(1,255),random(1,255),random(1,255));
	    drawTriangle(myTurtle);
	    myTurtle.penUp();
            myTurtle.moveTo(x+n*space,y);
            }


	noLoop();
}


// draw a triangle using the turtle provided
function drawTriangle(t) {
	for (var i = 0; i < 5; i++) {
		t.moveForward(30);
		t.turnRight(72);
	}
}

