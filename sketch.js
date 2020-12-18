var Gamestate=0, database;
var playercount,form,player,game;
var allplayers;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playercount==4){
    game.update(1)
  }
   if(Gamestate==1){
     clear ();
     game.play();

   } 
  
}

