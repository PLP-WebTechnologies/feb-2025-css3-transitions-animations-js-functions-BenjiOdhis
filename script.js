// Animate button on click
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("bouncy");

  animateBtn.addEventListener("animationend", () => {
    animateBtn.classList.remove("bouncy");
  }, { once: true });
});

// Theme preference with localStorage
const themeSelect = document.getElementById("themeSelect");

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
    themeSelect.value = savedTheme;
  }
});

// Save theme preference and update class
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem("theme", selectedTheme);
  document.body.classList.toggle("dark-mode", selectedTheme === "dark");
});
