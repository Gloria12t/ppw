document.addEventListener('DOMContentLoaded', () => {
    // Like Button Functionality
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const likeCount = button.nextElementSibling;
        let currentLikes = parseInt(likeCount.innerText.split(' ')[0]);
        currentLikes++;
        likeCount.innerText = `${currentLikes} Likes`;
      });
    });
  
    // EmailJS Initialization
    emailjs.init('taktqDnu6srQX04wq'); // Initialize EmailJS with your public key
  
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };
  
      emailjs.send('service_4knk6nk', 'template_6fsquar', formData)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById('formSuccess').style.display = 'block';
          document.getElementById('formError').style.display = 'none';
        }, (error) => {
          console.log('FAILED...', error);
          document.getElementById('formError').style.display = 'block';
          document.getElementById('formSuccess').style.display = 'none';
        });
  
      contactForm.reset(); // Clear form fields after submission
    });
  });
  