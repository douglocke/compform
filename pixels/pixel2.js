// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var t = 1000;
var t1 = 1000;
var t2 = 1000;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);

    img = createImage(500, 500);
    img.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            //let n = noise(x*.01,y*.01);
            let n = noise(x*.04,y*.04);
            let n2 = noise(x,y)*100;
            let n3 = noise(x,y)*100;
            console.log("n: " + n);
            //console.log("n2: " + n);
            //console.log("n3: " + n);
            let nm = map(n, 0,100,1,255);
            let nm2 = map(n2, 0,100,1,255);
            let nm3 = map(n3, 0,100,1,255);
            var c = color(nm, nm2, nm3);

            var c = color(0,0,0);
            //console.log("c: " + c);

            if (n>.5 && n < .6) {
               //c = color(nm2,0,20)
               c = color(random(0,5),random(80,255),random(10,25))
                 }
              else if (n>.6 && n < .7) {
               c = color(random(0,5),random(1,10),random(200,255))
                 }
               else {
               c = color(random(40,80),random(40,80),random(40,80))}

/*
            if (n>.7 && n < .74) {
               c = color(0,0,0)}
              else {
               c = color(nm2,200,200)
                 }
*/
 
            img.set(x, y, c);
            t +=1;
            t1 +=1;
            t2 +=1;

          //var c = color(y * 25, x * 25, 0);
           // img.set(x, y, c);

        }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();
}
