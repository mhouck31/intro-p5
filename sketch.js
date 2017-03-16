function setup(){
    createCanvas(600,400);
    background(100,100,100);
}

function draw(){
        line(20,0,200,250);
        //row 1
        fill(0,255,0);    
        rect(200,100,150,50); 
        
        line(15,15,300,250);
        //row 2
        fill(0,255,0)
        rect(200,150,150,50);
        
        line(0,0,850,250);
        //row 3
        fill(0,255,0);
        rect(200,200,150,50);
    //end of green face

    // diagonal top left
       line(200,100,150,75);
       
       fill(0,0,255);
       rect(200,20,150,50);
       
       rect(200,20,150,80);
      
       
       
       


    stroke(0,0,0);
    strokeWeight(4);
    
    ellipse(50,250,60,80);
}

//draw me 2 ellipse
//draw me 2 rectangles
//draw me 4 lines(1 with a positive slop, 1 with a neg slope, )
//1 with a slope of 0, and 1 with a slope of undefined.