"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
//  name, print a message to them. The text of each message should be the same, but each message should be
// personalized with the person’s name.
let friendsName = ["saba", "sana", "fatimah", "huma"];
for (let name of friendsName) {
    console.log(`You are invited to dinner ${name}`);
}
