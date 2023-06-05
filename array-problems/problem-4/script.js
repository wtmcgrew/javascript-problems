// Write a JavaScript function to remove duplicate numbers 
// from an array of numbers.
// NOTE: Do NOT use the Set method.

/*

Step 1: Define/initialize varaible of an array of numbers

Step 2: Define/initialize function with array as paramater

Step 3: Find a method that can be used to remove duplicate numbers
that do not use the Set method

Step 4: Return value

Step 5: Console log results outside of function

*/

const arrayOfNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 8, 8, 9, 9];

function removeDuplicates (array) {
	let newArray = []; // Creates empty array


    for(let counter = 0; counter < array.length; counter++) {
    	/*
        The following loops over each element of the array and 
        adds to a new array only it tha element is not already
        there

        If new array does NOT (!) contain passed through array at counter,
		add (push) new array element at counter

        Push means to add new item at the end of the array


        */
        if(!newArray.includes(array[counter])) {
            newArray.push(array[counter]);
        }
    }
    return newArray;
}

console.log(removeDuplicates(arrayOfNumbers));



	