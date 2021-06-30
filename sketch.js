var pacman,ghost1,ghost2,ghost3,ghost4;
var edges

function setup() {
  createCanvas(800,400);
  pacman = createSprite(50,200,50,50);
  
  
}

function draw() {
  background(0); 
/*if(keyDown("RIGHT_ARROW")){
  pacman.x = pacman.x+7;
}

if(keyDown("LEFT_ARROW")){
  pacman.x = pacman.x-7;
}*/
if(keyDown("UP_ARROW")){
  pacman.y = pacman.y-7;
}
if(keyDown("DOWN_ARROW")){
  pacman.y = pacman.y+7;
}
edges = createEdgeSprites();
pacman.bounceOff(edges);

redGhost();
blueGhost();
pinkGhost();
yellowGhost();
drawSprites();
}

function blueGhost(){
  if(frameCount%300===0){
  ghost1 = createSprite(800,200,50,40);
  ghost1.velocityX =-3;
    ghost1.y = Math.round(random(50,350));
    
  }
}
function redGhost(){
  if(frameCount%250===0){
  ghost2 = createSprite(800,200,50,40);
  ghost2.velocityX =-3;
    ghost2.y = Math.round(random(50,350));
    
  }
}
function pinkGhost(){
  if(frameCount%200===0){
  ghost3 = createSprite(800,200,50,40);
  ghost3.velocityX =-3;
    ghost3.y = Math.round(random(50,350));
    
  }
}
function yellowGhost(){
  if(frameCount%150===0){
  ghost4 = createSprite(800,200,50,40);
  ghost4.velocityX =-3;
    ghost4.y = Math.round(random(50,350));
  }
}