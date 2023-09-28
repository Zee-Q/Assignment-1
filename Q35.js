"use strict";
// 35.	Animals: Think of at least three different animals that have a 
// common characteristic. Store the names of these animals in a list, and 
// then use a for loop to print out the name of each animal. • Modify your 
// program to print a statement about each animal, such as A dog would make 
// a great pet. • Add a line at the end of your program stating what these 
// animals have in common. You could print a sentence such as Any of these 
// animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let Animals = [`Lion`, `Tiger`, `Cheetah`];
for (let Name of Animals) {
    console.log(Name + "\n");
}
//Modified Loop Below
for (let Name of Animals) {
    console.log("A " + Name + " would make a great pet.", "\n");
}
console.log("They are all carnivorous predators and have sharp teeth and claws for hunting and capturing prey.");
