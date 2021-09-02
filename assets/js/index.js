let database = firebase.database();

var curday = function(sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (dd + sp + mm + sp + yyyy);
};

function contactFormSubmit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
    if (name, mobile, message != "") {
        firebase.database().ref().child('inquiry/').push({
            date: curday("/"),
            email: email,
            name: name,
            mobile: mobile,
            message: message,
        });
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#message").val("");
        alert("Inquiry generated, Please wait for call!")
    } else {
        alert("Trg again!");
    }
}