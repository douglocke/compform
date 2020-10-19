function setup() {
  createCanvas(1000, 1000);
  

}

function draw() {
  background(50);
  fill(200);
  noStroke();
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
       let offset = floor(random(-5,5));
      fill(255,255,255);
      ellipse(x * 50 + 25 + offset, y * 50 + 25 + offset, 10, 10);
      fill(196,98,16);
      rect(x * 50 + 25 + offset, y * 50 + 25 + offset, 15, 15);
      fill(89,179,0);
      triangle(x * 50 + 25 + offset, y * 50 + 25 + offset, x * 50 + 25 + offset+10, y * 50 + 25 + offset-30, x * 50 + 25 + offset+10, y * 50 + 25 + offset)
      
      
    }
  }
  noLoop();
}

