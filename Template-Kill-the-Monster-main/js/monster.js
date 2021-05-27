class Monster{
    constructor(x,y,width,height){
      var options = {
        isStatic:true,
        restitution:0.6,
        friction:0.1,
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/monster.png");
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(this.image, 0,0,this.width,this.height);
        pop();
       }
  }