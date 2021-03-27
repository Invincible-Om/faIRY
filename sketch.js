var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("starImage.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1/2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
	
 
  


	star.x= starBody.position.x;
  	star.y= starBody.position.y;


  	if(fairy.x === 550){
		  fairy.setVelocity(0,0);
		 
	  }

	if(star.y > 490){
		Matter.Body.setStatic(starBody,true);
	}

  
  drawSprites();

}

function keyPressed() {
	//write code here
	  if (keyDown("RIGHT")) {

	  	fairy.velocityX=2;

	  }
	  if (keyDown("LEFT")) {

		fairy.velocityX=-2;
	}

	if (keyDown("DOWN")){
		Matter.Body.setStatic(starBody,false);
	}
		
		
			

	
	 

	 
  
}
