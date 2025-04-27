  document.addEventListener("DOMContentLoaded", function () {
    const showEventsBtn = document.getElementById("show-events");
    const showProjectsBtn = document.getElementById("show-projects");
    const eventSection = document.getElementById("event-section");
    const projectSection = document.getElementById("project-section");

    showEventsBtn.addEventListener("click", function () {
      eventSection.classList.add("active");
      projectSection.classList.remove("active");
    });

    showProjectsBtn.addEventListener("click", function () {
      projectSection.classList.add("active");
      eventSection.classList.remove("active");
    });
  });
