let phase = 0;
let zoff = 0;
let slider;


//Doug Locke

//basis for this code is https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_136_Polar_Noise_Loop_1/P5/sketch.js

// i took the example, many lines are direct copies - i was trying to take the core idea in the example, and see if i make some effects replicating the circle over and over again

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
//thest two lines are from class, similar
for (let y1 = 16; y1 < height; y1 += 30) {
        for (let x1 = 16; x1 < width; x1 += 30) {

	  beginShape();

        //these couple lines are directly from the Dan Schiffman example

  	let noiseMax = .03;
  	for (let a = 0; a < TWO_PI; a += radians(5)) {
    	let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    	let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
        //i change the mapping here to include my for loops x and y
    	let r = map(noise(xoff, yoff, zoff), 0, 1, x1, y1);
    	let x = r * cos(a);
    	let y = r * sin(a);
    	vertex(x, y);
  	}
        endShape(CLOSE);

        }
     }


  phase += 0.008;
  zoff += 0.15;
}
