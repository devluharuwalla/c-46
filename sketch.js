var boy,boy_img,bg,bin_img,bin,c_img,f_img,rod_img,rod
var cokeGroup
var fishGroup
var gameState="play"
var score=0

function preload(){
  boy_img=loadImage("fishing_boy.png")
  bg=loadImage("river.jpg")
  bin_img=loadImage("bin.png")
 c_img=loadImage("coke.png")
f_img=loadImage("fish.png")
rod_img=loadImage("rod.png")
}

function setup() {
  createCanvas(1200,600);
  boy=createSprite(600, 450, 50, 50);
  boy.addImage("boy",boy_img)
  bin=createSprite(900,550,50,50)
  bin.addImage("bin",bin_img)
  bin.scale=1.0
  rod=createSprite(500,420,100,10)
  rod.addImage("rod",rod_img)
  rod.scale=0.5
  cokeGroup=new Group
  fishGroup=new Group
}

function draw() {
  background(bg); 
  if(gameState==="play"){
    spawncoke() 
    spawnfish()
    if(keyDown(DOWN_ARROW)){
      rod.y=480
    }
    if(keyDown(UP_ARROW)){
      rod.y=420
    }
    if(rod.isTouching(cokeGroup)){
     score=score+1
      cokeGroup.destroyEach()
      dumpGarbage1()
    }

    if(rod.isTouching(fishGroup)){
      score=score+1
      fishGroup.destroyEach()
      dumpGarbage2()
    }
    
  else if(gameState==="end"){

  }
  
  drawSprites();
fill("blue")
textSize(25)
  text("SCORE : "+score,900,100)
}

function spawncoke(){
  if(World.frameCount%100===0){
  var coke=createSprite(0,500,10,10)
  coke.addImage("coke",c_img)
  coke.velocityX=5
coke.scale=0.2
coke.depth=boy.depth
coke.depth=coke.depth-1
cokeGroup.add(coke)
}
}

function spawnfish(){
  if(World.frameCount%200===0){
  var fish=createSprite(0,500,10,10)
  fish.addImage("fish",f_img)
  fish.velocityX=5
fish.scale=0.1
fish.depth=boy.depth
fish.depth=fish.depth-1
fishGroup.add(fish)
}
}

function dumpGarbage1(){
var coke=createSprite(Math.round(random(800,900)),Math.round(random(430,470)),10,10)
coke.addImage("coke",c_img)
coke.scale=0.1
coke.depth=coke.depth-2

}

function dumpGarbage2(){
  var fish=createSprite(Math.round(random(800,900)),Math.round(random(430,470)),10,10)
  fish.addImage("fish",f_img)
  fish.scale=0.1

}
}