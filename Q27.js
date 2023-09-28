"use strict";
// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an
//  if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is 
// printed for the appropriate color alien.
let allien_color = `green`;
if (allien_color == `green`) {
    console.log("You have just earned 5 points for shooting the alien.");
}
else if (allien_color == `yellow`) {
    console.log("You have just earned 10 points for shooting the alien.");
}
else {
    console.log("You have just earned 15 points for shooting the alien.");
}
console.log("\n");
//Now executing else if block 
let alien_color = `yellow`;
if (alien_color == `green`) {
    console.log("You have just earned 5 points for shooting the alien.");
}
else if (alien_color == `yellow`) {
    console.log("You have just earned 10 points for shooting the alien.");
}
else {
    console.log("You have just earned 15 points for shooting the alien.");
}
console.log("\n");
//Now executing else block 
let alien_colour = `red`;
if (alien_colour == `green`) {
    console.log("You have just earned 5 points for shooting the alien.");
}
else if (alien_colour == `yellow`) {
    console.log("You have just earned 10 points for shooting the alien.");
}
else {
    console.log("You have just earned 15 points for shooting the alien.");
}
