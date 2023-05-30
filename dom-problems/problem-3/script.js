// Create an HTML page with a dropdown list with three items in it, 
// then write a JavaScript function that displays the number of items 
// and displays the item in the list when you select from the dropdown.

/*

Step 1: Create dropdown list with three items on HTML page.

Step 2: Create JS function that will display the number of items
and display the item in the list. Look up "HTML select onchange"

Step 3: Use a for loop to grab all the text values of each
option from the Select element. Put them into array, and
turn array into string to be displayed in HTML


*/


function creditCardList() {
	const myCreditCards = document.getElementById("creditcards");	
	
	const numberOfItems = document.getElementById("creditcards").length;
	console.log(numberOfItems);

	const selectedItem = myCreditCards.options[myCreditCards.selectedIndex].value;

	let stringOfItems = "";

	for (let counter = 0; counter < myCreditCards.length; counter++) {
		stringOfItems = stringOfItems + myCreditCards.options[counter].text + ", ";
	}

	document.getElementById("choice").innerHTML = stringOfItems;	
}

