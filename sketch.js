var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

 speed = random(223,321);
 weight = random(25,30);
 thickness = random(22,83)


 bullet = createSprite(500,200,50,50);
 wall = createSprite(900,200,60,100);

 bullet.velocityX = 5;
}

function draw() {
  background("black"); 
  
  if(collided(bullet,wall))
  {
    bullet.velocity = 0;
    var damage = 0.5* weight *speed*speed/(thickness*thickness*thickness);
  }
  
  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);//red 
  }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);//green 
  }

  drawSprites();

  collided(bullet,wall);
}
function collided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;





}