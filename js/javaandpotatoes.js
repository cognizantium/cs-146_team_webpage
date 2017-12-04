function handleFormSubmit() {
	if(window.event){
		window.event.preventDefault();
	}
	// Get value of the image URL
    var imageURL = document.getElementById("input-URL").value;
    var description = document.getElementById("description").value;
    
    // Pass URL to addNewPost()
    addNewPost(imageURL,description);
}


/**
 * This function creates the following div and appends it to the #usersubs element
	<div class="usersub">
		<img src="{imgURL}">
		</div>
	</div>
 */
function addNewPost(imageURL, description) {
    // Create the parent div
    var div = document.createElement("div");
    div.className = "usersub";
	
    // Create image element
    var img = document.createElement("img");
    img.src = imageURL;

    //Create the description
    var imagedescription = document.createElement("span");
    var textnode = document.createTextNode(description);
    imagedescription.appendChild(textnode);
    
    // Add the image to the div
    div.appendChild(img);
    div.appendChild(imagedescription);

        
    // Add the submission to the usersubs section
    var variable = document.getElementById("usersubs");
    variable.appendChild(div);
}
