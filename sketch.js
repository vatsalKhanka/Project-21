var canvas, box, rect1, rect2, rect3, rect4, edge1, edge2, edge3, edge4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(random(20,750), 30, 50, 50);
    rect1 = createSprite(100, 580, 200, 50);
    rect2 = createSprite(320, 580, 200, 50);
    rect3 = createSprite(540, 580, 200, 50);
    rect4 = createSprite(760, 580, 200, 50);
    edge1 = createSprite(400, 0, 800, 1);
    edge2 = createSprite(400, 600, 800, 1);
    edge3 = createSprite(0, 300, 1 , 600);
    edge4 = createSprite(800, 300, 1, 600);
    box1.velocityX=random(1,20);
    box1.velocityY = random(1,20);
    box1.shapeColor = "white";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    box1.bounceOff(edge1);
    box1.bounceOff(edge2);
    box1.bounceOff(edge3);
    box1.bounceOff(edge4);
    
    
    
    rect1.shapeColor = "red";
    rect2.shapeColor = "orange";
    rect3.shapeColor = "yellow";
    rect4.shapeColor = "green";
    if(box1.isTouching(rect1)&&box1.bounceOff(rect1)){
        box1.shapeColor = "red"
    }
     if(box1.isTouching(rect2)&&box1.bounceOff(rect2)){
        box1.shapeColor = "orange";
    }
     if(box1.isTouching(rect3)){
        box1.shapeColor = "yellow";
        box1.velocityX = 0;
        box1.velocityY = 0;
    } 
     if(box1.isTouching(rect4)&&box1.bounceOff(rect4)){
        box1.shapeColor = "green";
    }
  

    //add condition to check if box touching surface and make it box
}
