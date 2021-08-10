var sea,seaImg;
var ship,shipImg1;



function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
}



function setup(){
  createCanvas(600,600);
  sea = createSprite(50,200,5,5);
  sea.addImage(seaImg);
  sea.velocityX = -3;

  ship = createSprite(150,350,10,10);
  ship.addAnimation("shiprocking" , shipImg1);
  ship.scale = 0.25
}

function draw() {
  background("white");
  if (sea.x < 0) {
    sea.x = sea.width / 2;
    }
  drawSprites();
}