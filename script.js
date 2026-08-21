// Theme toggle with localStorage
const body = document.body;
const toggle = document.getElementById("theme-toggle");
const yearSpan = document.getElementById("year");

const savedTheme = localStorage.getItem("jw-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("jw-theme", mode);
});

// Footer year
yearSpan.textContent = new Date().getFullYear();
