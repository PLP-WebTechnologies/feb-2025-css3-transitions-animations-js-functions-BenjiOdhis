// 1. Event Handling
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
  alert("🎉 Button clicked!");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

const secretBox = document.getElementById("secretBox");
secretBox.addEventListener("dblclick", () => {
  alert("🤫 Secret action triggered!");
});

document.addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 2. Interactive Elements
const changeTextBtn = document.getElementById("changeTextBtn");
changeTextBtn.addEventListener("click", () => {
  changeTextBtn.textContent = "You changed me!";
  changeTextBtn.style.backgroundColor = "#28a745";
  changeTextBtn.style.color = "white";
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// 3. Form Validation
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  let valid = true;

  if (!email.includes("@") || !email.includes(".")) {
    alert("❌ Enter a valid email address.");
    valid = false;
  }

  if (password.length < 8) {
    alert("❌ Password must be at least 8 characters long.");
    valid = false;
  }

  if (!valid) e.preventDefault();
});
