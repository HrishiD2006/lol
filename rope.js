class rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    
        var options={
        bodyA:body1,
        bodyB:body2,
        length:150

    }    

    this.rope=Constraint.create(options);
    World.add(world,this.rope);
        
    }
    display(){
    strokeWeight(5);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
    }
}
