// aboutMe.js

$(document).ready(function () {

    function updateAboutMe() {
        // 1️⃣ Update "Something about me" texts
        const aboutTexts = [
            "I love coding in JavaScript and exploring new frameworks.",
            "My hobbies include reading sci-fi novels and playing chess.",
            "I enjoy hiking and capturing nature photography on weekends."
        ];

        // Replace all <p> tags in the about section with custom texts
        const aboutParagraphs = $("#about p");
        aboutParagraphs.each(function(index) {
            if (index < aboutTexts.length) {
                $(this).text(aboutTexts[index]);
            }
        });

        // 2️⃣ Update the student name
        $(".aboutme").text("Shah Mir - the code master");

        // 3️⃣ Click effect for "Something about me" content
        aboutParagraphs.click(function() {
            $(this).css({
                "background-color": "powderblue",
                "color": "white"
            });
        });
    }

    // Call the function on page load
    updateAboutMe();

});
