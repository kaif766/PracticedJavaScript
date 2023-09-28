// console.log(Math.max(4, 19));
// console.log(Math.min(2, 9));

// let num = Number(prompt("Pick The number "));
// console.log("Your answer is square of the number itself " + num * num);

// let num = Number(prompt("pick a number"));
// if (!Number.isNaN(num)) {
//     console.log("Your number is the sqare root of " + num * num);
// } else {
//     console.log("Its string");
// }

// if ('2' == '2') {
//     console.log("It's true");
// }

// let num = Number(prompt("Enter the number"))

if (num < 10) {
    console.log("Small Number");
} else if (num < 100) {
    console.log("Medium Number");
} else {
    console.log("Larger Number");
}



//----------------Starting with While Loop------------------------------------------
//Ex 1- even numbers from 0 to 12

// let num = 0;
// while (num <= 12) {
//     console.log(num);
//     num = num + 2;
// }


//Ex 2- calculating 2^10 (2 to the 10th power)

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);


//-------------------do Whikle loop--------------------------------------------------


//Ex 1- Printing name
// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// let num;
// do {
//     num = prompt("Enter any numer");
// } while (!num);
// console.log(num);


//Indenting code

// if (false != true) {
//     console.log("This makes sense.");
//     if (1 < 2) {
//         console.log("No surprise there.")
//     }
// }


//----------------------Starting with for loop ----------------------------------------

//Ex 1- Even number
// for (let num = 0; num <= 12; num = num + 2) {
//     console.log(num);
// }


//Ex 2- (2^10 2 to the power of 10)

// let res = 1;
// for (let count = 0; count < 10; count++) {
//     res = res * 2;
// }
// console.log(res);



//Breaking out of a loop

// for (let cur = 22;; cur = cur + 1) {
//     if (cur % 7 == 0) {
//         console.log(cur);
//         break;
//     }
// }


//-----------------Starting with Switch Condition--------------------------------------

// switch (prompt("What is the weather like?")) {
//     case "rainy":
//         console.log("Remember to bring umberella.");
//         break;
//     case "sunny":
//         console.log("Dress lightly.");
//         break;
//     case "cloudy":
//         console.log("Go outside.");
//         break;
//     default:
//         console.log("Unknown weather type!.");
//         break;

// }




//----Practicing questions-----


//Q1)

// let num = 10;
// for (let i = 1; i < num; i++) {
//     let line = '';
//     for (let j = i; j < num; j++) {
//         line += i + " ";
//     }
//     console.log(line);
// }


//Q2)

// let num = 100;
// for (let i = 1; i <= 100; i++) {
//     let c = 0;
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");

//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }


//Q3)

// function createChessBoard(size) {
//     let chessboard = "";

//     for (let r = 0; r < size; r++) {
//         for (let c = 0; c < size; c++) {
//             if ((r + c) % 2 == 0) {
//                 chessboard += " ";
//             } else {
//                 chessboard += "#";
//             }
//         }

//         chessboard += "\n";
//     }
//     return chessboard;
// }

// const size = 8;
// console.log(createChessBoard(size));