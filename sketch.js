var sofia,elsa;















function setup() {
  createCanvas(800,400);
 sofia= createSprite(400, 200, 50, 50);
 sofia.shapeColor="pink";
 elsa=createSprite(600,300,50,50);
 elsa.shapeColor="pink";
 sofia.debug=true;
 elsa.debug=true;
}

function draw() {
  background(255,255,255); 
  sofia.x=mouseX;
  sofia.y=mouseY;
  if(isTouching(sofia,elsa )) {
  sofia.shapeColor="blue";
  elsa.shapeColor="blue";
  }
  else{
   sofia.shapeColor="pink";
   elsa.shapeColor="pink";
  }
  drawSprites();
}


