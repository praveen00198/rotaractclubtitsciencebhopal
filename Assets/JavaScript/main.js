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


// Card swiping
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = carouselItems[0].offsetWidth + 20;

let trackPosition = 0;
let scrollSpeed = 20;
let intervalId;
let isDragging = false;
let startPosition = 0;
let currentPosition = 0;
let totalWidth = itemWidth * carouselItems.length;
let cloneCount = 5; // Clone enough items to fill the container and some

function cloneItems() {
    const originalItems = Array.from(carouselItems);
    for (let i = 0; i < cloneCount; i++) {
        originalItems.forEach(item => {
            carouselTrack.appendChild(item.cloneNode(true));
        });
    }
}

function moveTrack() {
    trackPosition -= 1;
    carouselTrack.style.transform = `translateX(${trackPosition}px)`;

    // Reset when the track has scrolled a very long distance
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
    carouselTrack.style.transition = 'none';
    carouselTrack.style.transform = `translateX(${trackPosition + diff}px)`;
}

function handleTouchEnd() {
    isDragging = false;
    trackPosition += currentPosition - startPosition;
    carouselTrack.style.transition = 'transform 0s linear';
    startScroll();
}

cloneItems();
startScroll();

carouselTrack.addEventListener('mouseenter', stopScroll);
carouselTrack.addEventListener('mouseleave', startScroll);

carouselTrack.addEventListener('touchstart', handleTouchStart);
carouselTrack.addEventListener('touchmove', handleTouchMove);
carouselTrack.addEventListener('touchend', handleTouchEnd);


// Overlay for Join Us
document.addEventListener('DOMContentLoaded', function() {
    const showFormBtn = document.getElementById('showJoinUsFormBtn');
    const formOverlay = document.getElementById('joinUsformOverlay');
    const closeFormBtn = document.getElementById('closeFormBtn');

    showFormBtn.addEventListener('click', function() {
        formOverlay.style.display = 'flex'; // Or 'block' depending on your overlay styling
    });

    closeFormBtn.addEventListener('click', function() {
        formOverlay.style.display = 'none';
    });

    // Optional: Close the form when clicking outside the form container
    formOverlay.addEventListener('click', function(event) {
        if (event.target === formOverlay) {
            formOverlay.style.display = 'none';
        }
    });
});

// Overlay for Donate 
document.addEventListener('DOMContentLoaded', function() {
    const showFormBtn = document.getElementById('showDonateform');
    const formOverlay = document.getElementById('donatePageOverlay');
    const closeFormBtn = document.getElementById('closeFormBtn');

    showFormBtn.addEventListener('click', function() {
        formOverlay.style.display = 'flex';
    });

    closeFormBtn.addEventListener('click', function() {
        formOverlay.style.display = 'none';
    });

    // Optional: Close the form when clicking outside the form container
    formOverlay.addEventListener('click', function(event) {
        if (event.target === formOverlay) {
            formOverlay.style.display = 'none';
        }
    });
});



// Testimonial Section
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init();

  // Testimonial Data (can be extended further)
  const testimonials = [
    {
      description: `Joining the Rotaract Club of TIT & Science has been a life-changing experience. The projects and events have helped me grow both personally and professionally.`,
      name: "Rtr.Siddhtarth Kumar",
      position: "Secretary",
    },
    {
      description: `Rotaract has been a transformative experience for me. It has not only enhanced my leadership skills but also allowed me to connect with like-minded individuals who share a passion for service. The projects we undertake have a real impact on the community, and I am proud to be part of such a dedicated team.`,
      name: "Rtr. Alok Patel",
      position: "Vice President",
    },
    {
      description: `Rotaract has been a transformative experience for me. It has not only enhanced my leadership skills but also allowed me to connect with like-minded individuals who share a passion for service. The projects we undertake have a real impact on the community, and I am proud to be part of such a dedicated team.`,
      name: "Rtr. Depanshu Singh",
      position: "Past President",
    },
    {
      description: `Rotaract has been a transformative experience for me. It has not only enhanced my leadership skills but also allowed me to connect with like-minded individuals who share a passion for service. The projects we undertake have a real impact on the community, and I am proud to be part of such a dedicated team.`,
      name: "Rtr. Depanshu Singh",
      position: "Past President",
    },
    {
      description: `Rotaract has been a transformative experience for me. It has not only enhanced my leadership skills but also allowed me to connect with like-minded individuals who share a passion for service. The projects we undertake have a real impact on the community, and I am proud to be part of such a dedicated team.`,
      name: "Rtr. Depanshu Singh",
      position: "Secretary",
    },
    {
        description: `Rotaract has been a transformative experience for me. It has not only enhanced my leadership skills but also allowed me to connect with like-minded individuals who share a passion for service. The projects we undertake have a real impact on the community, and I am proud to be part of such a dedicated team.`,
        name: "Rtr. Depanshu Singh",
        position: "Secretary",
    },
  ];

  // Populate testimonial cards
  const testimonialContainer = document.querySelector('.testimonial-card-container');
  
  testimonials.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.setAttribute('data-aos', 'fade-right');
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

  // Add quote icon enhancement (adding icons next to names)
//   const nameElements = document.querySelectorAll('#testimonial-card-icon');
//   nameElements.forEach(name => {
//     const icon = document.createElement('span');
//     icon.innerHTML = '&#8220;'; // Unicode for left quote mark
//     icon.classList.add('quote-icon');
//     name.prepend(icon);
//   });

  // Make the testimonial section visible with fade-in effect
  const testimonialSection = document.getElementById('testimonial-section');
  testimonialSection.classList.add('visible');
});



// Form validation
function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const enrollmentNo = document.getElementById('enrollment-no').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('enrollmentNoError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('contactError').innerText = '';

    // Validate fields
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }
    if (!enrollmentNo) {
        document.getElementById('enrollmentNoError').innerText = 'Enrollment number is required.';
        isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }
    if (!contact || !/^\d{10}$/.test(contact)) {
        document.getElementById('contactError').innerText = 'Please enter a valid contact number.';
        isValid = false;
    }

    return isValid;
}


// Validate donation form
function validateDonationForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const occupation = document.getElementById('occupation').value;
    const file = document.getElementById('upload-image').files[0];

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('contactError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('occupationError').innerText = '';
    document.getElementById('imageError').innerText = '';

    // Validation checks
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }
    if (!contact || !/^\d{10}$/.test(contact)) {
        document.getElementById('contactError').innerText = 'Please enter a valid phone number.';
        isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }
    if (!occupation) {
        document.getElementById('occupationError').innerText = 'Occupation is required.';
        isValid = false;
    }

    // Optional file validation (e.g., size limit or format)
    if (file && file.size > 5 * 1024 * 1024) { // 5 MB limit
        document.getElementById('imageError').innerText = 'File size should be less than 5MB.';
        isValid = false;
    }

    return isValid;
}
