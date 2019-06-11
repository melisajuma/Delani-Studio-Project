$(document).ready(function () {
    var name = document.getElementById("fullname").value;
        var email = document.getElementById("mail").value.indexOf("@");
        var textarea = document.getElementById("textarea").value;
    $("#userInputs").submit(function (event) {
    
        if (name !== "" || email==" " || textarea==" ") {
            alert("Kindly check your details");
        } else {
            alert(fullname + " we have  received your message. Thank you for reaching out to us.");
        }
        
    });

    //TOGGLE
    $('.hide p').hide();
    $('#design').click(function () {
        $('#design p').toggle();
        $('#design img').toggle();
    });
    $('#dev').click(function () {
        $('#dev p').toggle();
        $('#dev img').toggle();
    });
    $('#product').click(function () {
        $('#product p').toggle();
        $('#product img').toggle();
    });
});