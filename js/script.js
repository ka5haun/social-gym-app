document.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('event-header') ||
    e.target.classList.contains('dining-header') ||
    e.target.classList.contains('contact-header') ||
    e.target.classList.contains('card-header')
  ) {
    const card = e.target.closest('.event-card, .dining-card, .contact-card, .card');
    if (card) {
      card.classList.toggle('active');
    }
  }
});
