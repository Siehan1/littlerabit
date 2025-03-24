let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./src/visibility.svg";
    }else{
        password.type = "password";
        eyeicon.src = "./src/visibility_off.svg";
    }
}