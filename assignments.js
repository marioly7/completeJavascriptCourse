//JAVASCRIPT FUNDAMENTALS PART 1

//VALUES AND VARIABLES
//Declarando multiples variables y sus valores
let country = 'Bolivia', city = 'La Paz';
//Declarando variables y sus valores individualmente
let continent = 'South America';
let population = 110000;
//Mostrando valores en consola
console.log(country, city, continent, population);

//DATA TYPES
let isIsland = false;
//let language;
//Mostrando tipo de datos en consola
console.log(typeof isIsland, typeof population, typeof country);

//LET, CONST, VAR
let language = "spanish";
const firstName = 'Marioly';
//firstName = 'Steffany';
console.log(firstName);
//No se puede cambiar el valor de un valor const

//BASIC OPERATORS
console.log(population / 2);
console.log(++population);
console.log(population > 6000000);
console.log(population < 33000000);

let description = city+' is in '+country+ ", and its "+population+" people speak "+language;
console.log(description);

//STRINGS AND TEMPLATE LITERALS
let descriptionNew = `${city} is in ${country}, and its ${population} people speak ${language}`;
console.log(descriptionNew)

