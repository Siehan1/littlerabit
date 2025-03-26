document.addEventListener("DOMContentLoaded", function () {
    const lastRead = document.getElementById("lastRead");
    const endRead = document.getElementById("endRead");

    if (!lastRead || !endRead) {
        console.error("Elemen lastRead atau endRead tidak ditemukan!");
        return;
    }

    // Data buku
    const books = [
        { title: "Ikan Tipis", author: "S. Titik Widia", image: "./src/image16-1.png", lastRead: true },
        { title: "Cepat Kering, Bunga Kamboja", author: "Leila S. Chudori", image: "./src/image14.png", lastRead: true },
        { title: "Bumi", author: "Tere Liye", image: "./src/image15.png", lastRead: false },
        {title:"Si cemong Coak", author: "Iwok Abqary & Ikku Nala", image:"./src/image5.png", lastRead:false},
        {title:"Si Pejuang Air", author: "Ervina Hasibuan", image:"./src/image15.png", lastRead:false},
        { title:"Hari Lebaran Yaya", author: "Hasna Taqqiya", image:"./src/image19.png", lastRead: true},
        { title: "Jadi Apa ya?", author: "Nabila Adani", image:"./src/image20.png", lastRead:false},
        { title:"Festival Aku datang", author:"Tantra Rahmadia", image:"./src/image21.png", lastRead:true},
        {title:"Membuat Apam", author:"Kiki Putri", image:"./src/image22.png", lastRead: true}
    ];

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    function addBook(book) {
        console.log("Menambahkan buku:", book.title);  // Cek apakah buku masuk

        const card = document.createElement("div");
        card.classList.add("card-list");

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="keterangan">
                <h3>${truncateText(book.title, 12)}</h3>
                <h4>${book.author}</h4>
            </div>
        `;

        if (book.lastRead) {
            lastRead.appendChild(card);
        } else {
            endRead.appendChild(card);
        }
    }


    books.forEach(addBook);
});


document.addEventListener("DOMContentLoaded", function () {
    const ratingContainer = document.querySelector(".rating");
    const ratingValue = parseFloat(ratingContainer.querySelector("p").textContent); // Ambil angka rating
    ratingContainer.innerHTML = ""; // Hapus teks angka rating

    const fullStar = "./src/star.svg"; // Bintang penuh
    const halfStar = "./src/half-star.svg"; // Setengah bintang (pastikan ada gambar ini)
    const emptyStar = "./src/star-2.svg"; // Bintang kosong (pastikan ada gambar ini)

    let starCount = Math.floor(ratingValue); // Ambil angka bulat (4 dari 4.5)
    let hasHalfStar = ratingValue % 1 !== 0; // Cek apakah ada desimal 0.5

    // Tambahkan bintang penuh
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement("img");
        star.src = fullStar;
        star.classList.add("rating-star");
        ratingContainer.appendChild(star);
    }

    // Tambahkan setengah bintang jika perlu
    if (hasHalfStar) {
        let half = document.createElement("img");
        half.src = halfStar;
        half.classList.add("rating-star");
        ratingContainer.appendChild(half);
    }

    // Tambahkan bintang kosong untuk melengkapi total 5
    let emptyCount = 5 - starCount - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyCount; i++) {
        let empty = document.createElement("img");
        empty.src = emptyStar;
        empty.classList.add("rating-star");
        ratingContainer.appendChild(empty);
    }

    // Tambahkan teks rating di sebelah kanan
    let ratingText = document.createElement("p");
    ratingText.textContent = ratingValue;
    ratingText.classList.add("rating-text");
    ratingContainer.appendChild(ratingText);
});



// rekomendasi buku
document.addEventListener("DOMContentLoaded", function () {
    const recommendedBooks = document.getElementById("recommendedBooks");

    if (!recommendedBooks) {
        console.error("Elemen recommendedBooks tidak ditemukan!");
        return;
    }

    // Data buku
    const books = [
        {title:"Ikan tipis", author:"S. Titik WIdia", image:"./src/image15.png"},
        { title: "Cepat Kering, Bunga Kamboja", author: "Leila S. Chudori", image: "./src/image 14.png"},
        {title:"Membuat Apam", author:"Kiki Putri", image:"./src/image 22.png"},
        { title:"Festival Aku datang", author:"Tantra Rahmadia", image:"./src/image 21.png"},
        { title: "Cepat Kering, Bunga Kamboja", author: "Leila S. Chudori", image: "./src/image 14.png"},
    ];

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    function addBook(book) {
        console.log("Menambahkan buku:", book.title); // Debugging log

        const card = document.createElement("div");
        card.classList.add("card-list");

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="keterangan">
                <h3>${truncateText(book.title, 12)}</h3>
                <h4>${book.author}</h4>
            </div>
        `;

        recommendedBooks.appendChild(card);
    }

    books.forEach(addBook);
});

// baca buku
// Array gambar yang akan digunakan
const images = [
    "./src/baca1.png",
    "./src/folderbaca/Screenshot 2025-03-14 102227 1.png",
    "./src/folderbaca/buku3.png",
    "./src/folderbaca/buku4.png",
    "./src/folderbaca/buku5.png",
    "./src/folderbaca/buku6.png",
    "./src/folderbaca/buku7.png",
    "./src/folderbaca/buku8.png",
    "./src/folderbaca/buku9.png",
    "./src/folderbaca/buku10.png",
    "./src/folderbaca/buku11.png",
    "./src/folderbaca/buku12.png",
    "./src/folderbaca/buku13.png",
    "./src/folderbaca/buku14.png",
    "./src/folderbaca/buku15.png",
    "./src/folderbaca/buku16.png",
    "./src/folderbaca/buku17.png",
    "./src/folderbaca/buku18.png",
    "./src/folderbaca/buku19.png",
    "./src/folderbaca/buku20.png",
    "./src/folderbaca/buku21.png",
    "./src/folderbaca/buku22.png"
    

];

let currentPage = 0;

const pageImage = document.getElementById("pageImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Tampilkan halaman pertama saat load
pageImage.src = images[currentPage];

nextBtn.addEventListener("click", () => {
    if (currentPage < images.length - 1) {
        currentPage++;
        pageImage.src = images[currentPage];
    }

    checkLastPage();
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        pageImage.src = images[currentPage];
    }

    checkLastPage();
});

function checkLastPage() {
    if (currentPage === images.length - 1) {
        finishBtn.style.display = "block"; // Tampilkan tombol selesai
    } else {
        finishBtn.style.display = "none"; // Sembunyikan saat belum di halaman terakhir
    }
}

// Jika tombol "Selesai" diklik, kembali ke beranda
finishBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // Ganti dengan halaman beranda
});

// Jika tombol "Cancel" ditekan, kembali ke beranda
cancelBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // Ganti dengan halaman beranda
});