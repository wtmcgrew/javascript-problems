/*
Create an object, then write a JavaScript function that checks whether an object contains the specified key.
*/

/*
Step 1: Initialize/define object

Step 2: Initialize/define function and set object as parameter

Step 3: Find property/method that targets a specified key

Step 4: Console log results
*/

const car = {
	make: "Toyota",
	model: "Camry",
	year: 2024
};

function specifiedKey (object, item) {
	/* 
	hasOwnProperty() method: 
	Returns true if the specified key/property is a direct property of the object (even if the value is null or undefined)
	Returns false if the property is inherited, or has not been declared at all
	*/
	return object.hasOwnProperty(item);
}

console.log(specifiedKey(car, "make")); // true
console.log(specifiedKey(car, "model")); // true
console.log(specifiedKey(car, "year")); // true
console.log(specifiedKey(car, "color")); // false
