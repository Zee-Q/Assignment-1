"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests
//  you create to 10. If you want to try more comparisons, write more tests. 
//  Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
//  • Tests for equality and inequality with strings
//  • Tests using the lower case function
//  • Numerical tests involving equality and inequality, greater than and 
//  less than, greater than or equal to, and less than or equal to
//  • Tests using "and" and "or" operators
//  • Test whether an item is in a array
//  • Test whether an item is not in a array
//Tests for equality and inequality with strings
let array1 = [1, 2, 3, 4];
let array2 = [2, 3, 4, 1];
console.log(array1 == array2);
console.log("\n");
//Tests using the lower case function
console.log(`Huma`.toLowerCase() == `huma`);
console.log("\n");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 >= 0 && 5 <= 10);
console.log("\n");
console.log(5 != 5);
console.log("\n");
console.log(0 == 0);
console.log("\n");
console.log(0 < 3);
console.log("\n");
console.log(0 > 3);
console.log("\n");
// Tests using "and" and "or" operators
console.log(5 >= 2 && 5 <= 7);
console.log("\n");
console.log(5 >= 2 || 5 <= 7);
console.log("\n");
//Test whether an item is in a array
let array = [`Ali`, `Sara`, `Hashir`];
console.log(array.includes(`Ali`));
console.log("\n");
//Test whether an item is not in a array
let array3 = [`Ali`, `Sara`, `Hashir`];
console.log(array3.includes(`Umer`));
