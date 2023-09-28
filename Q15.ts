// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
//  the name of the guest who can’t make it.
//  • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
//  you are inviting.
//  • Print a second set of invitation messages, one for each person who is still in your list.

let guests: string[] = ["Saba","Sana", "Fatimah","Huma"];

// Print the initial invitation messages
console.log("Initial Guest List:");
for (let guest of guests) {
    console.log(`Dear ${guest}, please join us for dinner.`);
}

// Name of the guest who can't make it
const guestWhoCantMakeIt: string = "Sana";

// Find the index of the guest who can't make it
const indexOfCancelledGuest: number = guests.indexOf(guestWhoCantMakeIt);

if (indexOfCancelledGuest !== -1) {
    // Replace the cancelled guest with a new guest
    guests[indexOfCancelledGuest] = "Asma";
    
    // Print the name of the guest who can't make it
    console.log(`${guestWhoCantMakeIt} can't make it.`);

    // Print the updated invitation messages
    console.log("Updated Guest List:");
    for (let guest of guests) {
        console.log(`Dear ${guest}, please join us for dinner.`);
    }
} else {
    console.log(`${guestWhoCantMakeIt} was not found in the guest list.`);
}