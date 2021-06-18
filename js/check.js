var inputElements = document.querySelectorAll('.input-group input');
for (var i=0;i<inputElements.length;i++){
    inputElements[i].oninput = function(e){
        e.target.style.borderColor = "green";
        if (e.target.value==""){
            e.target.style.borderColor = "red";
        }
    }

}
for (var i=0;i<inputElements.length;i++){
    inputElements[i].onclick = function(e){
        document.addEventListener("click", (evt) => {
            const flyoutElement = inputElements[i];
            let targetElement = evt.target; // clicked element
    
            do {
                if (targetElement == flyoutElement) {
                    e.target.style.borderColor = "green";
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
    
            if (e.target.value==""){
                e.target.style.borderColor = "red";
            }
            
        });
    }
}
var email = document.getElementById("emailsu");
email.oninput = function(e){
    if (!validateEmail(email.value)){
        email.style.borderColor= "red";
    } else {
        email.style.borderColor= "green";
    }
}
var pass = document.getElementById("passsu");
var cpass = document.getElementById("cpasssu");
cpass.oninput = function(e){
    if (cpass.value != pass.value){
        cpass.style.borderColor= "red";
    } else {
        cpass.style.borderColor= "green";
    }
}
function validateFormSI(e) {
    var user = document.getElementById("usersi");
    var pass = document.getElementById("passsi");
    if (user.value == "" || pass.value == "") {
        if (user.value == ""){
            user.style.borderColor = "red";
        } 
        if (pass.value == "") {
            pass.style.borderColor = "red";
        }
        return false;
    } 
    let query = "?username=" + user.value + "&password=" + pass.value;
    e.href = "trangchu.html"+query
}
function validateForm(e) {
    var email = document.getElementById("emailsu");
    var user = document.getElementById("usersu");
    var pass = document.getElementById("passsu");
    var cpass = document.getElementById("cpasssu");
    if (email.value == "" || user.value == "" || pass.value == "" || cpass.value == "" || user.value== "admin") {
        if (email.value == ""){
            email.style.borderColor = "red";
        }
        if (user.value == "" || user.value == "admin"){
            user.style.borderColor = "red";
        }
        if (pass.value == ""){
            pass.style.borderColor = "red";
        }
        if (cpass.value == ""){
            cpass.style.borderColor = "red";
        }
        return false;
    } 
    if (pass.value != cpass.value){
        pass.style.borderColor = "red";
        cpass.style.borderColor = "red";
        return false;
    } 
    if (validateEmail(email.value)==false){
        email.style.borderColor = "red";
        return false;
    }
    let query = "?username=" + user.value + "&password=" + pass.value;
    e.href = "trangchu.html"+query
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}