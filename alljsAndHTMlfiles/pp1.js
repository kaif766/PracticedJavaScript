// var num = 9;
// if (num < 10) {
//     console.log("Small Number");
// } else if (num < 100) {
//     console.log("Medium Number");
// } else {
//     console.log("Larger Number");
// }

// if (2 === '2') {
//     console.log("It's true");
// } else {
//     console.log("Not true");
// }

// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// for (let cur = 20;; cur = cur + 1) {
//     if (cur % 7 == 0) {
//         console.log(cur);
//         break;
//     }
// }

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

function createChessBoard(size) {
    let chessboard = "";

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if ((r + c) % 2 == 0) {
                chessboard += " ";
            } else {
                chessboard += "#";
            }
        }

        chessboard += "\n";
    }
    return chessboard;
}

const size = 3;
console.log(createChessBoard(size));