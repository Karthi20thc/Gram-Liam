const logo = document.querySelector(".logo");
console.log(logo);

logo.addEventListener("click", function () {
  logo.style.color = "orangered";
});

// mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling

// const sectionctaEl = document.querySelector(".cta");
// const ctaLink = document.querySelector(".cta-link");

// sectionctaEl.scrollIntoView({ behavior: "smooth" });
// Smooth scrolling animation

// ----------------------------------------------------- //
const allLinks = document.querySelectorAll("a:link");

// here ex- link = <a class="main-nav-link" href="#how">How it Works</a>
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
