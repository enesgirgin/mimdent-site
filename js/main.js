/* =========================
   MOBİL DROPDOWN MENU
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });

    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});

/* =========================
   HERO SLIDER
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  if (!hero) return; // 👈 hero olmayan sayfalarda patlamasın

  const heroImages = [
    "images/katalog1.jpg",
    "images/katalog2.jpg",
    "images/katalog3.jpg",
    "images/katalog4.jpg",
    "images/katalog5.jpg"
  ];

  let currentImage = 0;
  hero.style.backgroundImage = `url('${heroImages[0]}')`;

  setInterval(() => {
    currentImage = (currentImage + 1) % heroImages.length;
    hero.style.backgroundImage = `url('${heroImages[currentImage]}')`;
  }, 5000);
});

/* =========================
   ACCORDION (SSS)
========================= */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("active");
    });
  });
});
