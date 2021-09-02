var config = {
    apiKey: "AIzaSyApVqJko3FyN_4yeTCYXcLzLIfcL9zlFcs",
    authDomain: "chefconnect-57fd7.firebaseapp.com",
    databaseURL: "https://chefconnect-57fd7-default-rtdb.firebaseio.com/",
    projectId: "chefconnect-57fd7",
    storageBucket: "chefconnect-57fd7.appspot.com"
};
firebase.initializeApp(config);
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