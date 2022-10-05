/*let molly="molly"
console.log(molly)
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);


const age = 30;
age = 31;


const firstName = 'Marioly';
const job = 'teacher';
const birthYear = 1999;
const year = 2022;

const marioly = "I'm "+firstName+ ', a '+ (year-birthYear) + " year old "+job;
console.log(marioly);

const mariolyNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}`;
console.log(mariolyNew);

//STRING EXAMPLE
console.log('String with \n\
multiple\n\
lines');

//TEMPLATE LITERAL EXAMPLE
console.log(`String
multiple
lines`);

//TAKING DECISIONS IF/ELSE STATEMENTS
const age = 23;
const isOldEnough = age >=18;

//IF/ELSE CONTROL STRUCTURE EXAMPLE
if(isOldEnough){
    console.log('Molly can start driving 🚗');
    //Windows + . for emojis tab
}else{
    const yearsLeft = 18-age;
    console.log(`Molly is too young. Wait another ${yearsLeft} years`);
}



const birthYear = 2012;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);


//TYPE CONVERSION AND COERCION
const inputYear = '1991';

//TYPE CONVERSION EXAMPLE
console.log(Number(inputYear));

//TYPE COERCION EXAMPLES
console.log(inputYear + 18);
console.log('23' - 1 - 15 - 16 + '9');
let n = '1' + 1;
n = n - 1;
console.log(n);

//NaN means invalid number

console.log(typeof String(23));


//TRUTHY AND FALSY VALUES
//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Molly'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(NaN));

const money = 0;

if(money){
    console.log('Dont spend it all');
}else{
    console.log('Get a job');
}


//EQUALITY OPERATORS

const age = 18;
const ageString = '18';

//STRICT EQUALITY OPERATOR === it does not perform type coercion
if(age===18) console.log("Equal ===");

//LOOSE EQUALITY OPERATOR == it does perform type coercion
if(ageString==18) console.log("Equal ==");

//PROMPT FUNCTION
const fav = Number(prompt("What is your fav number?"));
console.log(fav);

if(fav === 23) {
    console.log("Cool! 23");
}else if (fav === 7){
    console.log("Cool! 7");
}else if (fav === 9){
    console.log("Cool! 9");
}else{
    console.log("Number is not 23 or 7 or 9");
}

//DIFFERENT OPERATOR
if(fav !== 23){
    console.log("Why not 23?");
}

*/


//BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS
const age = 16