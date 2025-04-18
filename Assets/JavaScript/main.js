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

// This function enables smooth scrolling to sections of the page
// Card swiping
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
        <p id="testimonial-card-description">
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
  const name = document.getElementById("name").value;
  const enrollmentNo = document.getElementById("enrollment-no").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;

  // Clear previous error messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("enrollmentNoError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("contactError").innerText = "";

  // Validate fields
  if (!name) {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
  }
  if (!enrollmentNo) {
    document.getElementById("enrollmentNoError").innerText =
      "Enrollment number is required.";
    isValid = false;
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address.";
    isValid = false;
  }
  if (!contact || !/^\d{10}$/.test(contact)) {
    document.getElementById("contactError").innerText =
      "Please enter a valid contact number.";
    isValid = false;
  }

  return isValid;
}
