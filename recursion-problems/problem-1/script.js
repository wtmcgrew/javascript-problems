//  Write a JavaScript function to calculate the factorial of a number.

/*
Step 1: Initialize/define variable for a number

Step 2: Initialize/define function that takes in number as a parameter

Step 3: Find correct method/property to find factoral of a number

Step 4: Return results at end of function logic

Step 5: Console log results
*/

function factorial (num) {
	if (num < 0) {
		return "Please enter positive value for num"; // Test case to make sure a positive value is entered
	}
	/* 
	Factorial of a positive integer (number) is the sum of multiplication of all the integers smaller than that positive integer
	Example: 3 * 2 * 1 = 6
	*/
	if (num === 0) {
		return 1; // The factorial of 1 will always be 1 (1 * 1 = 1); in mathematics the factorial of 0 is also 1
	}
	else {
		return (num * factorial(num - 1)); 
	}
	/*
	The number 6 will revert to else statement
	Then it will countdown (6, 5, 4, 3, 2, 1) until if statement is met
	*/
}

console.log(factorial(6)); // 720 (6 * 5 * 4 * 3 * 2 * 1 = 720)
console.log(factorial(-1)); // Please enter positive value for num