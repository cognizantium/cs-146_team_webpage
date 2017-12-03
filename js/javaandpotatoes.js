function handleFormSubmit() {
	// Get values of inputs
	// Pass values to addNewPost()
    var imageURL = document.getElementById("input-URL").value;
    
    addNewPost(imageURL);
}


/**
 * This function create the following div and append it to the #post-list element
	<div class="post">
		<img src="{imgURL}" alt="{description}">
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div for opacity 
 * transitions in the post-overlay div
 */


function addNewPost(imageURL) {
	// Create the parent post div
    var div = document.createElement("div");
    div.classList.add("usersub");

	// Create image element
    var img = document.createElement("img");
    img.src = imageURL;


	// Add all child elements (order matters)

    div.appendChild(img);

        
	// Add post element to post list
    var variable = document.getElementById("usersubs");
    variable.appendChild(div);
}
