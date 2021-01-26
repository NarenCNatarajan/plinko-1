const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var particles = []
var division = []
var plinko = []
var divisionHeight = 300
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20)
  for (var k = 0; k <= width; k = k + 80){
    division.push(new Division(k, height-divisionHeight/2, 10,divisionHeight))
  }
  for(var t = 40; t <= width; t = t+50){
    plinko.push(new Plinko(t,75))
  }
  for(var t = 40; t <= width; t = t+50){
    plinko.push(new Plinko(t,175))
  }
  for(var t = 40; t <= width; t = t+50){
    plinko.push(new Plinko(t,275))
  }
  for(var t = 40; t <= width; t= t+50){
    plinko.push(new Plinko(t,375))
  }

}

function draw() {
  background("black"); 
  Engine.update(engine) 
  ground.display()
  for(var i = 0; i < plinko.length; i++){
    plinko[i].display()
  }
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30),10,10))
    score++
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display()
  }
  for(var k = 0; k < division.length; k++){
    division[k].display()
  }


}