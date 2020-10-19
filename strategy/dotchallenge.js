// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

//first set of points
var points = [];


//final points
//after culling
var fpoints = [];


function setup() {
   createCanvas(400, 400);
   //placePointsRandom(100,400,400);


   placePointsNoise(100,400,400,1);
   //noiseCull(.01, .5, .0);
  

}


function draw() {
    background(50);
    colorMode(HSB,100,100);
    noStroke();
    ellipseMode(CENTER);

    var noiseFrequency = .02;
/*
    for (var i = 0; i < 100; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = random(width);
        var y = random(height);
*/

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 10;

        // the colors also need to change
        // what colorMode would be easiest to work with?
        //fill(255, 255, 255)

        //drawFPoints();
        drawPoints();
        //ellipse(x, y, diameter, diameter);

  noLoop();
}

function placePointsRandom(count, w, h) {

    //border
    let b = .1;
    for (var i = 0; i < count; i++) {

        /*this is totally random
        var x = random() * w;
        var y = random() * h;
        */
        //since we want more centering
        var x = (random(b,1-b)*(w)  +  random(b,1-b)*(w)) / 2;
        var y = (random(b,1-b)*(h)  +  random(b,1-b)*(h)) / 2;

        points.push({
            x: x,
            y: y,
            d: 10
        });
    }
}

function placePointsNoise(count, w, h, frequency) {
    //var points = [];

    for (var i = 0; i < count; i++) {
        var x = noise(i * frequency, 0) * w;
        var y = noise(i * frequency, 1000) * h;
        var d = noise(x * frequency, y * frequency) * 30;
        var c = noise(x * frequency, y * frequency) * 390;

        points.push({
            x: x,
            y: y,
            d: d,
            c: c
        });
    }

    //return points;
}


function drawPoints() {
    // loop through the points
    for (var i = 0; i < points.length; i++) {
        // pull the coordianates from the current point in array
        var x = points[i].x;
        var y = points[i].y;
        var d = points[i].d;
        var c = points[i].c;
        // draw an ellipse at point
        // noStroke();
        // fill(255);
        fill(c,100,100); 
        ellipse(x, y, d, d);
    }
}

function drawFPoints() {
    // loop through the points
    for (var i = 0; i < fpoints.length; i++) {
        // pull the coordianates from the current point in array
        var x = fpoints[i].x;
        var y = fpoints[i].y;
        var d = fpoints[i].d;
        // draw an ellipse at point
        // noStroke();
        // fill(255);
        ellipse(x, y, d, d);
    }

}


function noiseCull(frequency, threshold, dither) {

    var outPoints = [];
    for (var i = 0; i < points.length; i++) {
        var p = points[i];

        // accept point if noise value is below threshold
        if (noise(p.x * frequency, p.y * frequency) < threshold + random() * dither) {
            outPoints.push(p);
        }
    }
    fpoints = outPoints;
}



