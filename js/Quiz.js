class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();  
    //escribe aquí el código para cambiar el color de fondo 
   background("Grey");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
  fill(0);
    textSize(26);
    text("Resultado del Cuestionario",340, 50);
    text("----------------------------------------",320, 65);
    //llama aquí a getContestantInfo( )
   Contestant.getPlayerInfo();
    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
    }
    //escribe aquí el código para agregar una nota
    fill("Blue");
    textSize(20);
    text("*NOTA: ¡El concursante que respondió correctamente, está resaltado en color verde!",130,230);
    //escribe el código para resaltar al concursante que respondió correctamente
        for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }

  }
}