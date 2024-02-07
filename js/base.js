document.addEventListener('DOMContentLoaded', function () {
    let nav_hamburger = document.querySelector('.hamburger');
    let btn_hamburger = document.getElementById('btn-hamburger');
    let btn_close = document.getElementById('close_nav_hamburger');
    let btn_open = document.getElementById('open_nav_hamburger');
  
    // Fonction pour mettre à jour les boutons en fonction de la visibilité de nav_hamburger
    function updateButtons() {
      if (nav_hamburger.style.display === 'block') {
        btn_hamburger.classList.remove('open');  // Ajoutez des classes CSS pour gérer l'apparence
        btn_close.style.display = 'block';
        btn_close.style.color = 'red';
        btn_open.style.display = 'none';
      } else {
          btn_hamburger.classList.add('open');  // Ajoutez des classes CSS pour gérer l'apparence
          btn_close.style.display = 'none';
          btn_open.style.display = 'block';
          btn_open.style.fontSize = '25px';
      }
    }
  
    // Appeler la fonction initiale
    updateButtons();
  
    // Ajouter un gestionnaire d'événements pour le changement de taille de la fenêtre
    window.addEventListener('resize', updateButtons);
  
    // Ajouter un gestionnaire d'événements pour le clic sur le bouton hamburger
    btn_hamburger.addEventListener('click', function () {
      // Toggle la visibilité de nav_hamburger
      nav_hamburger.style.display = (nav_hamburger.style.display === 'none') ? 'block' : 'none';
      // Mettre à jour les boutons après le changement
      updateButtons();
    });
  });
  