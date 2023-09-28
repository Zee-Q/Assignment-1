// 2.	Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName:string= "Hello Eric,would you like to learn some Python today?"
console.log(personName)

// 3.	Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
// task 2 :store pesron name and print it in title case lower case and upper case
let personName1:string = "ALi";
let lowercaseName = personName1.toLowerCase();
console.log("Lower case:", lowercaseName)

// to upper case

let uppercaseName:string = personName1.toUpperCase();
console.log("Upper case name:", uppercaseName)

// to title case
let firstChar:string = personName1.slice(0,1); 
console.log(firstChar)
let firstCharUpperCase = firstChar.toUpperCase();
let restOfName = personName1.slice(1,personName1.length);
let titleCaseName = firstCharUpperCase + restOfName.toLowerCase();
console.log("Title Case Name:", titleCaseName)