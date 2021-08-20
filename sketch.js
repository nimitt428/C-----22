const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var Bob1,Bob2,Bob3,Bob4,Bob5;
var con1,con2,con3,con4,con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
  
	roof = Bodies.rectangle(400,100,350,30,roof_options);
    World.add(world,roof);
   
  var Ball_options ={
  restitution :0.4,
    
}
   
	Bob1 = Bodies.circle(400,330,40,Ball_options)
    World.add(world,Bob1)
	Bob2 = Bodies.circle(460,330,40,Ball_options)
    World.add(world,Bob2)
	Bob3 = Bodies.circle(520,330,40,Ball_options) 
    World.add(world,Bob3)
	Bob4 = Bodies.circle(340,330,40,Ball_options) 
    World.add(world,Bob4)
	Bob5 = Bodies.circle(280,330,40,Ball_options)
    World.add(world,Bob5)

	con1= Matter.Constraint.create({
        bodyA : roof,
        pointA:{x:0,y:0},
        bodyB:Bob1,
        pointB:{x:0,y:0},
        length:230,
        stiffnes:0.3
      });

    World.add(world,con1);
    con2= Matter.Constraint.create({
        bodyA : roof,
        pointA:{x:0,y:0},
        bodyB:Bob2,
        pointB:{x:0,y:0},
        length:240,
        stiffnes:0.3
      });

    World.add(world,con2);

    con3= Matter.Constraint.create({
        bodyA : roof,
        pointA:{x:0,y:0},
        bodyB:Bob3,
        pointB:{x:0,y:0},
        length:260,
        stiffnes:0.3
      });

    World.add(world,con3);
    con4= Matter.Constraint.create({
        bodyA : roof,
        pointA:{x:0,y:0},
        bodyB:Bob4,
        pointB:{x:0,y:0},
        length:240,
        stiffnes:0.3
      });

    World.add(world,con4);
    con5= Matter.Constraint.create({
        bodyA : roof,
        pointA:{x:0,y:0},
        bodyB:Bob5,
        pointB:{x:0,y:0},
        length:250,
        stiffnes:0.3
      });

    World.add(world,con5);
             

	Engine.run(engine);
	
  
}

  function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,350,30);

  push();
  strokeWeight(2);
  stroke(255);
  line(Bob1.position.x,Bob1.position.y,roof.position.x,roof.position.y);
  line(Bob2.position.x,Bob2.position.y,460,100);
  line(Bob3.position.x,Bob3.position.y,520,100);
  line(Bob4.position.x,Bob4.position.y,340,100);
  line(Bob5.position.x,Bob5.position.y,280,100);
  
  pop();
  
   




  //create ellipse shape for multiple bobs here
  ellipse(Bob1.position.x,Bob1.position.y,40)
  ellipse(Bob2.position.x,Bob2.position.y,40)
  ellipse(Bob3.position.x,Bob3.position.y,40)
  ellipse(Bob4.position.x,Bob4.position.y,40)
  ellipse(Bob5.position.x,Bob5.position.y,40)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(Bob3,{x:0,y:0},{x:0.5,y:0})

}
}