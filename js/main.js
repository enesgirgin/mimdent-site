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
  if (!hero) return;

  const heroImages = [
    "images/katalog1.jpg",
    "images/katalog2.jpg",
    "images/katalog3.jpg",
    "images/katalog4.jpg",
    "images/katalog5.jpg"
  ];

  // Resimleri önceden yükle (preload)
  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  let currentIndex = 0;

  // İki slide elementi oluştur
  const slide1 = document.createElement("div");
  const slide2 = document.createElement("div");
  slide1.className = "hero-slide";
  slide2.className = "hero-slide";
  
  // İlk resmi yükle
  slide1.style.backgroundImage = `url('${heroImages[0]}')`;
  slide1.style.transform = "translateX(0)";
  slide2.style.transform = "translateX(100%)";
  
  // Hero'ya ekle (overlay'dan önce)
  const overlay = hero.querySelector(".hero-overlay");
  hero.insertBefore(slide1, overlay);
  hero.insertBefore(slide2, overlay);

  let activeSlide = slide1;
  let nextSlide = slide2;

  // Sağdan sola kayma fonksiyonu
  function slideImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
    
    // Yeni resmi hazırla
    nextSlide.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    nextSlide.style.transition = "none";
    nextSlide.style.transform = "translateX(100%)";
    
    // Küçük gecikme sonra animasyonu başlat
    setTimeout(() => {
      nextSlide.style.transition = "transform 0.8s ease-in-out";
      activeSlide.style.transition = "transform 0.8s ease-in-out";
      
      // Aktif slide sola kayar, yeni slide merkeze gelir
      activeSlide.style.transform = "translateX(-100%)";
      nextSlide.style.transform = "translateX(0)";
      
      // Slide'ları değiştir
      const temp = activeSlide;
      activeSlide = nextSlide;
      nextSlide = temp;
    }, 50);
  }

  // 5 saniyede bir değiştir
  setInterval(slideImage, 5000);
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
