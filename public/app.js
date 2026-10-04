document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("[data-mobile-menu]");
  const links = document.querySelector("[data-mobile-links]");
  if (menu && links) {
    menu.addEventListener("click", () => links.classList.toggle("is-open"));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll("[data-print-resume]").forEach((btn) => {
    btn.addEventListener("click", () => window.open("/resume.html", "_blank", "noopener"));
  });
});