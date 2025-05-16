// Toggle the menu on mobile devices
// This function toggles the visibility of the navigation menu when the hamburger icon is clicked
let isOpen = false;

function toggleMenu() {
  const navElement = document.querySelector(".nav-element");

  if (isOpen) {
    navElement.classList.remove("active");
  } else {
    navElement.classList.add("active");
  }

  isOpen = !isOpen;
}
document.querySelectorAll(".nav-element a").forEach((link) => {
  link.addEventListener("click", () => {
    const navElement = document.querySelector(".nav-element");
    navElement.classList.remove("active");
    isOpen = false;
  });
});

// This section implements carousel swiping behavior for the card carousel
const carouselTrack = document.querySelector(".carousel-track");
const carouselItems = document.querySelectorAll(".carousel-item");
const itemWidth = carouselItems[0].offsetWidth + 20;

let trackPosition = 0;
let scrollSpeed = 20;
let intervalId;
let isDragging = false;
let startPosition = 0;
let currentPosition = 0;
let totalWidth = itemWidth * carouselItems.length;
let cloneCount = 5;

function cloneItems() {
  const originalItems = Array.from(carouselItems);
  for (let i = 0; i < cloneCount; i++) {
    originalItems.forEach((item) => {
      carouselTrack.appendChild(item.cloneNode(true));
    });
  }
}

function moveTrack() {
  trackPosition -= 1;
  carouselTrack.style.transform = `translateX(${trackPosition}px)`;
  if (Math.abs(trackPosition) > totalWidth * cloneCount) {
    trackPosition = 0;
  }
}

function startScroll() {
  intervalId = setInterval(moveTrack, scrollSpeed);
}

function stopScroll() {
  clearInterval(intervalId);
}

function handleTouchStart(event) {
  isDragging = true;
  startPosition = event.touches[0].clientX;
  stopScroll();
}

function handleTouchMove(event) {
  if (!isDragging) return;
  currentPosition = event.touches[0].clientX;
  const diff = currentPosition - startPosition;
  carouselTrack.style.transition = "none";
  carouselTrack.style.transform = `translateX(${trackPosition + diff}px)`;
}

function handleTouchEnd() {
  isDragging = false;
  trackPosition += currentPosition - startPosition;
  carouselTrack.style.transition = "transform 0s linear";
  startScroll();
}

cloneItems();
startScroll();

carouselTrack.addEventListener("mouseenter", stopScroll);
carouselTrack.addEventListener("mouseleave", startScroll);

carouselTrack.addEventListener("touchstart", handleTouchStart);
carouselTrack.addEventListener("touchmove", handleTouchMove);
carouselTrack.addEventListener("touchend", handleTouchEnd);

// Overlay for Join Us
document.addEventListener("DOMContentLoaded", function () {
  const showFormBtn = document.getElementById("showJoinUsFormBtn");
  const formOverlay = document.getElementById("joinUsformOverlay");
  const closeFormBtn = document.getElementById("closeFormBtn");

  showFormBtn.addEventListener("click", function () {
    formOverlay.style.display = "flex";
  });

  closeFormBtn.addEventListener("click", function () {
    formOverlay.style.display = "none";
  });
  formOverlay.addEventListener("click", function (event) {
    if (event.target === formOverlay) {
      formOverlay.style.display = "none";
    }
  });
});

// Donate form overlay
document.addEventListener("DOMContentLoaded", function () {
  const showDonateFormBtn = document.getElementById("showDonateform");
  const donateFormOverlay = document.getElementById("showdonationoverlay");
  const closeDonateFormBtn = document.getElementById("closeDonateFormBtn");

  showDonateFormBtn.addEventListener("click", function () {
    donateFormOverlay.style.display = "flex";
  });

  closeDonateFormBtn.addEventListener("click", function () {
    donateFormOverlay.style.display = "none";
  });
  donateFormOverlay.addEventListener("click", function (event) {
    if (event.target === donateFormOverlay) {
      donateFormOverlay.style.display = "none";
    }
  });
});

// Testimonial Section
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // Testimonial Data (can be extended further)
  const testimonials = [
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr.Siddhtarth Kumar",
      position: "Secretary",
    },
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr. Alok Patel",
      position: "Vice President",
    },
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr. Depanshu Singh",
      position: "Past President",
    },
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr. Depanshu Singh",
      position: "Past President",
    },
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr. Depanshu Singh",
      position: "Secretary",
    },
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr. Depanshu Singh",
      position: "Secretary",
    },
  ];
  // Populate testimonial cards
  const testimonialContainer = document.querySelector(
    ".testimonial-card-container"
  );

  testimonials.forEach((testimonial, index) => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.setAttribute("data-aos", "fade-right");
    card.innerHTML = `
      <div class="testimonial-card-description">
        <span id="testimonial-card-icon"></span>
        <p class="testimonial-card-description">
          ${testimonial.description}
        </p>
      </div>
      <div>
        <span class="testimonial-card-position">
        <p id="testimonial-card-position">${testimonial.position}</p>
      </span>
      <div class="testimonial-card-name">
        <p id="testimonial-card-name">${testimonial.name}</p>
      </div>
    </div>
    `;
    testimonialContainer.appendChild(card);
  });

  const testimonialSection = document.getElementById("testimonial-section");
  testimonialSection.classList.add("visible");
});

// Form validation
function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

  const name = document.getElementById("name").value.trim();
  const enrollmentNo = document.getElementById("enrollment-no").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();

  // Name validation
  if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    document.getElementById("nameError").textContent = "Please enter a valid name.";
    isValid = false;
  }

  // Enrollment number validation
  if (!/^0192[A-Z]{2}\d{6}$/i.test(enrollmentNo)) {
    document.getElementById("enrollmentNoError").textContent = "Invalid enrollment number format.";
    isValid = false;
  }

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address.";
    isValid = false;
  }

  // Contact validation
  if (!/^[6-9]\d{9}$/.test(contact)) {
    document.getElementById("contactError").textContent = "Invalid phone number.";
    isValid = false;
  }

  return isValid;
}


// For navbar
const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active-link");
  }
});


//  Drag 'N Drop logic for donate overlay
const dropArea = document.getElementById("screenshot-container");
const inputFile = document.getElementById("screenshot");
const toast = document.getElementById("toast");

dropArea.addEventListener("click", () => inputFile.click());

inputFile.addEventListener("change", function () {
  if (this.files.length > 0) {
    showToast(`Selected file: ${this.files[0].name}`);
  }
});

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, () => {
    dropArea.classList.add("highlight");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, () => {
    dropArea.classList.remove("highlight");
  });
});

dropArea.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    inputFile.files = files;
    showToast(`Dropped file: ${files[0].name}`);
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 0);
}
