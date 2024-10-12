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
// Toggle mobile menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('nav ul');

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Modal functionality
const modal = document.getElementById('newsModal');
const closeBtn = document.querySelector('.close-btn');
const readMoreBtns = document.querySelectorAll('.read-more');

// Show modal when "Read More" is clicked
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Hide modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide modal when clicking outside modal content
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('.news-grid article');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
});
const articlesData = [
    {
        title: "New Innovations in Tech",
        content: "Technology is evolving rapidly with new innovations every day.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Economic Trends for 2024",
        content: "Experts are predicting significant changes in the economy this year.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Health Tips for a Better Life",
        content: "Simple health tips that can lead to a healthier lifestyle.",
        image: "https://via.placeholder.com/300x200"
    }
];

// Function to render articles dynamically
function renderArticles() {
    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = '';

    articlesData.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <a href="#" class="read-more">Read More</a>
        `;
        newsGrid.appendChild(articleElement);
    });
}

// Call the render function to display articles
renderArticles();
const popularArticles = [
    {
        title: "Tech Innovations in 2024",
        content: "A look at the top tech innovations that will change our lives in 2024.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Healthy Living Tips",
        content: "Discover the best tips for a healthier lifestyle.",
        image: "https://via.placeholder.com/300x200"
    }
];
function renderPopularArticles() {
    const popularGrid = document.getElementById('popularArticles');
    popularGrid.innerHTML = '';

    popularArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <a href="#" class="read-more">Read More</a>
        `;
        popularGrid.appendChild(articleElement);
    });
}

// Panggil fungsi untuk merender berita populer
renderPopularArticles();
async function fetchArticles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.slice(0, 5); // Mengambil 5 artikel pertama
}

async function renderFetchedArticles() {
    const articles = await fetchArticles();
    const newsGrid = document.querySelector('.news-grid');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.body}</p>
            <a href="#" class="read-more">Read More</a>
        `;
        newsGrid.appendChild(articleElement);
    });
}

// Panggil fungsi untuk merender artikel yang di-fetch
renderFetchedArticles();
