// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

//first set of points
var points = [];


//final points
//after culling
var fpoints = [];


function setup() {
   createCanvas(600, 600);
   //placePointsRandom(100,400,400);


   placePointsGrid(55,600,600);
   //placePointsNoise(100,400,400,1);
   //noiseCull(.01, .5, .0);
   noiseDistort(.01, 40.5);
}


function draw() {
    background(50);
    colorMode(HSB,100,100,100);
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

        //drawPoints();
        drawFPoints();
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

function placePointsGrid(grid_size, w, h) {
    //var points = [];
    for (var y = 0; y < grid_size; y++) {
        for (var x = 0; x < grid_size; x++) {
            points.push({
                x: (x + .5) / grid_size * w,
                y: (y + .5) / grid_size * h,
                d: 8,
                c: 55
            });
        }
    }
}

    //return points;

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
        //console.log("Ellipse:("+x+","+y+","+d+","+d+")");
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
        var c = fpoints[i].c;
        var s = fpoints[i].s;
        var b = fpoints[i].b;
        // draw an ellipse at point
        // noStroke();
         fill(c,s,b);
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


function noiseDistort(frequency, amplitude) {
    var outPoints = [];
    for (var i = 0; i < points.length; i++) {
        var p = points[i];
        let offx = (noise(p.x * frequency, p.y * frequency) - .5) * amplitude;
        p.x += offx;

        let offy = (noise(p.x * frequency, p.y * frequency) - .5) * amplitude;
        p.y += offy;

        let change = offx*offy;
        //p.c = (map(change,1,26,35,45));
        p.c = (map(change,1,26,35,45));
        p.s = (map(change,1,26,40,100));
        p.b = (map(change,1,26,40,100));
        //console.log("change: " + change);
        //console.log("s: " + p.s);

        outPoints.push(p);
    }
    fpoints = outPoints;
}

