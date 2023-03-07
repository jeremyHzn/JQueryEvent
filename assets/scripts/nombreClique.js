$(document).ready(function () {
    compteur = 0;
    $("#clic").click(function () { 
        compteur++;
        $("#iterateur").text(compteur);
    });
    $("#reset").click(function () { 
        compteur = 0;
        $("#iterateur").text(compteur);
    });
});