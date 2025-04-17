document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Booking confirmed! Thank you for choosing LuxuryStay.');
    this.reset(); //we use this to clear the form after the alert message
  });
  
