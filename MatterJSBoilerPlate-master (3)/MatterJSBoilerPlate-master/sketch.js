var engine,Ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	bobObject1.rectangle(400, 0, 810, 30, {
		isStatic: true }),
		bobObject2.rectangle(400, 400, 810, 30, {
		 isStatic: true }),
		 bobObject3.rectangle(800, 200, 30, 420, { 
		isStatic: true }),
		bobObject4.rectangle(0, 200, 30, 420, { 
		isStatic: true })
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 Ground.display();

}



