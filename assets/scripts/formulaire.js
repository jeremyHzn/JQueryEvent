$(document).ready(function () {
    let nom = $("#nom");
    let prenom = $("#prenom");
    let ddn = $("#date");

    let valider = $("#submit");

    // Les valeurs de résultats
    let res = $r('#resultat');
    let resNom = $('#resNom');
    let resPrenom = $('#resPrenom');
    let resAge = $('#resAge');


    $(valider).click(function () { 
        $(resNom).append(nom.value);
        $(resPrenom).append(prenom.value);
        $(resAge).append(calculAge(ddn.value));
        $(res).removeClass("invisible");
        nom.value = null;
        prenom.value = null;
        ddn.value = null;
    });

    function calculAge(dateDeNaissance) {
        let today = Date.now();
        let tab = dateDeNaissance.split("-");
        let ddn = new Date(tab[0], tab[1], tab[2]); 
        let age = today - Date.parse(ddn); 
        return Math.floor(age / 31536000000); 
    }
});