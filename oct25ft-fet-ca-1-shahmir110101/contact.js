// contact.js

$(document).ready(function () {

    function updateContactInfo() {
        // 3 variables to store user input
        let email = "";
        let telephone_number = "";
        let address = "";

        // Prompt user for Email and validate format
        do {
            email = prompt("Please enter your email address:");
            if (email === null) return; // User cancelled
            if (!email.includes("@") || !email.includes(".")) {
                alert("Invalid email format. Please enter a valid email.");
            }
        } while (!email.includes("@") || !email.includes("."));

        // Prompt user for telephone number
        telephone_number = prompt("Please enter your telephone number:");
        if (telephone_number === null) return; // User cancelled

        // Prompt user for address
        address = prompt("Please enter your address:");
        if (address === null) return; // User cancelled

        // Update HTML using jQuery selectors
        // Email
        $("#contactDetails .col-md-4:eq(1) p.text-muted").text(email);
        // Telephone
        $("#contactDetails .col-md-4:eq(0) p.text-muted").text(telephone_number);
        // Address
        $("#contactDetails .col-md-4:eq(2) p.text-muted").text(address);

        // Print to console
        console.log(`From: ${email}`);
        console.log(`Contact: ${telephone_number}`);
        console.log(`Address: ${address}`);
    }

    // Add button dynamically to contact section
    const contactButton = $('<button class="btn btn-primary mt-3">Update Contact Info</button>');
    $("#contact .container").append(contactButton);

    // Button click triggers function
    contactButton.click(updateContactInfo);

});
