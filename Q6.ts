// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and
//  end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
//  Print the name once, so the whitespace around the name is displayed.
//   Then print the name after striping the white spaces.
let personName:string = "\t Ali \n"
console.log("name with space:",personName);
// Stripping name
let stripping_name: string = personName.trim();
console.log("Name withoutspace:",stripping_name)