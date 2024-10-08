// Récupération des endroits ou l'ont va afficher les diplomes
let diplomeEncours = document.getElementById("diplome-en-cours");
let diplomeObtnenu = document.getElementById("diplome-obtenu");

// Récupération des boutons
let btnDEnCours = document.getElementById("btn-diplome-en-cours");
let btnDObtenu = document.getElementById("btn-diplome-obtenu");

// Tableau des diplomes
let diplomes = [
    {
        id: "diplome_avant_bac",
        titre: "Bac STI2D ITEC",
        date: "2019-2021",
        lieu: "Jean Rostand",
        etat: "obtenu",
        description: "Le bac STI2D (sciences et technologies de l'industrie et du développement durable) s'adresse aux élèves intéressés par les sciences industrielles et les technologies de l'information et de la communication. Il prépare aux métiers de l'industrie et du développement durable. Le bac STI2D se prépare en 2 ans après la seconde générale et technologique. Il existe 4 spécialités : architecture et construction, énergies et environnement, innovation technologique et éco-conception, systèmes d'information et numérique. Le bac STI2D permet de poursuivre ses études en BTS, DUT, classes préparatoires aux grandes écoles (CPGE), écoles d'ingénieurs, écoles spécialisées, licences professionnelles, etc.",
        image:"../img/logo_rostand.png"
    },
    {
        id: "diplome_1",
        titre: "BTS SIO SLAM",
        date: "2021-2023",
        lieu: "IPSSI SQY",
        etat: "obtenu",
        description: "Le BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) est une formation de niveau bac+2 en informatique. Ce cursus prépare les étudiants à intervenir dans la conception, le développement, la mise en œuvre et la maintenance de solutions logicielles adaptées aux besoins des entreprises. L'option SLAM met particulièrement l'accent sur le développement d'applications métiers, en formant les étudiants aux langages de programmation, aux bases de données, et aux méthodes de conception logicielle. Les compétences acquises permettent aux diplômés de travailler dans le domaine du développement informatique, que ce soit dans des SSII (Sociétés de Services en Ingénierie Informatique) ou au sein des services informatiques des entreprises.",
        image:"../img/logo_ipssi.png"
    },
    {
        id: "diplome_2",
        titre: "Bachelor de Développement fullstack & DevOps",
        date: "2023-2024",
        lieu: "IPSSI SQY",
        etat: "obtenu",
        description: "Le Bachelor en Développement Fullstack & DevOps forme des experts capables de concevoir et gérer des applications informatiques complètes, du développement à l'opérationnel. Les diplômés sont compétents en développement Fullstack et maîtrisent les principes du DevOps pour une collaboration fluide entre les équipes de développement et d'exploitation.",
        image:"../img/logo_ipssi.png"
    },
    {
        id: "diplome_3",
        titre: "Mastère Dev bigdata & IA",
        date: "2024-2026",
        lieu: "IPSSI SQY",
        etat: "en_cours",
        description: "Le Mastère en Développement Big Data & Intelligence Artificielle est un cursus de niveau bac+5 axé sur l'acquisition de compétences avancées en développement, data science, et IA. En 4e année, les étudiants se concentrent sur le développement d'applications (Python, SQL, NoSQL), la création d'API REST, l'architecture n-tiers, et des frameworks comme React JS/Native. Des projets en machine learning, big data et gestion de clusters sont également abordés, ainsi que la gestion agile et la conformité RGPD. En 5e année, l'accent est mis sur l'intelligence artificielle, le web scraping, les architectures de données (Data Lake, Warehouse), la sécurité, et l'entrepreneuriat.",
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
                <button class="btn btn-primary" data-bs-target="#${diplome.id}" data-bs-toggle="modal" data-bs-dismiss="modal">Détails</button>
            </div>
        </div>

        <div class="modal fade" id="${diplome.id}" aria-hidden="true" aria-labelledby="${diplome.id}" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="titre"> ${diplome.titre} </h5>
                    <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${diplome.description}
                </div>
                <div class="modal-footer">
                    
                </div>
                </div>
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
