var box = createSprite(200,200,30,30) ;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#33FFD4");
  if(keyIsDown(RIGHT_ARROW)){ 
    box.position.x = box.position.x + 5; 
  }
  if(keyIsDown(LEFT_ARROW)){ 
    box.position.x = box.position.x + 5; 
  }
  drawSprites();
}