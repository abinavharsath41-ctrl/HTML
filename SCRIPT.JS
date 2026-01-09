window.onload = function () {
    alert("Welcome to Travel & Tourism Website!");
};


function showMessage() {
    alert("Thank you for exploring our destinations!");
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
