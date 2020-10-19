// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
  createCanvas(500, 500);
//  noLoop();
}

function draw() {
  background(50);
  fill(200);
  noStroke();
  for (let i = 0; i < 10; i++) {
    //(random(1, 11) + random(1, 11)) / 2;
    const x = (random(1,500) + random(1,500)) /2;
    const y = (random(1,500) + random(1,500)) /2;
    fill(200,200,200);
    ellipse(x, y, 10, 10);
    
    fill(255,255,255);
    
    ellipse(x+1,y-10, 10, 10);
    ellipse(x+2,y-20, 10, 10);
    ellipse(x+3,y-30, 10, 10);
  }
}

