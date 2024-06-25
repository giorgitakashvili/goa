// function checkNumberStatus(number) {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }


// //function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         console.log("The number is even.");
//     } else {
//         console.log("The number is odd.");
//     }
// }



// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log("The year is a leap year.");
//     } else {
//         console.log("The year is not a leap year.");
//     }
// }




// function getLargerNumber(a, b) {
//     return a > b ? a : b;
// }





// function getSmallestNumber(a, b, c) {
//     return Math.min(a, b, c);
// }




// function isEmptyString(str) {
//     return str.length === 0;
// }




// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }





// function getLetterGrade(numericGrade) {
//     if (numericGrade >= 90) return 'A';
//     if (numericGrade >= 80) return 'B';
//     if (numericGrade >= 70) return 'C';
//     if (numericGrade >= 60) return 'D';
//     return 'F';
// }




// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) return false;
//     }
//     return true;
// }




// function celsiusToFahrenheit(celsius) {
//     return celsius * 9 / 5 + 32;
// }




// let person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };





// console.log("Name:", person.name);
// console.log("Age:", person.age);




// person.email = "john.doe@example.com";




// let car = {
//     make: "Toyota",
//     model: "Camry",
//     owner: {
//         name: "Jane Doe",
//         age: 28
//     }
// };



// console.log("Owner's Name:", car.owner.name);
// console.log("Owner's Age:", car.owner.age);






// car.model = "Corolla";




// car.calculateAge = function(yearManufactured) {
//     const currentYear = new Date().getFullYear();
//     return currentYear - yearManufactured;
// };




// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key + ": " + person[key]);
//     }
// }



// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }




// let j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }





// function factorial(n) {
//     let result = 1;
//     while (n > 0) {
//         result *= n;
//         n--;
//     }
//     return result;
// }






// function fibonacci(limit) {
//     let a = 0, b = 1, next;
//     while (a <= limit) {
//         console.log(a);
//         next = a + b;
//         a = b;
//         b = next;
//     }
// }






// function reverseNumber(n) {
//     let reversed = 0;
//     while (n != 0) {
//         reversed = reversed * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return reversed;
// }






// function largestDigit(n) {
//     let maxDigit = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         if (digit > maxDigit) maxDigit = digit;
//         n = Math.floor(n / 10);
//     }
//     return maxDigit;
// }






// function isNumberPalindrome(n) {
//     let original = n, reversed = 0;
//     while (n != 0) {
//         reversed = reversed * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return original === reversed;
// }



// function sumOfDigits(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }





// function isPrimeNumber(n) {
//     if (n <= 1) return false;
//     let i = 2;
//     while (i < n) {
//         if (n % i === 0) return false;
//         i++;
//     }
//     return true;
// }




// function reverseString(str) {
//     let reversed = "";
//     let i = str.length - 1;
//     while (i >= 0) {
//         reversed += str[i];
//         i--;
//     }
//     return reversed;
// }





// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }




// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("Sum:", sum);



// for (let i = 5; i <= 50; i += 5) {
//     console.log(i);
// }





// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }





// let factorial = 1;
// for (let i = 5; i > 0; i--) {
//     factorial *= i;
// }
// console.log("Factorial of 5:", factorial);





// let array = [1, 2, 3, 4, 5];
// let arraySum = 0;
