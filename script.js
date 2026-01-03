// Replace these with your real links
const GITHUB_URL = "https://github.com/Raneet-Roy";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-linkedin/"; // <-- change

document.getElementById("githubTop").href = GITHUB_URL;
document.getElementById("githubBottom").href = GITHUB_URL;
document.getElementById("linkedinTop").href = LINKEDIN_URL;
document.getElementById("linkedinBottom").href = LINKEDIN_URL;

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
