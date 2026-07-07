// Smooth welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Suhani's Portfolio 🚀");
});

// Highlight active navbar link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
// Cards Animation
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .achievement-card"
);

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "0.6s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 200);
});