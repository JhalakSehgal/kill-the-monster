const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies= Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
backgroundImg = loadImage("image/sky.png");


}

function setup() {
  createCanvas(900,400);
  engine =  Engine.create();
  world = engine.World;
ground = new Ground(200,400,600,5);
superhero = new Superhero(400,3,100,100);
attach= new Throw(superhero.body,{x:100, y:465});
monster = new monster(380,200,100,100);
block1 = new Block(280,350,30,40);
block2 = new Block(310,350,30,40);
block3 = new Block(340,350,30,40);
block4 = new Block(370,350,30,40);
block5 = new Block(400,350,30,40);
block6 = new Block(430,350,30,40);
block7 = new Block(460,350,30,40);
block8 = new Block(490,350,30,40);
block9 = new Block(310,315,30,40);
block10 = new Block(340,315,30,40);
block11= new Block(370,315,30,40);
block12= new Block(400,315,30,40);
block13= new Block(430,315,30,40);
block14= new Block(460,315,30,40);

  Engine.run(engine);


}

function draw() {
  background(backgroungImg);
  rectMode(CENTER);

  suprehero.display();
  ground.display();
  monster.display();
  stroke(15);
  fill("green")
  block1.diplay();
  block2.diplay();
  block3.diplay();
  block4.diplay();
  block5.diplay();
  block6.diplay();
  block7.diplay();
  block8.diplay();
  block1.diplay();
  block10.diplay();
  block12.diplay();
  block13.diplay();
  block14.diplay();
  

}
function mousedragged(){
  matter.body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  aattach.fly();
}
