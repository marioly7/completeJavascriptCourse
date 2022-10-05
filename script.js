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



//BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS
//LOGICAL OPERATORS
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Should drive");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired);

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("Should drive");
} else {
    console.log("Someone else should drive");
}


//THE SWITCH STATEMENT
const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    //The next task will be executed for both wednesday and thursday
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    default:
        console.log('Not a valid day');
}


//STATEMENTS AND EXPRESSIONS
// An expression is a piece of code that produces a value like 3+4, 1991, true && false
// An statement is a bigger piece of code that doesn't produce a value on itself, it only performs some actions like if/else statement, switch statement.

//THE CONDITIONAL (TERNARY) OPERATOR
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

//It is called ternary because it has three parts: the condition, the if part and the else part.
const drink = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

