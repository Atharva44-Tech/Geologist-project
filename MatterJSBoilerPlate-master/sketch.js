
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=createSprite(230,690,1500,10);  
   ground.shapeColor="white";
  
   Hammer=new Hammer(100,320,70,70);
   stone=new Stone(700,320,70,70);
   rubber=new Rubber(700,350,70,70);
 
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
Hammer.display();
Stone.display();



  drawSprites();
 
}



