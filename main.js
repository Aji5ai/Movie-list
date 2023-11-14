/*  EXPLICATIONS DETAILÉES DU SCRIPT EN FIN DE CODE */

// Pour charger la liste de films qui est dans le localStorage, ou utiliser la liste par défaut si dessous
let movieList = JSON.parse(localStorage.getItem("movieList")) || [
  //Json.parse prend du string et le remets en objet ou array. Donc on récupère le texte stocké en local storage pour le remettre en objet, dans movieList
  {
    title: "Avatar",
    releaseYear: 2009,
    duration: 162,
    director: "James Cameron",
    actors: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang",
    ],
    description:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    rating: 7.9,
  },
  {
    title: "300",
    releaseYear: 2006,
    duration: 117,
    director: "Zack Snyder",
    actors: ["Gerard Butler", "Lena Headey", "Dominic West", "David Wenham"],
    description:
      "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_SX300.jpg",
    rating: 7.7,
  },
  {
    title: "The Avengers",
    releaseYear: 2012,
    duration: 143,
    director: "Joss Whedon",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
    ],
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 8.1,
  },
  {
    title: "Inception",
    releaseYear: 2010,
    duration: 148,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Cillian Murphy",
      "Elliot Page",
    ],
    description:
      "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. ",
    poster: "https://media.senscritique.com/media/000012872126/0/inception.jpg",
    rating: 9.2,
  },
];

// Récupération du formulaire
const addMovieForm = document.getElementById("addMovieForm");

// Récupération du bouton "Ajouter le film"
const addMovieBtn = document.getElementById("addMovieBtn");

// Fonction pour créer un élément HTML avec des options
function createHtmlElement(tag, text, options) {
  const element = document.createElement(tag); // Créé l'élément, un p, un h1 .. selon le tag spécifié à l'appel
  if (text) {
    element.innerText = text; // Si du text est donné en argument, ça l'ajoute en innerText
  }
  if (options) {
    //Si on a une ou des options
    for (let key in options) {
      //On boucle sur chaque option pour l'ajouter
      element[key] = options[key]; //prends chaque option ajoutée, et une à une l'ajoute. Par ex si on a deux options{ src: "path/to/image.jpg", class: "photo" }); ça va créer à la première boucle le src puis le class à la deuxième.
    }
  }
  return element;
}

// Fonction pour créer un élément film HTML
function createMovieElement(movie) {
  const container =
    document.getElementById(
      "container"
    ); /* récupère le contenu de la div située sous le form */
  //Création d'un article, de son bouton supprimer (avec attibution nom class et innertext)
  const node = document.createElement("article");
  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.className = "btn-styled";
  btnDelete.innerText = "Retirer de ma liste";

  const movieElements = [
    //Attention createHTMLElement est définie au dessus de createMovieElement
    createHtmlElement("h2", movie.title), //permet de créer un titre h2 avec en texte le titre du film
    createHtmlElement("h3", "Année : " + movie.releaseYear),
    createHtmlElement("p", "Durée : " + movie.duration + " minutes"),
    createHtmlElement("p", "Directeur : " + movie.director),
    createHtmlElement("p", "Acteurs : " + movie.actors.join(", ")),
    createHtmlElement("p", "Résumé : " + movie.description),
    createHtmlElement("p", "Note : " + movie.rating + "/10"),
    createHtmlElement("img", null, {src: movie.poster}),
    btnDelete,
  ];

  for (let data of movieElements) {
    node.appendChild(data); //on ajoute en noeud dans l'article chaque élément créé et contenu dans le tableau movieElements
  }

  container.appendChild(node); // Puis on prend les articles de chaque film et on l'ajoute dans le container

  btnDelete.addEventListener("click", function () {
    container.removeChild(node); // Au click sur le bouton supprimer, on enlève du DOM l'article correspondant (contenu dans le container)
    movieList = movieList.filter((m) => m !== movie); // Supprime le film spécifié de la liste des films dans movieList.
    // La méthode filter crée un nouveau tableau en parcourant chaque élément du tableau d'origine (movieList) et en appliquant une condition.
    // Ici, la condition (m !== movie) vérifie si chaque film (m) n'est pas strictement égal au film spécifique que l'on souhaite supprimer.
    // Les films qui satisfont cette condition sont conservés dans le nouveau tableau résultant.
    // En assignant ce nouveau tableau à movieList, on met à jour la liste des films, excluant ainsi le film spécifié.
    updateLocalStorage(); //Puis on écrase la liste présente dans local storage par la nouvelle
  });
}

// Affichage de la liste de films
for (let movie of movieList) {
  //Pour chaque élément du tableau on appelle la fonction qui permet de créer un article de film
  createMovieElement(movie);
}

// Fonction permettant d'écraser la liste de films contenue dans localStorage par celle qui est contenu en variable dans ce code. Permet donc d'actualiser la list du localstorage.
function updateLocalStorage() {
  localStorage.setItem("movieList", JSON.stringify(movieList)); // En fait pas besoin de retirer l'anciene clé - valeur, suffit de reprendre la clé et de changer sa valeur pour l'écraser (remplacer). Donc setItem au lieu de removeItem et setItem à nouveau. JSPN.stringify pour stocker en chaine de caractère et pas en objet/tableau, l'objet/tableau. Sinon local storage n'arrivera pas à stocker la valeur d'un objet si c'est pas en string.
}

// Fonction permettant de créer un élément de film et de mettre à jour la liste contenue en local storage
function createAndStoreMovieElement(movieToCreate) {
  //movieToCreate = newMovie, c'est donc le film ajouté par l'utilisateur
  createMovieElement(movieToCreate); //la fonction createAndStoreMovieElement est appellée lorsque l'utilisateur clique sur le bouton ajouter un film. Elle va appeler la fonction createMovieElement sur movieToCreate, qui correspond en fait à newMovie (le film créé par l'utilisateur). Dans un premier temps on créé donc un article avec les valeurs données par l'utilisateur, puis on update le Local Storage pour ajouter l'article créé dans la liste de films.
  updateLocalStorage();
}

// Ajoute un EventListener lorsqu'on clique sur le bouton "Ajouter le film"
addMovieBtn.addEventListener("click", function () {
  const newMovie = {
    // Objet qui permet de recueillir les infos rentrées par l'utilisateur
    title: addMovieForm.querySelector("#title").value, // récupère la valeur (le texte tapée dans le champ) du titre
    releaseYear: parseInt(addMovieForm.querySelector("#releaseYear").value), //parseInt pour mettre en integer ce qui est rentré par l'utilisateur
    duration: parseInt(addMovieForm.querySelector("#duration").value),
    director: addMovieForm.querySelector("#director").value,
    actors: addMovieForm
      .querySelector("#actors") // Sélectionne l'élément HTML du formulaire avec l'ID "actors" puis récupère la valeur de cet élément
      .value.split(","), // Divise la chaîne en un tableau en utilisant la virgule comme séparateur
    description: addMovieForm.querySelector("#description").value,
    rating: parseFloat(addMovieForm.querySelector("#rating").value), // parseFloat = Convertit la chaîne de caractères en nombre flottant (decimal)
    poster: addMovieForm.querySelector("#poster").value,
  };

  movieList.push(newMovie);
  createAndStoreMovieElement(newMovie);

  // Réinitialise le formulaire pour vider les champs
  addMovieForm.reset();

  // Crée un conteneur pour le message de confirmation
  const confirmationMessage = document.getElementById("addFilmSuccess");
  confirmationMessage.innerText = "Le film a été ajouté avec succès!";

  // Disparaît après 3 secondes (3000 millisecondes)
  setTimeout(function () {
    confirmationMessage.innerText = "";
  }, 3000);
});

function showForm() { //Pour cacher ou afficher le formulaire d'ajout de film
  let x = document.getElementById("form");
  let style = window.getComputedStyle(x);

  if (style.display === "none" || style.display === "") {
    x.style.display = "block";
    document.getElementById("buttonShowForm").innerText = "Cacher";
  } else {
    x.style.display = "none";
    document.getElementById("buttonShowForm").innerText = "Ajouter un film";
  }
}
// On récupère le bouton et quand on clique ça lance la fonction showForm qui affiche ou cache le formulaire d'ajout de film
document
  .getElementById("buttonShowForm")
  .addEventListener("click", function () {
    showForm();
  });

/*  EXPLICATIONS */
/* Ce script permet d’afficher une liste de films sur une page internet via le DOM, mais également de modifier cette liste, que ce soit en supprimant des films ou en en ajoutant avec un formulaire.

Fonctionnement du code par étapes logiques :

Vérification si une liste de film est présente dans le local storage. 
  Si oui on l’utilise sous le nom de movieList, sinon on utilise celle par défaut (du même nom), qui est présente en tableau d’objets en début du code.
  On récupère ensuite le formulaire html et son bouton de validation permettant d’ajouter un film.

On prépare une fonction permettant de créer les éléments qui vont dans l’article de chaque film, par exemple un paragraphe contenant tel texte, telle affiche, tel titre etc. 
  La fonction permet de créer facilement ces éléments en leur assignant directement des textes et des options si besoin. En résumé, au lieu de créer un paragraphe, puis de le récupérer pour lui mettre un texte, puis de le reprendre pour lui mettre une classe par exemple, et de refaire ça pour chaque élément à mettre dans l’article, on fait tout avec une seule fonction.

On commence la fonction principale qui permet de créer un article de film dans le DOM.
  Dans un premier temps elle récupère le container html dans lequel les films (=articles html) vont aller. Elle crée un article, et un bouton pour supprimer avec une classe et un texte.

  Dans un second temps la fonction crée un tableau, movieElements, qui contient tous les éléments html du film qu’on désire afficher. 
    Donc par exemple un h2 avec en texte le nom du film. Ces éléments sont créés par la fonction qu’on a définie plus haut, createHtmlElement. Cette fonction principale, createMovieElement, étant appelée sur chaque film contenu dans l’array movieList, ce sont les titres, années etc de ces objets qui sont utilisés par createHtmlElement pour faire les balises html. Movie.releaseyear fait donc référence à l’année du film qui est en train d’être créé en DOM pour être affiché. Les données du film existent déjà dans le tableau movieList, mais n’existent pas encore en éléments du DOM et donc dans le html qu’on veut afficher. C'est la fonction actuelle qui permet de faire ça.

  Une fois ce tableau d’éléments html d’un film créé, on boucle dessus pour ajouter chacun de ses éléments, un par un, au nœud principal qui est notre article (node). L’article est donc composé de p, h3, etc.

  Toujours dans notre fonction principale permettant d’afficher les films, on souhaite permettre au bouton « supprimer le film » qui a été créé et affiché par cette même fonction, de … supprimer le film. 
    On lui met donc un eventListener dessus, pour que au clic de l’utilisateur : on enlève du container l’article en question. 
    Mais ensuite, on souhaite aussi retirer le film/article de la liste de films movieList. Car oui pour rappel, là on l’a enlevé de l’affichage en l’enlevant du DOM, mais pas en vrai dans le tableau qui liste nos films. Donc pour ça on filtre la liste des films, pour ne garder que les films non concernés par la suppression, et on les met dans un tableau qui vient écraser/remplacer le précédent.

Maintenant qu’on a fini de déclarer la fonction, on l'appelle sur chaque élément du tableau, donc pour chaque film de notre liste, afin de les créer tous.

On va ensuite définir deux autres fonctions :
  updateLocalStorage(), qui permet d'écraser la liste de films contenue dans localStorage par celle qui est contenu en variable dans ce code. Permet donc d'actualiser la lisete du localstorage.

  Et la fonction createAndStoreMovieElement(movieToCreate). Cette fonction est appelée lorsque l'utilisateur clique sur le bouton ajouter un film. Elle va appeler la fonction createMovieElement sur movieToCreate, qui correspond en fait à newMovie (le film créé par l'utilisateur). Dans un premier temps on crée donc un article avec les valeurs données par l'utilisateur, puis on update le Local Storage pour ajouter l'article créé dans la liste de films.

Une fois ces deux fonctions créées, on va s’occuper du formulaire pour ajouter de nouveaux films.
  On fait un event listener sur le bouton du formulaire « ajouter le film ». Lorsque le formulaire est validé, on va récupérer les valeurs entrées par l’utilisateur pour chaque champ. On récupère en titre le texte entré par l’utilisateur, pareil pour l’année la durée etc. Certaines valeurs vont être parse en chiffre ou en float pour obtenir les bons formats. Toutes les valeurs récupérées sont associées en clé valeur dans un objet newMovie.

  C’est cet objet qu’on push dans le tableau de la liste de films existante, permettant ainsi d’ajouter un film à notre liste. Maintenant qu’il est dans la liste on veut l’ajouter dans le dom pour qu’il soit affiché. On utilise donc createAndStoreMovieElement sur cet objet de film, pour créer le film en dom et pour ensuite actualiser la liste du local storage avec.

  Maintenant que tout est bon, on vide les champs de texte du formulaire, puis on prévient l’utilisateur que le film a bien été ajouté avec un message temporaire qui disparaît au bout de 3 secondes.

Et voilà !

En résumé, lorsqu'un film est créé, on l’ajoute à la liste et on le crée en dom, puis on actualise la liste du local storage pour qu’il soit retenu dans le navigateur de l’utilisateur.
 */
