// Récupération des endroits ou l'ont va afficher les diplomes
let diplomeEncours = document.getElementById("diplome-en-cours");
let diplomeObtnenu = document.getElementById("diplome-obtenu");

// Récupération des boutons
let btnDEnCours = document.getElementById("btn-diplome-en-cours");
let btnDObtenu = document.getElementById("btn-diplome-obtenu");

// Tableau des diplomes
let diplomes = [
    {
        titre: "BTS SIO SLAM",
        date: "2021-2023",
        lieu: "IPSSI SQY",
        etat: "obtenu",
        description: "Niveau Bac +2, le BTS SIO SLAM forme des professionnels en informatique pour la conception, le développement, et la maintenance d'applications métiers. Les diplômés sont aptes à travailler dans le développement logiciel au sein des entreprises.",
        image:"../img/logo_ipssi.png"
    },
    {
        titre: "Bachelor de Développement fullstack & DevOps",
        date: "2023-2024",
        lieu: "IPSSI SQY",
        etat: "en_cours",
        description: "Le Bachelor en Développement Fullstack & DevOps forme des experts capables de concevoir et gérer des applications informatiques complètes, du développement à l'opérationnel. Les diplômés sont compétents en développement Fullstack et maîtrisent les principes du DevOps pour une collaboration fluide entre les équipes de développement et d'exploitation.",
        image:"../img/logo_ipssi.png"
    },
];

// Affichage des diplomes
for (let i = 0; i < diplomes.length; i++) {
    let diplome = diplomes[i];
    let diplomeHTML = `
        <div class="card card-diplome" style="width:20rem; color: black; margin: 1rem;">
            <div class="card-header">
                <b>${diplome.date} - ${diplome.lieu}</b>    
            </div>
            <img src="${diplome.image}" class="card-img-top" alt="diplome-img">
            <div class="card-body">
                <h5 class="card-title">${diplome.titre}</h5>
                <p class="card-text">${diplome.description}</p>
                <a href="#" class="btn btn-primary">Détails</a>
            </div>
        </div>
    `;

    if (diplome.etat == "obtenu") {
        diplomeObtnenu.innerHTML += diplomeHTML;
    } else if (diplome.etat == "en_cours") {
        diplomeEncours.innerHTML += diplomeHTML;
    }
}

// Fonction pour afficher les diplomes en cours
function afficherDiplomeEnCours() {
    if (diplomeEncours.style.height == "0px") {
        diplomeEncours.style.height = "auto";
    } else {
        diplomeEncours.style.height = "0";
    }
}

// Fonction pour afficher les diplomes obtenus
function afficherDiplomeObtenu() {
    if (diplomeObtnenu.style.height == "0px") {
        diplomeObtnenu.style.height = "auto";
    } else {
        diplomeObtnenu.style.height = "0";
    }
}

// Ajout des évènements
btnDEnCours.addEventListener("click", afficherDiplomeEnCours);
btnDObtenu.addEventListener("click", afficherDiplomeObtenu);
