// Toggle the menu on mobile devices
// This function toggles the visibility of the navigation menu when the hamburger icon is clicked
document.addEventListener('click', function(event) {
    const navElement = document.querySelector('.nav-element');
    const toggleButton = document.querySelector('.toggle-button');
  
    // Check if the menu is currently open (has the 'active' class)
    if (navElement.classList.contains('active')) {
      // Check if the clicked element is NOT the menu itself or a descendant of the menu
      if (!navElement.contains(event.target) && event.target !== toggleButton) {
        // If the click is outside the menu and not on the toggle button, close the menu
        navElement.classList.remove('active');
        isOpen = false; // Update the isOpen variable
      }
    }
  });
  
  let isOpen = false;
  
  function toggleMenu() {
    const navElement = document.querySelector(".nav-element");
    navElement.classList.toggle("active");
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