class Monster{
    constructor(x,y,width,height){
        var options={
            'restitution':1,
            'friction':1,
            'density':0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("Monster-01.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
        //imageMode(CENTER);
        //image(this.image, this.x,this.y, this.width, this.height);
    }
}