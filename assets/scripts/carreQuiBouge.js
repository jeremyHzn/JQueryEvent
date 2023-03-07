$(document).ready(function () {
    let speed = 10;
    // enregistrer la position du carré et de l'afficher
    let= carre = $("#carre")
    $(carre).css("top","0");
    $(carre).css("left","0");

    // déplacer le plus petit carré au sein du body
    $(document).keydown(function (e) { 
        let top = parseInt($(carre).css("top"));  
        let left = parseInt($(carre).css("left"));  

        if (e.key == "ArrowRight") {
            left = left + speed;
            if (left >= 360) {
                left = 360;
                setRed();
            }
        }
    });

    
    // changer la couleur du petit carré quand il touche un bord !
    function setRed() { 
        $(carre).addClass("toucher");
        setTimeout(function () {  
            $(carre).removeClass("toucher");
        },3000)
    }
});
