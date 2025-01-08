// Preloader Logic
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scroll after preloader
    }, 4000); // Preloader hides after 4 seconds
});

// Slider Logic
let slideIndex = 1; // Current slide index
showSlides(slideIndex);

// Function to change slides (next/previous)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide based on its number
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display the slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides"); // All slides
    const dots = document.getElementsByClassName("dot"); // All dots

    // Loop back to the first slide if the index exceeds total slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Loop back to the last slide if the index is below 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto-show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// Optional: Auto-slide functionality (auto-slide continues without pause)
let autoSlideInterval = setInterval(() => {
    plusSlides(1); // Move to the next slide every 2 seconds
}, 2000);  // Adjusted to 2 seconds for automatic slide transition


// Contact Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting by default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Show the thank you message with animation
        const thankYouMessage = document.createElement('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.textContent = "Thank you for contacting us. We'll get back to you soon!";
        document.querySelector('.contact-card').appendChild(thankYouMessage);

        // Show the thank you message
        setTimeout(() => {
            thankYouMessage.style.display = 'block';
        }, 100);

        // Reset form fields
        document.getElementById('contactForm').reset();

        // Hide the thank you message after 3 seconds
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 3000);
    } else {
        alert("Please fill all fields.");
    }
});
