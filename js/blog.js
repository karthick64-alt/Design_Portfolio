// Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Blog Search Functionality
    const blogSearch = document.getElementById('blogSearch');
    const blogPosts = document.querySelectorAll('.blog-post');

    if (blogSearch) {
        blogSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();

            blogPosts.forEach(post => {
                const title = post.querySelector('h3 a').textContent.toLowerCase();
                const description = post.querySelector('p').textContent.toLowerCase();
                const categories = Array.from(post.querySelectorAll('.badge')).map(badge => badge.textContent.toLowerCase()).join(' ');

                if (title.includes(searchTerm) || description.includes(searchTerm) || categories.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }

    // Category Filter
    const categoryLinks = document.querySelectorAll('.card-body a[href="#"]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim().toLowerCase();

            blogPosts.forEach(post => {
                const postCategories = Array.from(post.querySelectorAll('.badge')).map(badge => badge.textContent.toLowerCase());
                if (postCategories.includes(category)) {
                    post.style.display = 'block';
                    post.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});







