"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a 
// function called show_magicians(), which prints the name of each 
// magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_names = ["James", "Mac", "Ori"];
function Show_magicians(magicians_names) {
    for (let name of magicians_names) {
        console.log(name);
    }
}
Show_magicians(magicians_names);
