document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var scrollUpBtn = document.querySelector(".scroll-up-btn");
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".navbar .menu");
  var menuBtnIcon = document.querySelector(".menu-btn i");

  window.addEventListener("scroll", function () {
    // sticky navbar on scroll script
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // scroll-up button show/hide script
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // slide-up script
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // removing smooth scroll on slide-up button click
    document.documentElement.style.scrollBehavior = "auto";
  });

  // applying again smooth scroll on menu items click
  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // toggle menu/navbar script
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuBtnIcon.classList.toggle("active");
  });

  // typing text animation script
  function startTypingAnimation(selector, strings) {
    new Typed(selector, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  startTypingAnimation(".typing", [
    "Student",
    "Web Developer",
    "Programmer"
  ]);
  startTypingAnimation(".typing-2", [
    "Student",
    "Web Developer",
    "Programmer"
  ]);



  // owl carousel script
  var carousel = document.querySelector(".carousel");
  if (carousel) {
    new Flickity(carousel, {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      autoPlay: 2000,
      pauseAutoPlayOnHover: true,
      prevNextButtons: false,
      pageDots: false,
      responsive: {
        0: {
          cellAlign: "center",
          contain: false,
        },
        600: {
          cellAlign: "left",
          contain: true,
        },
        1000: {
          cellAlign: "left",
          contain: true,
        },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navbarMenu = document.querySelector(".navbar .menu");

  menuBtn.addEventListener("click", function () {
    // Toggle the 'active' class on the menu button
    menuBtn.classList.toggle("active");

    // Toggle the 'active' class on the navbar menu
    navbarMenu.classList.toggle("active");
  });
});

// Side Navigation Bar Close While We Click On Navigation Links
function toggleMobileMenu() {
  var navbarMenu = document.querySelector(".navbar .menu");
  var menuBtnIcon = document.querySelector(".menu-btn i");

  // Toggle the 'active' class on the navbar menu
  navbarMenu.classList.toggle("active");

  // Toggle the 'active' class on the menu button
  menuBtnIcon.classList.toggle("active");
}
