"use strict";
// 42.	Great Magicians: Start with a copy of your program from 
// Exercise 39. Write a function called make_great() that modifies the 
// array of magicians by adding the phrase the Great to each magician’s name. 
Object.defineProperty(exports, "__esModule", { value: true });
// Call show_magicians() to see that the list has actually been modified.
let magicians_names = ["James", "Mac", "Ori"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
make_great(magicians_names);
show_magicians(magicians_names);
