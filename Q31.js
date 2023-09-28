"use strict";
// 31.	No Users: Add an if test to Exercise 28 to make sure the list of 
// users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct 
// message is printed.
const User_names = [`Admin`, `James`, `William`, `Jakson`, `Sara`];
if (User_names.length == 0) {
    console.log("We need to find some users.", "\n");
}
for (let i = User_names.length - 1; i >= 0; i--) {
    console.log(User_names.splice(i, 1));
}
console.log(User_names.length);
if (User_names.length == 0) {
    console.log("We need to find some users.", "\n");
}
