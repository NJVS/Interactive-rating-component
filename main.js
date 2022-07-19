document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const ratings = Object.fromEntries(new FormData(event.target)).rating;
  document.querySelector('#rateResult').innerHTML = ratings;
  event.target.closest('.card').remove();
});