// Récupération des endroits ou l'ont va afficher les compétences
let tableRealisations = document.getElementById("realisations");

// Tableau des compétences
let realisations = [
    {
        nom: "Atelier du primeur",
        image: "../img/realisations/Atelier_du_primeur.png",
        lien: "https://atelierduprimeur.com/",
        description: "Site de vitrine permettant de réaliser des commandes depuis un formulaire.",
        etat: "En ligne",
        visible: true
    },
    {
        nom: "Saftrick technology",
        image: "../img/realisations/saftrick.png",
        lien: "https://saftrick-technology.com/",
        description: "Site de vitrine pour une entreprise informatique.",
        etat: "En ligne",
        visible: true
    },
    // {
    //     nom: "EFC Auto Ecole",
    //     image: "https://media.istockphoto.com/id/1283073177/fr/photo/texte-auto-ecole-dans-fran%C3%A7ais-de-panneau-d%C3%A9cole-de-conduite-sur-le-toit-de-la-voiture.jpg?s=612x612&w=0&k=20&c=M2PsyoxM52nK-eXPSdyjbsKj14iRThV9Tt-mr9NvMac=",
    //     lien: "",
    //     description: "Site de présentation pour une auto-école.",
    //     etat: "Finalisation", 
    //     visible: false
    // },
    // {
    //     nom: "H-A Conduite",
    //     image: "../img/realisations/h-a-conduite.png",
    //     lien: "https://anas7823.github.io/H.A-Conduite/",
    //     description: "Site vitrine pour une auto-école.",
    //     etat: "Refonte en cours", 
    //     visible: false
    // },
    // {
    //     nom: "Label Auto",
    //     image: "../img/realisations/label_auto.jpg",
    //     lien: "",
    //     description: "Site de présentation et de devis pour un garage automobile.",
    //     etat: "En attente du client", 
    //     visible: false
    // },
    // {
    //     nom: "GFM assistance administrative",
    //     image: "../img/realisations/gfm.webp",
    //     lien: "https://anas7823.github.io/assistAd/",
    //     description: "Site vitrine pour une entreprise d'aide administrative.",
    //     etat: "En attente du client", 
    //     visible: false
    // },
    // {
    //     nom: "Formulaire Start-Zup",
    //     image: "../img/realisations/startZup.jpg",
    //     lien: "",
    //     description: "Formulaire d'inscription pour le cfa Start-Zup.",
    //     etat: false, // true = en ligne, false = en cours de développement
    //     visible: false
    // },
    // {
    //     nom: "Dashboard Start-Zup",
    //     image: "../img/realisations/startZup.jpg",
    //     lien: "",
    //     description: "Site permettant la gestion des étudiants et leurs placement après formation.",
    //     etat: false, // true = en ligne, false = en cours de développement
    //     visible: false
    // },
];


// Fonction pour obtenir l'icône en fonction de l'état du projet
function getIconByState(etat) {
    switch (etat) {
        case "Refonte en cours":
            return `<i class="fas fa-wrench" style=" color: #218c74;"></i>`;
        case "En attente du client":
            return `<i class="fas fa-pause" style="color: #227093;"></i>`;
        case "Développement en cours":
            return `<i class="fas fa-code" style="color: #706fd3;"></i>`;
        case "En ligne":
            return `<i class="fa-solid fa-check" style="color: #11b928;"></i>`;
        case "Finalisation":
            return `<i class="" style="color:rgb(251, 167, 49);">✨</i>`;
        default:
            return `<i class="fas fa-question-circle" style="color: #6c757d;"></i>`;
    }
}

// Affichage des réalisations
for (let i = 0; i < realisations.length; i++) {
    let realisation = realisations[i];
    let etatText = realisation.etat
    let iconHTML = getIconByState(realisation.etat);
    let realisationHTML = `
    <div class="card card-realisation" style="width:20rem; color: black; margin: 1rem; height: 25rem;">
            <div class="card-header" style="min-height: 4rem; ">
                <div class="icon-container">
                    ${iconHTML}
                    <span class="tooltip-text">${etatText}</span>
                </div>            </div>
            <img src="${realisation.image}" class="card-img-top" alt="realisation-img" style="min-height: 160px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title" style="height: 35px; ">${realisation.nom}</h5>
                <p class="card-text" style="height: 30px; margin-bottom: 25px;">${realisation.description}</p>
                ${realisation.visible ? `<a href='${realisation.lien}' class="btn btn-dark" target="_blank">Voir le projet</a>` 
                    :
                     `<a href='#' class="btn btn-dark disabled">Voir le projet</a>`}
                
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableRealisations.innerHTML += realisationHTML;
}
