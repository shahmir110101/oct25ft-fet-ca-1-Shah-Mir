// accessibility.js

$(document).ready(function () {

    // Store original font size of all <p> tags
    $("p").each(function () {
        const originalSize = $(this).css("font-size");
        $(this).attr("data-original-size", originalSize);
    });

    // Function to handle toggle switch
    $("#accessToggle").change(function () {
        if ($(this).prop("checked")) {
            // Toggle is ON - increase font size by 20%
            $("p").each(function () {
                const original = parseFloat($(this).attr("data-original-size"));
                const newSize = original * 1.2;
                $(this).css("font-size", newSize + "px");
            });
        } else {
            // Toggle is OFF - revert to original size
            $("p").each(function () {
                const original = $(this).attr("data-original-size");
                $(this).css("font-size", original);
            });
        }
    });

});
