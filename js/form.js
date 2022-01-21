class Form{

   constructor(){
    
        this.input = createInput("                     Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2")

   } 

   display(){

    this.input.position(width/2 - 100,height/2);
    this.input.size(200,25);
    this.button.position(width/2 + -45 ,height/2 + 50);
    this.button.size(100,25)
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    handleMousePressed();

   }
   
   handleMousePressed() {

      this.button.mousePressed(() => {
         this.input.hide();
         this.button.hide();
         var message = `
         Hello ${this.input.value()}
         </br>wait for another player to join...`;
         this.greeting.html(message);
         playerCount += 1;
         player.name = this.input.value();
         player.index = playerCount;
         player.addPlayer();
         player.updateCount(playerCount);
         player.getDistance();
       }); 

   }


}