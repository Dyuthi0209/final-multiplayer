class Form{
    constructor(){
       this.input = createInput("Enter your Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
        
    }

    

    display() {
        this.title.html("𝕷𝖊𝖙'𝖘 𝖇𝖊𝖆𝖙 𝖆𝖓𝖉 𝖜𝖎𝖓 𝖙𝖍𝖊 𝖇𝖆𝖉𝖌𝖊!!");
        this.title.position(150, -5);
        this.title.style('font-size', '85px');
        this.title.style('color', "orange");
        this.input.position(500,320);
        this.input.style('width', '280px');
        this.input.style('height', '60px');
        this.input.style('background',"transparent");
        this.input.style('border',"transparent");
        this.input.style('color',"yellow");
        this.input.style('font-size',"30px");
        this.button.position(530,450);
        this.button.style('width', '240px');
        this.button.style('height', '100px');
        this.button.style('background',"transparent");
        this.button.style('border',"transparent");
        this.button.style('color',"transparent");
        this.reset.position(900, 550);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', "#8ef1f5");


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name + "!")
            this.greeting.position(270,50);
            this.greeting.style('color', 'green');
            this.greeting.style('font-size', '90px');

            playbutton.visible = false;
            input.visible = false;
            turtle.visible = false;
            this.greeting2.html("Please wait for the other player to join. Also try refreshing the page.")
            this.greeting2.position(250,300);
            this.greeting2.style('color', 'purple');
            this.greeting2.style('font-size', '45px');
           
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({players:null});



        });

    if(gameState===2){
        this.reset.hide();
    }

     
       

    }
}