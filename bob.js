class Bob{
    constructor(x,y){
        var options={
            density: 100,
            isStatic: false,
            restitution: 0,
            friction: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}