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
	// Checks to see if the array or num parameters have a value 
	if (array === null || num === null)  {
		return "The input should be (array, num). Please try again";
	}
	// Checks to see if the num entered is greater than 0
	if (num < 0) {
		return "Please enter a postive value for num and try again";
	}
	// Checks to see if the num entered is greater than length of the array
	if (num > array.length) {
		return "There are only " + array.length + " items. Please reenter";
	}
	// Runs code as long as the other conditional statements are not true
	// Slice method at 0 starts at first element of the array (slice returns selected element as new array)
	return array.slice(0, num);
}

console.log(arrayOfItems(arrayOfDays, 5)); // Returns ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",]
console.log(arrayOfItems(arrayOfDays, -4)); // Returns "Please enter a positive value for num and try again"
console.log(arrayOfItems(arrayOfDays, 20)); // Returns "There are only 7 items. Please reenter"
console.log(arrayOfItems(arrayOfDays, null)); // Returns "The input should be (array, num). PLease try again"