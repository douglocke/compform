function setup() {
    createCanvas(1000, 1000);
    ellipseMode(CENTER);
    fill(92,104,122)
    noStroke();
}


function draw() {
    background(92,104,122);
    let n;
    let px;
    let py;
    for (let y = 16; y < height; y += 30) {
        for (let x = 16; x < width; x += 30) {

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
             n = noise(x*.01 - millis()*.00001, y*.01 + millis()*.0001);
          
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

            let w = n * 38;
            let h = n * 38;
              //x y   width.  height.  
            
           if (n < 0.30) {
              fill(255,179,25) //orange
            ellipse(x, y, w);
              if (px>0)
                 {
                 stroke(255);
                 strokeWeight(3);
                 line(x, y, px, py);
                 noStroke();
                 }
            //px = x;
            //py = y;
           }
            else if (n > .3 && n <.4)
            {fill(0,0,153); //blue
            //triangle(x1, y1, x2, y2, x3, y3)
            rect(x, y, w-10, h-10);
            }
            else if (n > .6)
            {fill(141,181,172); //grey
            rect(x, y, w-10, h-10);
            }
          
            //box(w, h);
        }
    }



}
