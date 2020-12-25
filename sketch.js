var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(windowWidth, 400);

  car= createSprite(40, height/2, 35, 35);
  wall= createSprite(width-60, height/2, 60, height/2);

  speed= random(55, 90);
  weight= random(400, 1500);

  car.velocityX= speed;

  deformation= (0.5 * weight * speed * speed)/22500;
}

function draw() {
  background(0); 

  if (car.collide(wall)=== true){
    if (deformation< 100){
      car.shapeColor= "green";
    }else if (deformation> 100 && deformation< 180){
      car.shapeColor= "yellow";
    }else if (deformation> 180){
      car.shapeColor= "red";
    }
  }

  drawSprites();
}