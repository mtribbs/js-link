//console.log("Hello World!");



//VALUES AND VARIABLES 

"Therese";
//console.log("Therese");

35;
//console.log(35);

// let firstName = "Therese";
// console.log(firstName);

// firstName = "Maria";
// console.log(firstName);



//DATA TYPES

//boolean - true/false

// let youWillLearnJs = true;
// console.log(youWillLearnJs);

// strings, numbers, boolean - most important!

// typeof operator
// shows what type a value holds, data type, - only to check
// console.log(typeof true);
// console.log(typeof youWillLearnJs);
// console.log(typeof 36);
// console.log(typeof "Therese");

// youWillLearnJs = "YES";
// console.log(typeof youWillLearnJs);

// undefined 
// let day;
// console.log(day);
// console.log(typeof day);

// day = "wednesday";
// console.log(typeof day);



// LET, CONST, VAR

// let - used for variebles where the value can change in the future
// let age = 30;
// console.log(age);

// age = 31;
// console.log(age);

// empty variables - use let, cannot use const

// const - used where the value cannot change, use as default!!
// const birthYear = 1985; 
// console.log(birthYear);

// birthYear = 1990;
// console.log(birthYear); - does not work, cannot change value of a value declared as const

// always use a keyword! 



// BASIC OPERATORS

// mathematic operators
// plus, minus, division, multiply, equal


// const myAge = 2021 - 1992;
// console.log(myAge);

// const brothersAge = 2021 - 1989;
// console.log(myAge, brothersAge);

// const now = 2021;
// const myAge = now - 1992;
// const brothersAge = now - 1989;
//console.log(myAge, brothersAge);

//console.log(myAge * 2, myAge / 10);

// concantinate
// const firstName = "Therese";
// const lastName = "Ribbas";
//console.log(firstName + lastName);
//console.log(firstName + " " + lastName);

// assignment operator 
// most straight forward is =

// let x = 10 + 5;
// console.log(x);

// x += 10;
// x = x + 10 reassigning x value so x = 25
// console.log(x);

// x *= 4;
// x (25) = x * 4 = 100
// console.log(x);


// plus operator increases the value by 1
// x++;
// console.log(x);

// minus operator decreases the value by 1
// x--;
// console.log(x);


// Comparison operators
// console.log(brothersAge > myAge);
//greater than
// console.log(brothersAge >= 18);
//greater or equal

// const isFullAge = brothersAge >= 18;
//this variable holds the boolean value
// console.log(isFullAge);

// console.log(now - 1992 > now - 1989);


// OPERATOR PRECEDENCE 

// console.log (now - 1992 > now - 1989);
// console.log(myAge);
// console.log(brothersAge);

// console.log(25 - 10 - 5);
//left-to-right
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
//right to left
//subtraction has higher precedence, goes left to right, assignment = has lower precedence and calculated right to left
// sub is 10, 10 is y and y is x

// const averageAge = myAge + brothersAge / 2;
// js will first calculate brothersage/2, then add myage, division has higher precedence
// const averageAge = (myAge + brothersAge) / 2;
// console.log(myAge, brothersAge, averageAge);


// STRINGS AND TEMPLATE LITERALS
// const job = "student";
// const birthYear = 1992;
// const year = 2021;

// const therese = 
// "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
// console.log(therese);

// const thereseNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(thereseNew);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String with
// multiple
// lines`);
// the es6 way


// TAKING DECISIONS - IF/ELSE

// first - define problem/task
// then - break it apart into smaller pieces/tasks

// TASK: check if a person is old enough to take their driver's license
// 1. a variable to store the person's age
// 2. a value that we store in a variable that will represent the required age for taking a driver's license
// 3. compare the person's age against the required age to see if it is a valid age for taking a driver's license
// 4. make a decision based on the evaluation, true or false

