// 19.	Dinner Guests: Working with one of the programs from Exercises 14
//  through 18, print a message indicating the number of people you are 
//  inviting to dinner.


const guests = ["saba","sana", "fatimah","huma"];

console.log("I am inviting " + guests.length + " people to dinner.");

// Changing Guest List
const guestWhoCantMakeIt = "huma";
const newGuest = "Sana";

guests[guests.indexOf(guestWhoCantMakeIt)] = newGuest;

console.log("I am sorry, " + guestWhoCantMakeIt + " cant make it to dinner.");
console.log("I am now inviting " + guests.length + " people to dinner.");

// More Guests
const newGuests = ["Uzma", "Faiza", "Tania"];

guests.unshift(newGuests[0]);
guests.splice(1, 0, newGuests[1]);
guests.push(newGuests[2]);

console.log("I found a bigger dinner table, so I am inviting " + guests.length + " people to dinner.");

// Shrinking Guest List
console.log("I can only invite two people to dinner.");

while (guests.length > 2) {
  const guest = guests.pop();
  console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}

console.log(`I am still inviting ${guests[0]} and ${guests[1]} to dinner.`);


// Printing the number of guests
console.log("I am inviting " + guests.length + " people to dinner.");
