var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1530,700);

    block1 = createSprite(100,650,530,60);
    block1.shapeColor = "red";

    block2 = createSprite(580,650,400,60);
    block2.shapeColor = "orange";

    block3 = createSprite(990,650,400,60);
    block3.shapeColor = "green";

    block4 = createSprite(1420,650,440,60);
    block4.shapeColor = "blue";

    

    ball = createSprite(random(10,1400),100, 40,40);
    ball.shapeColor = "white";
    

}

function draw() {
    background(0);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(keyDown("space")) {
       ball.velocityX = 5;
       ball.velocityY = 5;
    }

    
    if(block1.isTouching(ball)){
        ball.bounceOff(block1);
        ball.shapeColor = "red";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
       

        
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(block3)
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block4);
    }


    

    drawSprites();
}
