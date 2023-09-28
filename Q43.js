"use strict";
// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and 
// store it in a separate array. 
Object.defineProperty(exports, "__esModule", { value: true });
// Call show_magicians() with each array to show that you have one array of 
// the original names and one array with the Great added to each magician’s
//  name.
let magicians_names = ["James", "Mac", "Ori"];
function show_magicians(magicians_names) {
    for (let name of magicians_names) {
        console.log(name);
    }
}
function make_great(magicians_names) {
    let great_magicians = [];
    for (let name of magicians_names) {
        great_magicians.push(`${name} the Great`);
    }
    return great_magicians;
}
let great_magicians = make_great(magicians_names);
console.log('Original magicians:');
show_magicians(magicians_names);
console.log('Great magicians:');
show_magicians(great_magicians);
