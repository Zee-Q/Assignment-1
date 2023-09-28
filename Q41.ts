// 41.	Magicians: Make a array of magician’s names. Pass the array to a 
// function called show_magicians(), which prints the name of each 
// magician in the array.

let magicians_names: string[] = ["James", "Mac", "Ori"];
function Show_magicians(magicians_names: string[]){
    for (let name of magicians_names){
        console.log(name);
    }
}
Show_magicians(magicians_names);