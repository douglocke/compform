// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let sleep;
let fft;

let playing = false;

var ang=0;
var mode = 0;
var d = 5;
var glpitch = 2;
function preload() {
  sleep = loadSound('./cantseeme.wav');
}

function setup() {
  createCanvas(800, 500);
  colorMode(HSB,360,100,100);
  background(200,100,50);


  fft = new p5.FFT(.8, 128);
  fft.setInput(sleep);

  const startButton = createButton('start');
  startButton.mousePressed(start);

  const stopButton = createButton('stop');
  stopButton.mousePressed(stop);

}

function start() {
    frameCount=0;
    sleep.loop(0, 1, 1, 0, 30);
    playing = true;
   //loop([startTime], [rate], [amp], [cueLoopStart], [duration])
}



function mouseReleased() {
   console.log("Framecount: " + frameCount);
   background(random(1,255));
   mode++;
}



function stop() {
  sleep.pause();
  playing = false;
}


function draw() {
   text("Mode: " + mode,10,10);
   
   text("frameCount: " + frameCount, 30,30);

   if (mode > 0)
      {
      fftdraw();
      }




}




function fftdraw() {
    background(50,10,10);
    noStroke();
    console.log("called fftdraw");
    const data = fft.analyze();
    let cx = width/2;
    let cy = height/2;
    let offx= 0;
    let offy= 0;
    let v = .6;
    let s = 95;
    let b = 95;

    for (let i = 0; i < 170; i++) {
        const x = map(i, 0, 128, 0, 200);
        const y = map(data[i], 0, 255, 0, 300);

        if (y>250)
           {
        offx = map(i, 0, 100, 0, 10);
        offy = map(data[i], 0, 255, 0, 10);
        s += map(data[i], 0, 255, 0, 10);
        b += map(data[i], 0, 255, 0, 10);
        v = map(data[i], 0, 255, .6, 1);
           }

        const coly = map(data[i], 0, 255, 20,50);
        fill(coly, s, b, v);
        ellipse(cx-x, cy-y, 15+offx, 7+offy);
        expandit(cx+x, cy+y);
        if (frameCount > 596)
          {
          connect(cx-x,cy-y,cx+x,cy+y,20);
          }

        if (frameCount < 596)
          {
          connect(cx+x,cy+y,cx-x,cy-y,120);
          moveit(); 
          }


    }
}

function moveit(){
translate(width/2,height/2);

        // then rotate the grid around the pivot point by a
        // number of degrees equal to the frame count of the sketch
//rotate(radians(frameCount));
//rotate(radians(frameCount));
//rotate(radians(frameCount));
rotate(radians(second()));

}


function expandit(x,y) {
     push();
     for (let n = 5 ; n < 10; n+=5)
         {
        strokeWeight(1);
        stroke(50,100,100,100);
        noFill();
        ellipse(x, y,n*2, n*2);
         }

    pop();
}

function connect(x1,y1,x2,y2,c) {
     push();
        strokeWeight(1);
        stroke(c,100,100,100);
        noFill();
        line(x1,y1,x2,y2);
    pop();
}






//play([startTime], [rate], [amp], [cueStart], [duration])


function playmode5(pitch) {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      kick.play();
      bass.play(0,0.5,0.5);
    }
    if (frameCount % 15 === 0) {
      //kick.play();
      bass.play(0,pitch,1);
      //bass.play(0,0.7,0.5);
    }
    if (frameCount % 30 === 0) {
      //kick.play();
      bass.play(0,pitch,1);
    }
    if (frameCount % 30 === 0) {
      snare3.play(0,random(2,2),1);
      //mySound.play(0, random(0.5, 2), 1);
    }
  }
  glpitch += glpitch*.9;
}








