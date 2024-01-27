// Récupération des endroits ou l'ont va afficher les compétences
let tableRealisations = document.getElementById("realisations");

// Tableau des compétences
let realisations = [
    {
        nom: "H-A Conduite",
        image: "../img/realisations/h-a-conduite.png",
        lien: "https://anas7823.github.io/H.A-Conduite/",
        description: "Site vitrine pour une auto-école.",
        etat: false, // true = en ligne, false = en cours de développement
        visible: true
    },
    {
        nom: "GFM ASSISTANCE ADMINISTRATIVE",
        image: "../img/realisations/gfm.webp",
        lien: "https://anas7823.github.io/assistAd/",
        description: "Site vitrine pour une entreprise d'aide administrative.",
        etat: false, // true = en ligne, false = en cours de développement
        visible: true
    },
    {
        nom: "Formulaire Start-Zup",
        image: "../img/realisations/startZup.jpg",
        lien: "",
        description: "Formulaire d'inscription pour le cfa Start-Zup.",
        etat: false, // true = en ligne, false = en cours de développement
        visible: false
    },
    {
        nom: "Dashboard Start-Zup",
        image: "../img/realisations/startZup.jpg",
        lien: "",
        description: "Site permettant la gestion des étudiants et leurs placement après formation.",
        etat: false, // true = en ligne, false = en cours de développement
        visible: false
    },
];

// Affichage des diplomes
for (let i = 0; i < realisations.length; i++) {
    let realisation = realisations[i];
    let realisationHTML = `
    <div class="card card-realisation" style="width:20rem; color: black; margin: 1rem; height: 25rem;">
            <div class="card-header" style="min-height: 4rem; ">
                ${realisation.etat === true ? `<i class="fas fa-check-circle"  style='float: right; font-size: 30px; color: green;'></i>` : `<i class="fas fa-exclamation-triangle" style='float: right; font-size: 30px; color: #ffc107;'></i>`}
            </div>
            <img src="${realisation.image}" class="card-img-top" alt="realisation-img" style="min-height: 160px;">
            <div class="card-body">
                <h5 class="card-title" style="height: 35px; ">${realisation.nom}</h5>
                <p class="card-text" style="height: 30px; margin-bottom: 25px;">${realisation.description}</p>
                ${realisation.visible ? `<a href='${realisation.lien}' class="btn btn-dark" target="_blank">Voir le projet</a>` : ``}
                
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableRealisations.innerHTML += realisationHTML;
}
