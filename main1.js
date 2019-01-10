$(document).ready(function(){
   
    userchoice = "";
    pcchoice = Math.floor(Math.random()*3);

    $("#rock, #paper, #scissors").on("click", function(){
        userchoice = $(this).attr('id');
    });
    
    function compare(){
        console.log(userchoice);
        pcchoice = Math.floor(Math.random()*3);
        console.log(typeof pcchoice);

        switch (pcchoice){
        case 0:
          if (userchoice === "rock"){
            $("#result").html("Tie");
          }
          else if (userchoice === "scissors") {
            $("#result").html("You've lost :(");
          }
          else if (userchoice === "scissors") {
            $("#result").html("You've won!");
          }
        break;
        case 1:
          if (userchoice === "paper"){
            $("#result").html("Tie");
          }
          else if (userchoice === "rock"){
            $("#result").html("You've won!");
          }
          else if (userchoice === "scissors"){
            $("#result").html("You've lost :(");
          }
        break;
        case 2:
           if (userchoice === "scissors"){
            $("#result").html("Tie");
           }
           else if (userchoice === "rock"){
            $("#result").html("You've lost :(");
           }
           else if (userchoice === "paper"){
            $("#result").html("You've won!");
           }
        break;
        }
      }
      $("#play").click(compare);
});