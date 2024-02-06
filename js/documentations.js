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

// Fonction pour appliquer des styles aux éléments correspondants à la recherche
function highlightElements(searchTerm) {
    // Sélectionner tous les éléments dont l'ID contient la valeur de la recherche
    let elements = document.querySelectorAll('[id*=' + searchTerm + ']');
  
    if (elements.length === 0) {
        console.log("Aucun élément trouvé.");
        return;
    }
    // Appliquer les styles aux éléments trouvés
    elements.forEach(function(element) {
      element.classList.add('highlighted');
      console.log("Élément trouvé : " + element.id);
    });
}

// Fonction pour traiter le changement de hash
function handleHashChange() {
    // Récupérer la valeur de l'URL après le caractère #
    var searchTerm = window.location.hash.substring(1);
  
    // Réinitialiser les styles
    document.querySelectorAll('.highlighted').forEach(function(element) {
      element.classList.remove('highlighted');
    });
  
    // Appliquer les styles aux éléments correspondants
    highlightElements(searchTerm);
}

// Écouter l'événement popstate
window.addEventListener('popstate', handleHashChange);

// Appeler la fonction lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', handleHashChange);
