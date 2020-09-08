
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper1,ground1,side1,bottom, wall1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	hi = createSprite(400,690,800,45);
	hi.shapeColor = color (140, 79, 35);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,20);
	ground = new Ground(400,650,800,35);

	bottom = new Boxes(700,630,150,15);
	side1 = new Boxes(780,587,20,100);
	side2 = new Boxes(620,587,20,100);

	wall1 = new Wall(800,400,10,800);
	//wall2 = new Wall();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  ground.display();

  side1.display();
  side2.display();
  bottom.display();

  wall1.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
	}
}