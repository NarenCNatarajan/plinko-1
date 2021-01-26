class Plinko {
    constructor (x,y,r) {
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0
        }
        this.r = 10
        this.body = Bodies.circle(x,y,this.r,options)
 
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var ang = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(ang)
        noStroke();
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()

    }
}