let buttonText;
const submitButton = document.querySelector('.js-submit-button');
let hasButtonBeenClicked = true;

const numberRatings = document.querySelectorAll('.js-number-rating');
numberRatings.forEach((numberRating) => {
  numberRating.addEventListener('click', () => {
    if(hasButtonBeenClicked === true) {
      buttonText = Number(numberRating.innerHTML);
      localStorage.setItem('numberReview', buttonText);
      numberRating.classList.add('turn-on-color');
      hasButtonBeenClicked = !hasButtonBeenClicked;
    } else {
      numberRating.classList.remove('turn-on-color');
      hasButtonBeenClicked = !hasButtonBeenClicked;
    }
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'thank-you.html';
})

