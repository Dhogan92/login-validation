function showHidePassword() {

    let x = document.getElementById("password-info");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var attempts = 3;
function validateLogin() {

    let emailInfo = document.forms["myForm"]["email-input"].value;
    let passwordInfo = document.forms['myForm']['password-input'].value;
   
    if (emailInfo === 'username' && passwordInfo === 'password') {
        alert('Login Success')
        location = '/main.html'; /** Page Redirect Location */
        return true;
    } else {
        attempts --;
        alert("Login Failed You Have " + attempts + " Attempts Left");
        if ( attempts === 0){
            document.getElementById("email-info").disabled = true;
            document.getElementById("password-info").disabled = true;
            return false;
        }
    }
}


function signUp() {
    document.getElementById("signup-form").style.visibility = "visible";
    document.getElementById("signup-form").style.opacity = "1";
}


function backkToLogin() {
    document.getElementById("signup-form").style.visibility = "hidden";
    document.getElementById("signup-form").style.opacity = "0";
}

/* function validateSignUp() {
    let emailInfo = document.forms["mySignUp"]["email-input"].value;
    let passwordInfo = document.forms["mySignUp"]["password-input"].value;

    if(passwordInfo < 8){
        alert("Password Must Be 8 Characters In Length")
        return true;
    } else {
        return false;
    }
} */