document.addEventListener("DOMContentLoaded", function () {
    const moreNewsBtn = document.createElement('button');
    moreNewsBtn.textContent = "Muat Berita Lainnya";
    document.querySelector('main').appendChild(moreNewsBtn);

    moreNewsBtn.addEventListener('click', function () {
        const newArticle = document.createElement('article');
        newArticle.innerHTML = `
            <h2>Judul Berita Tambahan</h2>
            <p>Berita tambahan yang dimuat secara dinamis menggunakan JavaScript.</p>
            <a href="#">Baca selengkapnya</a>
        `;
        document.querySelector('main').appendChild(newArticle);
    });
});
