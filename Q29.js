"use strict";
// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write
//  a series of independent if statements that check for certain fruits in 
//  your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of 
// fruit is in your array. If the fruit is in your array, the if block 
// should print a statement, such as You really like bananas!
let favorite_fruits = [`apple`, `orange`, `mango`];
console.log(favorite_fruits, "\n");
if (favorite_fruits.includes(`apple`)) {
    console.log("You really like apples.", "\n");
}
if (favorite_fruits.includes(`orange`)) {
    console.log("You really like orange.", "\n");
}
if (favorite_fruits.includes(`mango`)) {
    console.log("You really like mangoes.", "\n");
}
if (favorite_fruits.includes(`pear`)) {
    console.log("You really like pears.");
}
if (favorite_fruits.includes(`water-melon`)) {
    console.log("You really like Water Melons.");
}
