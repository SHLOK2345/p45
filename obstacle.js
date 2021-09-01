class Obstacle{

    constructor(){
    this.body=createSprite(width,150,50,200)
    World.add(world,this.body)
    Matter.Body.setVelocity(this.body,{x:-8,y:0})
    this.image1=loadImage("pipeNorth.png")


    this.body2=createSprite(width,650,50,200)
    World.add(world,this.body2)
    Matter.Body.setVelocity(this.body2,{x:-8,y:0})
    this.image2=loadImage("pipeSouth.png")


    }

    display(){
        imageMode(CENTER)
        image(this.image1,this.body.position.x,this.body.position.y,50,200)
        image(this.image2,this.body2.position.x,this.body2.position.y,50,200)

    }
}