"use strict";
// 22.	Intentional Error: If you haven’t received an array index error in 
// one of your programs yet, try to make one happen. Change an index in one
// of your programs to produce an index error. Make sure you correct the 
// error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
const array = [1, 2, 3];
console.log(array[3]); // Produces Index Error
// To counter index error we apply conditional statments
const arr = [1, 2, 3];
const index = 3;
if (index >= 0 && index < arr.length) {
    console.log(arr[index]);
}
else {
    console.log("Invalid index");
}
