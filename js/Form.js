class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput ('name');
        this.button=createButton('play');
        this.greeting=createElement('h3');
    }
    display(){
        
        this.title.html('carRacingGame');
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playercount+=1;
            player.index=playercount
            player.update();
            player.updateCount(playercount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(130,160);
        })
    }
        hide(){
            this.input.hide();
            this.button.hide();
            this.greeting.hide();
        }
}
