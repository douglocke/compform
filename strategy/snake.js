// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js



var amplitude_slider;

var startX = 50;
var startY = 250;
var endX = 450;
var endY = 50;

        //the idea on how to get this time right was   
        //was published on compform.net/strategy page
        //i viewed source and took the idea for the time as labelled below
        //spent many hours before checking this.
       
var time =0;


function setup() {
    createCanvas(500, 300);

    //i tried to make really wide sliders to allow to test
    //the most widest range of values
    createP('Amplitude');
    amplitude_slider = createSlider(0, 1500, 50);

    createP('Frequency');
    frequency_slider = createSlider(0, 1000, 50);

    createP('Timespeed');
    timespeed_slider = createSlider(0, 10000, 50);

}


function draw() {
    background(50);
    ellipseMode(CENTER);
    //frameRate(timespeed_slider.value());
    //frameRate(60);

    var amplitude = amplitude_slider.value() / 100;
    var f = frequency_slider.value() / 10;
        //the idea on how to get this time right was   
        //was published on compform.net/strategy page
    var ts = timespeed_slider.value() /10000;

    noiseDetail(1, .5);

    fill(255);
    noStroke();
        //the idea to add the time was examining the original code 
        //that was published to compform.net/strategy page
    time = time + ts;
    //text ('The Worm', 10,10);
    //text ('ts: ' + ts, 10,20);
    //text ('f: ' + f, 10,30);
    //text ('amplitude: ' + amplitude, 10,40);
    // study this loop. do you understand how the line of ellipses is created?
    for (i = 0; i < 1; i += .02) {
        // lerp(start, stop, amt)
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);

        // hint: drive offsetX and offsetY with noise() instead of random()
        //var offsetX = (random() - .5) * amplitude * 10;
        //var offsetY = (random() - .5) * amplitude * 10;

        //the idea to add the time was examining the original code 
        //that was published to compform.net/strategy page
        var offsetX = noise(i * f + time) * amplitude * 10;

        var offsetY = noise(i * f + time, amplitude*10) * amplitude * 10;

        ellipse(x + offsetX, y + offsetY, 10, 10);

       //text ('i: ' + i, 10,40);
    }

}
