function Melisa() {
    var name=document.getElementById("fullname").value;
    var email=document.getElementById("mail").value;
    var textarea=document.getElementById("textarea").value;
}
        if (name != "") {
            alert(name + " Your message has been received, thank you!");
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