//doug
//tree

  var xstart =400; 
  var ystart =450; 
  var branches = 0;
  var l = 20;
  var lr = l;
  var randang=0; 
  var lines = []; 


  var dougline= {
     x: 0,
     y: 0,
     a: 0,
     b: 0
    };


function setup() {
  createCanvas(800, 500);
  colorMode(HSB, 360, 100, 100);
//munro's branching
  branches = round(random(10,15));
  branches_r = branches;
  console.log("branches = " + branches);
  let i = 0;
  randang=1;
  //random(0,1);
  
 
if (branches > 0)
 {
 l--;
 makebranch_left(xstart,ystart);
 }

if (branches_r > 0)
 {
 lr--;
 makebranch_right(xstart,ystart);
 }

}

function draw() {

background(40,0,0);
stroke(50,100,100);
noFill();
  console.log("lines.length" + lines.length);
  for (var n=0; n < lines.length ; n++) {
  line(lines[n].x, lines[n].y, lines[n].a, lines[n].b)
  }

}


function makebranch_left(x,y)
{
branches--;
console.log("branches_left= " + branches);
if (branches > 0 && y >0) {
/*makeline(x,y,x-l,y-l);
makeline(x,y,x+l,y-l);
makebranch_left(x-l, y-l);
*/
makeline(x,y,x-l*randang,y-l);
makeline(x,y,x+l*randang,y-l);
makebranch_left(x-l, y-l);
}
}

function makebranch_right(x,y)
{
branches_r--;
console.log("branches_right= " + branches_r);
if (branches_r > 0 && y >0) {
makeline(x,y,x-lr,y-lr);
makeline(x,y,x+lr,y-lr);
makebranch_right(x+lr, y-lr);
}
}



function makeline(x,y,a,b)
{
console.log("x: " + x + " y: " + y + " a: " + a + " b: " + b);
  var dougline= {
     x: x,
     y: y,
     a: a,
     b: b
    };
lines.push(dougline);
}
