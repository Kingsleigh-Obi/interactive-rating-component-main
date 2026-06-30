const buttonText = localStorage.getItem('numberReview');
const ratingsParagraph = document.querySelector('.js-ratings-paragraph');
ratingsParagraph.innerHTML = `You selected ${buttonText} out of 5`;