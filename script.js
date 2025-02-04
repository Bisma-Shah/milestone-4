var _a;
// Add an event listener to the form with the ID 'resumeForm'
(_a = document.querySelector('#resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get references to form elements and cast them to the appropriate types
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var skillsElement = document.getElementById('skills');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var profilePictureElement = document.getElementById('profile-Picture');
    // Check if all form elements are available
    if (nameElement && emailElement && phoneElement && addressElement && skillsElement && educationElement && experienceElement && profilePictureElement) {
        // Retrieve values from the form elements
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var skills = skillsElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        // profile-image
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create a string with the formatted resume data
        var output = "\n    <h2>Personal Information</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile-Picture\" class=\"profile-Picture\">") : "", "\n\n    <div><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </div>\n    <div><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </div>\n    <div><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span> </div>\n    <div><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, " </span> </div>\n    <div><strong>Skills:</strong>  <span id=\"edit-skills\" class=\"editable\">").concat(skills, " </span> </div>\n    <div><strong>Education:</strong> <span id=\"edit-education\" class=\"editable\">").concat(education, " </span> </div>\n    <div><strong>Experience:</strong> <span id=\"edit-experience\" class=\"editable\">").concat(experience, " </span> </div>");
        // Get the element where the resume will be displayed
        var outputElement = document.getElementById('output');
        if (outputElement) {
            // Set the inner HTML of the output element to display the resume
            outputElement.innerHTML = output;
            outputElement.style.display = 'block'; // Show the output div after form submission
            // Make the fields editable
            makeEditable();
        }
    }
    else {
        // Log an error if one or more input fields are missing
        console.log('One or more input fields are missing');
    }
});
// Function to make the fields editable when clicked
function makeEditable() {
    // Select all elements with the 'editable' class
    var editableElements = document.querySelectorAll('.editable');
    // Add a click event listener to each editable element
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // If the element is a paragraph or span, allow editing
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                // Create an input element to replace the text content
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                // When the input loses focus, update the text content
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                // Hide the current element and insert the input for editing
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
