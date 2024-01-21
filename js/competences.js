// Récupération des endroits ou l'ont va afficher les compétences
let tableCompetence = document.getElementById("competences");

// Tableau des compétences
let competences = [
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
        nom: "PHP",
        image: "../img/competences/php.png",
        lien: "./pages-competences/php.html",
        designation: "Langage de programmation",
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
        nom: "SQL",
        image: "../img/competences/sql.jpg",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
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
        nom: "Dart / Flutter",
        image: "../img/competences/flutter-dart.jpg",
        lien: "./pages-competences/flutter.html",
        designation: "Langage de programmation et Framework",
        projet: true
    },
    {
        nom: "Python",
        image: "../img/competences/python.png",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "Python / Notebook Jupyter",
        image: "../img/competences/jupyter.png",
        lien: "",
        designation: "Langage de programmation et Framework",
        projet: false
    },
    {
        nom: "Python / Django",
        image: "../img/competences/django.png",
        lien: "./pages-competences/django.html",
        designation: "Framework Python",
        projet: false
    },
    {
        nom: "Git",
        image: "../img/competences/git.png",
        lien: "",
        designation: "Outil de versioning",
        projet: false
    },
    {
        nom: "Figma",
        image: "../img/competences/Figma.jpg",
        lien: "",
        designation: "Outil de maquettage",
        projet: false
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
