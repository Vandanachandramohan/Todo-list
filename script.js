let email = document.getElementById("inputEmail4");
let pwd = document.getElementById("inputPassword4");


/* form-validation */
    
function validate() {

    if(email.value.trim()==""|| pwd.value.trim()==""){
        alert("Values cannot be empty");
        return false;
    }
    if(email.value=="admin"&& pwd.value=="12345") {
        return true;
    }
    else{
        alert("invalid emailid or pwd");
        return false;
    }
}



