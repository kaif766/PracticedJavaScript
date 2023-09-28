//variables
// var, let, const
// alert("Hello Bhai");

// var age = 31;
// age = 30;
// console.log(age);

// let age = 20;
// age = 22;
// console.log(age);

// let age;
// console.log(age);

//output it is saying undefined

// var age;
// console.log(age)

//output it is saying undefined


// const age;
// console.log(age)

// Uncaught SyntaxError: Missing initializer in const declaration (at main.js:24:7)


//--------------------------------------------------------------------------------------------

//datatypes
//String, Number, Boolean, null, undefined

// const name = 'Kaif';
// const age = 22;
// const rating = 4.9;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof y);


// const name = "Kaif Is very Intellegent"
// const age = 22;

// console.log("My name is " + name + " and My age is " + age);

// //Template String
// console.log(`My name is ${name} and I am ${age}`);

// console.log(name.length);
// console.log(name.substring(0, 7));
// console.log(name.substring(13, 24).toUpperCase());

// const s = "New, Technology, Booming, In, India, Done, By, MohammadKaif"
// console.log(s.split(', '));



//Array are - A variable that holds multiple values

var arr = new Array(1, 2, 3, 4);
console.log(arr);

const fruits = ['Apple', 'Bananas', 'Carrot', 'Straberry'];
console.log(fruits);

fruits[3] = 'Grapes';
console.log(fruits);

fruits.push('Kali');
console.log(fruits);

fruits.pop('Kali');
console.log(fruits);


console.log(fruits.indexOf('Carrot'));