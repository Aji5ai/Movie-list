const movieList = [
  {
    title: "Avatar",
    releaseYear: 2009,
    duration: 162,
    director: "James Cameron",
    actors: ["Sam Worthington","Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
    description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    rating: 7.9,
  },
  {
    title: "300",
    releaseYear: 2006,
    duration: 117,
    director: "Zack Snyder",
    actors: ["Gerard Butler", "Lena Headey", "Dominic West", "David Wenham"],
    description: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_SX300.jpg",
    rating: 7.7,
  },
  {
    title: "The Avengers",
    releaseYear: 2012,
    duration: 143,
    director: "Joss Whedon",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 8.1,
  },
  {
    title: "300",
    releaseYear: 2006,
    duration: 117,
    director: "Zack Snyder",
    actors: ["Gerard Butler", "Lena Headey", "Dominic West", "David Wenham"],
    description: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_SX300.jpg",
    rating: 7.7,
  },
  {
    title: "The Avengers",
    releaseYear: 2012,
    duration: 143,
    director: "Joss Whedon",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 8.1,
  }
];

console.log(movieList); 
console.log(movieList[0].title); 

for (let movie of movieList) {
    // récupération du conteneur html
    const container = document.getElementById('container');

    // Création des éléments html à remplir ensuite
    const node = document.createElement('article');
    const title = document.createElement('h2');
    const releaseYear = document.createElement('h3');
    const duration = document.createElement('p');
    const director = document.createElement('p');
    const actors = document.createElement('p');
    const description = document.createElement('p');
    const poster = document.createElement('img');
    const rating = document.createElement('p');

    // Intégration de contenu dans les éléments html de films
    const movieElements = [title, releaseYear, duration, director, actors, description, poster, rating]
    /*     const dataTitle = ["", "Année : ", "Durée : ", "Directeur : ", "Acteurs : ", "Résumé : ", "Lien de l'affiche : ", "Note : "]

    for (let i=0; i < movieElements.length; i++) {
        movieElements[i].innerText = dataTitle[i] + movie[movieElements[i]];
        console.log(movieElements[i])
    } */

    title.innerText = movie.title;
    releaseYear.innerText = "Année : " + movie.releaseYear;
    duration.innerText = "Durée : " + movie.duration;
    director.innerText = "Directeur : " + movie.director;
    actors.innerText = "Acteurs : " + movie.actors;
    description.innerText = "Résumé : " + movie.description;
    rating.innerText = "Note : " + movie.rating;
    poster.src = movie.poster;
    
    // Ajout des éléments de films dans le html, dans node/article
    for (let data of movieElements) {
        node.appendChild(data);
    }

    // Ajout de l'article complet dans le container du html
    container.appendChild(node);
}

