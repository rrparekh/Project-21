var wall, thickness;
var bullet,speed, weight;


function setup() {
  createCanvas(1000,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;

  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);
  
  if(bullet.collide(wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,225,0);
    }

  }
 // hasCollided();
  bullet.collide(wall);
  drawSprites();
}

