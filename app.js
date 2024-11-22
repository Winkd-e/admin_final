


// Select all slides and dots
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let slideInterval;

// Function to display the current slide based on the index
function showSlide(index) {
    // Hide all slides and remove active class from dots
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to start the automatic slideshow
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Function to stop the automatic slideshow
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Set up click event listeners for each dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow();          // Stop the automatic slideshow when a dot is clicked
        showSlide(index);          // Show the slide that corresponds to the clicked dot
        currentSlide = index;      // Update the current slide index
        startSlideShow();          // Restart the slideshow after the manual click
    });
});

// Initialize the slideshow
showSlide(currentSlide); // Show the first slide on load
startSlideShow(); // Start the automatic slideshow



