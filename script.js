let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let konfirm = document.getElementById("konfirm")

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./src/visibility.svg";
    }else{
        password.type = "password";
        eyeicon.src = "./src/visibility_off.svg";
    }
}

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
});