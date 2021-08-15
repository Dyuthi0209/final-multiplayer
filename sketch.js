var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var player_img;
var score=0;
var obstacle,obGroup;
var play=1;
var end=2;
var bait, baitImg;
var gameOver, gameOverImg;
var invisiblePlat, invisiblePlat2;
var restart, restartImg;
var up, upImg;
var down, dowmImg,bgImg;
var turtle,turtleImg,playbutton,playbuttonImg,input,inputImg,hat1,hat2,hatImg;
var octopus, eel, stingray, urchin, lionfish, blowfish, swordfish, pfish, shark;
var scoreb, scorebImg;
var iPlat1, iPlat2;
var sound1,sound2, sound3, sound4, soundon,soundoff;
var soundonImg,soundoffImg,soundstatus="on";

function preload(){
  sound1 = loadSound("begin.wav");
sound2 = loadSound("sea.wav");
sound3 = loadSound("gameover.wav")
//sound4 = loadSound("win.wav")
soundonImg = loadImage("images/soundon.png");
soundoffImg = loadImage("images/soundoff.png");

  back_img = loadImage("images/bg.jpg");
 
  bgImg = loadImage("images/background.png");
  hatImg = loadImage("images/hat.png");

 octopus=loadAnimation("images/octopus.gif")
 shark=loadAnimation("images/shark.gif")
 eel=loadAnimation("images/eel-unscreen.gif")
// pfish=loadAnimation("images/fish.gif")
 swordfish=loadAnimation("images/swordfish.gif")
 lionfish=loadAnimation("images/lionfish.gif")
 blowfish=loadAnimation("images/blowfish.gif")
 //stingray=loadAnimation("images/stingray-unscreen.gif")
 urchin=loadAnimation("images/urchin.gif")

 gameOverImg=loadImage("images/overbg.png")
 restartImg=loadImage("images/replay.png")

  turtleImg=loadImage("images/boxer_turtle.png");
  playbuttonImg=loadImage("images/startturtle1.png");
  inputImg=loadImage("images/input.png");

  baitImg = loadImage("images/bait.png")
  //scorebImg=loadImage("images/score_board.png")
  player_img = loadAnimation("movingturtle.gif");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 obGroup = new Group();

 iPlat1=createSprite(30,10000,10,10); 
  
  gameOver=createSprite(650,150,10,50)
  gameOver.addImage("gameover",gameOverImg)
  gameOver.scale=0.9;
  
  restart=createSprite(650,500,10,50)
  restart.addImage("gameover",restartImg)
  restart.scale=0.7;

  turtle=createSprite(200,420,10,50)
  turtle.addImage("turtle",turtleImg)
  turtle.scale=0.7;
  
  playbutton=createSprite(650,500,10,50)
  playbutton.addImage("playbutton",playbuttonImg)
  playbutton.scale=0.23;

  input=createSprite(645,350,10,50)
  input.addImage("input",inputImg)
  input.scale=0.46;



  gameOver.visible=false
  restart.visible=false

soundon = createSprite(80,height-300,300,200);
soundon.addImage(soundonImg);
soundon.scale=0.1; 

soundoff = createSprite(181,height-185,300,200);
soundoff.addImage(soundoffImg);
soundoff.scale=0.1; 
soundoff.visible =false;
  
}
function draw() {
  background(back_img);


  if(mousePressedOver(soundon))
  {
    soundstatus = "off";
    soundoff.visible = true;
    soundon.visible = false;
    sound1.stop();
    sound2.stop();
   // sound4.stop();
    sound3.stop();
  }
 
  if(mousePressedOver(soundoff))
  {
    soundstatus = "on";
    soundoff.visible = false;
    soundon.visible = true;
  
  }
  
  if(gameState==0){
    gameOver.visible=false;
    restart.visible=false;
    if(soundstatus==="on")
    {
      sound1.play();
  
    } 
  }
   if (playerCount === 2) {
     game.update(1);
     if(soundstatus==="on")
    {
      sound2.play();
sound1.stop();
    }   
   }
   if (gameState === 1) {
     clear();   
     game.play();
     player1.visible=true;
     player2.visible=true;

    gameOver.visible=false;
    restart.visible=false;
   
   }
   if (gameState === 2) {
    game.end();

  restart.visible=false;      

  player1.visible=false;
  player2.visible=false;

    gameOver.visible=true;
    restart.visible=true;

    if(soundstatus==="on")
    {
      sound3.play();
      //sound4.stop();
      sound1.stop();
      sound2.stop();
    }

 } 

 drawSprites();
}