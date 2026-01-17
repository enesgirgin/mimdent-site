/* =========================
   HAMBURGER MENÜ
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const dropdown = document.querySelector(".dropdown");
  const dropdownLink = dropdown ? dropdown.querySelector("a") : null;

  // Hamburger menü toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // Dropdown toggle (mobil)
  if (dropdownLink && dropdown) {
    dropdownLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  // Dışarı tıklandığında menüyü kapat
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      // Hamburger menü dışına tıklandığında kapat
      if (menuToggle && nav && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
      }
      // Dropdown dışına tıklandığında kapat
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    }
  });

  // Pencere boyutu değiştiğinde menüyü sıfırla
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      if (menuToggle) menuToggle.classList.remove("active");
      if (nav) nav.classList.remove("active");
      if (dropdown) dropdown.classList.remove("open");
    }
  });
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
