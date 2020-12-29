import './sass/style.scss';

import './img/portfolio-1.jpg';
import './img/portfolio-2.jpg';
import './img/portfolio-3.jpg';
import './img/portfolio-4.jpg';
import './img/portfolio-5.jpg';
import './img/portfolio-6.jpg';
import './img/portfolio-7.jpg';
import './img/portfolio-8.jpg';
import './img/portfolio-9.jpg';
import './img/portfolio-10.jpg';
import './img/portfolio-11.jpg';
import './img/portfolio-12.jpg';
import './img/slider/slider-1.png';
import './img/slider/slider-2.png';

window.onload = function () {
    switcherTags();
}

//navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_isActive');
    navigation.classList.toggle('open');
});

main.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        hamburger.classList.toggle('hamburger_isActive');
    }
});

navigation.onclick = function (event) {
    let target = event.target;
    if (target.className !== 'navigation__link') return;
    navigation.classList.remove('open');
    hamburger.classList.toggle('hamburger_isActive');
}

//tag
const tags = document.querySelectorAll('.portfolio__tags .tag');
const gallery = document.querySelector('.gallery');

const switcherTags = () => {
    document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            addSelectedTag(clickedTag);
            sortGalleryImages();
        }
    })
};

const removeSelectedTag = () => {
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const addSelectedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const sortGalleryImages = () => {
    let galleryImages = document.querySelectorAll('.gallery .gallery__item');
    let randomIndex = Math.floor(Math.random() * galleryImages.length);
    let randomImage = galleryImages[randomIndex];
    gallery.append(randomImage);
}

//slider
const buttonSliderPrev = document.querySelector('.slider__button_prev');
const buttonSliderNext = document.querySelector('.slider__button_next');
const sliderImages = ['src/img/slider/slider-1.png', 'src/img/slider/slider-2.png'];
const sliderImagesClass = ['slider__image_first', 'slider__image_second'];
const backgroundColorSlider = ['slider_first', 'slider_second'];
let sliderImagesIndex = 0;

buttonSliderPrev.addEventListener('click', () => {
    const currentClass = sliderImagesClass[sliderImagesIndex];
    const currentBackground = backgroundColorSlider[sliderImagesIndex];

    if (sliderImages[sliderImagesIndex - 1] === undefined) {
        sliderImagesIndex = sliderImages.length - 1;
    } else {
        sliderImagesIndex -= 1;
    }

    const imageSlider = document.querySelector('.slider__image');
    imageSlider.classList.remove(currentClass);
    imageSlider.classList.add(sliderImagesClass[sliderImagesIndex]);
    imageSlider.src = sliderImages[sliderImagesIndex];

    const backgroundColor = document.querySelector('.slider');
    backgroundColor.classList.remove(currentBackground);
    backgroundColor.classList.add(backgroundColorSlider[sliderImagesIndex]);
    
    backgroundColor.classList.remove(slider_active);
    backgroundColor.classList.add(slider_hide);

    


})

buttonSliderNext.addEventListener('click', () => {
    const currentClass = sliderImagesClass[sliderImagesIndex];
    const currentBackground = backgroundColorSlider[sliderImagesIndex];

    if (sliderImages[sliderImagesIndex + 1] === undefined) {
        sliderImagesIndex = 0;
    } else {
        sliderImagesIndex += 1;
    }

    const imageSlider = document.querySelector('.slider__image');
    imageSlider.classList.remove(currentClass);
    imageSlider.classList.add(sliderImagesClass[sliderImagesIndex]);
    imageSlider.src = sliderImages[sliderImagesIndex];

    const backgroundColor = document.querySelector('.slider');
    backgroundColor.classList.remove(currentBackground);
    backgroundColor.classList.add(backgroundColorSlider[sliderImagesIndex]);

    backgroundColor.classList.add(slider_active);
    backgroundColor.classList.remove(slider_hide);
    
})