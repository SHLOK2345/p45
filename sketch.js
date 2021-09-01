const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

function setup() {
  createCanvas(displayWidth,displayHeight);
  

  engine=Engine.create()
  world=engine.world
  Engine.run(engine)

  bird1=new Bird()
  obstacle1=new Obstacle()
 
}

function draw() {
  background(0);  
  drawSprites();
  bird1.display()
 obstacle1.display()


  if(keyDown("space")) {
    Matter.Body.setVelocity(bird1.body,{x:0,y:-12})
  }
}

