// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#btnSubmit").click(function () {
    var totPrice = 0;

    // validate the numbers before submitting
    if ($("#numLessons").val() < 1) {
        alert("Please enter at least 1 lesson")
    }
    else if ($("#lessonLength").val() < 0.5) {
        alert("Please select at least half an hour for a lesson")
    }
    else {
        totPrice = $("#numLessons").val() * $("#lessonLength").val() * $("#priceHour").val();

        $("#totalPrice").attr("value", totPrice);
    }


})