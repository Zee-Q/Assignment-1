// 17.	Shrinking Guest List: You just found out that your new dinner table 
// won’t arrive in time for the dinner, and you have space for only two
// guests.

// • Start with your program from Exercise 16. Add a new line that prints
//  a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain
//  in your list. Each time you pop a name from your list, print a message 
//  to that person letting them know you’re sorry you can’t invite them to 
//  dinner.

// • Print a message to each of the two people still on your list, letting 
// them know they’re still invited.

const guests2: string[] = ["Asma","Saba","Alia","Fatima","Huma", "Farah"];

console.log("I can only invite two people for dinner.");

while (guests2.length > 2) {
  const guest = guests2.pop();
  console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I'm still inviting ${guests2[0]} and ${guests2[1]} to dinner.`);

guests2.pop();
guests2.pop();

console.log("My guest list is now empty.");
 