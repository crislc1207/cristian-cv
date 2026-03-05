
/* ==========================================
   ANIMACIÓN AL HACER SCROLL (APARICIÓN SUAVE)
========================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    observer.observe(section);
});


/* ==========================================
   PEQUEÑO EFECTO DINÁMICO EN EL BOTÓN
========================================== */

const downloadBtn = document.querySelector(".btn-download");

if (downloadBtn) {

    downloadBtn.addEventListener("mouseenter", () => {
        downloadBtn.style.transform = "scale(1.05)";
    });

    downloadBtn.addEventListener("mouseleave", () => {
        downloadBtn.style.transform = "scale(1)";
    });
}
