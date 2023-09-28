"use strict";
// 34.	Pizzas: Think of at least three kinds of your favorite pizza. Store 
// these pizza names in a array, and then use a for loop to print the name 
// of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Modify your for loop to print a sentence using the name of the pizza 
// instead of printing just the name of the pizza. For each pizza you should 
// have one line of output containing a simple statement like I like 
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let Favorite_Pizza = [`Veggie Pizza`, `Pepperoni Pizza`,
    `Meat Pizza`];
for (let Pizza of Favorite_Pizza) {
    console.log(Pizza, "\n");
}
//Modified Loop Below
for (let Pizza of Favorite_Pizza) {
    console.log("I like " + Pizza, "\n");
}
console.log("Pizza, you are the cheesy delight that makes my heart skip a beat.", "\n", "Your warm, doughy embrace satisfies my cravings like no other.", "\n", "From your perfectly melted cheese to the heavenly aroma of your toppings, pizza, you hold a special place in my heart that no other food can ever replace.", "\n", "With every delicious bite of pizza, I fall deeper in love with its exquisite combination of flavors.", "I really love pizza.");
