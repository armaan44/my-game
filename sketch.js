var knight, canvas;
var ghost1,ghost2,ghost3,ghost4;
var princess,backgroundImage;
var spike;
var door;
var floor;

function preload(){
knightImage = loadAnimation("k1.png","k2.png","k3.png");
ghost1Image = loadImage("ghost.jpg");
ghost2Image = loadImage("ghost.jpg");
ghost3Image = loadImage("ghost.jpg");
ghost4Image = loadImage("ghost.jpg");
princessImage = loadImage("princess3.png");
backgroundImage = loadImage("background3.png");
spike = loadImage("princess.jpg");
door = loadImage("door.jpg");
}

function setup(){
canvas = createCanvas(1500,800);



floor = createSprite(0,400,1500,800);
floor.addImage(backgroundImage);
floor.scale=0.5;
floor.velocityX=-3;

knight = createSprite(45,displayHeight-200,20,50);
princess = createSprite(displayWidth-150,50,20,50);
knight.addAnimation("running",knightImage);
princess.addImage(princessImage);

princess.scale = 0.1;
}

function draw(){
background("white");
if(floor.x<0){
    floor.x=floor.width/2;
}
drawSprites();

}
