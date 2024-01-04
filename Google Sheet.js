const scriptURL = 'https://script.google.com/macros/s/AKfycbwwgGT6CduO2yXYp3SoP7nJVuMU2wB2N54boXIRO4FZvYaDK-2AmqIxg7THFmoyjToT/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
