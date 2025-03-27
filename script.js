document.addEventListener("DOMContentLoaded", function () {
    let eyeicon = document.getElementById("eyeicon");
    let password = document.getElementById("password");
    let konfirm = document.getElementById("konfirm");

    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Periksa apakah elemen ditemukan sebelum mengakses properti atau menambahkan event listener
    if (eyeicon && password) {
        eyeicon.onclick = function () {
            if (password.type === "password") {
                password.type = "text";
                eyeicon.src = "./src/visibility.svg";
            } else {
                password.type = "password";
                eyeicon.src = "./src/visibility_off.svg";
            }
        };
    }

    if (nextBtn && carousel) {
        nextBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    if (prevBtn && carousel) {
        prevBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -320, behavior: "smooth" });
        });
    }
});


// daftar
document.addEventListener("DOMContentLoaded", function () {
    let registerBtn = document.getElementById("registerBtn");
    let emailInput = document.querySelector(".email");
    let usernameInput = document.querySelector(".username");
    let passwordInput = document.getElementById("password");
    let konfirmInput = document.getElementById("konfirm");

    let alertBox = document.getElementById("custom-alert");
    let alertMessage = document.getElementById("alert-message");
    let alertOk = document.getElementById("alert-ok");

    function showAlert(message, redirect = null) {
        alertMessage.textContent = message;
        alertBox.classList.add("show");

        alertOk.onclick = function () {
            alertBox.classList.remove("show");
            if (redirect) {
                window.location.href = redirect;
            }
        };
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault();

            let email = emailInput.value.trim();
            let username = usernameInput.value.trim();
            let password = passwordInput.value;
            let konfirm = konfirmInput.value;

            if (!email || !username || !password || !konfirm) {
                showAlert("Semua kolom harus diisi!");
                return;
            }

            if (password !== konfirm) {
                showAlert("Konfirmasi password tidak cocok!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let existingUser = users.find(user => user.email === email);
            if (existingUser) {
                showAlert("Email sudah terdaftar! Silakan gunakan email lain.");
                return;
            }

            let newUser = { email, username, password };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            showAlert("Pendaftaran berhasil! Silakan login.", "login.html");
        });
    }
});


// login
document.addEventListener("DOMContentLoaded", function () {
    let loginBtn = document.getElementById("loginBtn");
    let emailInput = document.querySelector(".email");
    let passwordInput = document.getElementById("password");

    let alertBox = document.getElementById("custom-alert");
    let alertMessage = document.getElementById("alert-message");
    let alertOk = document.getElementById("alert-ok");

    function showAlert(message, redirect = null) {
        alertMessage.textContent = message;
        alertBox.classList.add("show");

        alertOk.onclick = function () {
            alertBox.classList.remove("show");
            if (redirect) {
                window.location.href = redirect;
            }
        };
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let email = emailInput.value.trim();
            let password = passwordInput.value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                showAlert("Login berhasil!", "beranda.html"); // Redirect ke halaman utama setelah klik OK
            } else {
                showAlert("Email atau password salah!");
            }
        });
    }
});

