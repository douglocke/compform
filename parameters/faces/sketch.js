//doug
//face generator

var noseimgs_i =[];
var noseimgs = ['nose1.png', 'nose2.png'];

var eyeimgs_i =[];
var eyeimgs = ['eye1.png', 'eye2.png', 'eye3.png', 'eye4.png', 'eye5.png'];

var eyebrowimgs_i =[];
var eyebrowimgs = ['eyebrow1.png', 'eyebrow2.png', 'eyebrow3.png'];

var mouthimgs_i =[];
var mouthimgs = ['mouth1.png', 'mouth2.png', 'mouth3.png', 'mouth4.png'];

var baseimg;

function preload() {

  for (var z = 0; z < 2 ; z++){
   noseimgs_i.push(loadImage(noseimgs[z]));
   }

   for (z = 0; z < 5 ; z++){
   eyeimgs_i.push(loadImage(eyeimgs[z]));
   }

   for (z = 0; z < 3 ; z++){
   eyebrowimgs_i.push(loadImage(eyebrowimgs[z]));
   }

   for (z = 0; z < 4 ; z++){
   mouthimgs_i.push(loadImage(mouthimgs[z]));
   }

   
   baseimg = loadImage('base.png');

}


function setup() {
  //translate(width*-1 / 2, height*-1 / 2);
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 900);
  colorMode(HSB, 360, 100, 100);
  console.log("Start");

 let crazySlider_label = createP('InSanity Level');
 crazySlider = createSlider(1, 9, 1, 1);

  makeFace(); 
}

function draw() {
background(60,0,90);
noStroke();

   makeFace();
noLoop();
  }


function mouseReleased() {
   makeFace();
}


function makeFace() 
{
//base


    let c = crazySlider.value();

    let l_eyenum = floor(random(0,4));
    let r_eyenum = l_eyenum;

    let l_eyebrownum = floor(random(0,3));
    let r_eyebrownum = l_eyebrownum;
    let mouthnum = floor(random(0,3));


   console.log("c: " + c);

    if (c > 2 && c < 10)
      {
      r_eyenum = floor(random(0,4));
      r_eyebrownum = floor(random(0,3));
      }


    if (c > 8)
      {
      mouthnum = 3;
      image(eyeimgs_i[l_eyenum], 200,200,100,100); //third eye
      tint(1,50,100,100);
      }

    image(baseimg, 20,20,500,900);

    image(eyeimgs_i[l_eyenum], 100,250,100,100);
    image(eyeimgs_i[r_eyenum], 300,250,100,100);

    image(eyebrowimgs_i[l_eyebrownum], 100,150,100,100);
    image(eyebrowimgs_i[r_eyebrownum], 300,150,100,100);
    image(mouthimgs_i[mouthnum], 150,580,250,90);

    let nosenum = floor(random(0,2));
    image(noseimgs_i[nosenum], 195,420,100,100);

    if (c > 6 && c < 9)
      {
      console.log("inside 78 ");
      image(mouthimgs_i[mouthnum], 175,640,250,90);
      image(eyeimgs_i[l_eyenum], 200,200,100,100); //third eye
      }

    if (c > 8)
      {
      image(eyeimgs_i[l_eyenum], 200,200,100,100); //third eye
      tint(1,50,100,100);
      }

    noTint();

}

