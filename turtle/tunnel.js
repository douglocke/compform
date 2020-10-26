// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

//extention of Jason's inclass example
var myTurtle;

function setup() {
  createCanvas(900,500);
  colorMode(HSB,360,100,100);
  myTurtle = new Turtle();

  //let nSlider_label = createP('Number');
  //nSlider = createSlider(1, 100, 1, 20);

}

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

function draw() {
        background(0);
        stroke(255);
	myTurtle.penUp();
	myTurtle.moveTo(250, 200);
	myTurtle.penDown();
        

	for (var i = 0; i < 400; i++) {
             
                let d = degrees(myTurtle.bearingRadians);
                let r = myTurtle.bearingRadians;
                //console.log("i: " + i);
                let g = map(i,0,500,1,70);
                frameRate(16);
                //console.log("g: " + g);
		myTurtle.moveForward(2+g);
		myTurtle.turnRight(2+40-g);
	}

// noLoop();
}

function drawLeaf() {
	myTurtle.pushState();


	for (i = 0; i < 15; i++) {
		myTurtle.moveForward(2);
		myTurtle.turnLeft(18);
	}

	myTurtle.popState();
}



