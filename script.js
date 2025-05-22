const questions = document.querySelectorAll('.faq-item .question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
const form = document.getElementById('registration-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registration submitted successfully!');
});




