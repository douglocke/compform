// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

//this code was modified from the class example
var blockiness = 2;  //higher is faster
var spotx =0 ;
var spoty = 0;

var finalx = 0;
var finaly = 0;

var finalx_pos = 0;
var finaly_pos = 0;

var startx = 0;
var starty = 0;

var setting = 0;

var foundspot = false;
var arrayx = [];
var arrayy = [];
function setup() {
    createCanvas(1000, 800);
    ellipseMode(CENTER);
    fill(30, 800,50);
    noStroke();

    //pick a X marks the spot
   
 
   /* 
    for (let y = 16; y < height; y += blockiness) {
        for (let x = 36; x < width; x += blockiness) {
            arrayx.push(x); 
            }
    arrayy.push(y); 
    }
    */

}


function draw() {
    background(0,50,100);
    let n;
    let px = 0; 
    let py = 0;

    for (let y = 16; y < height; y += blockiness) {
        for (let x = 36; x < width; x += blockiness) {

            // vary over x
           // n = noise(x);

            // vary over y
           //  n = noise(y);

            // vary over x + y
            // n = noise(x + y);

            // vary over x and y
            // n = noise(x, y);
            // n = noise(x*.01, y*.01);
            //n = noise(x*.01, y*.05);
             n = noise(x*.01, y*.01);
          
            // vary over x + time;
            // n = noise(x + millis() * .001);
            // n = noise(x * .002 + millis() * .001);

            // vary x and time, y
            // n = noise(x * .002 + millis() * .001, y);
            // n = noise(x * .002 + millis() * .001, y * .002);

            // vary over x and time
            //n = noise(x, millis() * .001);

            // vary over y and time
            //n = noise(y, millis() * .001);

            // vary over x and y and time
            //n = noise(x, y, millis() * .001);
            //n = noise(x*.003, y*.003, millis() * .001);

            // vary over distance from center
            // n = noise(dist(300, 300, x, y) * .03);
            // n = noise(dist(300, 300, x, y) * .03, millis() * .001);
            // n = noise(dist(300, 300, x, y) * .03 +  millis() * .001);

            let w = n * 10;
            let h = n * 10;
              //x y   width.  height.  
            
           //fill(0, 102, 34) //  land
           if (n>.5 && n < 0.56) {
              fill(156,129,0)}//beaches\
              //fill(0,102,0)}//beaches\
           else if (n>.1 && n < 0.50) {
              //fill(60, 100, 230)} //land
              //fill(0, 102, 34)} //  land
              //fill(156, 129, 0)} //  land
             
               
              arrayx.push(x); 
              arrayy.push(y); 
             /*
              if (foundspot==false)
                 {
                 isthisthespot(x,y)
                 }
             */
              
              //drawX();
              fill(0, 102, 34)} //  land
              
           else if (n>.70 && n < 1.20) {
              fill(20,20,230) //deep ocean
           }
            else 
            //{fill(30, 600,90); }
            {fill(60, 100, 230);} //water
          
            rect(x, y, w, h);
            //console.log("Draw rect x: " + x + " y: " + y);
        }
    }
//determineSpot();
if (setting >0)
   drawX();

if (setting >1)
   {
   textSize(25);
   text("start", arrayx[startx_pos]-25 ,arrayy[starty_pos]);
   drawLines();
   }
}

function mouseReleased() {
    if (setting==0)
       {
      finalx_pos =  round(random(10,arrayx.length-10));
      finaly_pos =  round(random(10,arrayy.length-10));

      finalx = arrayx[finalx_pos];
      finaly = arrayy[finaly_pos];

       console.log("setting X x: " + finalx + " y: " + finaly);
       }

    if (setting ==1)
       {
      startx_pos = round(round(random(1, finalx_pos)));
      starty_pos = startx_pos;
       }

    setting++;
}

function drawX() {
       fill(20,0,0);
       textSize(48);
       console.log("YES x: " + finalx + " y: " + finaly);
       text("x", finalx-5 ,finaly-5);
       }


function drawLines() {
       let t = 0;
       strokeWeight(4);
       stroke(255,255,255);
       console.log("startxpos: " + startx_pos + " finalx_pos: " + finalx_pos);

        //  line(arrayx[startx_pos], arrayy[starty_pos],arrayx[finalx_pos], arrayy[finaly_pos]);

       //stroke(25,55,45);
        //  line(arrayx[0], arrayy[0],arrayx[startx_pos], arrayy[starty_pos]);


       for (t = startx_pos; t < finalx_pos; t+=40000)
          {
          //fill(255,255,255);
          line(arrayx[t], arrayy[t],arrayx[t+40000], arrayy[t+40000]);
          }

          line(arrayx[t], arrayy[t],arrayx[finalx_pos], arrayy[finaly_pos]);


       noStroke();
 
       }


