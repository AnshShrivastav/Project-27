
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roofObject,rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var bobDiameter=40;

	//Create the Bodies Here.
  roofObject = new Roof(370,165,250,25);
	bobObject1 = new Bob(280,365,22);
	bobObject2 = new Bob(325,365,22);
	bobObject3 = new Bob(370,365,22);
	bobObject4 = new Bob(415,365,22);
  bobObject5 = new Bob(460,365,22);
  rope1 = new  Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
  rope2 = new  Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
  rope3 = new  Rope(bobObject3.body,roofObject.body,0,0);
  rope4 = new  Rope(bobObject4.body,roofObject.body,-bobDiameter*-1,0);
  rope5 = new  Rope(bobObject5.body,roofObject.body,-bobDiameter*-2,0);
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(26,65,85);

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-55,y:-55})
  }
  
}

