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
    $('.hide p').hide()
    $('#design-icon').click(function () {
      $('.design').toggle();
      $('.design').click(function () {
        $('#design-icon').toggle();
        $('#design-icon').hide();
      });
    });
    $('.cont2').hide()
    $('#tog2').click(function () {
      $('.cont2').toggle();
      $('.cont2').click(function () {
        $('#tog2').toggle();
      });
    });
    $('.cont3').hide()
    $('#tog3').click(function () {
      $('.cont3').toggle();
      $('.cont3').click(function () {
        $('#tog3').toggle();
      });
    });
   });