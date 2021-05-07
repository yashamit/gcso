var car 
var wall
var speed , weight 
function setup() {
  createCanvas(800,400);
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(40,200,60,35)
  wall = createSprite(750,200,70,200)

}

function draw() {
    background(255,255,255); 
    car.velocityX = speed
    if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0
    var deformation = 0.5*weight*speed*speed/22509;

    if(deformation>150){
      car.shapeColor=color(255,0,0);
    }
     
    if(deformation<150  &&  deformation>120){
      car.shapeColor=color(230,230,0)

    }

    if(deformation<120){
      car.shapeColor=color(0,255,0);
     

    }
    }



    




  drawSprites();
}