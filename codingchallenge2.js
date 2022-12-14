/*Coding Challenge #2
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
1. Print a nice output saying who has the bigger BMI.
2. Use a template string to include de BMI values in the outputs.
GOOD LUCK*/

let markMass = 95, markHeight = 1.88;
let johnMass = 85, johnHeigh = 1.76;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeigh ** 2;
let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log("Mark has the higher BMI");
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log("John has the higher BMI");
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
