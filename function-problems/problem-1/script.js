//Write a JavaScript function that accepts a string as a 
//parameter and find the longest word within the string.

/*

Step 1: Write a function that will accept a string
as a parameter.

Step 2: Split each string into an array and store in
variable called arrayOfWords.

Step 3: Define a variable called longestWord and leave an emptry
string.

Step 4:Create a for loop to loop through each arrayOfWords
using the length method.

Step 5. Create if else statement that will stop at longestWord
if array is greater than or equal to longestWord length method.

6. Return the results of longestWord on function block

7. Log into console to check results

*/

function longestWordLength (words) {
	let arrayOfWords = words.split(" ");
	let longestWord = "";
	for (i = 0; i < arrayOfWords.length; i++) {
		if (arrayOfWords[i].length >= longestWord.length) {
			longestWord = arrayOfWords[i];
		}
	}
	return longestWord
}

/*

console.log(longestWordLength("Memorial Day is on May 29th"));

/* This will result in the answer of Memorial