// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle;

var xs=400;
var ys= 350;
var space = 1;
var tilt = 0;

function setup() {
	createCanvas(1000, 800);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(255);
	strokeWeight(1);

	// put the pen down to draw
	//myTurtle.penDown();
	myTurtle.penUp();

        myTurtle.moveTo(xs,ys);
    for (let x =0; x <2; x++)
        {
        xs = xs+x; 
        ys = ys+x; 
        myTurtle.moveTo(xs,ys);
        let c = map(x,1,5,1,100);
        stroke(c,random(1,255),random(1,255));

        for (let y = 0; y < 25 ; y++)
            { 
	    myTurtle.penDown();
            //stroke(random(1,255),random(1,255),random(1,255));
	    drawTriangle(myTurtle,xs,ys);
	    myTurtle.penUp();
            //myTurtle.moveTo(x+n*space,y);
            xs=xs+space;
            ys=ys+1;
            myTurtle.moveTo(xs,ys);
            }
        }

	noLoop();
}


// draw a triangle using the turtle provided
function drawTriangle(t,x,y) {
	t.turnRight(tilt);
	for (var i = 0; i < 5; i++) {
		t.moveForward(200);
		t.turnRight(72);
	}
        tilt +=1;
}

