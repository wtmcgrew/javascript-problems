// Write a JavaScript function that accepts a string as a parameter 
// and counts the number of vowels within the string.

/*

Step 1: Create a function and place a parameter that will accept a string

Step 2: Split each string into an array and store in variable named
arrayOfVowles

Step 3: Create a variable that is equal to an array of vowels and store it

Step 4: Loope each letter to see if it's included in each array of vowels.

Step 5: Set up counter for each vowel in for loop

Step 6. Return value to complete loop


*/

function numberOfVowels(str) {
	const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
	let currentVowelCount = 0;
	const arrayOfLetters = str.toLowerCase().split('');

	for (let counter = 0; counter < arrayOfLetters.length; counter++) {
		if (arrayOfVowels.includes(arrayOfLetters[counter])) {
			currentVowelCount += 1;
		}
	}

	return currentVowelCount;
}

console.log(numberOfVowels("How many vowels are in this sentence?"));
