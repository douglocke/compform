// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let hat;
let kick;
let snare;
let clap;

let playing = false;


var mode = 0;
var d = 5;
var glpitch = 2;
function preload() {
  hat = loadSound('./jazz/JK_HH_02.wav');
  kick = loadSound('./jazz/JK_BD_02.wav');
  snare = loadSound('./jazz/JK_SNR_02.wav');
  snare3 = loadSound('./jazz/JK_SNR_03.wav');
  snare7 = loadSound('./jazz/JK_SNR_07.wav');
  clap = loadSound('./jazz/JK_PRC_04.wav');
  bass = loadSound('./jazz/fusionbass.wav');
}

function setup() {
  createCanvas(400, 200);
  colorMode(HSB,360,100,100);
  background(200,100,50);
  const startButton = createButton('play');
  startButton.mousePressed(start);

  const stopButton = createButton('stop');
  stopButton.mousePressed(stop);
}

function mouseReleased() {
   background(random(1,255));
   mode++;
}


function start() {
  playing = true;
}

function stop() {
  playing = false;
}


function draw() {
   text("Mode: " + mode,10,10);

   if (mode === 1)
      playmode1();
   
   if (mode === 2)
      playmode2();

   if (mode === 4)
      {
      playmode3();
      }

   if (mode === 5)
      {
      playmode4();
      }

   if (mode === 3)
      {
      playmode5(2);
      }

   if (mode === 6)
      {
      playmode5(glpitch);
      }

}


function playmode1() {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      //kick.play();
    }
    if (frameCount % 30 === 0) {
      snare7.play();
    }
  }
}

function playmode2() {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      kick.play();
    }
    if (frameCount % 30 === 0) {
      snare.play();
    }
  }
}

//bass regular
function playmode3() {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      kick.play();
      bass.play();
      d +=5;
      circle(width/2, height/2, d+5); 
    }
    if (frameCount % 30 === 0) {
      snare7.play(0,random(0.5,2),1);
      //mySound.play(0, random(0.5, 2), 1);
    }
  }
}

//random bass
function playmode4() {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      kick.play();
      //bass.play();
      bass.play(0,random(0.5,2),1);
      d +=5;
      circle(width/2, height/2, d+5); 
    }
    if (frameCount % 30 === 0) {
      snare7.play(0,random(0.5,2),1);
      //mySound.play(0, random(0.5, 2), 1);
    }
  }
}


//play([startTime], [rate], [amp], [cueStart], [duration])


//orderly bassk
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









