# JavaScript - Liste de films

Utilise les objets littéraux et la manipulation du DOM pour afficher et administrer une liste de films.

## Ressources

- [Liste des films](https://gitlab.com/-/snippets/3618435)

## Contexte du projet

Ta mission est de réaliser une application web d'affichage de films. Pour cela, tu vas utiliser tes connaissances acquises en JavaScript sur la manipulation de DOM et les objets littéraux.

Tu as accès à la liste des films suivants : [Liste des films](https://gitlab.com/-/snippets/3618435).

Chaque film est un objet littéral de la forme suivante :

```js
{
  title: "Avatar",
  releaseYear: 2009,
  duration: 162,
  director: "James Cameron",
  actors: ["Sam Worthington","Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
  description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  rating: 7.9,
}
```

### Les tableaux

Cependant, avant d'attaquer ton travail, nous allons étudier ensemble les tableaux !

Les tableaux sont des structures de données pouvant contenir plusieurs valeurs différentes.

En JavaScript, les tableaux s'écrivent de la façon suivante :

```js
// un tableau de chaînes de caractères
const names = ["Michel Durand", "Gertrude Durand"];

// un tableau de nombres
const ratings = [8, 7, 10, 6, 6, 8];

// un tableau d'objets
const cars = [
  {
	brand: "Honda",
	model: "Civic"
  },
  {
	brand: "Renault",
	model: "Clio"
  },
  {
	brand: "Fiat",
	model: "500"
  },
]
```

En JavaScript, un tableau peut contenir tous les types possibles. Il est même possible de mélanger les types (même si je le déconseille).

Chose étrange en JavaScript : il n'y a pas de type `array` (tableau en anglais). Il considère qu'un tableau est un... `object` !

```js
console.log(typeof [1, 2, 3]); // object
```

Pour accéder à une valeur du tableau, on lui précise quelle case on appelle, de la forme `tableau[position]` :

```js
// positions :	0      	1       	2    	3
const names = ["Michel", "Gertrude", "Brandon", "Jane"];
console.log(names[0]); // "Michel"
console.log(names[3]); // "Jane"
console.log(names[4]); // undefined, car on appelle une valeur en dehors du tableau
```

Pour connaître le nombre d'élément du tableau, on appelle la propriété `length`, de la forme `tableau.length` :

```js
const names = ["Michel", "Gertrude", "Brandon", "Jane"];
console.log(names.length); // 4 : il y à 4 éléments dans mon tableau
```

### Parcourir un tableau

Il existe plusieurs façon de parcourir un tableau en JavaScript :

#### La boucle **TANT QUE** : `while`

```js
const names = ["Michel", "Gertrude", "Brandon", "Jane"];
let i = 0; // on initialise l'indice de parcours du tableau
while (i < names.length) { // tant que l'indice est inférieur au nombre d'éléments du tableau
  // récupère l'élément en cours du tableau
  const currentName = names[i]; // names[i] : on récupère la valeur à la position actuelle de i
  console.log(currentName + " à la position " + i);
  i++; // on passe l'indice de parcours du tableau à la case suivante
}
```

> La boucle **while** est utile, mais pas vraiment adaptée au parcours de tableau

#### La boucle **POUR** : `for`

```js
const names = ["Michel", "Gertrude", "Brandon", "Jane"];

// on initialise l'indice de parcours du tableau
// on parcourt le tableau sur la condition : tant que l'indice est inférieur au nombre d'éléments du tableau
// et on passe l'indice de parcours du tableau à la case suivante à la fin de chaque tour
for (let i = 0; i < names.length; i++) {
  // récupère l'élément en cours du tableau
  const currentName = names[i]; // names[i] : on récupère la valeur à la position actuelle de i
  console.log(currentName + " à la position " + i);
}
```

> La boucle **for** est adaptée au parcours de tableau, quand la position actuelle de chaque élément est utilisée dans le code

#### La boucle **POUR CHAQUE** : `for .. of`

```js
const names = ["Michel", "Gertrude", "Brandon", "Jane"];

// pour chaque élément, que je nomme currentName, du tableau names
for (const currentName of names) {
  console.log(currentName);
}
```

> C'est la boucle la plus pratique, quand la position de l'élément n'est pas utile dans le code

### Interagir avec le tableau

```js
const names = ["Michel", "Gertrude", "Brandon", "Jane"];

// retire la dernière valeur du tableau et la stocke dans une variable
const last = names.pop();
console.log(last); // "Jane"

// retire la première valeur du tableau et la stocke dans une variable
const first = names.shift();
console.log(first); // "Michel"

console.log(names); // ["Gertrude", "Brandon"]

// ajoute une valeur à la fin du tableau
names.push("Bernard");
console.log(names); // ["Gertrude", "Brandon", "Bernard"]

// indique si une valeur est présente dans le tableau
console.log(names.includes("Jean")); // false
console.log(names.includes("Brandon")); // true

// indique la position de l'élément dans le tableau (-1 s'il n'existe pas)
console.log(names.indexOf("Gertrude")); // 0
console.log(names.indexOf("Ali")); // -1

// colle dans une chaîne de caractères toutes les valeurs du tableau, reliées par un caractère donné
const joinedNames = names.join(";");
console.log(joinedNames); // "Gertrude;Brandon;Bernard"

// explose une chaîne de caractères en tableau, découpée sur un caractère donné
const nameList = joinedNames.split(";");
console.log(nameList); // ["Gertrude", "Brandon", "Bernard"]
```

## Modalités pédagogiques

Réaliser une application web qui respecte le cahier des charges suivant :

- Il doit être possible d'afficher la liste des films, avec toutes les informations qui les composent
- Les films doivent s'afficher en trois colonnes sur navigateur et sur une seule colonne sur mobile
- Ajouter un formulaire qui permet de créer un film, avec les valeurs suivantes : le titre, la durée en minutes, le réalisateur, la description, la note et le lien vers le poster. La liste des acteurs sera vide, tu n'as pas à t'en occuper.
- Ajoute un bouton "Supprimer" pour chaque film, qui permet de retirer le film de l'affichage
- Si tu veux ajouter d'autres fonctionnalités pour t'entraîner, tu es libre de le faire (ex: ajouter un film en favoris, ajouter des boutons pour trier les films par année, note ou titre)

## Modalités d'évaluation

- Un dépôt GitLab contient le code du projet
- Le programme fonctionne et n’affiche pas d'erreur dans le terminal
- La liste des films apparaît correctement et est responsive
- La liste des films est créée en manipulant le DOM avec JavaScript
- Il est possible de retirer un film de la liste en cliquant sur un bouton "Supprimer"
- Il est possible d'ajouter un film à la liste avec un formulaire
- Des commentaires expliquent le code

## Livrables

Un lien vers GitLab

## Critères de performance

- La simplicité de la solution donnée (DRY, KISS)
- Le code source est documenté (commenté)
- Utiliser un outil de gestion de versions
