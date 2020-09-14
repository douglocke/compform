//doug
//non-overlaping circle code from
//https://gist.github.com/nick3499/fe7387e95a73393b5a3972f351d3f860

// BC = (B)orrowed (C)ode marker means this line was from URL above

//BC (renamed)
var dots = [];

function setup() {
  createCanvas(800, 500);
  colorMode(HSB, 360, 100, 100);
  //implemented Emily Bowe's instruction set, this is the 2 dice roll
  ellipses = round(random(1,12));
  console.log("ellipses = " + ellipses);
  let i = 0;

     //BC borrowed but modified this while loop to create this array of circles
     // basically i leveraged the overlap test
     while (i  < ellipses) {

     console.log("here");
     //BC borrowed code but change the radius for a dot
     // also changed things to add extra ellipses , offsets
       var dot = {
           //BC I changed this so nothing is within 100 px of the margins 
           x: round(random(100,700)),
           y: round(random(100,400)),
           r: 3, // 3 for a dot
           //first ellipse height, radius, offset

           //added these for more ellipses... thought about making these into different arrays, but decided this might simpler first time coding this.
           r2: round(random(10,80)),
           o2: round(random(0,3)),
           c2: round(random(0,360)),

           r3: round(random(15,60)),
           o3: round(random(5,10)),
           c3: round(random(0,360)),

           r4: round(random(15,60)),
           o4: round(random(5,10)),
           c4: round(random(0,360)),

           r5: round(random(15,60)),
           o5: round(random(5,10)),
           c5: round(random(0,360))
           }

       //BC borrowed & modifed this overlap test
       //I added annotations to demonstrate I understand what its doing
       var overlapping = false;
       //for each circle, calc the distance between the center of our current circle, against all other circles 
      //console.log("i=" + i);
       for (var j = 0; j < dots.length; j++) {
       //BC copy the array , so we can do compares
       var other = dots[j];

       //BC next couple lines we will do the compare. but rather than
       // BC only test radius, I made sure, none is within 100 pixels
       var d = dist(dot.x, dot.y, other.x, other.y);
         // original:  if (d < circle.r + other.r) {
          if (d < dot.r + 150) {
            overlapping = true;
            }
       }
      //BC this is per the original code, only add to the array if not overlapping
      if (!overlapping) {
      dots.push(dot);
         }

     i++;
     }
}

function draw() {

background(30,30,30);
stroke(30,100,100);
noFill();
//line(10,10,300,300);

for (var i = 0; i < dots.length; i++) {
    //fill(random(128, 255), random(128, 255), random(128, 255));
    //noStroke();
    //BC borrowed this ellipse loop
    ellipse(dots[i].x, dots[i].y, dots[i].r, dots[i].r);
    stroke(dots[i].c1,100,100);
noFill();
    ellipse(dots[i].x, dots[i].y, dots[i].r2, dots[i].r2-dots[i].o2);
    stroke(dots[i].c2,100,100);
    ellipse(dots[i].x+dots[i].o3, dots[i].y, dots[i].r2+dots[i].r3, dots[i].r2+dots[i].r3+dots[i].o2+dots[i].o3);
    stroke(dots[i].c3,100,100);
    ellipse(dots[i].x+dots[i].o3, dots[i].y, dots[i].r2+dots[i].r3+dots[i].r4, dots[i].r2+dots[i].r3+dots[i].o2+dots[i].o3+dots[i].o4);
    stroke(dots[i].c4,100,100);
    ellipse(dots[i].x+dots[i].o3, dots[i].y, dots[i].r2+dots[i].r3+dots[i].r4+dots[i].r5, dots[i].r2+dots[i].r3+dots[i].o2+dots[i].o3+dots[i].o4+dots[i].o5);
    }
}
