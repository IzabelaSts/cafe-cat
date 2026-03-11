// Smooth scrolling for navigation links
document.querySelectorAll('a[href⁼"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAtribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Product hover animations
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('translateY(-15px)');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('translateY(-15px)');
    });
});


