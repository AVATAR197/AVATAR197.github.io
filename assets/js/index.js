document.querySelector('.hamburger-button').addEventListener('click', () => {
    document.querySelector('.navbar-content').classList.toggle('show');
    document.querySelectorAll('.hm-div').forEach((e) => {
        e.classList.toggle('active');
    });
    document.querySelector('.hamburger-button').classList.toggle('posFixed');
});



