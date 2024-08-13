// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 
// }

// console.log("The sum of all numbers in the array is:", sum);






// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
    
//     sum += numbers[i];
// }

// console.log("The sum of all numbers in the array is:", sum);




// let names =  ["gio", "dato", "natia", "Daviti", "luka", "mari", "shalva", "nato", "nini", "toma"];

// let nameToCount = "Alice";

// let count = 0;

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === nameToCount) {
//         count++;
//     }
// }

// console.log(`The name '${nameToCount}' appears ${count} times in the array.`);







// let numbers = [23, 42, 55, 16, 78, 91, 33, 60, 27, 14];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(`The number ${numbers[i]} is even.`);
//     } else {
//         console.log(`The number ${numbers[i]} is odd.`);
//     }
// }




// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];

// let concatenatedArray = array1.concat(array2);

// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Concatenated Array:", concatenatedArray);







// let mainArray = [12, 17, 19, 22, 34, 31, 42, 57, 65, 78, 81, 91, 103, 106, 109];

// let evensArray = [];
// let oddsArray = [];

// for (let i = 0; i < mainArray.length; i++) {
//     if (mainArray[i] % 2 === 0) {
//         evensArray.push(mainArray[i]);
//     } else {
//         oddsArray.push(mainArray[i]);
//     }
// }

// console.log("Main Array:", mainArray);
// console.log("Evens Array:", evensArray);
// console.log("Odds Array:", oddsArray);







// let names = ["gio", "dato", "natia", "Daviti", "luka", "mari", "shalva", "nato", "nini", "toma"];

// console.log("Names at even indexes:");
// for (let i = 0; i < names.length; i++) {
//     if (i % 2 === 0) {
//         console.log(names[i]);
//     }
// }






// let numbersArray = [];

// for (let i = 0; i <= 50; i++) {
//     numbersArray.push(i);
// }


// console.log("Numbers from 0 to 50:", numbersArray);







// function findIndex(searchValue, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === searchValue) {
//             return i;
//         }
//     }
//     return -1;
// }

// let myArray = [10, 20, 30, 40, 50, 60, 70];
// let searchValue1 = 30;
// let searchValue2 = 90;

// console.log(`Index of ${searchValue1} in the array:`, findIndex(searchValue1, myArray)); // Expected output: 2
// console.log(`Index of ${searchValue2} in the array:`, findIndex(searchValue2, myArray)); // Expected output: -1
