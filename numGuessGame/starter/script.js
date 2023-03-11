/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// better than

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthyear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = "Stuart";
console.log(lastName);

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4
x++; // x = x + 1;
x--; // x = x -1;
console.log(x); // x = 100

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
Coding Challenge NO.1
 needed info...
	  BMI = mass / height ** 2
	Test Data1:
			Mark weight 78 kg
			Mark height 1.68 m
		John weight 92 kg
		John height 1.95m
	Test Data2:
			Mark weight 95 kg
			Mark height 1.88 m
		John weight 85 kg
		John height 1.76m

*/
/*
function calcBmi(person) {
	let weight = person[0];
	let height = person[1];
	return (weight / height ** 2)
}
let markBmi1, johnBmi1, markBmi2, johnBmi2;

const markData1 = [78, 1.69];
const johnData1 = [92, 1.95];

const markData2 = [95, 1.88];
const johnData2 = [85, 1.76];

markBmi1 = calcBmi(markData1);
johnBmi1 = calcBmi(johnData1);

markBmi2 = calcBmi(markData2);
johnBmi2 = calcBmi(johnData2);

let markHigherBmi1 = markBmi1 > johnBmi1;
let markHigherBmi2 = markBmi2 > johnBmi2;

if (markHigherBmi2) {
	console.log(`Mark's bmi: ${markBmi2} is higher than John's: ${johnBmi2}`);
} else {
	console.log(`John's bmi: ${johnBmi2} is higher than Mark's: ${markBmi2}`);
}
*/

/*
const firstName = 'Eddie';
const job = 'memer';
const birthYear = 2000;
const year = 2037;

const eddie = "I'm " + firstName + ', a ' +
	(year - birthYear) + ' year old ' + job + '!';
console.log(eddie);

const eddieNew = `I'm ${firstName}, a \
${year - birthYear} year old ${job}!`;
console.log(eddieNew);

console.log(`just a regular string :)`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines :)`);


const age = 15;

if (age >= 18) {
	console.log('Sarah can start driving now!');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
*/

/*
// Type conversion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

 */

// 5 falsy values: 0, "", undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
	console.log("Don't spend it all!");
} else {
	console.log("You should get a job!");
}

let height;
if (height) {
	console.log("YAY! height is defined!");

} else {
	console.log("Height is undefined");
}
*/
/*
const age = '18';
if (age === 18) console.log("You just became an adult (strict)");
// === Strict equality... does not do type coercion


if (age == 18) console.log("You just became an adult (loose)");
// == lose equality.. does do type coercion
*/
/*
const favorite = Number(prompt('What is you favorite number?'));
// console.log(typeof favorite);

if (favorite === 23) {
	console.log("cool...");
} else if (favorite === 7) {
	console.log("7 is okay...");
} else {
	console.log("cool as long as it's not 23 or 7");
}

if (favorite !== 23) {
	console.log("Heck yes!");
}


const hasDriversLiscense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLiscense && hasGoodVision);
console.log(hasDriversLiscense || hasGoodVision);
console.log(hasDriversLiscense && !hasGoodVision);

// if (hasDriversLiscense && hasGoodVision) {
// 	console.log("Sara can drive");
// } else {
// 	console.log("Maybe someone else should drive");
// }

const isTired = true; // C
console.log(hasDriversLiscense && hasGoodVision && isTired);

if (hasDriversLiscense && hasGoodVision && !isTired) {
	console.log("Sara can drive");
} else {
	console.log("Maybe someone else should drive");
}
*/

// Coding Challenge #3
/*
Two teams that compete against eachother 3 times
the winner with the highest average gets the trophy

1. Calculate the average score for each team
2. Compare the teams average scores to determine who wins or if
	it is a draw
3. Bonus 1: Include a required score of 100 to win
4. Bonus 2: Minimum score also applies to draw, if both teams are below
min score, it is a draw

TEST DATA: TeamA score 96, 100, AND 89. TeamB score 88, 91, and 110
TEST DATA Bonus1: TeamA score 97, 112, AND 101. 
				  TeamB score 109, 95, and 123
TEST DATA Bonus2: TeamA score 97, 112, AND 101. 
				  TeamB score 109, 95, and 106
*/
/*
let teamAScore, teamBScore;

minScore = 100;
teamAScore = (84 + 112 + 101) / 3;
teamBScore = (109 + 92 + 106) / 3;

console.log(teamAScore);
console.log(teamBScore);
if (teamAScore >= minScore && teamAScore > teamBScore) {
	console.log("Team A wins!");
} else if (teamBScore >= minScore && teamBScore > teamAScore) {
	console.log("Team B wins!");
} else if (teamBScore >= minScore && teamAScore >= minScore && teamAScore === teamBScore) {
	console.log("it's a tie!!");
} else {
	console.log("Nobody wins");
}
*/
/*
const day = "monday";

switch (day) {
	case 'monday': // day === 'monday'
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case 'tuesday':
		console.log("Prepare theory videos")
		break;
	case 'wednesday':
	case 'thursday':
		console.log("Write code examples");
		break;
	case 'friday':
		console.log("Record videos");
		break;
	case 'saturday':
	case 'sunday':
		console.log("Enjoy the weekend");
		break;
	default:
		console.log("Not a valid day!");
}
*/
/*

const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water")

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = 'wine'
} else {
	drink2 = 'water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

/*
Coding Challenge #4

tip 15% of the bill if value is between 50 and 300 if the val is different tip 20%

1. Calculate the tip depending on the bill value. create a variable called tip for this. it is not allowed to use an if/else statement
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Test Data: bill values: 275, 30, 430


const bill1 = 275;
const bill2 = 30;
const bill3 = 430;

let tip = bill2 >= 50 && bill2 <= 300 ? 0.15 * bill2 : 0.20 * bill2;

console.log(`Bill is ${bill2}, the tip is ${tip}, the total is ${bill2 + tip}`);
*/
