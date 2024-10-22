"use strict";

/* Preload:

    Loading screen before the page is fully loaded

*/
const preloader = document.querySelector("[data-preload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});

// testimonials
const testimonials = [
  "TERRA Hotels provided an unforgettable experience. The staff were friendly, and the amenities were top-notch! - Jessica",
  "Staying at TERRA Hotels was a dream come true. Beautiful surroundings, amazing service, and luxurious rooms. - Fidelis",
  "My vacation at TERRA Hotels was relaxing and enjoyable. I would definitely recommend it to my friends! - Martin",
  "The hospitality at TERRA Hotels exceeded all of my expectations. It truly felt like a home away from home. - Moha",
  "TERRA Hotels is a hidden gem! The spa treatments and gourmet dining made my stay exceptional. - Mike",
  "I travel frequently, and TERRA Hotels has become my go-to destination. Consistently excellent service! - Jane",
  "From the moment I arrived, I was treated like royalty. TERRA Hotels truly understands the meaning of luxury. - Immaculate",
  "I had an incredible stay at TERRA Hotels. Every detail was taken care of, and the staff made me feel so welcome. - Wendy",
  "TERRA Hotels provided a perfect blend of relaxation and adventure. I can’t wait to return! - Faith",
  "Our family had the best holiday at TERRA Hotels. The kids loved the activities, and we enjoyed the peaceful atmosphere. Ian 👀",
]

let currentTestimonialIndex = 0;

function showTestimonial(index) {
  const testimonialQuote = document.getElementById("testimonial-quote");
  testimonialQuote.textContent = testimonials[index];
}

function previousTestimonial() {
  currentTestimonialIndex--;
  if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = testimonials.length - 1; // Loop back to last testimonial
  }
  showTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
  currentTestimonialIndex++;
  if (currentTestimonialIndex >= testimonials.length) {
    currentTestimonialIndex = 0; // Loop back to first testimonial
  }
  showTestimonial(currentTestimonialIndex);
}

// Initialize the first testimonial
showTestimonial(currentTestimonialIndex);

document.addEventListener('DOMContentLoaded', function() {
  // Get the current URL path
  const currentPath = window.location.pathname;
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-menu-ul-li');
  
  // Function to get the filename from path
  function getFileName(path) {
    // If path ends with '/' or is empty, return 'index.html'
    if (path === '/' || path === '') return 'index.html';
    // Otherwise return the last segment of the path
    return path.split('/').pop();
  }
  
  // Get current file name
  const currentFile = getFileName(currentPath);
  
  // Remove active class from all links and add to current
  navLinks.forEach(link => {
    const href = link.querySelector('a').getAttribute('href');
    if (href === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
