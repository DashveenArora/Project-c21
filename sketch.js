const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var left;
var right;
var top_wall;
var bt1,bt2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  groundObj =new Ground(width/2,670,width,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);



  bt1= createImg("right.png")
  bt1.size(20,30)
  bt1.position(300,20)
  bt1.mouseClicked(hforce)

  bt2=createImg("up.png")
  bt2.size(40,40)
  bt2.position(20,40)
  bt2.mouseClicked(vforce)
    }

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
 
}
 function hforce(){
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
 }
 c

