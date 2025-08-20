// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-image")) {
    const src = e.target.getAttribute("data-src");
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }

  // Click outside image or on close button
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.style.display = "none";
  }
});
