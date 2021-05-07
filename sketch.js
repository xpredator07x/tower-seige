const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world,Matter;

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,height,1200,20);
stand=new Ground(400,236,210,20)

box8= new Box(330,235,30,40);
box9= new Box(360,235,30,40);
box10= new Box(390,235,30,40);
box11= new Box(420,235,30,40);
box12= new Box(450,235,30,40);

box13= new Box(360,195,30,40);
box14= new Box(390,195,30,40);
box15=new Box(420,195,30,40);

box16=new Box(390,155,30,40);

poly=new Polygon(120,130,30,45);

slingshot=new Slingshot(poly.body,{x:100,y:200})



}

function draw(){
    background('blue');
    Engine.update(engine);
    ground.display();
    stand.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    poly.display();
    slingshot.display();



}

function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(poly.body)

    }

}