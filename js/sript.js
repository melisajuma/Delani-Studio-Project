$(document).ready(function () {
    $("#userInputs").submit(function (event) {
        var name = $("#fName").val();
        if (name != "") {
            alert(name + " thanks for sending a message.");
        } else {
            alert("Please fill in your details");
        }
        event.preventDefault();
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