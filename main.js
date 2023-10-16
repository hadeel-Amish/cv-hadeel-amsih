let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});
//typing effect

let typed = new Typed(".auto-input", {
  strings: ["Web Development!", "Front-End Development!", "Designer!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

//active link state on scroll

//get all links
let navLink = document.querySelectorAll("nav ul li a");
console.log(navLink);
let sections = document.querySelectorAll("section");
console.log(sections);
window.addEventListener("scroll", function () {
  const scrollPos = this.window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLink.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
