// const PersonDetails = {
//     FirstName: 'Mohammad Kaif',
//     LastName: 'Devalapur',
//     age: 22,
//     hobbies: ['Reading', 'movies', 'travelling'],
//     address: {
//         street: 'H.no 2064 Rehmat Nagar Hire Bagewadi',
//         city: 'Belagavi',
//         state: 'Karnataka'
//     }
// }

// console.log(PersonDetails);

// //for accessing single name from it using (.) example PersonDetails.FirstName
// console.log(PersonDetails.FirstName, PersonDetails.LastName);
// console.log(PersonDetails.hobbies[0]);
//-----------------------------------------------
//By using destructing

// const { FirstName, LastName, hobbies } = PersonDetails
// console.log(FirstName, LastName, hobbies);

// PersonDetails.email = "kaif@gamil.com";
// console.log(PersonDetails)



// const todos = [{
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: false
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Hiring peoples',
//         isCompleted: true
//     }
// ];

// console.log(todos);
// console.log(todos[2].text);
// console.log(todos[1].id, todos[1].text);


//-----------------------------------------------

/*
The JSON. stringify() method in Javascript is 
used to create a JSON string out of it.
While developing an application using JavaScript,
many times it is needed to serialize the data 
to strings for storing the data in a database or 
for sending the data to an API or web server.
*/
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

//For loop


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log("false");
//     } else {
//         console.log("true");
//     }

// }


//While loop

// let i = 0;
// while (i <= 10) {
//     console.log(`while loop: ${i}`);
//     i++;
// }/


// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

//or

// for (let todo of todos) {
//     console.log(todo.text);
// }


//forEach, map, filter

// todos.forEach(function(todo) {
//     console.log(todo.id);
// });




// map

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);



//filter
/*const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);
*/




// const x = 11;

// if (x === 11) {
//     console.log("x equal to 10");
// } else if (x > 10) {
//     console.log("x is greater than 10")
// } else {
//     console.log("x is less than 10");
// }




// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//     console.log("x is more than 5 or y is more than 10");
// }

// if (x > 5) {
//     if (y > 10) {
//         console.log("x is more than 5 or y is more than 10");
//     }
// }



//Ternary Operators

// const x = 10;
// const color = x > 10 ? "red" : "blue";
const color = 'green';


//switch caces
// switch (color) {
//     case 'red':
//         console.log("The color is red");
//         break;
//     case 'blue':
//         console.log("The color is blue");
//         break;
//     default:
//         console.log("color is not red or blue!");
//         break;
// }

// Functions

// function addNumber(num1, num2) {
//     console.log(num1 / num2);
// }

// addNumber(1, 2);


//or

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(5, 5));

//or

// const add = (n1, n2) => {
//     return n1 * n2;
// }


// console.log(add(10, 10));