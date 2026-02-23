// hover effect image
const images = document.querySelectorAll(".image-section img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});