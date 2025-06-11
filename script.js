// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});
document.querySelector(".toggle-skills-btn").onclick = function () {
  const skills = document.querySelector(".skills-list");
  skills.classList.toggle("show");
  this.textContent = skills.classList.contains("show")
    ? "Hide My Skills"
    : "Show My Skills";
};
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}
