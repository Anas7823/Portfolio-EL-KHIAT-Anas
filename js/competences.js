// Récupération des endroits ou l'ont va afficher les compétences
let tableCompetence = document.getElementById("competences");

// Tableau des compétences
let competences = [
    {
        nom: "HTML / CSS",
        image: "../img/competences/html-css.jpg",
        lien: "./pages-competences/html-css.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "JavaScript",
        image: "../img/competences/javascript.webp",
        lien: "./pages-competences/js.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "PHP",
        image: "../img/competences/php.png",
        lien: "./pages-competences/php.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "TypeScript",
        image: "../img/competences/typescript.png",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "Python",
        image: "../img/competences/python.png",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "SQL",
        image: "../img/competences/sql.jpg",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "Machine Learning et Deep Learning",
        image: "../img/competences/MLDL.jpg",
        lien: "",
        designation: "Intelligence artificielle",
        projet: false
    },
    {
        nom: "Big Data",
        image: "../img/competences/big_data.png",
        lien: "",
        designation: "Analyse de données",
        projet: false
    },
    {
        nom: "Web Scraping",
        image: "../img/competences/scraping.png",
        lien: "",
        designation: "Technique d'extraction de données",
        projet: false
    },
    {
        nom: "MERN",
        image: "../img/competences/mern.jpeg",
        lien: "",
        designation: "Stack JavaScript/MongoDB",
        projet: false
    },
    {
        nom: "ReactJS",
        image: "../img/competences/reactjs.jpg",
        lien: "./pages-competences/react.html",
        designation: "Framework JavaScript",
        projet: true
    },
    {
        nom: "NodeJS",
        image: "../img/competences/nodejs.png",
        lien: "./pages-competences/node.html",
        designation: "Framework JavaScript",
        projet: true
    },
    {
        nom: "JestJS",
        image: "../img/competences/jestjs.png",
        lien: "./pages-competences/jest.html",
        designation: "Framework JavaScript",
        projet: true
    },
    {
        nom: "Symfony 6 / Twig",
        image: "../img/competences/Symf-twig.jpg",
        lien: "./pages-competences/symfony.html",
        designation: "Framework PHP",
        projet: true
    },
    {
        nom: "Dart / Flutter",
        image: "../img/competences/flutter-dart.jpg",
        lien: "./pages-competences/flutter.html",
        designation: "Langage de programmation et Framework",
        projet: true
    },
    {
        nom: "React Native",
        image: "../img/competences/reactNative.png",
        lien: "",
        designation: "Langage de programmation et Framework",
        projet: false
    },
    {
        nom: "Angular",
        image: "../img/competences/angular.jpg",
        lien: "./pages-competences/angular.html",
        designation: "Framework TypeScript",
        projet: true
    },
    {
        nom: "Python / Django",
        image: "../img/competences/django.png",
        lien: "./pages-competences/django.html",
        designation: "Framework Python",
        projet: true
    },
    {
        nom: "PHPUnit",
        image: "../img/competences/phpunit.png",
        lien: "",
        designation: "Framework PHP",
        projet: false
    },
    {
        nom: "Python / Jupyter Notebook", 
        image: "../img/competences/jupyter.png",
        lien: "",
        designation: "Framework Python",
        projet: false
    },
    
    {
        nom: "API REST & application CRUD",
        image: "../img/competences/Rest-API.png",
        lien: "",
        designation: "API REST",
        projet: false
    },
    {
        nom: "Architecture N-Tiers",
        image: "../img/competences/nTier.jpg",
        lien: "",
        designation: "Architecture logicielle",
        projet: false
    },
    {
        nom: "Docker",
        image: "../img/competences/Docker.png",
        lien: "",
        designation: "Outil de conteneurisation",
        projet: false
    },
    {
        nom: "Airflow",
        image: "../img/competences/Airflow.jpg",
        lien: "",
        designation: "Outil d'orchestration de flux de travail",
        projet: false
    },
    {
        nom: "Hadoop",
        image: "../img/competences/hadoop.jpg",
        lien: "",
        designation: "Framework de stockage & calcul de données",
        projet: false
    },
    {
        nom: "Apache Spark",
        image: "../img/competences/spark.png",
        lien: "",
        designation: "Framework de traitement de données",
        projet: false
    },
    {
        nom: "Kafka",
        image: "../img/competences/kafka.png",
        lien: "",
        designation: "Plateforme de streaming",
        projet: false
    },
    {
        nom: "Apprentissage personnel",
        image: "../img/competences/apprentissage_personnel.webp",
        lien: "./pages-competences/apprentissage_personnel.html",
        designation: "Apprentissage personnel",
        projet: true
    },
    {
        nom: "Git",
        image: "../img/competences/git.png",
        lien: "",
        designation: "Outil de versioning",
        projet: false
    },
    {
        nom: "Github",
        image: "../img/competences/github.svg",
        lien: "",
        designation: "Outil de versioning",
        projet: false
    },
    {
        nom: "OVH Cloud",
        image: "../img/competences/ovh.webp",
        lien: "",
        designation: "Service d'hébergement",
        projet: false
    },
    {
        nom: "Figma",
        image: "../img/competences/Figma.jpg",
        lien: "",
        designation: "Outil de maquettage",
        projet: false
    },
    {
        nom: "UML",
        image: "../img/competences/uml.svg.png",
        lien: "",
        designation: "Outil de de modélisation graphique",
        projet: false
    },
    {
        nom: "Gantt",
        image: "../img/competences/gantt.jpg",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "Postman",
        image: "../img/competences/postman.jpg",
        lien: "",
        designation: "Outil de test API",
        projet: false
    },
    {
        nom: "Jira",
        image: "../img/competences/jira.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "IceScrum",
        image: "../img/competences/icescrum.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "Trello",
        image: "../img/competences/trello.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
];

// Affichage des diplomes
for (let i = 0; i < competences.length; i++) {
    let competence = competences[i];
    let competenceHTML = `
    <div class="card card-competence" style="width:20rem; color: black; margin: 1rem; height: 20rem;">
            <div class="card-header" style="min-height: 4rem; ">
                ${competence.designation}
            </div>
            <img src="${competence.image}" class="card-img-top" alt="competence-img" style="min-height: 160px; max-height: 10rem;">
            <div class="card-body">
                <h5 class="card-title"><b>${competence.nom}</b></h5>
                ${competence.projet ? `<a href='${competence.lien}' class="btn btn-dark">Voir les projets</a>` : ``}
                
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableCompetence.innerHTML += competenceHTML;
}
