//$fs = 60;
//$fa = 90;
//$fn =200;


//render(convexity = 2) {
//rotate (60*i,[0,0,1]) translate([20,0,0]) cylinder(20,10,5);




//cube([10,10,2]);

//color([20,20,20,1]);

col_choice = round(rands(0,1,1)[0]);
//col_brick1 = "#888888";
col_brick1 = "blue";

col_brick2 = "#D3D3D3";
col_brick3 = "red";
col_wood = "brown";
//width height startx start y
module wall(w,h,x,y,r){
   for ( i = [0 :3]){  
        rotate(r)
        translate([x,y,0])
          {
         color(col_brick2)  
         cube([w,2,h], false);
          }
          
      }
}

module walltop(w,h,x,y,r){
   for ( i = [0 : 2: (w/5 - 1)]){  
        rotate(r)
        translate([x+(i*5),y,h])
          {
         color(col_brick2)  
         cube([5,2,5], false);
          }
          
      }
}


module turret(x,y,h,w)
{
    color(col_brick2)  
     ///this is a large cylinder, minus the windows
     difference()
      {
        translate([x,y,0])
        color(col_brick2)     
        cylinder(h, w, w, false);
      
        //top window (front)
        translate([x+5,y-15,h-10])
        //w d h
        cube([2,10,5], false);
        
        //middle  (front)
        translate([x-5,y-15,h-20])
        //w d h
        cube([2,10,5], false); 
          
         
        //bottom window (front)
        translate([x+5,y-15,h-30])
        //w d h
        cube([2,10,5], false); 
        
          
         //top window (back)
        translate([x-5,y+5,h-10])
        //w d h
        cube([2,10,5], false);
        
      
      translate([x+3,y+5,h-20])
        //w d h
        cube([2,10,5], false);
      
      translate([x-5,y+5,h-30])
        //w d h
        cube([2,10,5], false);
            
          
      }
      
       
 //experiment stripe under the turret top
      
      translate([x,y,h-3])
      color(col_brick2)     
      cylinder(3, w+1, w+1, false);
   
      
      
      
   
      
    //this is a small cylinder turret top minus the cutouts
       
      
      
     
   difference()
      {  
      translate([x,y,h])
      color(col_brick2)     
      cylinder(10, w+3, w+3, false);
   
      translate([x,y,h])
      color(col_brick1)     
      cylinder(10, w, w, false); 
      //notc
           
      //6 oclock
      translate([x-3,y-15,h+5])
      cube([5,5,5], false);
      //12 oclock
      translate([x-3,y+10,h+5])
      cube([5,5,5], false);
      //9 oclock
      translate([x-15,y-3,h+5])
      cube([5,5,5], false);
      //3 oclock
      translate([x+10,y-3,h+5])
      cube([5,5,5], false);
        } 
         //4-30 oclock
     // color("red")
     // rotate(180,[0,0,0])
      //translate([x+6,y-12,h+5])
     // cylinder([5,5,5], false);
        //cylinder([5,5,5], false);
        ////cylinder(h = height, r1 = BottomRadius, r2 = TopRadius, center = true/false);   
        
        
        
}

module frontwall(w,h,x,y,r){
   
        difference()
         {
        
        rotate(r)
        translate([x,y,0])
          {
         color(col_brick2)  
         cube([w,2,h], false);
          }
          
         //square door
        translate([x+17,y,0])
          {
         color(col_brick2)  
         cube([10,2,10], false);
          }
        //cylinder door top
         translate([x+22,y+2,10])
          {
         color(col_brick2)  
          //rotate(a, [x,y,z])        
          rotate(90,[90,0,0])
          cylinder (h=2, r=5, center = false);
          }
      }
}



module door(w,h,x,y,r){
    
    //square door
        translate([x+17,y,0])
          {
         color(col_wood)  
         cube([10,5,10], false);
          }
        //cylinder door top
         translate([x+22,y+2,10])
          {
         color(col_wood)  
          //rotate(a, [x,y,z])        
          rotate(90,[90,0,0])
          cylinder (h=2, r=5, center = false);
          }
    
    
}

module platform(w,h,x,y,z,r){
   for ( i = [0 :3]){  
        rotate(r)
        translate([x,y,z])
          {
         color(col_brick2)  
         cube([w,h,2], false);
          }
          
      }
}

module railing(w,h,x,y,z,r){
   for ( i = [0 :3]){  
        rotate(r)
        translate([x,y,z])
          {
         color(col_brick2)  
         cube([w,2,h], false);
          }
          
      }
}




//front wall  wall(w,h,x,y,r)
//wall(45,25,-20,-40,0);
walltop(45,25,-20,-40,0);
//back wall
wall(45,25,-20,40,0);
walltop(45,25,-20,40,0);
//rightside
wall(50,25,-25,-40,90);
walltop(45,25,-25,-40,90);
//leftside
wall(50,25,-25,30,90);
walltop(45,25,-25,30,90);
//turret x,y,h,w
//front right
turret(35,-35,40,11);
//front left
turret(-30,-35,40,11);
//back right
turret(35,35,40,11);
//back left
turret(-30,35,40,11);


//***NEW* front wall with door wall(w,h,x,y,r)
frontwall(45,25,-20,-40,0);

//front chamber
//wall(57,25,-25,-20,0);


//front platform
platform(58,20,-25,-40,21,0);

//back platform
platform(58,5,-25,35,21,0);
//left platform
platform(5,80,-30,-40,21,0);
platform(5,80,33,-40,21,0);

//front ledge walls

//wall(w,h,x,y,r)
railing(45,2,-20,25,23,90);
railing(45,2,-20,-35,23,90);
railing(45,2,-20,35,23,0);



//cylinder(h = height, r1 = BottomRadius, r2 = TopRadius, center = true/false);




// col_choice = round(rands(0,1,1)[0]);
//function name ( parameters ) = value 
//function pickcol (col_choice) =
//    {if (col_choice < 1) {col_brick = col_brick1;} 
//        else {col_brick = col_brick2;}  
        
//rotate([x,y,z])
//rotate(a, [x,y,z])        


   //rotate([0,0,i * (360 / petals)])
   //      translate([0,.75 * petals, 0])

//cube([width,depth,height], center)
//cylinder (h=1, r=3, center = true);
//translate([x,y,z])
//#888888

//#D3D3D3
//echo( "Random : ",col_choice);
//echo( "col_brick : ",col_brick);