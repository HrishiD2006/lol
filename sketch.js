
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof1,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 300);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(180,50,1000,20);
	roof2 = new roof(220,50,1000,20);
	roof3 = new roof(260,50,1000,20);
	roof4 = new roof(300,50,1000,20);
	roof5 = new roof(340,50,1000,20);
	bobObject1= new bob(180,250,40);
	bobObject2= new bob(bobObject1.x+40,250,40);
	bobObject3= new bob(bobObject2.x+40,250,40);
	bobObject4= new bob(bobObject3.x+40,250,40);
	bobObject5= new bob(bobObject4.x+40,250,40);
	rope1=new rope(bobObject1.body,roof1.body,0,0);
	rope2=new rope(bobObject2.body,roof2.body,0,0);
	rope3=new rope(bobObject3.body,roof3.body,0,0);
	rope4=new rope(bobObject4.body,roof4.body,0,0);
	rope5=new rope(bobObject5.body,roof5.body,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 188, 231);
  roof1.display();
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



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-30,y:-30});
  
	}
}