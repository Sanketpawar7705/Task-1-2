document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      alert(`Thank you, ${name}! We have received your message.`);
      
      // Here you can add code to send the form data to your server
      
      contactForm.reset();
    });
  });
  