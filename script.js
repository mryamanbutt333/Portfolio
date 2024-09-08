// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset form after submission
    this.reset();
});
