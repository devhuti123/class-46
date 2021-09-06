var bg
var bgimg

function preload() {
bgimg=loadImage("bg.jpg")
}
function setup(){
   createCanvas(windowWidth,windowHeight)
   
    bg=createSprite(windowWidth/2,windowHeight/2)
    bg.addImage(bgimg)
    bg.scale=5
    bg.velocityX=-2
}
function draw(){
background("white");
if(bg.x<(windowWidth/2-200)){
    bg.x=windowWidth/2
}
drawSprites();

}