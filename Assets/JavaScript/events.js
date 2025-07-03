document.addEventListener("DOMContentLoaded", function () {
  const showEventsBtn = document.getElementById("show-events");
  const showProjectsBtn = document.getElementById("show-projects");
  const eventSection = document.getElementById("event-section");
  const projectSection = document.getElementById("project-section");

  // Default: show event section and hide project section
  eventSection.classList.add("active");
  projectSection.classList.remove("active");

  showEventsBtn.addEventListener("click", function () {
    eventSection.classList.add("active");
    projectSection.classList.remove("active");
  });

  showProjectsBtn.addEventListener("click", function () {
    projectSection.classList.add("active");
    eventSection.classList.remove("active");
  });
});