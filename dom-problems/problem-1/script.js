// Create a basic HTML page with a P element and a button on it.
// Then, write a JavaScript function to set the background color 
// of that paragraph using an "onclick" event added to a button in the UI.

/*

Step 1: Define id of P element on HTML document

Step 2: Create button on HTML document and define backgroundColor method

Step 3: On JS document, define the function backgroundColor that will
iterate the id of "introsection" to change backgroundCOlor

Step 4: Use the style.backgroundColor property to set the background color
whenever the button is clicked on the HTML document


*/

function backgroundColor() {
	document.getElementById("introsection").style.backgroundColor = "blue";
}