
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
score=0
  survivalTime=0 
  foodGroup=new Group()
  
  obstacleGroup=new Group()
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2
  
}


function draw() {
  background("180")
  console.log(monkey.y)
  if(ground.x<200)  {
    ground.x=ground.width/2
  }
  
  food();
  spawnobstacles()
  if(keyDown("space")){
    monkey.velocityY=-12
    
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if(monkey.y< 215){
    monkey.velocityY=monkey.velocityY+0.8

}
    
     stroke("white")
    textSize(20)
    fill("white") 
    text("score:",+score,500,50)
 
  
  stroke("black")
  textSize(20)
  fill("black")  
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
drawSprites()
  
}

function food(){
  if(frameCount %80===0){
    banana=createSprite(600,100,30,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.y=Math.round(random(120,200))
    
    banana.lifetime=-1
    foodGroup.add(banana)
    
  }
}
  function spawnobstacles(){
    if(frameCount %300===0){
      obstacle=createSprite(600,350,20,20)
      obstacle.addImage(obstacleImage)
      obstacle.scale=0.1
      obstacle.lifetime=200
      obstacle.velocityX=-5
      obstacleGroup.add(obstacle)
  
    }
 
    
    
  }
  





  