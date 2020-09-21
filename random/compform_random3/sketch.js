//doug

//deck randomness... BLUE POLES


var defaultimgs =[];

var defaultimg = ['row-1-col-1.png', 'row-1-col-2.png', 'row-1-col-3.png', 'row-1-col-4.png', 'row-1-col-5.png', 'row-1-col-6.png', 'row-2-col-1.png', 'row-2-col-2.png', 'row-2-col-3.png', 'row-2-col-4.png', 'row-2-col-5.png', 'row-2-col-6.png', 'row-3-col-1.png', 'row-3-col-2.png', 'row-3-col-3.png', 'row-3-col-4.png', 'row-3-col-5.png', 'row-3-col-6.png'];
var position = 0;

function preload() {
  //img = loadImage('m1.jpg');
  img = loadImage(defaultimg[0]);
  for (var z = 0; z < 18 ; z++){
   defaultimgs.push(loadImage(defaultimg[z]));
   }
}


function setup() {
  //translate(width*-1 / 2, height*-1 / 2);
  createCanvas(1000, 800);
  colorMode(HSB, 360, 100, 100);
  createCanvas(1000, 800);

  //console.log("Start");
  //HUE
 
  //hue_bias_type = round(random(1,3));
  makeRectangle();
}

function draw() {
background(60,0,90);
noStroke();


  for (var n=0; n < shapeArray.length; n++) {
      shapeArray[n].display(n);
      noStroke();
  }

}

function mouseReleased() {
   makeRectangle();
}


function makeRectangle() 
{
//flush the array
shapeArray = [];

  var dougshape = {
     x: 0,
     y: 0,
     img: 'xxx'
    };

//logic

  //let values = shuffle(values);

  // pull as many values as we need
  //for (let i = 0; i < 18; i++) {
  //  console.log(valueFromDeck());
 // }
    

    for (var i = 0; i < 18; i++)
        { 
        if (i<6)
         {
         dougshape.x = (100+(i*60));
         dougshape.y = 100;
         }
        else if (i>5 && i <12)
         {
         dougshape.x = (100+((i-6)*60));
         dougshape.y = 160;
         }
        else if (i>11)
         {
         dougshape.x = (100+((i-12)*60));
         dougshape.y = 220;
         }
        dougshape.img = valueFromDeck(); 
        console.log ('call value from deck i: ' + i + ' img: ' + dougshape.img);
        shapeArray.push(new shape(dougshape));
        } 
}


class shape {
  constructor(dougshape) {
    this.x = dougshape.x;
    this.y = dougshape.y;
    this.img = dougshape.img;
  }

  move() {
    //Borrowed code: these two are from P5 reference on objects:
    //this.x += random(-this.speed, this.speed);
    //this.y += random(-this.speed, this.speed);
 }

  display(n) {
    image(defaultimgs[n], this.x,this.y,60,60);
    //image(this.img, this.x,this.y,60,60);
  }
}

function valueFromDeck() {
  //Borrowed this code from class and modified for deck

  // find the value at the current position in the deck
  //var v = defaultimg[position];
  var v = defaultimgs[position];

  // change the position for next time
  position++;

  // if we run out of "cards", shuffle and start over from the top
  if (position == defaultimgs.length) {
    defaultimgs = shuffle(defaultimgs);
    position = 0;
  }

  // return the value
  return v;
}

