var car  ;
var wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 100, 50);
  car.velocityX = 2;
  wall = createSprite(1500,200,60,200);
 // wall.shapecolor("blue");
  
}

function draw() {
  background("black"); 
 if(car.x-wall.x < car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor(255,0,0);
    }
    /*if(deformation<180 && deformation>100){
      car.shapeColor(230,230,0);
    }
    if(deformation<100){
      car.shapeColor(0,255,0);
    }*/
  }
  drawSprites();

}