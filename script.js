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

    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let email = emailInput.value.trim();
            let username = usernameInput.value.trim();
            let password = passwordInput.value;
            let konfirm = konfirmInput.value;

            // Validasi input tidak boleh kosong
            if (!email || !username || !password || !konfirm) {
                alert("Semua kolom harus diisi!");
                return;
            }

            // Validasi password harus sama dengan konfirmasi password
            if (password !== konfirm) {
                alert("Konfirmasi password tidak cocok!");
                return;
            }

            // Cek apakah email sudah terdaftar
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let existingUser = users.find(user => user.email === email);
            if (existingUser) {
                alert("Email sudah terdaftar! Silakan gunakan email lain.");
                return;
            }

            // Simpan user baru ke localStorage
            let newUser = { email, username, password };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html"; // Redirect ke halaman login
        });
    }
});

// login
document.addEventListener("DOMContentLoaded", function () {
    let loginBtn = document.getElementById("loginBtn");
    let emailInput = document.querySelector(".email");
    let passwordInput = document.getElementById("password");

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let email = emailInput.value.trim();
            let password = passwordInput.value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                alert("Login berhasil!");
                window.location.href = "beranda.html"; // Redirect ke halaman utama
            } else {
                alert("Email atau password salah!");
            }
        });
    }
});
