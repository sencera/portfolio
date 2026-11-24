
// Mobile navigation
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    this.reset();
});
