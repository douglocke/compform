let vid;
let mySound;
let bright = 0;
let st = false;

function preload() {
  mySound = loadSound('./jazz/JK_SNR_03.wav');
  jetSound = loadSound('jet_airliner.wav');
  raininsideSound = loadSound('raininside.wav');
  strikeSound = loadSound('strike.wav');
  slowthunderSound = loadSound('slowthunder.wav');
  explodeSound = loadSound('explode.wav');
  //mySound = loadSound("/sound/sketches/hack-comp.wav");
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB,360,100,100);
  //noCanvas();

  vid = createVideo(
    ['./blade.mp4'],
    vidLoad
  );
  vid.hide();

  //vid.size(400, 400);

  const startButton = createButton("start");
  startButton.mousePressed(start);

  const stopButton = createButton("stop");
  stopButton.mousePressed(stop);

  //mySound.addCue(1.7, cueBig);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}



// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js



function start() {
  st = true;
  frameCount = 0;
  vid.loop();
  //mySound.loop(0, 1, 1, 0, 4);
}
 
function mouseReleased()
{
  fill(80,100,100);
  let framecap = frameCount;
  text("capture: " + framecap, 50,10);
  console.log("Pressed: " + framecap);
}

function stop() {
  //mySound.pause();
}

function draw() {
  background(bright);
  bright -= 3;
  image(vid,0,0,800,400);

  if (st===true)
   {
   //fill (60,100,100);
   //text("Framecount:  " + frameCount, 10,10);
   }
 
 if (frameCount === 1)
   {
   slowthunderSound.play(3,1,1,0,30);
   }

 if (frameCount === 27)
   {
   explodeSound.play(0,1,1,0,9);
   }

 if (frameCount === 115)
   {
   explodeSound.play(0,1,0.8,0,5);
   }

 if (frameCount === 115)
   {
   //slowthunderSound.play(3,1,0.8,0,4);
   }


 if (frameCount === 301)
   {
   raininsideSound.play(0,1,1,0,30);
   }

 if (frameCount === 380)
   {
   explodeSound.play(0,1,0.4,0,9);
   }

 if (frameCount === 588)
   {
   explodeSound.play(0,1,0.8,0,2);
   }

 if (frameCount === 880)
   {
   //play([startTime], [rate], [amp], [cueStart], [duration])
   //mySound.op(0, 1, 1, 0, 4);
   jetSound.play(0, 1, 1, 0, 9);
   }

 if (frameCount === 1300)
   {
   strikeSound.play(0,1,1,0,10);
   }

 if (frameCount === 1400)
   {
   explodeSound.play(0,1,1,0,2);
   }

 if (frameCount === 1470)
   {
   explodeSound.play(0,1,.5,0,5);
   }

 if (frameCount === 1550)
   {
   strikeSound.play(0,1,.8,0,2);
   }





  /* 
  raininsideSound = loadSound('raininside.wav');
  strikeSound = loadSound('strike.wav');
  slowthunderSound = loadSound('slowthunder.wav');
  explodeSound = loadSound('explode.wav');
*/


}

function cueBig() {
  bright = 255;
}



