const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground;
var engine,world;


var division = [];
var plinkos = [];
var particles = [];




function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240 , 780 , 480 , 20);
  //plinko1 = new Plinko(20,300,10);
  for(var i = 10 ; i < 480 ; i = i + 50){
division.push(new Division(i , 700 , 5 , 200))

  }
 for  (var j = 40; j  <=width ; j = j+50) 
{
     plinkos.push(new Plinko(j,75 , 10));
}
for  (var j = 15;  j <=width-10; j=j+50) 
{

       plinkos.push(new Plinko(j,175 , 10));
}
for  (var j = 40; j  <=width ; j = j+50) 
{
     plinkos.push(new Plinko(j,275 , 10));
}
for  (var j = 15;  j <=width-10; j=j+50) 
{

       plinkos.push(new Plinko(j,375 , 10));
}

}

function draw() {
  background("black");
  Engine.update(engine)
 
  ground.display();
for(var i = 0 ; i < division.length ; i++){
  division[i].display();
}
  for  (var j = 0; j < plinkos.length ; j++){
    plinkos[j].display();
  } 
  if(frameCount%60===0)
  {
particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var k = 0 ; k < particles.length; k++){
    particles[k].display();
  }
  
  drawSprites();
}