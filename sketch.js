var ball, bin1, bin2, bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = createSprite(700, 690, 70, 10);
    bin2 = createSprite(740, 650, 10, 70);
	bin3 = createSprite(660, 650, 10, 70);
	ball = createSprite(400, 350, 20, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  if(keyDown("space")){
ball.velocityY = 3;
ball.velocityX = 3;
  }
  drawSprites();
 
}



