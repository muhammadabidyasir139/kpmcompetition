document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-pills .nav-link");
  const aboutSection = document.getElementById("about-section");
  const visionSection = document.getElementById("vision-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      if (this.textContent.includes("Visi 2045")) {
        aboutSection.classList.add("hidden");
        visionSection.classList.remove("hidden");
      } else {
        aboutSection.classList.remove("hidden");
        visionSection.classList.add("hidden");
      }
    });
  });
});
