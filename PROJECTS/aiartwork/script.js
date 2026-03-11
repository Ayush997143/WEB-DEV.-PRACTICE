document.addEventListener('DOMContentLoaded', () => {
    const moreLink = document.getElementById('show-more');
    const extra = document.getElementById('extra');
    const themeToggle = document.getElementById('theme-toggle');

    moreLink && moreLink.addEventListener('click', () => {
        extra.style.display = extra.style.display === 'block' ? 'none' : 'block';
        moreLink.textContent = extra.style.display === 'block' ? 'Show less' : 'Show more';
    });

    themeToggle && themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});