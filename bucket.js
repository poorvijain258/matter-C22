class bucket{
    constructor(x,y,width,height){
     let options ={
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(this.body,world);
    }

    }
    display();{
        var pos = this.body.position;
        push();
        rectMode(CENTRE);
        rect(pos.x,pos.y,pos.width,pos.height);
         pop();
    }