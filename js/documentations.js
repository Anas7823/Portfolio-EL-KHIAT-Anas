$(document).ready(function() {
    console.log("Le document est prêt");

    for (let i = 1; i <= 11; i++) {
        $('.' + i).click(function() { // On cible le bouton qui on une class correspondant à 1,2,3...
            console.log("Le bouton a été cliqué.");
            if ($('.' + i).val() === 'cacher') {
                $('#masquer' + i).fadeOut();
                $('.' + i).val('montrer')
            } else {
                console.log("Le bontoun a été cliqué.");
                $('#masquer' + i).show(500);
                $('.' + i).val('cacher')
            }
        })
    }

    console.log("La mise en place est finie. En attente d'événements...");
});