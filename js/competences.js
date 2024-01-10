// Récupération des endroits ou l'ont va afficher les compétences
let tableCompetence = document.getElementById("competences");

// Tableau des compétences
let competences = [
    {
        nom: "ReactJS",
        image: "../img/competences/reactjs.jpg",
        lien: "",
        designation: "Framework JavaScript",
    },
    {
        nom: "NodeJS",
        image: "../img/competences/nodejs.png",
        lien: "",
        designation: "Framework JavaScript",
    },
    {
        nom: "JestJS",
        image: "../img/competences/jestjs.png",
        lien: "",
        designation: "Framework JavaScript",
    },
    {
        nom: "PHP",
        image: "../img/competences/php.png",
        lien: "",
        designation: "Langage de programmation",
    },
    {
        nom: "Symfony 6 / Twig",
        image: "../img/competences/Symf-twig.jpg",
        lien: "",
        designation: "Framework PHP",
    },
    {
        nom: "SQL",
        image: "../img/competences/sql.jpg",
        lien: "",
        designation: "Langage de programmation",
    },
    {
        nom: "HTML / CSS",
        image: "../img/competences/html-css.jpg",
        lien: "",
        designation: "Langage de programmation",
    },
    {
        nom: "JavaScript",
        image: "../img/competences/javascript.webp",
        lien: "",
        designation: "Langage de programmation",
    },
    {
        nom: "Dart / Flutter",
        image: "../img/competences/flutter-dart.jpg",
        lien: "",
        designation: "Langage de programmation et Framework",
    },
    {
        nom: "Python / Django",
        image: "../img/competences/django.png",
        lien: "",
        designation: "Langage de programmation et Framework",
    },
    {
        nom: "Git",
        image: "../img/competences/git.png",
        lien: "",
        designation: "Outil de versioning",
    },
    {
        nom: "Figma",
        image: "../img/competences/Figma.jpg",
        lien: "",
        designation: "Outil de maquettage",
    }
];

// Affichage des diplomes
for (let i = 0; i < competences.length; i++) {
    let competence = competences[i];
    let competenceHTML = `
    <div class="card card-competence" style="width:20rem; color: black; margin: 1rem; height: 20rem;">
            <div class="card-header" style="min-height: 4rem; ">
                ${competence.designation}
            </div>
            <img src="${competence.image}" class="card-img-top" alt="competence-img" style="max-height: 10rem;">
            <div class="card-body">
                <h5 class="card-title"><b>${competence.nom}</b></h5>
                <a href='${competence.lien}' class="btn btn-primary" target="_blank">Voir les projets</a>
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableCompetence.innerHTML += competenceHTML;
}
