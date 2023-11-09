let movieList = [
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

console.log(movieList);

// Récupération du formulaire
const addMovieForm = document.getElementById("addMovieForm");

// Récupération du bouton "Ajouter le film"
const addMovieBtn = document.getElementById("addMovieBtn");

// Fonction pour créer un élément film HTML
function createMovieElement(movie) {
  const container = document.getElementById("container");
  const node = document.createElement("article");
  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.className = "btn-styled";
  btnDelete.innerHTML = "Retirer de ma liste";

  const movieElements = [
    createHtmlElement("h2", movie.title),
    createHtmlElement("h3", "Année : " + movie.releaseYear),
    createHtmlElement("p", "Durée : " + movie.duration + " minutes"),
    createHtmlElement("p", "Directeur : " + movie.director),
    createHtmlElement("p", "Acteurs : " + movie.actors.join(", ")),
    createHtmlElement("p", "Résumé : " + movie.description),
    createHtmlElement("p", "Note : " + movie.rating + "/10"),
    createHtmlElement("img", null, { src: movie.poster }),
    btnDelete,
  ];

  for (let data of movieElements) {
    node.appendChild(data);
  }

  container.appendChild(node);

  btnDelete.addEventListener("click", function () {
    container.removeChild(node);
  });
}

// Fonction pour créer un élément HTML avec des options
function createHtmlElement(tag, text, options) {
  const element = document.createElement(tag);
  if (text) {
    element.innerText = text;
  }
  if (options) {
    for (let key in options) {
      element[key] = options[key];
    }
  }
  return element;
}

// Affichage de la liste de films
for (let movie of movieList) {
  createMovieElement(movie);
}

// Ajoute un événement de clic au bouton "Ajouter le film"
addMovieBtn.addEventListener("click", function () {
  const newMovie = {
    title: addMovieForm.querySelector("#title").value,
    releaseYear: parseInt(addMovieForm.querySelector("#releaseYear").value),
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
  console.log(movieList);

  createMovieElement(newMovie);

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

// Ancienne version compliquée, au dessus version simplifiée puis re adaptée
/* 
console.log(movieList);

// Récupération du formulaire
const addMovieForm = document.getElementById("addMovieForm");

// Récupération du bouton "Ajouter le film"
const addMovieBtn = document.getElementById("addMovieBtn");

// Affichage de la liste de films
for (let movie of movieList) {
  // récupération du conteneur html
  const container = document.getElementById("container");

  // Création des éléments html à remplir ensuite
  const node = document.createElement("article");
  const title = document.createElement("h2");
  const releaseYear = document.createElement("h3");
  const duration = document.createElement("p");
  const director = document.createElement("p");
  const actors = document.createElement("p");
  const description = document.createElement("p");
  const rating = document.createElement("p");
  const poster = document.createElement("img");
  // Création des boutons
  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.className = "btn-styled";

  // Intégration de contenu dans les éléments html de films
  const movieElements = [
    title,
    releaseYear,
    duration,
    director,
    actors,
    description,
    rating,
    poster,
    btnDelete,
  ];

  // Remplissage des éléments avec les données du film
  title.innerText = movie.title;
  releaseYear.innerText = "Année : " + movie.releaseYear;
  duration.innerText = "Durée : " + movie.duration;
  director.innerText = "Directeur : " + movie.director;
  actors.innerText = "Acteurs : " + movie.actors.join(', ');
  description.innerText = "Résumé : " + movie.description;
  rating.innerText = "Note : " + movie.rating;
  poster.src = movie.poster;
  btnDelete.innerHTML = "Retirer de ma liste";

  // Ajout des éléments de films dans le html, dans node/article
  for (let data of movieElements) {
    node.appendChild(data);
  }

  // Ajout de l'article complet dans le container du html
  container.appendChild(node);

  // Ajout de l'événement de suppression
  btnDelete.addEventListener("click", function () {
    // Supprimer l'article du DOM
    container.removeChild(node);
  });
}

// Ajoute un événement de clic au bouton "Ajouter le film"
addMovieBtn.addEventListener("click", function () {
  // Récupère les valeurs du formulaire
  const title = addMovieForm.querySelector("#title").value;
  const releaseYear = parseInt(addMovieForm.querySelector("#releaseYear").value);
  const duration = parseInt(addMovieForm.querySelector("#duration").value);
  const director = addMovieForm.querySelector("#director").value;
  const actors = addMovieForm.querySelector("#actors").value.split(',').map(actor => actor.trim());
  const description = addMovieForm.querySelector("#description").value;
  const rating = parseFloat(addMovieForm.querySelector("#rating").value);
  const poster = addMovieForm.querySelector("#poster").value;

  // Crée un objet film avec les valeurs du formulaire
  const newMovie = {
    title,
    releaseYear,
    duration,
    director,
    actors,
    description,
    rating,
    poster,
  };

  // Ajoute le nouveau film à la liste
  movieList.push(newMovie);
  console.log(movieList);

  // Crée un nouvel élément d'article pour le nouveau film
  const newNode = document.createElement("article");

  // Création des éléments html à remplir ensuite
  const newTitle = document.createElement("h2");
  const newReleaseYear = document.createElement("h3");
  const newDuration = document.createElement("p");
  const newDirector = document.createElement("p");
  const newActors = document.createElement("p");
  const newDescription = document.createElement("p");
  const newRating = document.createElement("p");
  const newPoster = document.createElement("img");
  // Création du bouton Supprimer
  const newBtnDelete = document.createElement("button");
  newBtnDelete.type = "button";
  newBtnDelete.className = "btn-styled";

  // Intégration de contenu dans les éléments html du nouveau film
  const newMovieElements = [
    newTitle,
    newReleaseYear,
    newDuration,
    newDirector,
    newActors,
    newDescription,
    newRating,
    newPoster,
    newBtnDelete,
  ];

  // Remplissage des éléments avec les données du nouveau film
  newTitle.innerText = newMovie.title;
  newReleaseYear.innerText = "Année : " + newMovie.releaseYear;
  newDuration.innerText = "Durée : " + newMovie.duration;
  newDirector.innerText = "Directeur : " + newMovie.director;
  newActors.innerText = "Acteurs : " + newMovie.actors.join(', ');
  newDescription.innerText = "Résumé : " + newMovie.description;
  newRating.innerText = "Note : " + newMovie.rating;
  newPoster.src = newMovie.poster;
  newBtnDelete.innerHTML = "Retirer de ma liste";

  // Ajout des éléments du nouveau film dans le html, dans le nouvel article
  for (let data of newMovieElements) {
    newNode.appendChild(data);
  }

  // Ajout du nouvel article dans le container du html
  container.appendChild(newNode);

  // Ajout de l'événement de suppression pour le nouveau film
  newBtnDelete.addEventListener("click", function () {
    // Supprimer le nouvel article du DOM
    container.removeChild(newNode);
  });
});
 */
