"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Make_Album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(Make_Album('Michae JAckson', 'Thriller'));
console.log(Make_Album('AC/DC', 'Black in Black'));
console.log(Make_Album('Mac', 'The Chain', 4));
