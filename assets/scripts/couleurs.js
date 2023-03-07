$(document).ready(function () {
    // Selection des éléments
    var container = $('#containerColor');
    var clicColor = $('#clicColor');
    var affichRed = $('#affichRed');
    var affichGreen = $('#affichGreen');
    var affichBlue = $('#affichBlue');
    
    $(clicColor).click(function () { 
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        affichRed.value = red;
        affichGreen.value = green;
        affichBlue.value = blue;
        
        $(container).css("background-color", 'rgb(' + red + ',' + green + ',' + blue + ')');
        
        // Partie 2
        var formColor = $('#formColor');
        var messError = $('#error');
        
        $(formColor).click(function () { 
            var red = affichRed.value;
            var green = affichGreen.value;
            var blue = affichBlue.value;
            console.log(typeof red)
            
            if (parseInt(red) >= 0 && parseInt(red) <= 255 && parseInt(green) >= 0 && parseInt(green) <= 255 && parseInt(blue) >= 0 && parseInt(blue) <= 255 ) {
                $(container).css("background-color", 'rgb(' + red + ',' + green + ',' + blue + ')');
            }
            else{
                console.log('Erreur de sélection de couleur');
                messError.classList.remove('invisible');
                setTimeout(function() {
                    messError.classList.add('invisible');
                },3000);
            };
            // accolades pas bien mises je sais  
        };
    }
}