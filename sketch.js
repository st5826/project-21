
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground, left, right;

let world;
let engine;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	let ball_options={
		restotution:0.3,
		friction:0,
		density:1.2
	}

	ground=new Wall(400,580,800,20)
	left=new Wall(700,505,20,150)
	right=new Wall(550,505,20,150)

	ball=Bodies.circle(50,200,20, ball_options)
	World.add(world,ball)

	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ground.display();
  left.display();
  right.display()
  fill("yellow")
  ellipse(ball.position.x, ball.position.y,15,15)
  Engine.update(engine)
 
}


function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position, {x:50,y:-80})
}
}
