const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;
var score=0;

function preload(){
	polygonimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.
stand1=new Stand(410,550,250,20);
//level 1
fill("turquoise")
box1=new Box(400,525,30,40);
box2=new Box(370,525,30,40);
box3=new Box(340,525,30,40);
box4=new Box(310,525,30,40);
box5=new Box(430,525,30,40);
box6=new Box(460,525,30,40);
box7=new Box(490,525,30,40);
//level 2
fill("grey")
box8=new Box(370,480,30,40);
box9=new Box(340,480,30,40);
box10=new Box(400,480,30,40);
box11=new Box(430,480,30,40);
box12=new Box(460,480,30,40);
//level 3
fill("skyblue")
box13=new Box(370,435,30,40);
box14=new Box(400,435,30,40);
box15=new Box(430,435,30,40);
//top
fill("pink")
box16=new Box(400,390,30,40);

stand2=new Stand(700,337,250,20);

//level1
fill("turquoise")
box17=new Box(700,300,40,50)
box18=new Box(740,300,40,50)
box19=new Box(660,300,40,50)
box20=new Box(620,300,40,50)
box21=new Box(770,300,40,50)
//level 2
fill("skyblue")
box22=new Box(730,250,40,50)
box23=new Box(690,250,40,50)
box24=new Box(650,250,40,50)
//top
fill("pink")
box25=new Box(690,200,40,50)

ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  drawSprites();
 
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
slingshot.display();
ground.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon)
  }
}