$(document).ready(function(){
/* 
in mindering brengen (.subtract) salaris:
18% uitgaven
7% verzekeringen
5% bijdragen

als geslacht = vrouw -> 2% korting
als aantal kinderen = 3 -> 1% korting
als aantal kinderen = 4 -> 2% korting
*/
    $("#submit").on("click", function(){
        let salaris = $("#salaris").val();
        console.log(typeof salaris);

        //kosten
        let uitgaven = salaris - (salaris*.18);
        console.log(uitgaven);
        
        let verzekeringen = salaris - (salaris*.7);
        console.log(verzekeringen);
        
        let bijdragen = salaris - (salaris*.5);
        console.log(bijdragen);
    
        let resultaat = salaris - verzekeringen - bijdragen;
        $("#resultaat").text(resultaat);

        // kortingen

        uitgaven = percentage(salaris,18);
        verzekering = percentage(salaris,7);
        bijdragen = percentage(salaris,5);
        let korting = 0;
        let kosten = uitgaven + verzekering + bijdragen;


        if ($("#keuzelijst") == "Vrouw"){
        korting =  korting + percentage(kosten,2);
        }

        switch(parseInt(kinderen)) {
        case 3:
            korting = korting + percentage(kosten,1);
            break;
        case 4:
            korting = korting + percentage(kosten,2);
            break;
        }
        let result = (salaris - (kosten-korting));
        alert(result);
        });


        function percentage(num, per){
        return (num/100)*per;
        }




});