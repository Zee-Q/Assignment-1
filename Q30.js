"use strict";
// 30.	Hello Admin: Make a array of five or more usernames, including the 
// name 'admin'. Imagine you are writing code that will print a greeting to
//  each user after they log in to a website. Loop through the array, and 
//  print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
// • If the username is 'admin', print a special greeting, such as Hello 
// admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for 
// logging in again.
const User_names = [`Admin`, `James`, `William`, `Jakson`, `Sara`];
for (const Name of User_names) {
    if (Name == `Admin`) {
        console.log("Hello " + Name + " would you like to see a status report?", "\n");
    }
    else {
        console.log("Hello " + Name + " thank you for logging in again.", "\n");
    }
}
