const jobsGrid = document.getElementById("jobsGrid");
const emptyState = document.getElementById("emptyState");
const searchForm = document.getElementById("searchForm");
const categoryPills = document.getElementById("categoryPills");
let activeCategory = "All";

function jobCard(job) {
  const phone = SITE_CONFIG.contact.whatsapp;
  const message = encodeURIComponent(`Hi, I'm interested in the "${job.title}" job listed on Wanted Work.`);
  return `<article class="job-card">
    <div class="job-image"><img src="${job.image || SITE_CONFIG.images.jobFallback}" alt="${job.title}" loading="lazy"><span>${job.type}</span></div>
    <div class="job-body"><p class="company">${job.company}</p><h3>${job.title}</h3>
      <div class="job-meta"><span>⌖ ${job.location}</span><span>${job.salary}</span></div>
      <a class="apply-btn" href="https://wa.me/${phone}?text=${message}" target="_blank" rel="noopener">Apply Now <span>→</span></a>
    </div>
  </article>`;
}

function renderJobs(jobs) {
  jobsGrid.innerHTML = jobs.map(jobCard).join("");
  emptyState.hidden = jobs.length !== 0;
}

function filterJobs() {
  const term = document.getElementById("searchInput").value.trim().toLowerCase();
  const location = document.getElementById("locationInput").value.trim().toLowerCase();
  const filtered = SITE_CONFIG.jobs.filter(job => {
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;
    const matchesTerm = !term || `${job.title} ${job.company} ${job.category}`.toLowerCase().includes(term);
    const matchesLocation = !location || job.location.toLowerCase().includes(location);
    return matchesCategory && matchesTerm && matchesLocation;
  });
  renderJobs(filtered);
}

const categories = ["All", ...new Set(SITE_CONFIG.jobs.map(job => job.category))];
categoryPills.innerHTML = categories.map(category => `<button type="button" class="${category === "All" ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
categoryPills.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryPills.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  filterJobs();
});

searchForm.addEventListener("submit", event => { event.preventDefault(); filterJobs(); document.getElementById("jobs").scrollIntoView({ behavior: "smooth" }); });
document.getElementById("filterBtn").addEventListener("click", () => categoryPills.scrollIntoView({ behavior: "smooth", block: "center" }));

document.getElementById("heroImage").src = SITE_CONFIG.images.hero;
document.getElementById("contactLink").href = SITE_CONFIG.contact.phoneLink;
document.getElementById("footerText").textContent = SITE_CONFIG.footerText;
document.getElementById("year").textContent = new Date().getFullYear();
renderJobs(SITE_CONFIG.jobs);
