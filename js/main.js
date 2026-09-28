const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    io.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-in"));
}

const topBar = document.querySelector(".top");
let lastY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (!topBar) return;
    topBar.style.opacity = y > 40 && y > lastY ? "0.55" : "1";
    lastY = y;
  },
  { passive: true }
);
