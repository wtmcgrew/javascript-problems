// Define a function that takes in an array of numbers/integers 
// and returns the sorted version of that array, greatest to least. 
// (Note: do NOT use the "reverse" method.)

/*

Step 1: Define and initialize an array of integers inside a variable

Step 2: Define and initiliaze a function with array as parameter

Step 3: Find the right array method to sort integers from greatest to least

Step 4: Console log results

*/

const arrayOfNumbers = [8, 3, 2, 9, 4, 7, 1, 6, -9, 20];

function sortedNumbers (array) {
	/* 
	Comparison function: Compares all values in the array; 2 at a time
	Negative value means a will be before b (a > b)
	Positive value means b will be before a (b > a)
	If equal to 0 they will be right next to each other (a = b)
	*/

	return array.sort(function (a, b) {
		return b - a; 
	})
}

console.log(sortedNumbers(arrayOfNumbers));