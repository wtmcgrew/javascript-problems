// Write a JavaScript function that takes in two parameters, 
// an array and a number (n), and return the first n elements of that array.

/*

Step 1: Define a variable creating a variable of items

Step 2: Define a function that contains two parameters for array and number

Step 3: Test first by calling function

Step 4: Use index to target array, and do index again to target each element
of the array. Define a variable to contain this

Step 5: Create loop that includes array and number that will return the first
2 elements of array


*/

const arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const arrayOfItems = function (array, num) {
	if (array === null || num === null)  {
		return "The input should be (array, number). Please try again";
	}
	if (num < 0) {
		return "Please enter a postive value for num and try again";
	}
}