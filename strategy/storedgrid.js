// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

const points = [];


var ts = 0;

function setup() {
  createCanvas(500, 500);
 // noLoop();


for (let i = 0; i < 100; i++) {
    const x = random(500);
    const y = random(500);
    let type_i =  round(random(1,100));
    let type = 'tree';
    if (type_i < 25)
       {
       type = 'snowman';
       }

    console.log ('i: ' + i + ' ' + type);
      points.push({
        x: x ,
        y: y,
        type: type
      });

  }

/*
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let j = floor(random(-7,7))
      points.push({
        x: x * 50 + 25 + j,
        y: y * 50 + 25 + j
      });
    }
  }
*/

}

function draw() {
  background(50);
  fill(200);
  noStroke();
  frameRate(50);

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
   fill(155,155,155);
    //ellipse(p.x, p.y, 5, 5);

   //tree code
   let offset =4 ;

   //let movex = round(random(-1,1));
   //let movey = round(random(-1,1));


   let movex = map(noise(ts+=1),0,1,-1,1);
   let movey = map(noise(ts+=1),0,1,-1,1);

   if (p.type == 'tree')
      {
      fill(196,98,16);
      rect(p.x + offset, p.y+ offset, 10, 15);
      fill(89,179,0);
      triangle(p.x-3 + offset, p.y + offset, p.x + offset+5, p.y + offset-30, p.x  + offset+10+3, p.y  + offset)
      }
    else if (p.type == 'snowman')
      {
    //snowman
    fill(255,255,255);
    ellipse(p.x+1,p.y-10, 10, 10);
    ellipse(p.x+2,p.y-20, 10, 10);
    ellipse(p.x+3,p.y-30, 10, 10);
    //ellipse(p.x+1+,p.y-10+movey, 10, 10);
    //ellipse(p.x+2+,p.y-20+movey, 10, 10);
    //ellipse(p.x+3+x,p.y-30+movey, 10, 10);
     p.x = p.x +  movex;
     p.y = p.y +  movey;
      }
 

  }
   //fill(255,255,255);
   //ellipse(random(20,100),random(20,100),120,120);
}

