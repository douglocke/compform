// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
var EXPORT = false;
var offx = 0;
function preload() {
  myFont = loadFont('MontserratSubrayada-Bold.ttf');
}


function setup() {
    pixelDensity(1)
    createCanvas(1280, 720);
    frameRate(60);
    ellipseMode(CENTER);
    noiseDetail(1);
    textFont(myFont);
    colorMode(HSB,360,100,100);
}

function draw() {

background(0);

textSize(20);
fill(50,50,50);
//text('FrameRate: ' + frameRate(),10,30);
//text('frameCount: ' + frameCount,10,60);
fill(360,0,1);
if (frameCount < 90) 
   {
   smoke();
   }


textSize(110);
let fillc = map(frameCount,1,90,1,100);
fill(0,0,fillc);
text("CompForm", width/4,height/2);
circles();
if (frameCount > 40)
   {
   console.log("Hello");
   spinning();
   }
  
//text("CompForm", width/4,height/2);
//if (frameCount > 150)
//text("CompForm", width/4,height/2);



//fill(9);
//text("CompForm", width/4,height/2);
}

function circles() {
    circle(width/4,height/2-3,10); 
    circle(width/4+700,height/2-3,10); 
    }

function spinning(){
    translate(width/2, height/2);
    if (frameCount < 300)
        {
        rotate(radians(frameCount));
        }
    //circle(width/8,height/4-3,10); 
        let bright = map(frameCount,80,100,1,100); 
        let size = map(frameCount,80,300,1,500); 
        noStroke();
        fill(60,bright, bright,.5);
     if (frameCount < 300)
        {
        circle(width/8,height/3,size); 
        }
     else 
        {
        rotate(radians(300));
        circle(width/8,height/3,500); 
        }

/*
     if (frameCount > 300)
        {
        offx++;
        rotate(radians(300));
        circle(width/8-offx,height/3+offx,500); 
        }
*/
}


function smoke() {
    push();
    blendMode(BLEND);

    blendMode(ADD);
    fill(0,0,1);
    var x = width * .5;
    var y = height * .5;

    for (i = 0; i < 3000; i++) {
        var s = sin(frameCount / 90 * PI) * 120;

        var offsetX = map(noise(i * .5, frameCount * .01, 0), 0, .5, -440, 440);
        var offsetY = map(noise(i * .5, frameCount * .01, 1), 0, .5, -440, 440);

        ellipse(x + offsetX, y + offsetY, s, s);
    }


    if (EXPORT) {
        saveFrame("EXPORT", frameCount, "jpg", 90);
    }
    if (frameCount > 190) {
        noLoop();
    }
   pop();
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
    // don't save frames once we reach the max
    if (maxFrame && frameNumber > maxFrame) {
        return;
    }

    if (!extension) {
        extension = "png";
    }
    // remove the decimal part (just in case)
    frameNumber = floor(frameNumber);
    // zero-pad the number (e.g. 13 -> 0013);
    var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

    save(name + "_" + paddedNumber + "." + extension);
}
