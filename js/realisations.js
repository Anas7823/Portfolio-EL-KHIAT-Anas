// Récupération des endroits ou l'ont va afficher les compétences
let tableRealisations = document.getElementById("realisations");

// Tableau des compétences
let realisations = [
    {
        nom: "ReactJS",
        image: "../img/realisation/...",
        lien: "",
        etat: false, // true = en ligne, false = en cours de développement
        visible: true
    },
];

// Affichage des diplomes
for (let i = 0; i < realisations.length; i++) {
    let realisation = realisations[i];
    let realisationHTML = `
    <div class="card card-realisation" style="width:20rem; color: black; margin: 1rem; height: 20rem;">
            <div class="card-header" style="min-height: 4rem; ">
                ${realisation.etat === true ? `<i class="fas fa-check-circle"  style='float: right; font-size: 30px; color: green;'></i>` : `<i class="fas fa-exclamation-triangle" style='float: right; font-size: 30px; color: #ffc107;'></i>`}
            </div>
            <img src="${realisation.image}" class="card-img-top" alt="realisation-img" style="min-height: 160px; max-height: 10rem;">
            <div class="card-body">
                <h5 class="card-title"><b>${realisation.nom}</b></h5>
                ${realisation.visible ? `<a href='${realisation.lien}' class="btn btn-dark">Voir le projet</a>` : ``}
                
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableRealisations.innerHTML += realisationHTML;
}
