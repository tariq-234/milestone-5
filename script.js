document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and display area
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // prevent page reload 
            // Collect values
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var education = document.getElementById('education').value;
            var experience = document.getElementById('experience').value;
            var skills = document.getElementById('skills').value;
            // Generate the resume content dynamically
            var resumeHtml = "\n                <h2><b>Resume</b></h2>\n                <h3><b>Personal Information</b></h3>\n                <p><b>Name:</b> ".concat(name, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n\n                <h3><b>Education</b></h3>\n                <p>").concat(education, "</p>\n\n                <h3><b>Experience</b></h3>\n                <p>").concat(experience, "</p>\n\n                <h3><b>Skills</b></h3>\n                <p>").concat(skills, "</p>\n            ");
            // Display the generated resume 
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHtml;
            }
            else {
                console.error("The resume display element is missing");
            }
        });
    }
    else {
        console.error("The form element is missing");
    }
});
