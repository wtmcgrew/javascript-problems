// Create an HTML page with a button and a P element with a link inside.
// Then, write a JavaScript function to get the HREF attribute of the link when 
// you click the button. When you click on it, display it on the webpage by 
// adding it as the text for another P element on the page.

/*

Step 1: Create a a button and a P element with lin side.

Step 2: Create a JavaScript funcction that will target the button element.

Step 3: Inside block of function, iterate the button to get the HREF link
when the button is clicked. Find which property that is best do this.

Step 4: Display the clicked button as text that is defined by another P
element on the webpage.

*/

function hrefLink() {
	document.getElementById("link").getAttribute("href");
	document.getElementById("appear").innerHTML = "https://www.espn.com";
}