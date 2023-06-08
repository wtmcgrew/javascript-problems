/*
Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
*/

/*
Step 1: Initialize/define object of arrays

Step 2: Initialize/define function that will take in object as parameter

Step 3: Find property/method to sort title value

Step 4: Return results at end of function logic

Step 5: Console log results
*/

const groupOfDirectors = [
	{
		director : "Jordan Peele",
		title : "Us",
		year : 2019
	},
	{
		director : "John Singleton",
		title : "Rosewood",
		year : 1997
	},
	{
		director : "Spike Lee",
		title : "Do The Right Thing",
		year : 1989
	}	
];

function sortTitle (a, b) {
	// Targets/compares first and second elements of object
	if (a.title < b.title) {
		return -1; // Places first element before second element
	}
	if (a.title > b.title) {
		return 1; // Places second element after first element
	}
	else {
		return 0;
	}
}
	

	

console.log(groupOfDirectors.sort(sortTitle));