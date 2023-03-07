$(document).ready(function () {
    // Selection
    var titre1 = $('#titre1');
    var titre2 = $('#titre2');
    var titre3 = $('#titre3');

    var contenu1 = $('#contenu1');
    var contenu2 = $('#contenu2');
    var contenu3 = $('#contenu3');

    $(titre1).click(function () { 
        $(contenu1).removeClass("invisible");
        $(contenu2).addClass("invisible");
        $(contenu3).addClass("invisible");
        
    });
    $(titre2).click(function () { 
        $(contenu2).removeClass("invisible");
        $(contenu1).addClass("invisible");
        $(contenu3).addClass("invisible");
        
    });
    $(titre3).click(function () { 
        $(contenu3).removeClass("invisible");
        $(contenu1).addClass("invisible");
        $(contenu3).addClass("invisible");
        
    });
});