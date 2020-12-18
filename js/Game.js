class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            Gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({gameState:state})
    }
    async start(){
        if(Gamestate==0){
            player=new Player();
            var playercountref=await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playercount=playercountref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text('Game Has Started',120,100);
        Player.getPlayerInfo();
        if(allplayers!=undefined){
            
            var displayposition=130;
            for(var p in allplayers){
                if(p=="player"+player.index){
                    fill ('red')
                }else{
                    fill("black")
                }
                displayposition+=20;
                textSize(20);
                text(allplayers[p].name+": "+allplayers[p].distance,120,displayposition)
                if(keyIsDown(UP_ARROW)){
                    allplayers[p].distance+=50;
                    player=
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=50;
            player.update();
        }
    }
}