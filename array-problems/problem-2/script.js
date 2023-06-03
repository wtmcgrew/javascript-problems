// Define a function that takes in an array of elements and joins them together 
// into a string separated by a comma with a space after the comma.

/*

Step 1: Define variable and initialize an array of items

Step 2: Create a function that takes in an array as parameter

Step 3: Find the correct property/method that can be used to separate
into a string separated by a commaa

Step 4: Return value in block of function

Step 5: Console log and call function


*/

let cars = ["Chrysler", "Dodge", "Jeep", "Fiat"];

/* Test to see if program works with different array
cars = ["Toyota", "Honda", "Hyundai", "Kia", "Mazda"]; */

const stringOfElemnts = function (array) {
	return array.join(", "); // toString method can be used but was instructed not to
}

console.log(stringOfElemnts(cars));