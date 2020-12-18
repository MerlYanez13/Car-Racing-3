class Player{
    constructor(){
        this.index=0;
        this.distance=0;
        this.name=null;

    }
    getCount(){
        var playercountref=database.ref('playerCount');
        playercountref.on("value",function(data){
            playercount=data.val();
            
        })
    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
    update(){
        var playerIndex="players/player"+playercount;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerinforef=database.ref('players');
        playerinforef.on("value",(data)=>{
            allplayers=data.val();
        })
    }
}