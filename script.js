// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("active");
});

// Animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});
// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
