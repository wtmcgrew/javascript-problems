/*
Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length 
(tells you how many items are in it) of the object. -->
*/

/*
Step 1: Initialize/define object with 3 items

STep 2: Initialize/define function that accepts object

Step 3: Find method/property that will tell the length of the object

Step 4: Return value at end of function logic

Step 5: Console log results
*/

const christmasDay = {
	month: "December",
	day: 25,
	year: 2023
};

function lengthOfObject (object) {
	/* 
	Object.keys() returns an Array Iterator object with the keys of an object
	Then use the length property to obtain the lenngth of the object
	*/
	return Object.keys(object).length;
}

console.log(lengthOfObject(christmasDay));