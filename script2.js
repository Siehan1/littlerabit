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
        { title: "Cepat Kering, Bunga Kamboja", author: "Leila S. Chudori", image: "./src/image 14.png", lastRead: true },
        { title: "Bumi", author: "Tere Liye", image: "./src/image15.png", lastRead: false },
        {title:"Si cemong Coak", author: "Iwok Abqary & Ikku Nala", image:"./src/image5.png", lastRead:false},
        {title:"Si Pejuang Air", author: "Ervina Hasibuan", image:"./src/image15.png", lastRead:false},
        { title:"Hari Lebaran Yaya", author: "Hasna Taqqiya", image:"./src/image 19.png", lastRead: true},
        { title: "Jadi Apa ya?", author: "Nabila Adani", image:"./src/image20.png", lastRead:false},
        { title:"Festival Aku datang", author:"Tantra Rahmadia", image:"./src/image 21.png", lastRead:true},
        {title:"Membuat Apam", author:"Kiki Putri", image:"./src/image 22.png", lastRead: true},
        {title:"Tidak bisa tidak", author:"Lenny Puspita Ekawaty", image:"./src/image 23.png", lastRead: true}
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
