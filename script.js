// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// SMOOTH SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// ANIMATION SCROLL
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// FORM SUBMIT
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pendaftaran berhasil!");
});