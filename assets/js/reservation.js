function reservationFormSubmit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let location = document.getElementById("location").value;
    let guests = document.getElementById("guests").value;

    let hob = document.getElementById("hob").value;
    let partyDate = document.getElementById("partyDate").value;
    let partyTime = document.getElementById("partyTime").value;
    let foodType = document.getElementById("foodType").value;
    let note = document.getElementById("note").value;
    let message = document.getElementById("message").value;
    if (name, mobile, location != "") {
        firebase.database().ref().child('reservation/').push({
            date: curday("/"),
            email: email,
            name: name,
            mobile: mobile,
            location: location,
            guests: guests,
            hob: hob,
            partyDate: partyDate,
            partyTime: partyTime,
            foodType: foodType,
            note: note,
            message: message,
        });
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#location").val("");
        $("#guests").val("");
        $("#hob").val("");
        $("#partyDate").val("");
        $("#partyTime").val("");
        $("#foodType").val("");
        $("#note").val("");
        $("#message").val("");
        alert("Thanks to submit your reservation with us. Our team will get in touch with you!")
    } else {
        alert("Please fill all the details!");
    }
}

$(function() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;

    $('#partyDate').attr('min', minDate);
});


function reservationSubmit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let location = document.getElementById("city").value;
    if (name != "" && mobile != "" && location != "") {
        firebase.database().ref().child('reservation/').push({
            date: curday("/"),
            email: email,
            name: name,
            mobile: mobile,
            location: location
        });
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#city").val("");
        $("#chef_list").empty();
        $(".form_area").addClass("hidden");
        alert("Thanks to submit your reservation with us. Our team will get in touch with you!")
    } else {
        alert("Please fill all the details!");
    }
}