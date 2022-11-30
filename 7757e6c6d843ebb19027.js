import './styles/main.scss';
import { phoneInput } from './phoneinput.js';
import { postForm } from './postForm.js';

// For toggling and finding number of children and other stuff is done here!

const navigation = document.querySelector('.header__nav');

const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__menu-burger');
const phone = document.querySelector('.header__phone');
const openModal = document.querySelectorAll('.openModalBtn');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close-button');

const openResultModal = document.querySelector('.result__button');
const resultModal = document.querySelector('.resultModal');
const closeResultModal = resultModal.querySelector('.resultModal__close-button');

const allRadioBtn = document.querySelectorAll('.risks__radio-btn');
const allRadioCheckbox = document.querySelectorAll('.risks__checkbox');
const allSliders = document.querySelectorAll('.risks__slide');

const allLink = document.querySelectorAll('.header__menu-item');

phoneInput();
postForm();

const deleteActiveClassFromAll = (list, className) => {
  for (let button of list) {
    button.classList.remove(`${className}`);
  }
};

for (let i = 0; i < allLink.length; i++) {
  const link = allLink[i];

  link.addEventListener('click', () => {
    document.body.classList.remove('modal__non-scroll');
    menu.classList.remove('header__menu--active');
  });
}

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', () => {
    document.body.classList.add('modal__non-scroll');
    modal.classList.add('modal--active');
  });
}

for (let i = 0; i < allRadioBtn.length; i++) {
  const radioBtn = allRadioBtn[i];
  const checkbox = allRadioCheckbox[i];
  const slide = allSliders[i];

  radioBtn.addEventListener('click', () => {
    deleteActiveClassFromAll(allRadioBtn, 'risks__radio-btn--active');
    deleteActiveClassFromAll(allRadioCheckbox, 'risks__checkbox--active');
    deleteActiveClassFromAll(allSliders, 'risks__slide--active');

    checkbox.classList.add('risks__checkbox--active');
    radioBtn.classList.add('risks__radio-btn--active');
    slide.classList.add('risks__slide--active');
  });
}

menuBurger.addEventListener('click', () => {
  navigation.classList.toggle('header__menu-burger--active');
  menu.classList.toggle('header__menu--active');
  document.body.classList.toggle('modal__non-scroll');
  phone.classList.toggle('header__phone--active');
});

closeModal.addEventListener('click', () => {
  document.body.classList.remove('modal__non-scroll');
  modal.classList.remove('modal--active');
});

openResultModal.addEventListener('click', () => {
  document.body.classList.add('modal__non-scroll');
  resultModal.classList.add('resultModal--active');
});

closeResultModal.addEventListener('click', () => {
  document.body.classList.remove('modal__non-scroll');
  resultModal.classList.remove('resultModal--active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--active');
    document.body.classList.remove('modal__non-scroll');
  }
});

resultModal.addEventListener('click', (e) => {
  if (e.target === resultModal) {
    resultModal.classList.remove('resultModal--active');
    document.body.classList.remove('modal__non-scroll');
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('modal--active');
    resultModal.classList.remove('resultModal--active');
    document.body.classList.remove('modal__non-scroll');
  }
});

const circleNumberBtnAll = document.querySelectorAll('.advantages-circle__text');
const circleSlideAll = document.querySelectorAll('.advantages__slide');
const advantagesBlock = document.querySelector('.advantages-circle');
const resultBlock = document.querySelector('.result');
const whyMonqBlock = document.querySelector('.whyMonq');

for (let i = 0; i < circleNumberBtnAll.length; i++) {
  const circleNumberBtn = circleNumberBtnAll[i];
  const circleSlide = circleSlideAll[i];

  circleNumberBtn.addEventListener('click', () => {
    deleteActiveClassFromAll(circleSlideAll, 'advantages__slide--active');
    circleSlide.classList.add('advantages__slide--active');
  });

  circleNumberBtn.addEventListener('mouseover', () => {
    deleteActiveClassFromAll(circleSlideAll, 'advantages__slide--active');
    circleSlide.classList.add('advantages__slide--active');
  });
}

resultBlock.addEventListener('mouseout', () => {
  const circleSlideDefault = circleSlideAll[5];

  deleteActiveClassFromAll(circleSlideAll, 'advantages__slide--active');
  circleSlideDefault.classList.add('advantages__slide--active');
});

whyMonqBlock.addEventListener('mouseout', () => {
  const circleSlideDefault = circleSlideAll[5];

  deleteActiveClassFromAll(circleSlideAll, 'advantages__slide--active');
  circleSlideDefault.classList.add('advantages__slide--active');
});
