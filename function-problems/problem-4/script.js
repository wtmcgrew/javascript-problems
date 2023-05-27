// Write a JavaScript function that iterates the integers 
// from 1 to 100. But for multiples of three print "Fizz" 
// instead of the number and for the multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz".

/*

Step 1: Create a function with parameter for numbers

Step 2: Create a for loop that will count from 1 to 100

Step 3: Create variable with empty string to hold Fizz/Buzz

Step 4 Finish loop with console.log of integer and word)

*/

function fizzBuzz () {
	for (let integer = 1; integer < 101; integer++) {
		let word = "";

		if (integer % 3 === 0) {
			word += "Fizz";
		}
		if (integer % 5 === 0) {
			word += "Buzz";
		}
		console.log(integer, word);
	}
}

fizzBuzz();