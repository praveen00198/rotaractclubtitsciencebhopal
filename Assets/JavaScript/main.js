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
