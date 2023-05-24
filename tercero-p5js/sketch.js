

function setup() {
    createCanvas(1000, 1000);
    background(20);
    frameRate(11);
    //sombras horizontal cruz
      fill(0,200,250);
    stroke(5);
    quad(300,300,350,250,400,250,400,300);
    quad(500,300,550,250,650,250,600,300);
    quad(600,300,650,250,650,350,600,400);
    // sombras vertical
    quad(400,100,450,50,550,50,500,100);
    quad(500,100,550,50,550,250,500,300);
    quad(500,400,550,400,550,450,500,500);
    
    //detras de la estrella
    fill(250,0,0,100);
    triangle(775,450,825,450,800,300);
    triangle(775,475,775,525,600,500);
    triangle(775,525,825,525,800,700);
    triangle(825,525,825,475,1000,500);
      //estrellita
    fill(250,220,0);
    //lado sup
    triangle(800,500,900,400,800,450);
    triangle(800,500,800,450,700,400);
    //lado izq
    triangle(800,500,700,400,750,500);
    triangle(800,500,750,500,700,600);
    //lado inf
    fill(220,220,100,);
    triangle(800,500,700,600,800,550);
    triangle(800,500,800,550,900,600);
    //lado der
    fill(250,220,0);
    triangle(800,500,900,600,850,500);
    triangle(800,500,850,500,900,400);
  }
  
  function draw() {
    let ratonX= mouseX
     //cubo izq
    fill(250,0,20);
    if(mouseIsPressed)
      fill(25,0,180);
    rect(100,500,200,200);
    
    //SOMBRAS CUBO 
  
    stroke(1)
    fill(150,0,250)
    quad(100,500,150,450,350,450,300,500)
    quad(350,450,350,650,300,700,300,500)
    
    //cruz invertida
     fill(0,250,250,170);
    if(ratonX>500)
    fill(200,0,200);
    stroke(2);
    beginShape();
    vertex(300,300);
    vertex(400,300);
    vertex(400,100);
    vertex(500,100);
    vertex(500,300);
    vertex(600,300);
    vertex(600,400);
    vertex(500,400);
    vertex(500,500);
    vertex(400,500);
    vertex(400,400);
    vertex(300,400);
    endShape();
    //curvas cruz
    noFill();
    stroke(255,250,0);
    strokeWeight(3);
    bezier(400,100,300,150,400,150,500,150);
    bezier(500,150,650,150,600,200,550,200);
    bezier(400,200,350,225,350,250,450,250);
    bezier(450,250,600,250,650,325,700,400);
    //PISO
    stroke(0,0,10);
    fill(125,0,10);
    if(mouseIsPressed)
    fill(225,12,0);
    quad(100,800,200,700,900,700,800,800);
    quad(100,900,800,900,800,800,100,800);
    quad(800,800,800,900,900,800,900,700);
    quad(200,700,350,700,300,750,150,750);
    
    //a ver si agrego estrellitas
    fill(225,220,0)
    if(mouseIsPressed)
    ellipse(ratonX,mouseY,15,15)
    
   
   
  }