


//Create variables here
var dog;
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;


function preload()
{
	dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  foodStock = database.ref("Food");
  foodStock.on("value", readStock)
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dog1);
  dog.scale = 0.1;

  
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({


    Food:x
  })
}


function draw() {  
  
  background(46, 139, 87)
 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  

  drawSprites();
  
  textSize(20)
  fill("black")
  text("Note: Press Up_ARROW key to feed Drago milk!", 50, 50)
  text("Food left: "+ foodS, 225, 210)

  

}



