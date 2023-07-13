const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  sliderWrapper.scrollBy({
    left: -sliderWrapper.offsetWidth,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  sliderWrapper.scrollBy({
    left: sliderWrapper.offsetWidth,
    behavior: 'smooth'
  });
});