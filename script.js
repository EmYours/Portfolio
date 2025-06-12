// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});

const detailCard = document.querySelector('.project-details-card');
const detailTitle = document.getElementById('details-title');
const detailDesc = document.getElementById('details-description');
const detailImg = document.getElementById('details-image');
const closeBtn = document.getElementById('close-details-btn');

document.querySelectorAll('.show-project-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.project-title').textContent;
    const description = card.querySelector('.project-description').textContent;
    const image = card.querySelector('.project-image').src;

    detailTitle.textContent = title;
    detailDesc.textContent = description;
    detailImg.src = image;

    detailCard.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  detailCard.classList.add('hidden');
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}
