const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("form");
const revealItems = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("show"));
}

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const alamat = document.getElementById("alamat").value.trim();
        const wali = document.getElementById("wali").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const jenjang = document.getElementById("jenjangPilihan").value;
        const catatan = document.getElementById("catatan").value.trim() || "-";

        const message = [
            "Assalamu'alaikum admin Pondok Pesantren Riyadlul 'Ulum Mentokan.",
            "",
            "Saya ingin mendaftar / meminta informasi lebih lanjut dengan data berikut:",
            `Nama calon santri: ${nama}`,
            `Asal daerah: ${alamat}`,
            `Nama orang tua / wali: ${wali}`,
            `Nomor WhatsApp: ${whatsapp}`,
            `Pilihan jenjang: ${jenjang}`,
            `Catatan: ${catatan}`
        ].join("\n");

        const url = `https://wa.me/6287832078969?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener");
    });
}
