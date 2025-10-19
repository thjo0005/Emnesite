/*************** Start - Burgermenu *********************/
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

function setAria(expanded) {
  if (burger) {
    burger.setAttribute("aria-expanded", expanded ? "true" : "false");
  }
}

function toggleMenu() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  const open = nav.classList.contains("active");
  document.body.classList.toggle("no-scroll", open);
  setAria(open);
}

if (burger && nav) {
  burger.addEventListener("click", toggleMenu);
  // Close menu when a link is clicked
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
      nav.classList.remove("active");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");
      setAria(false);
    }
  });
  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("active");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");
      setAria(false);
    }
  });
}
/*************** Slut - Burgermenu *********************/
