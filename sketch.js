var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(25,30);

  bullet=createSprite(500,200,50,5);
  wall=createSprite(1200,200,60,100);

  bullet.velocityX=speed;
  bullet.shapeColor="yellow"
  thickness=random(22,83);
}

function draw() {
  background("black");  
 


if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * width * speed * speed/(thickness * thickness * thickness);


  if(damage>10){
    wall.shapeColor="green";
  }

  if(damage<10){
    wall.shapeColor="red";
  }
}

drawSprites();

}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
