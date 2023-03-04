const mainBox = document.querySelector('.main-box');
const thankyouBox = document.querySelector('.thankyou-box');
const submitBtn = document.querySelector('.sub-btn');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.rt-btn')

/* when user clicks, removes hide css class from thank you box
and adds hide class to main box, making it disappear*/
submitBtn.addEventListener('click', () => {
    thankyouBox.classList.remove('hide');
    mainBox.classList.add('hide');
});

/* loops through each rating, when user clicks on one
adds to HTML span */
rates.forEach((rate) => {
    rate.addEventListener('click', () =>
    rating.innerHTML = rate.innerHTML);
});