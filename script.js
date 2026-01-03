// TODO: Update these to your real URLs
const GITHUB_URL = "https://github.com/Raneet-Roy";
const LINKEDIN_URL = "https://www.linkedin.com/in/Raneet-Roy/";

function setLink(id, url){
  const el = document.getElementById(id);
  if (!el) return;
  el.href = url;
}

setLink("githubLink", GITHUB_URL);
setLink("githubLink2", GITHUB_URL);
setLink("linkedinLink", LINKEDIN_URL);
setLink("linkedinLink2", LINKEDIN_URL);

document.getElementById("year").textContent = new Date().getFullYear();
