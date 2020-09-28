class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.7,
        'friction':0.1,
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("turquoise")
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      }
    }
  score(){
    if (this.visibility < 0 && this.visibility >-105){
      score++;
    }
  }
}