function joinFormSubmit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let location = document.getElementById("location").value;
    if (name, mobile, location != "") {
        firebase.database().ref().child('joinus/').push({
            date: curday("/"),
            email: email,
            name: name,
            mobile: mobile,
            location: location,
        });
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#location").val("");
        alert("Thanks to join us. Our team will get in touch with you!")
    } else {
        alert("Please fill all the details!");
    }
}