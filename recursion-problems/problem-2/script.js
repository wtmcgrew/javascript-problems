// Write a JavaScript function to compute the sum of an array of integers.

/*
Step 1: Intialize/define function and set array as parameter

Step 2: Find method/property to compute the sum of an array of integers

Step 3: Return result at end of function logic

Step 4: Consloe log results
*/

function findSum (arr) {
	if (arr.length === 1) {
		return arr[0]; // If array length is at 1, start at first element
	}
	else {
		return arr.pop() + findSum(arr);
	}
	/*
	The pop() method removes the last element of an array
	Ex. 5 + (1 + 2 + 3 + 4)
	*/
}

console.log(findSum([1, 2, 3, 4, 5])); // 15