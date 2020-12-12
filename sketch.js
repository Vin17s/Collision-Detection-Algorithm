var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 80);
  moving = createSprite(200,200,80,50);
  fixed.shapeColor="purple";
  moving.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2&&
    fixed.x-moving.x<fixed.width/2+moving.width/2&&
    moving.y-fixed.y<fixed.height/2+moving.height/2&&
    fixed.y-moving.y<fixed.height/2+moving.height/2){
      fixed.shapeColor="green";
      moving.shapeColor="red";
    }
    else{
      fixed.shapeColor="purple";
      moving.shapeColor="blue";
    }
      console.log(moving.x-fixed.x)
  drawSprites();
}