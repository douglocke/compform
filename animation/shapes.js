//doug

//create a sketch that will randomize which random distribution we will use,
//and see how the results will change the sketch.

 //multi color palette generator  
var mousecl = 0;
 var  hue_bias_type = 0;
 var  sat_bias_type = 0;
 var  bright_bias_type = 0;
 var  angle = 0;
 var border = 50;
var shapeArray = [];
var num_squares = 0;
var opacity = 1;

function setup() {
  //translate(width*-1 / 2, height*-1 / 2);
  createCanvas(1000, 800);
  colorMode(HSB, 360, 100, 100);
  createCanvas(1000, 800);

  //console.log("Start");
  //HUE
 
   hue_bias_type = round(random(1,3));
   sat_bias_type = round(random(1,3));
   bright_bias_type = round(random(1,3));
  //1 normal
  //2 high end
  //3 low bias

   num_rects = round(random(15,25));
   num_squares = round(random(15,28));
   angle = round(random(30,80));
   let tilt=0;
   //angle=45;

  //console.log("angle= " + angle);
  //console.log("num_squares= " + num_squares);

  makeRectangle(hue_bias_type,sat_bias_type,bright_bias_type,tilt);
}

function draw() {
//translate(-300,500);
//translate((width*-1),height/2);
translate(-250,height/2);
angleMode(DEGREES);
background(60,0,90);
noStroke();

//stroke(50,100,100);
//stroke(60,100,100);

//text ('Hue Bias Type = ' + hue_bias_type, 10,10);
//text ('Sat Bias Type = ' + sat_bias_type, 10,20);
//text ('Bright Bias Type = ' + bright_bias_type, 10,30);

//text ('Pallete Generator', 10, 10);
//text ('Click to generate new pallette.', 10, 30);

//stroke(100,100,100);
//console.log("mousecl: " + mousecl);

//console.log("shapeArray.length: " + shapeArray.length);

  //for (var n=0; n < shapeArray.length ; n++) {
  for (var n=0; n < shapeArray.length; n++) {
  //squre
      //fill(shapeArray[n].h, shapeArray[n].s, shapeArray[n].b);
      //console.log("inside for loop in draw");
      shapeArray[n].display(n);
      noStroke();
      fill(350,100,100);
      //text ('Distributions', 10, 250);
      //text ('Hue: '  + shapeArray[n].hue_bias, 10,270);
      //text ('Saturation: '  + shapeArray[n].s_bias, 10,280);
      //text ('Brightness: '  + shapeArray[n].b_bias, 10,290);
      stroke(0,0,0);
  }


    const theta = map(frameCount, 0, 60, 0, 2 * PI);
    const shapeAngle = sin(theta) * .5;


 if (mousecl == 1)
    {  
      for (var u=0; u < shapeArray.length; u++) {
      shapeArray[u].move(shapeAngle);
      }
    }



}

function mouseReleased() {

mousecl = 1;
/*
   hue_bias_type = round(random(1,3));
   sat_bias_type = round(random(1,3));
   bright_bias_type = round(random(1,3));
   num_squares = round(random(1,5));
   let tilt=1;
   makeRectangle(hue_bias_type, sat_bias_type, bright_bias_type,tilt);
   angle = round(random(45,46));
   opacity = round(random(0,1));
*/
}


function makeRectangle(h,s,b,tilt) 
{
//flush the array
shapeArray = [];

  var dougshape = {
     hue: 0,
     s: 0,
     b: 0,
     hue_bias: 'normal',
     s_bias: 'normal',
     b_bias: 'normal',
     x: 0,
     y: 0,
     h: 0,
     w: 0, 
     angle_offset: 0,
     t: tilt,
     shape: 1
    };

//console.log("num_squares: " + num_squares);

    for (var i = 0; i < num_squares; i++)
        { 
        //tilt
        if (i < 1)
           {
           dougshape.t = 0
            //first shape is rect, trianle or round
           dougshape.shape = round(random(1,3));
           }
        else
           {
           dougshape.t = 1;
           //all others are rects
           dougshape.shape = 1; // rect
           }
        //console.log('h = ' + h);
         switch(h) {
             case 1:
             // normal
             dougshape.hue =(random(1, 360) + random(1, 360) + random(1, 360)) / 3;
             dougshape.hue_bias = 'Normal';
             break;
             case 2:
             //  high  
             dougshape.hue =max(random(1, 360),random(1, 360));
             //console.log('dougshape.h = ' + dougshape.h);
             dougshape.hue_bias = 'High';
             break;
             case 3:
             dougshape.hue =min(random(1, 360),random(1, 360));
             dougshape.hue_bias = 'Low';
             // low 
             break;
             default:
             dougshape.hue =(random(1, 360) + random(1, 360) + random(1, 360)) / 3;
             dougshape.hue_bias = 'Normal';
             // code block
             }

         //saturation
         switch(s) {
             case 1:
             // normal
             dougshape.s =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             dougshape.s_bias = 'Normal';
             break;
             case 2:
             //  high  
             dougshape.s =max(random(1, 100),random(1, 100));
             //console.log('dougshape.s = ' + dougshape.s);
             dougshape.s_bias = 'High';
             break;
             case 3:
             dougshape.s =min(random(1, 100),random(1, 100));
             dougshape.s_bias = 'Low';
             // low 
             break;
             default:
             dougshape.s =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             dougshape.s_bias = 'Normal';
             // code block
             }

         //brightness
         switch(b) {
             case 1:
             // normal
             dougshape.b =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             dougshape.b_bias = 'Normal';
             break;
             case 2:
             //  high  
             dougshape.b =max(random(1, 100),random(1, 100));
             //console.log('dougshape.s = ' + dougshape.b);
             dougshape.b_bias = 'High';
             break;
             case 3:
             dougshape.b =min(random(1, 100),random(1, 100));
             dougshape.b_bias = 'Low';
             // low 
             break;
             default:
             dougshape.b =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             dougshape.b_bias = 'Normal';
             // code block
             }

         //x is 800
         dougshape.x =(random(border, width-border) + random(border, width-border) + random(border,width-border)) / 3;
         dougshape.y =(random(border, height-border) + random(border, height-border) + random(border,height-border)) / 3;
         dougshape.h =(random(30, 400) + random(50, 400) + random(50, 400)) / 3;
         dougshape.w =(random(50, 200) + random(50, 200) + random(50, 200)) / 3;

         dougshape.angle_offset =(random(-5, 5) + random(-5, 5) + random(-5, 5)) / 3;

        //console.log('Pushing i' + i + ': dougshape.hue: ' + dougshape.hue);
        //shapeArray.push(new (dougshape.hue));
        shapeArray.push(new shape(dougshape));
        //console.log('Log of ' + i + ': ' + shapeArray[i]);
        } 
}


class shape {
  constructor(dougshape) {
    this.x = dougshape.x;
    this.y = dougshape.y;
    this.angle = dougshape.angle;
    this.h = dougshape.h;
    this.w = dougshape.w;
    this.hue = dougshape.hue;
    this.s = dougshape.s;
    this.b = dougshape.b;
    this.hue_bias = dougshape.hue_bias;
    this.s_bias = dougshape.s_bias;
    this.b_bias = dougshape.b_bias;
    this.angle_offset = dougshape.angle_offset;
    this.t = dougshape.t;
    this.shape = dougshape.shape;
  }

  move(shapeAngle) {

    //this.angle_offset = shapeAngle+1;
    //this.angle_offset = shapeAngle+1;
    //console.log("shapeangle: " + shapeAngle);
    let a = floor(map(shapeAngle,-1,1,1,360));
    //console.log("angle: " + angle);
    //console.log("a: " + a);
    angle= a;
    //rotate(angle*-1+this.angle_offset);
    //push();
    rotate(angle*-1);
    //pop();
    //rotate(this.angle*-1+this.angle_offset*100);

    //console.log("this.angle = " + this.angle);
    //this.x +=1;

       //rotate(angle-this.angle_offset);

    //Borrowed code: these two are from P5 reference on objects:
    //this.x += random(-this.speed, this.speed);
    //this.y += random(-this.speed, this.speed);
 }

  display(n) {
    //if (opacity > 0)
     //fill(this.hue, this.s, this.b, 1);
    //else
     fill(this.hue, this.s, this.b, 0.5);
   
    //if (this.t==1)    
       //rotate(angle*-1+this.angle_offset);

    noStroke();
    if (this.t==0)    
       {
       //draw a cirlce, triangle, or a rectangle sunday
       let first_shape = round(random(1,3));

       switch(this.shape) {
             case 1:
             // normal
             rect(this.x, this.y-600, this.w*2, this.h*2);
             break;
             case 2:
             // normal
             triangle(this.x, this.y-600, this.x + this.w*3, this.y-600, this.x+this.h, this.y-400)
             break;
             case 3:
             // normal
             circle(this.x, this.y-600, this.h*2);
             break;
             default:
             // normal
             rect(this.x, this.y-600, this.w*2, this.h*2);
             break;
             }
       }
     else
    rect(this.x, this.y, this.w, this.h);
    //console.log("Square: " + n);
    //console.log("Square: " + n + "Tilt: " + this.t);
    if (this.t==1)    
       rotate(angle-this.angle_offset);
    //rotate(-3);
  }
}
