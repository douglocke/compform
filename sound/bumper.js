//this code was based on Prof. Richard The's "fishies"
//this was a code sample used in Major Studio 1 in Fall 2019.

//i stripped the code down to more fundamentals
//added noise functions

//the key part of the original code is the class structure & the logic for hitting the sides of the canvas and changing direction
//i also started the words in the middle so they could "explode"

//original is here
// https://github.com/anbnyc/major-studio-1-fa19/blob/master/lab10_motion/data-fish/sketch.js

//outward

let words = [];
var offset = .1;
var state = 0;

var zl = 1;
var offsety = 0;
function preload() {
}
function setup() {
  //createCanvas(windowWidth,windowHeight);
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  createWord();

  frameRate(60);
    frameRateSlider = createSlider(0, 60, 60);
    frameRateSlider.input(function updateFPS() {
        frameRate(this.value());
    });

}


function createWord(){
   //e is the number of words
   words.push(new Word(100,50, "comp", 80, 1, 50,0.5));
   words.push(new Word(300-50,500-50, "form", 80, 1, 50,0.5));

  /*
  for (let e = 0; e< 100; e++)
    {
    //spray center starting location
    let x = width/2;
    let y = height/2;

    //greyscale
    //everything is pretty random
    let color = random(1,256);
    let word = "abc";
    //let speed = random(0.010,.011);
    let opacity = random(0,100);
    words.push(new Word(x, y, word, speed, color,opacity));
  }
  */
}

function draw() {
  //this is background that is dark grey
  background(0);
  offset = offset + .01;
  //clear();

  //the decision to have two funtions, updates & show were from the original code
  for (let i = 0; i < words.length; i++) {
    //words[i].update();
    words[i].show(zl);
  }

  for (let g = 0; g < words.length; g++) {
    //words[i].update();
    if (words[g].yallign==false)
       {
       words[g].updatey();
       push();
       fill(190,90,90,.5);
       let x1 = 250;
       let y1 = 300;
       //triangle(x1-50,y1-50,x1+50,y1-50,x1+50,y1+50);
       pop();
       }

    if (words[g].yallign==true)
       {
       words[g].updatex();
       push();
       fill(190,90,90,.5);
       let x1 = 250;
       let y1 = 300;
       //triangle(x1-50,y1-50,x1+50,y1-50,x1+50,y1+50);
       pop();
       }
   gocrazy();

   gocrazy2();
/*
    if (words[g].yallign==true && words[g].xallign==true)
       {
       //words[g].updatex();
       gocrazy();
       }
*/
  }
}

function gocrazy2()
 {
  if (frameCount>100)
   {
    for (let g = 0; g < words.length; g++) {
       //words[i].update();
   // if (words[g].yallign==false)
       //words[g].updatey();
       push();
      // fill(190,90,90,.5);
      // let x1 = 250;
      // let y1 = 300;
       //translate(425,435);
       //words[g].changecolor();
       //words[g].show(zl);
       words[g].updatex2();
       pop();
   //console.log("Zl: " + zl);
   //scale(zl);
   //scale(zl);
   }
 
  //let zl = map (frameCount,100,10000,1,5); 
  zl = map (frameCount,100,1000,1,10); 
  }
}

function gocrazy(){
//console.log("go nuts");
rectMode(CENTER);
//console.log("frameCount:" + frameCount);
if (frameCount > 100)
 {
  offsety += -1;
 }
translate(250,325+offsety); 

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
//rotate(radians(frameCount));
rotate(radians(frameCount));
fill(190,90,90,.5);
//rect(0,0,100,100);
triangle(-50,-50,50,-50,0,50);
//triangle(x1, y1, x2, y2, x3, y3)

}



function mouseReleased() {

  for (let i = 0; i < words.length; i++) {
    //words[i].update();
    words[i].update();
  }



}


class Word {
   // basic parameter set was from original code, but I trimmed it down a lot, added some variation to X and Y
  constructor(x, y, word, size, speed, col, opacity) {
   //words.push(new Word(250,100, "form.", 1, 50,0.5));
    this.x = x;
    this.y = y;
    this.text = word;
    this.color = color(col, opacity);
    this.size = size; 
    //this.speedX = random(-0.5,0.5) *speed;
    //this.speedX = random(-3,3) *speed;
    //this.speedY = random(-1,1) *speed;
    this.speed = speed; 
    this.yallign = false;
    this.xallign = false;
  }

  updatey(){
    if (this.y > 250)
       {
       this.y += -5;
       } 
    if (this.y < 250)
       {
       this.y += +5;
       } 
   if (this.y == 250)
      this.yallign = true;
}

   //words.push(new Word(100,50, "comp", 80, 1, 50,0.5));
   //words.push(new Word(300-50,500-50, "form", 80, 1, 50,0.5));

  updatex(){
    if (this.text == "comp" && this.x > 80)
       {
       this.x += -1;
       } 
    if (this.text == "form" && this.x < 275)
       {
       this.x += +1;
       } 

    if (this.text == "comp" && this.x == 80)
       {
       this.xallign = true;
       }

    if (this.text == "comp" && this.x == 275)
       {
       this.xallign = true;
       }
}

  updatex2(){
    if (this.text == "comp")
       {
       this.x += -1;
       } 
    if (this.text == "form")
       {
       this.x += +1;
       } 

    if (this.text == "comp")
       {
       this.xallign = true;
       }

    if (this.text == "comp")
       {
       this.xallign = true;
       }
}

  skupdate(){
    //this x and y * speed and the collission to the wall was from Richard The
    // added the noise
    //this.x += this.x*this.speedX + noise(offset)*.1 + millis()*.0000001;
    //this.y += this.y*this.speedY + noise(offset)*.1 + millis()*.0000001;
    // left right collission

    //if (this.x <= this.diameter/2 || this.x >= width - this.diameter/2) {
      //reverse!
   //   this.speedX *= -1;
   // }
    // top collission 

   // if (this.y <= this.diameter/2  || this.y >= height - this.diameter/2) {
      //reverse!
    //  this.speedY *= -1;

    // top gravity 
    // if (this.speed < .000004) {
      // go fast
   //   this.diameter += -.1; //shrink slowly
   //   this.speed += .0001; //get faster
   //    }
   //   else
  //     {
  //    this.diameter += 0; //expand slowly
  //     }
  //  }

  }

  changecolor() {
     this.color = color(30,90,90,90);
     //this.diameter = 3000;
      }


  show(zl) {
    noStroke(0);

   //fill(this.color);  

    fill(255);  
    //scale(zl);
    //console.log("Text: " + this.text);
    textSize(this.size);
    text(this.text, this.x, this.y);
    //text('word', 10, 30);
    //fill(this.color);
    //ellipse(this.x, this.y, this.diameter, this.diameter);
    //text(this.speedX, this.x, this.y)
    }


  skupdate(){
    //this x and y * speed and the collission to the wall was from Richard The
    // added the noise
    //this.x += this.x*this.speedX + noise(offset)*.1 + millis()*.0000001;
    //this.y += this.y*this.speedY + noise(offset)*.1 + millis()*.0000001;
    // left right collission

    //if (this.x <= this.diameter/2 || this.x >= width - this.diameter/2) {
      //reverse!
   //   this.speedX *= -1;
   // }
    // top collission 

   // if (this.y <= this.diameter/2  || this.y >= height - this.diameter/2) {
      //reverse!
    //  this.speedY *= -1;

    // top gravity 
    // if (this.speed < .000004) {
      // go fast
   //   this.diameter += -.1; //shrink slowly
   //   this.speed += .0001; //get faster
   //    }
   //   else
  //     {
  //    this.diameter += 0; //expand slowly
  //     }
  //  }

  }

  changecolor() {
     this.color = color(30,90,90,90);
     //this.diameter = 3000;
      }


  show(zl) {
    noStroke(0);

   //fill(this.color);  

    fill(255);  
    //scale(zl);
    //console.log("Text: " + this.text);
    textSize(this.size);
    text(this.text, this.x, this.y);
    //text('word', 10, 30);
    //fill(this.color);
    //ellipse(this.x, this.y, this.diameter, this.diameter);
    //text(this.speedX, this.x, this.y)
    }
}

