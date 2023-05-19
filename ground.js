class Wall{

    constructor(x,y,w,h){
      var options={
        isStatic:true
      }
    
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    
    this.wall=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.wall)
    
    }
    
    display(){
      var pos = this.wall.position
      push()
      rectMode(CENTER)
      fill ("red")
      rect(pos.x,pos.y,this.w,this.h)
      pop()
    
    
    }
    
    }