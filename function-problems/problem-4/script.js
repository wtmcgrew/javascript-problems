// Write a JavaScript function that iterates the integers 
// from 1 to 100. But for multiples of three print "Fizz" 
// instead of the number and for the multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz".

/*

Step 1: Create a function with parameter for numbers

Step 2: Create a for loop that will count from 1 to 100

Step 3: Create if else statements for numbers divisble by 3 and 5
	- Use Remainder (%) operator; if remainder equals 0, ot's divisible!
	- Make sure to start with 3 and 5 first so program won't skip

Step 4 End with else statement for numbers not dicisble by 3 and 5


*/

function fizzBuzz () {
	for (let integer = 1; integer < 101; integer++) {
		if (integer % 3 === 0 && integer % 5 === 0) console.log("FizzBuzz");
		else if (integer % 3 === 0) console.log("Fizz");
		else if (integer % 5 === 0) console.log("Buzz");
		else console.log(integer);
	}
}

fizzBuzz();