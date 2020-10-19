// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

//SNAKE REMIXED

var amplitude_slider;

var startX = 50;
var startY = 250;
var endX = 450;
var endY = 250;

var startX2 = 50;
var startY2 = 50;
var endX2 = 450;
var endY2 = 250;

var startX3 = 900;
var startY3 = 50;
var endX3 = 450;
var endY3 = 250;

//bottom right
var startX4 = 900;
var startY4 = 250;
var endX4 = 450;
var endY4 = 250;

//bottom right
var startX5 = 450;
var startY5 = 500;
var endX5 = 450;
var endY5 = 250;

var time =0;

var col=0;

function setup() {

    colorMode(HSB, 100, 100, 100);
    createCanvas(900, 500);

    createP('Amplitude');
    amplitude_slider = createSlider(0, 1500, 50);

    createP('Frequency');
    frequency_slider = createSlider(0, 1000, 50);

    createP('Timespeed');
    timespeed_slider = createSlider(0, 10000, 50);

}


function draw() {
    background(0);
    ellipseMode(CENTER);
    //frameRate(timespeed_slider.value());
    //frameRate(60);

    var amplitude = amplitude_slider.value() / 100;
    var f = frequency_slider.value() / 10;
    var ts = timespeed_slider.value() /10000;

    noiseDetail(1, .5);

    fill(100,90,90);
    noStroke();
    time = time + ts;
    //text ('The Worm', 10,10);
    //text ('ts: ' + ts, 10,20);
    //text ('f: ' + f, 10,30);
    //text ('amplitude: ' + amplitude, 10,40);
    // study this loop. do you understand how the line of ellipses is created?
    for (i = 0; i < 1; i += .02) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);
        var offsetX = noise(i * f + time) * amplitude * 10;
        var offsetY = noise(i * f + time, amplitude*10) * amplitude * 10;
        let c = map(i,0,1,70,85);
           fill(c,100,100);
        ellipse(x + offsetX, y + offsetY, 10, 10);
    }

    for (n = 0; n < 1; n += .02) {
        var x = lerp(startX2, endX2, n);
        var y = lerp(startY2, endY2, n);
        var offsetX = noise(n * f + time) * amplitude * 10;
        var offsetY = noise(n * f + time, amplitude*10) * amplitude * 10;
        text("N: " +n, 10,10);
  //map(value, start1, stop1, start2, stop2, [withinBounds])
        let c = map(n,0,1,30,60);
           fill(c,100,100);
        ellipse(x + offsetX, y + offsetY, 10, 10);
    }

    for (n = 0; n < 1; n += .02) {
        var x = lerp(startX3, endX3, n);
        var y = lerp(startY3, endY3, n);
        var offsetX = noise(n * f + time) * amplitude * 10;
        var offsetY = noise(n * f + time, amplitude*10) * amplitude * 10;
        text("N: " +n, 10,10);
        //map(value, start1, stop1, start2, stop2, [withinBounds])
        let c = map(n,0,1,70,85);
           fill(c,100,100);
        ellipse(x + offsetX, y + offsetY, 10, 10);
        }

    for (n = 0; n < 1; n += .02) {
        var x = lerp(startX4, endX4, n);
        var y = lerp(startY4, endY4, n);
        var offsetX = noise(n * f + time) * amplitude * 10;
        var offsetY = noise(n * f + time, amplitude*10) * amplitude * 10;
        text("N: " +n, 10,10);
        //map(value, start1, stop1, start2, stop2, [withinBounds])
        let c = map(n,0,1,30,60);
           fill(c,100,100);
        ellipse(x + offsetX, y + offsetY, 10, 10);
        }

    for (n = 0; n < 1; n += .02) {
        var x = lerp(startX5, endX5, n);
        var y = lerp(startY5, endY5, n);
        var offsetX = noise(n * f + time) * amplitude * 10;
        var offsetY = noise(n * f + time, amplitude*10) * amplitude * 10;
        text("N: " +n, 10,10);
        //map(value, start1, stop1, start2, stop2, [withinBounds])
        let c = map(n,0,1,30,60);
           fill(c,100,100);
        ellipse(x + offsetX, y + offsetY, 10, 10);
        }





}
