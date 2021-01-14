var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createsprite(0,580,200,30)
    surface2=createsprite(295,580,200,30)
    surface3=createsprite(515,580,200,30)
    surface4=createsprite(740,580,200,30)
    //create box sprite and give velocity
    box=createsprite(random(20,750),400,20,20);
    box.shapeColour("white")
    box.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdges();
    drawSprites();

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColour("pink") 
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        surface2.shapeColour("orange") 
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColour("blue") 
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        surface4.shapeColour("green") 
    }

}
