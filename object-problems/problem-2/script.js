/*- 
Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and console logs the first and last names of all the people.
*/

/*
Step 1: Initialize/define array of people objects

Step 2: Initialize/define function that take in array as parameter

Step 3: Find array method that logs two properties (first and last names) of all the people

Step 4: Console log first namd nad last name at end of function logic

Step 5: Call function
*/

const groupsOfPeople = [
	{
		firstName : "John",
		lastName : "Doe",
		age : 25
	},
	{
		firstName : "Sally",
		lastName : "Smith",
		age : 23
	},
	{
		firstName : "Joseph",
		lastName : "Thomas",
		age : 34
	},
	{
		firstName : "Connie",
		lastName : "Phillips",
		age : 32
	}	
];

function onlyNames (objects) {
	// forEach calls a function for each property in object
	objects.forEach(function (item) {
		console.log(item.firstName + " " + item.lastName);
	});
}

onlyNames(groupsOfPeople);