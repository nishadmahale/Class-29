class Block{
    constructor(x, y, width, height){

     
      this.body = Bodies.rectangle(x,y,width,height);

      World.add(world,this.body);
    }
  


    display(){

      push();
      pos.x=This.body.position.x;
      pos.y=this.body.position.y;

      translate(pos.x,pos.y)
      RectMode(Center);
      rect(pos.x,pos.y,width,height);
      pop();





    }
  }
  