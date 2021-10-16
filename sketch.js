var Songs
function setup() {
  createCanvas(400,400);
   Songs=createSprite(65,90,5,50)
  Songs.shapeColor="Purple"
}

function draw() 

{
  background("PowderBlue");
  if(keyDown("a")){
    Songs.x=Songs.x-10
  }
  if(keyDown("d")){
    Songs.x=Songs.x+10

  }
  drawSprites()

}




