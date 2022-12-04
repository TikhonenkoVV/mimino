const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider .slider__line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;

  images.forEach(item => {
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);

    if (width > 427) {
      item.style.marginRight = '40' + 'px';
      item.style.width = '194' + 'px';
    } else if (width < 427) {
      item.style.marginRight = '25' + 'px';
      item.style.width = '245' + 'px';
      item.style.height = 'auto';
    }
    // item.style.width = '254' + 'px';
    // item.style.marginRight = '40' + 'px';
  });
  rollSlider();
  rollSliderT();
  rollSliderM();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function (e) {
  e.preventDefault();
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
  rollSliderT();
  rollSliderM();
});

document.querySelector('.slider-prev').addEventListener('click', function (e) {
  e.preventDefault();
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
  rollSliderT();
  rollSliderM();
});

function rollSlider() {
  if (width > 548) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.5 + 'px)';
  }
}

function rollSliderM() {
  if (width < 427) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.45 + 'px)';
  }
}

function rollSliderT() {
  if (width > 427) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.85 + 'px)';
  }
}
