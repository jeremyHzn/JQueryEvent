$(document).ready(function () {
    console.log(typeof("#name"))
    $("#nom").submit(function () { 
        if ($(this).val() == isNaN()) {
            $(this).css("background-color","red");
        }
        else{
            $("#reponse").append("nom : "+"#name".val()+"<br>");
        }
    });
    $("#prenom").submit(function () { 
        if ($(this).val() == isNaN()) {
            $(this).css("background-color","red");
        }
        else{
            $("#reponse").append("prenom :"+"#name".val()+"<br>");
        }
    });
    $("#date").submit(function () { 
        if ($(this).val() == isNaN()) {
            $(this).css("background-color","red");
        }
        else{
            $("#reponse").append("prenom :"+"#date".val()+"<br>");
        }
    });
});