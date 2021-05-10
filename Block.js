class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction : 0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 225;
      this.image=loadImage("block.png");
      
    
    }
    display(){
      var pos= this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x , pos.y);
      rotate(angle);
      if(this.body.speed <3 ){
        imageMode(CENTER);
      image(this.image, 0 , 0,);
      }
      else{
        World.remove(world,this.body);
        this.Visiblity = this.Visiblity -5;
        tint(225 , this.Visiblity);
      }
     pop();
    

    }
}