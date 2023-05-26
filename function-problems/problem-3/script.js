// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count
// the number of occurrences of the specified letter 
// within the string.

/*

Step 1: Create a function with two parameters inside
parentheses

Step 2: Loop through the items using length method

Step 3: Return the count

Step 4: Console log the string and pick letter in second
argument


*/  

function numberOfOccurences (str, letter) {
	let letterCounter = 0;

	for (let counter = 0; counter < str.length; counter++) {
		if (str.toLowerCase().charAt(counter) == letter.toLowerCase()) {
			letterCounter += 1;
		}
	}
	return letterCounter;
}

console.log(numberOfOccurences ("youtube.com", "o"));