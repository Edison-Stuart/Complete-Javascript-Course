'use strict';
//Strict Mode
/*
let hasDriversLiscence = false;
const passTest = true;

if (passTest) hasDriversLiscence = true;
if (hasDriversLiscence) console.log("I can drive");

// const interface = 'Audio'
// const private = 435;
// Reserves certain words
*/
/*
function logger() {
	console.log("My name is Jonas");
}

// calling / running / invoking function
for (let i = 0; i < 20; i++) {
	logger();
}
// can use function as much as you want


function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
// function can accept and return information

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// can call function decloration before initilization
const age1 = calcAge1(1991);

//function decloration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}

// cannot call function expression before initilization
// function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
// Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetire = (birthyear, firstName) => {
	const age = 2022 - birthyear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetire(2000, 'Eddie'));
console.log(yearsUntilRetire(1980, 'Bob'));
*/
/*
const cutFruit = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruit(apples);
	const orangePieces = cutFruit(oranges);

	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
	return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avg1, avg2) {
	if (avg1 >= avg2 * 2) {
		console.log(`Team 1 has won with a score of ${avg1} to ${avg2}`)
	} else if (avg2 >= avg1 * 2) {
		console.log(`Team 2 has won with a score of ${avg2} to ${avg1}`);
	} else {
		console.log("Nobody wins :(");
	}
}

const team1Avg1 = calcAverage(44, 23, 71);
const team2Avg1 = calcAverage(65, 54, 49);
console.log('first scores');
checkWinner(team1Avg1, team2Avg1);

const team1Avg2 = calcAverage(85, 54, 41);
const team2Avg2 = calcAverage(23, 34, 27);
console.log("second scores");
checkWinner(team1Avg2, team2Avg2);
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


// Literal syntax
const friends = [friend1, friend2, friend3];
console.log(friends);


const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log('Index 0: ' + friends[0]);
console.log('Index 2: ' + friends[2]);

console.log('Length of array: ' + friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'LastName', 2037 - 1991, 'teacher', friends];
console.log(jonas);
*/
/*
// Exercise
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1])
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])]
console.log(ages);
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


// Literal syntax
const friends = [friend1, friend2, friend3];

// Add Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
	console.log('You have a friend named steven');
}
*/

/*
//// Coding Challenge #2

Tip Calculator, 15% if value between 50 and 300, otherwise, 20%

1. calcTip function that accepts any bill and returns the tip
2. make it so it can accept an array and return an array of tips
3. return an array of totals as well

TEST DATA: 125, 555, 44


function calcTip(bill) {
	let total;
	let tip;
	let response;
	if (typeof bill == 'number') {
		if (bill >= 50 && bill <= 300) {
			tip = 0.15 * bill;
		} else {
			tip = 0.20 * bill;
		}
		total = bill + tip;
		response = [`Tip: ${tip}, Total: ${total}`]
	} else if (typeof bill == 'object') {
		let tips = [];
		let totals = [];
		let i = 0;
		for (let cost of bill) {

			if (cost >= 50 && cost <= 300) {
				tips[i] = 0.15 * cost;
			} else {
				tips[i] = 0.20 * cost;

			}
			totals[i] = tips[i] + cost;

			i++;
		}
		tip = tips;
		total = totals;
		response = [`Tips: ${tip}, Totals: ${total}`]
	}
	return response;
}
console.log(calcTip([125, 555, 44]));
*/
/*

// Object Literal
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmaann',
	age: 2037 - 1991,
	job: 'Teacher',
	friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

// Does not work with dot notation
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose from firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
// 	console.log(jonas[interestedIn]);
// } else {
// 	console.log('Wrog request!');
// }

jonas.location = 'Portugal';
jonas['twitter'] = 'twitterjonas';
console.log(jonas);

/// CHALLENGE
/// Jonas has three friends, his best friend is Michael
console.log(`${jonas.firstName} Has ${jonas.friends.length} friends, and his best friend is named ${jonas.friends[0]}`);
*/
/*
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmaann',
	birthYear: 1991,
	job: 'Teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLiscence: true,
	// calcAge: birthYear => 2037 - birthYear

	// calcAge: function () {
	// 	return 2037 - this.birthYear;
	// }

	calcAge: function () {
		this.age = 2037 - this.birthYear
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLiscence ? 'does have' : 'does not have'} his driver's liscence`
	}
};

console.log(jonas.getSummary());

// console.log(jonas['calcAge'](jonas.birthYear));
*/

// CODING CHALLENGE #3
/*
Comparing BMI's
BMI = mass / height ** 2 = mass / (height * hieght). (mass in kg height in meters)

1. Create an object for each person with full name, mass, and height (mark miller and john smith)
2. create a calc bmi method that stores bmi to property and also returns it
3. log who has the higher bmi with full name and bmi

TEST DATA: Mark weight - 78 kg and height - 1.69 m.
			John Weight - 92 kg and hieght 1.95 m tall.


class Person {
	constructor(mass, height, name) {
		this.mass = mass;
		this.height = height;
		this.fullName = name;
	}

	calcBmi() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}
let john = new Person(92, 1.95, 'John Smith');
let mark = new Person(78, 1.69, 'Mark Miller');

if (mark.calcBmi() > john.calcBmi()) {
	console.log(`${mark.fullName} has a BMI of ${mark.bmi}, which is higher than the BMI of ${john.fullName} who has a BMI of ${john.bmi}`);
} else {
	console.log(`${john.fullName} has a BMI of ${john.bmi}, which is higher than the BMI of ${mark.fullName} who has a BMI of ${mark.bmi}`);
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
	console.log('lifting weights rep ' + rep);
}
*/
/*
const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
	// Reading from array
	console.log(jonasArray[i], typeof jonasArray[i]);

	// Filling array
	// types[i] = typeof jonasArray[i];
	types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

const calcAge = years => {
	for (let i = 0; i < years.length; i++) {
		ages.push(2037 - years[i]);
	}
	return ages;
};

console.log(calcAge(years));
*/
/*
// continue and break
const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
console.log('----Only Strings----');
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] !== 'string') continue;

	console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('----Break with numbers----');
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] === 'number') break;

	console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/*
const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
];

// 0,1, ....., 4
// 4, 3, ...., 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
	console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`------- Starting Exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Lifting weights rep NO. ${rep}`);
	}
}
*/

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log('FOR: lifting weights rep ' + rep);
// }
/*
let rep = 1;
while (rep <= 10) {
	console.log('WHILE: lifting weights rep ' + rep);
	rep++;
}

let dice = 0;


while (dice !== 6) {
	dice = Math.trunc(Math.random() * 6) + 1;
	console.log(`you rolled a ${dice}`);
}
*/

// CODING CHALLENGE #4
/*
Supposed to be improving my tip calculator with loops..... whoops
TEST DATA: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


BONUS: Write a calcAverage function that takes an array and calculate the average of all the numbers then retruns that average
*/

function calcTip(bill) {
	let total;
	let tip;
	if (typeof bill == 'number') {
		if (bill >= 50 && bill <= 300) {
			tip = 0.15 * bill;
		} else {
			tip = 0.20 * bill;
		}
		total = bill + tip;

	} else if (typeof bill == 'object') {
		let tips = [];
		let totals = [];
		let i = 0;
		for (let cost of bill) {

			if (cost >= 50 && cost <= 300) {
				tips[i] = 0.15 * cost;
			} else {
				tips[i] = 0.20 * cost;

			}
			totals[i] = tips[i] + cost;

			i++;
		}
		tip = tips;
		total = totals;

	}
	return [tip, total];
}
const testData = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipsAndTotals = calcTip(testData);
console.log(tipsAndTotals);

function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
console.log(calcAverage(tipsAndTotals[1]));
console.log(calcAverage(tipsAndTotals[0]));
