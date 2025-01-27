/* =====================================================
   Resume section tabs and tab contents
===================================================== */

// const resumeTabs = document.querySelectorAll(".resume-tab");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = resumeTabs.querySelectorAll(".resume-tab-content");

// var resumeTabNav = function (resumeTabClick) {
//   resumeTabContent.forEach((resumeTabContent) => {
//     resumeTabContent.style.displey = "none";
//     resumeTabContent.classList.remove("active");
//   });

//   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//     resumePortfolioTabBtn.classList.remove("active");
//   });

//   resumeTabContents[resumeTabClick].style.display = "block";

//   setTimeout(() => {
//     resumeTabContents[resumeTabClick].classList.add("active");
//   }, 100);

//   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// };

// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//   resumePortfolioTabBtn.addEventListener("click", () => {
//     resumeTabNav(i);
//   });
// });

/* =====================================================
   Service modal open/close function
===================================================== */

const serviceCardWithModals = document.querySelectorAll(
  ".service-container .card-with-modal"
);
serviceCardWithModals.forEach((serviceCardWithModal) => {
  const serviceCard = serviceCardWithModal.querySelector(".service-card");
  const serviceBackDrop = serviceCardWithModal.querySelector(
    ".service-modal-backdrop"
  );
  const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
  const serviceModal = serviceCardWithModal.querySelector(".service-modal");

  serviceCard.addEventListener("click", () => {
    serviceBackDrop.style.display = "flex";
    setTimeout(() => {
      serviceBackDrop.classList.add("active");
    }, 100);
    setTimeout(() => {
      serviceModal.classList.add("active");
    }, 100);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      serviceModal.classList.remove("active");
      serviceBackDrop.classList.remove("active");
    }, 100);
    setTimeout(() => {
      serviceBackDrop.style.display = "none";
    }, 500);
  });
});
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.

document.addEventListener("DOMContentLoaded", () => {
  const portfolioTabs = document.querySelector(".portfolio-tabs");
  const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
  const cardsWithModals = document.querySelectorAll(
    ".portfolio-container .card-with-modal"
  );

  portfolioTabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const filter = tabBtn.getAttribute("data-filter");
      cardsWithModals.forEach((cardWithModal) => {
        if (filter === "all" || cardWithModal.classList.contains(filter)) {
          cardWithModal.classList.remove("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = "1";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        } else {
          cardWithModal.classList.add("hidden");
          setTimeout(() => {
            cardWithModal.style.opacity = "0";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        }
      });
      // Add active class to the clicked tab button.
      portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
      tabBtn.classList.add("active");
    });
  });
});

// Open/Close Portfolio modals.

const portfoliocardsWithModals = document.querySelectorAll(
  ".portfolio-container .card-with-modal"
);

portfoliocardsWithModals.forEach((portfoliocardWithModal) => {
  const portfolioCard = portfoliocardWithModal.querySelector(".portfolio-card");
  const portfolioBackDrop = portfoliocardWithModal.querySelector(
    ".portfolio-modal-backdrop"
  );
  const portfolioModal =
    portfoliocardWithModal.querySelector(".portfolio-modal");
  const modalCloseBtn =
    portfoliocardWithModal.querySelector(".modal-close-btn");

  portfolioCard.addEventListener("click", () => {
    portfolioBackDrop.style.display = "flex";

    setTimeout(() => {
      portfolioBackDrop.classList.add("active");
    }, 300);
    setTimeout(() => {
      portfolioModal.classList.add("active");
    }, 300);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      portfolioBackDrop.style.display = "none";
    }, 500);
    setTimeout(() => {
      portfolioBackDrop.classList.remove("active");
      portfolioModal.classList.remove("active");
    }, 100);
  });
});

/* =====================================================
   Testimonial Swiper
===================================================== */

var swiper = new Swiper(".rus-client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.
