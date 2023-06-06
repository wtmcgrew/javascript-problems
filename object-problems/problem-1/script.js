/*
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
Your JavaScript function should take in two parameters, the object and the key/property you want to delete.
*/

/*
Step 1: Create an object and store in variable

Step 2: Initialize and define function which takes in two paramaters (object and property to be deleted)

Step 3: Find correct mehtod/property to use in order to delete property

Step 4: Return object at end of function logic

Step 5: Console log results
*/

const favArtist = {
	name: "Nas",
	discography: 15,
	favAlbum: "Hip Hop is Dead",
	favSongs: ["I Gave You Power", "Made You Look", "One Mic", "Nas is Like"]
};

function deleteProperty (object, property) {{
	// The delete operator deletes a property from an object
	delete object[property]; // Could use .property if there were no arrays. Better to use bracket notation
	return object;
}}

console.log(deleteProperty(favArtist, "favSongs"));