
//doug sketch 1 grass

function setup() {
  // Sets the screen to be x pixels wide and y pixels high
  createCanvas(800, 500);
  colorMode(HSB, 360, 100, 100);

//  var radius = min(width, height) / 2;  
  var radius = 15;  
  secondsRadius = radius*1;

  speed = round(random(1,6));
  //speed_map = map(speed,1,6,10,60)
  blades = round(random(10,90));

  direction_rand = round(random(1,2));
  if (direction_rand==2) 
    {direction = 1}
    else
    {direction = -1}
}
// Hue , Saturation, Brightnes, alpha
//colorMode(HSB);

function draw() {

background(0,0,0);
stroke(90,100,100);

//line(10,10,300,300);
/*1.  Roll a 1-6 die to determine wind speed.  1 is still, 3 is moderate breeze, 6 is a gusty wind.
2.  Roll a die with 00,10,20,30,40,50,60,70,80,90 to determine how many blade of grass.
3.  If you are using paper, and you rolled >30 in step 2, repeat step 2 until you roll < 30.
4.  If you rolled a 00 in step 2, go to step 2 again.
5.  Determine direction.  Roll a 1-6 die.  Odd the wind blows left.  Even the wind blows right.
6.  Draw a line from the top of the page to the bottom using the following criteria:
     The higher the windspeed, the more "curvy wave" you will have to your grass.
      The higher the windspeed, the greater the angle you will have to each blade of grass.
      The direction of the wave will determine the direction of the angle.
      The bottom third of the grass will be straight.
7.  Repeat  step 6 for each count of blade of grass you rolled in step 2.
8.  If on paper, STOP.
9.  If on computer, try to animate the grass based on the windspeed.  
*/

//bezier(x1, y1, cpx1, cpy1, cpx2, cpy2, x2, y2)

for (var i = 0; i < blades; i++) {
 
  speed_change = round(random(1,100));
  if (speed_change < 2) 
    {change = 1}
    else
    {change = 0}
 
   speed_map = map(speed+change,1,6,10,60);
   let a=speed_map*direction; 
   let spacer = i*12;
   //bezier(30, 50, 40, 80, 40, 150, 30, 500);
   bezier(30+a+spacer, 50, 40+a+spacer, 80+a, 40+a+spacer, 150+a, 30+spacer, 500);
 // more statements
}

//debug 
//text ("Speed: " + speed, 10,10);
//text ("Direction: " + direction, 10,20);

}
