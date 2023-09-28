// alert("Hello");
// ['H', 'e', 'l', 'l', 'o'].forEach(alert);
// alert("some code");
// "use strict";

// document.write("<h1>Hello</h1>");

// let a = 10;
// let b = 20;

// var c = a + b;
// document.write("The sum of" + a + "and" + b + "is:" + c);

// let a = prompt("Please Enter first number", "");
// let b = prompt("Please Enter second number", "");

// var c = parseInt(a) + parseInt(b);
// console.log("The sum of" + a + "and" + b + "is:" + c)


/* Q1) Square Root of number*/

// var a = prompt('Please Enter a number', '');
// var b = Math.sqrt(a);

// console.log(b);


/* Q2) Finding area of trianngle*/

// var base = prompt("Please enter the base value:", "");
// var height = prompt("Please enter the height value:", "");

// var area = (base * height) / 2;
// console.log(area);


//method two
//Heron's formula general formula : s = (a+b+c)/2;

// by using formula root S(s-a) * (s-b) * (s - c)

// var a = 10;
// var b = 10;
// var c = 10;
// var s = (a + b + c) / 2;
// var temp = s * (s - a) * (s - b) * (s - c);
// var area = Math.sqrt(temp);
// console.log(area);


/*Q3) Swapping two numbers*/
//With using temp variable


// var a = prompt("Enter value for a:");
// var b = prompt("Enter value for b: ");
// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`Please Enter value for a ${a}, and Value for b ${b}`);


/*Without using temp variable*/

// var a = parseInt(prompt("Please enter the value for a:"));
// var b = parseInt(prompt("Please enter the value for b:"));

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`Swapped solution for a: ${a}, and Swapped solution for b:${b}`);


/*Conversion of kms to miles*/

// 1 kilometers = 0.621371
// miles = kilometers * factor

// function convert() {
//     var kms = document.getElementById('data').value;
//     const factor = 0.621371;
//     var miles = kms * factor;
//     // document.getElementById('res').innerHTML = `${miles} miles`;
//     document.getElementById('res').innerHTML = miles + 'miles';
// }



// function convert() {
//     var C = document.getElementById('data').value;
//     var f = (C * 1.8) + 32;
//     document.getElementById('res').innerText = `${C} C = ${f} F`

// }

// function check() {
//     var val = document.getElementById('data').value;
//     // var res = Math.sign(val);
//     if (val > 0) {
//         res = `${val} is Positive Number`;
//     } else if (val < 0) {
//         res = `${val} is Negative Number`;
//     } else if (val == 0) {
//         res = `${val} Zero`;
//     } else {
//         res = `${val} is Not a Number`
//     }

//     document.getElementById('res').innerText = res;
// }




//Math.random() function
//it returns a random floating-point from o to 1
//by using Math.random()*(higestNumber - lowestNumber) + lowestNumber;
// var x = (Math.random());
// console.log(x);
// x = parseInt(x * (10 - 1) + 1);
// console.log("Before Calculation " + x);

// function gen() {
//     var x = Math.random();
//     x = parseInt(x * (10000 - 1) + 1);

//     document.getElementById('res').innerText = x;
// }


//integer 
// function gen() {
//     var a = Math.floor(Math.random() * 10000);

//     document.getElementById('res').innerText = a;
// }