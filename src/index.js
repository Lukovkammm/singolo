// import './sass/style.scss';

window.onload = function () {

    //tags
    switcherTags();

}

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('main');


//navigation
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
})



//tags
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

const tags = document.querySelectorAll('.portfolio__tags .tag');
const gallery = document.querySelector('.gallery');

const removeSelectedTag = () => {
    tags.forEach(tag => {
        tag.classList.remove('tag_selected')
        tag.classList.add('tag_bordered');
    })
}

const addSelectedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected')
    clickedTag.classList.remove('tag_bordered');
}

const sortGalleryImages = () => {
    let galleryImages = document.querySelectorAll('.gallery .gallery__item');

    let randomIndex = Math.floor(Math.random() * galleryImages.length);
    let randomImage = galleryImages[randomIndex];
    gallery.append(randomImage);

}