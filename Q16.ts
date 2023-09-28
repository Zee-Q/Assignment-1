// 16.	More Guests: You just found a bigger dinner table, so now more 
// space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to 
//  end of your program informing people that you found a bigger dinner 
//  table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add
//  one new guest to the end of your list.

// • Print a new set of invitation messages, one for each person in your list.


const guests: string[] = ["saba", "Fatimah", "Huma"];

// Add a print statement to inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guests.unshift("Asma");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Alia");

// Use append() (push() in JavaScript) to add one new guest to the end of the list
guests.push("Frah");

// Print a new set of invitation messages
for (const guest of guests) {
  console.log(`Dear ${guest}, please join us for dinner.`);
}
