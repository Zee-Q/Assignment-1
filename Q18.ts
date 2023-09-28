// 18.	Seeing the World: Think of at least five places in the world you’d 
// like to visit.

// • Store the locations in a array. Make sure the array is not in 
// alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual 
// list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the 
// order of the original list.

// • Show that your array is still in its original order by printing it 
// again.

// • Reverse the order of your list. Print the array to show that its order
//  has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array
//  to show that its order has been changed.

//  • Sort to change your array so it’s stored in reverse alphabetical 
//  order. Print the list to show that its order has changed.


const places = ["Tokyo", "Paris", "London", "Rome", "New York"];

console.log("The original order of the array:");
console.log(places);

console.log("\nPrinting the array in alphabetical order without modifying the actual list:");
console.log(places.sort());

console.log("\nShowing that the array is still in its original order:");
console.log(places);

console.log("\nPrinting the array in reverse alphabetical order without changing the order of the original list:");
console.log(places.sort((a, b) => b.localeCompare(a)));

console.log("\nShowing that the array is still in its original order:");
console.log(places);

console.log("\nReversing the order of the list:");
places.reverse();
console.log(places);

console.log("\nReversing the order of the list again:");
places.reverse();
console.log(places);

console.log("\nSorting the array so it’s stored in alphabetical order:");
places.sort();
console.log(places);

console.log("\nSorting to change your array so it’s stored in reverse alphabetical order:");
places.sort((a, b) => b.localeCompare(a));
console.log(places);