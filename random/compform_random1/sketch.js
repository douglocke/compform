//doug

//create a sketch that will randomize which random distribution we will use,
//and see how the results will change the sketch.

 //multi color palette generator  

 var  hue_bias_type = 0;
 var  sat_bias_type = 0;
 var  bright_bias_type = 0;

var palcolor = [];
var palsize = 14;

function setup() {
  createCanvas(790, 300);
  colorMode(HSB, 360, 100, 100);

 //hue?
 //saturation?
 //brightness

 //sizes?
 //shapes?

  // examples from class code
 //normal:
 //(random(1, 11) + random(1, 11) + random(1, 11)) / 3;

 //high end bias
 //max(random(10), random(10));

 //low bias
 //min(random(10), random(10));


  //HUE
 
   hue_bias_type = round(random(1,3));
   sat_bias_type = round(random(1,3));
   bright_bias_type = round(random(1,3));
  //1 normal
  //2 high end
  //3 low bias
  makePalette(hue_bias_type,sat_bias_type,bright_bias_type);
}

function draw() {

background(0,0,0);
//stroke(50,100,100);
stroke(0,0,0);

//text ('Hue Bias Type = ' + hue_bias_type, 10,10);
//text ('Sat Bias Type = ' + sat_bias_type, 10,20);
//text ('Bright Bias Type = ' + bright_bias_type, 10,30);

text ('Pallete Generator', 10, 10);
text ('Click to generate new pallette.', 10, 30);

  //for (var n=0; n < palcolor.length ; n++) {
  for (var n=0; n < palcolor.length; n++) {
  //squre
      //fill(palcolor[n].h, palcolor[n].s, palcolor[n].b);
      palcolor[n].display(n);
      noStroke();
      fill(350,100,100);
      text ('Distributions', 10, 250);
      text ('Hue: '  + palcolor[n].hue_bias, 10,270);
      text ('Saturation: '  + palcolor[n].s_bias, 10,280);
      text ('Brightness: '  + palcolor[n].b_bias, 10,290);
      stroke(0,0,0);
  }

}

function mouseReleased() {

   hue_bias_type = round(random(1,3));
   sat_bias_type = round(random(1,3));
   bright_bias_type = round(random(1,3));

   makePalette(hue_bias_type, sat_bias_type, bright_bias_type);
}


function makePalette(h,s,b) 
{
//flush the array
palcolor = [];

  var sampcolor = {
     hue: 0,
     s: 0,
     b: 0,
     hue_bias: 'normal',
     s_bias: 'normal',
     b_bias: 'normal'
    };

    for (var i = 0; i < palsize; i++)
        { 
        console.log('h = ' + h);
         switch(h) {
             case 1:
             // normal
             sampcolor.hue =(random(1, 360) + random(1, 360) + random(1, 360)) / 3;
             sampcolor.hue_bias = 'Normal';
             break;
             case 2:
             //  high  
             sampcolor.hue =max(random(1, 360),random(1, 360));
             console.log('sampcolor.h = ' + sampcolor.h);
             sampcolor.hue_bias = 'High';
             break;
             case 3:
             sampcolor.hue =min(random(1, 360),random(1, 360));
             sampcolor.hue_bias = 'Low';
             // low 
             break;
             default:
             sampcolor.hue =(random(1, 360) + random(1, 360) + random(1, 360)) / 3;
             sampcolor.hue_bias = 'Normal';
             // code block
             }

         //saturation
         switch(s) {
             case 1:
             // normal
             sampcolor.s =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             sampcolor.s_bias = 'Normal';
             break;
             case 2:
             //  high  
             sampcolor.s =max(random(1, 100),random(1, 100));
             console.log('sampcolor.s = ' + sampcolor.s);
             sampcolor.s_bias = 'High';
             break;
             case 3:
             sampcolor.s =min(random(1, 100),random(1, 100));
             sampcolor.s_bias = 'Low';
             // low 
             break;
             default:
             sampcolor.s =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             sampcolor.s_bias = 'Normal';
             // code block
             }

         //brightness
         switch(b) {
             case 1:
             // normal
             sampcolor.b =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             sampcolor.b_bias = 'Normal';
             break;
             case 2:
             //  high  
             sampcolor.b =max(random(1, 100),random(1, 100));
             console.log('sampcolor.s = ' + sampcolor.b);
             sampcolor.b_bias = 'High';
             break;
             case 3:
             sampcolor.b =min(random(1, 100),random(1, 100));
             sampcolor.b_bias = 'Low';
             // low 
             break;
             default:
             sampcolor.b =(random(1, 100) + random(1, 100) + random(1, 100)) / 3;
             sampcolor.b_bias = 'Normal';
             // code block
             }

        console.log('Pushing i' + i + ': sampcolor.hue: ' + sampcolor.hue);
        //palcolor.push(new randcolor(sampcolor.hue));
        palcolor.push(new randcolor(sampcolor));
        //console.log('Log of ' + i + ': ' + palcolor[i]);
        } 
}


class randcolor {
  constructor(sampcolor) {
    this.hue = sampcolor.hue;
    this.s = sampcolor.s;
    this.b = sampcolor.b;
    this.hue_bias = sampcolor.hue_bias;
    this.s_bias = sampcolor.s_bias;
    this.b_bias = sampcolor.b_bias;
  }

  move() {
    //Borrowed code: these two are from P5 reference on objects:
    //this.x += random(-this.speed, this.speed);
    //this.y += random(-this.speed, this.speed);
  }

  display(n) {
    fill(this.hue, this.s, this.b);
    square((30+50*n), 100, 55, 20);
  }
}
