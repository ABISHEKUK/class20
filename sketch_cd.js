
var fixedRect,movingRect;

var gameObject1, gameObject2;


function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400,200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="green";

  gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red"
  }
  else{
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }



  drawSprites();
}

