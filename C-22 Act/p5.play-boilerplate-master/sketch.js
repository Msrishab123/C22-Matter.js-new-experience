const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var box1,ground;
var Ball;
function setup() {
  var canvas= createCanvas(400,400);
  engine=Engine.create();
  world= engine.world;
  var ground_options= {
    isStatic: true
  }
  ground= Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  
  var Ball_options = {
    restitution : 1
  }
  Ball = Bodies.circle(200,100,20, Ball_options);
  World.add(world,Ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,20,20);
}