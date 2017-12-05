/* I pledge my honor that I have abided by the Stevens Honor System
Team Member:  Graham Howard
  Signature:  /s/ Graham Howard
Team Member:  Kyle Moissinac
  Signature:  /s/ Kyle Moissinac
Team Member:  Nick Primamore
  Signature:  /s/ Nick Primamore
Team Member:  Sergio Scardigno
  Signature:  /s/ Sergio Scardigno
Team Member:  Sean Seneviratne
  Signature:  /s/ Sean Seneviratne */

window.addEventListener("load", function() {
    addImageEvents();
});

//Event listener
function addImageEvents() {
    var images = document.getElementsByTagName("img");
    for(let image of images){
        if(image.id != 'logo'){
            image.onclick = () => {
                alert(image.alt);
            }
        }
    }
}

window.addEventListener("load", function() {
    addImageEvents();
});

function addImageEvents() {
    var images = document.getElementsByTagName("img");
    console.log(images);

    for (var i = 1; i < images.length; ++i) {
        images[i].onmouseover = function(e) {
            console.log("stuff");
        }
    }
    for (var i = 1; i < images.length; ++i) {
        images[i].onmouseout = function(e) {
            console.log("stuff");
        }
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
function handleFormSubmit() {
	if(window.event){
		window.event.preventDefault();
	}
	// Get value of the image URL
    var imageURL = document.getElementById("input-URL").value;
    
    var description = document.getElementById("description").value;
    var category = document.getElementById("input-picture").value;
    
    // Pass URL to addNewPost()
    addNewPost(imageURL,description, category, slider.value);
}


/**
 * This function creates the following div and appends it to the #usersubs element
	<div class="usersub">
		<img src="{imgURL}">
		</div>
	</div>
 */
function addNewPost(imageURL, description, category, sliderValue) {
    // Create the parent div
    var div = document.createElement("div");
    div.className = "usersub";
	
    // Create image element
    var img = document.createElement("img");
    img.src = imageURL;

    //Create the description
    var imagedescription = document.createElement("div");
    imagedescription.className="container";
    var caption = document.createElement("p");
    caption.innerHTML = `Description: ${description}`;
    caption.className="dstyling"
    var type = document.createElement("p");
    type.innerHTML = `Image Type: ${category}`
    type.className = "cstyling"
    var potatoness = document.createElement("p");
    potatoness.innerHTML = `Potatoness: ${sliderValue}`
    potatoness.className = "pstyling"
    
    
    imagedescription.appendChild(type);
    imagedescription.appendChild(potatoness);
    imagedescription.appendChild(caption);
    
    
    // Add the image to the div
    div.appendChild(img);
    div.appendChild(imagedescription);

        
    // Add the submission to the usersubs section
    var variable = document.getElementById("usersubs");
    variable.appendChild(div);
}
