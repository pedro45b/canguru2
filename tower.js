class Tower{
constructor(x,w,width,height){
    var opitions = {
        isStatic: true
    }
    
    
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,w,this.width,this.height)
World.add(world,this.body)
display(){
    var pos = this.body.position
    var angle = this.body.angle

    push()
    translate()
    rotate(angle)
pop()

}

}



}