var bullet,speed;
var wall,weight,thickness;


function setup() {
  createCanvas(innerWidth,innerHeight);
  bullet = createSprite(innerWidth-700,innerHeight-400, 80, 50);
  bullet.shapeColor="gold",
  wall = createSprite(innerWidth-100,innerHeight-400, thickness, height/2);
  wall.shapeColor="white"
  speed=random(93,291)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(0);
  bullet.collide(wall)  
  
  bullet.velocityX = speed;


  
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.xif(lbulletRightEdge>=lwallLeftEdge)
  {
    return true
  }
  return false;
   
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
       var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
       if(damage>10){
         wall.shapeColour="red"
       }
  
       if(damage<10){
         wall.shapeColor="green"
       }
     }
}
if(hasCollided(bullet,wall)){
    bullet.velocityX=0
       var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
       if(damage>10){
         wall.shapeColour="red"
       }
  
       if(damage<10){
         wall.shapeColor="green"
       }
     }