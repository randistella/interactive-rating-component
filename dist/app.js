const mainBox = document.querySelector('.main-box');
const thankyouBox = document.querySelector('.thankyou-box');
const submitBtn = document.querySelector('.sub-btn');
const rtBtn = document.querySelectorAll('.rt-btn');
const rating = document.getElementById('#rating');

submitBtn.addEventListener('click', () => {
    thankyouBox.classList.remove('hide');
    mainBox.classList.add('hide');
});

rates.forEach((rate) => {
    rate.addEventListener('click', () =>
    rating.innerHTML = rate.innerHTML);
});