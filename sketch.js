
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bucket1;
var bucket2;
var bucket3;

function preload()
{
	
}

function setup() {
	createCanvas(950, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	  ellipse(ball.position.x,ball.position.y,30);
	//Create the Bodies Here.
	  ground = new ground(500,340,400,40);
	  bucket1 = new bucket1(200,50,20,30);
	  bucket2 = new bucket2(250,50,20,30);
	  bucket3 = new bucket3(300,50,20,30);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
   bucket1.show();
   bucket2.show();
   bucket3.show();

  drawSprites();
 
}



