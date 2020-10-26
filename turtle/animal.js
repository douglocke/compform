// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

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
	myTurtle.moveTo(width/2, height/2);
	myTurtle.penDown();
        let x = 50; 

	for (var i = 0; i < 68; i++) {
             
                let d = degrees(myTurtle.bearingRadians);
                let r = myTurtle.bearingRadians;
                console.log("d: " + d);
                let g = map(i,0,50,1,x);
                let w = map(i,0,70,1,7);
                //console.log("g: " + g);
		myTurtle.moveForward(g*.7);
		myTurtle.turnRight(x-g*.5);
                if (i < 50)
                 drawLeaf(i);
	}

 noLoop();
}

function drawLeaf(g) {
	myTurtle.pushState();


	for (i = 0; i < g; i++) {
		myTurtle.moveForward(g*.04);
		myTurtle.turnLeft(2);
	}

	myTurtle.popState();
}



