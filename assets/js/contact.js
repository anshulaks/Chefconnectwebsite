function contactFormSubmit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("subject").value;
    if (name, mobile, message != "") {
        firebase.database().ref().child('contact/').push({
            date: curday("/"),
            email: email,
            name: name,
            mobile: mobile,
            message: message,
            subject: subject,
        });
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#message").val("");
        $("#subject").val("");
        alert("Thanks to contact us. Our team will get in touch with you!")
    } else {
        alert("Please fill all the details!");
    }
}