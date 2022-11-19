import './styles/main.scss';
import { phoneInput } from './phoneinput.js';
import { postForm } from './postForm.js';

// For toggling and finding number of children and other stuff is done here!

const navigation = document.querySelector('.header__nav');
const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__menu-burger');
const phone = document.querySelector('.header__phone');
const openModal = document.querySelector('.umbrellaMonitoring__more');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close-button');

phoneInput();
postForm();

menuBurger.addEventListener('click', () => {
  navigation.classList.toggle('header__menu-burger--active');
  menu.classList.toggle('header__menu--active');
  phone.classList.toggle('header__phone--active');
});

openModal.addEventListener('click', () => {
  document.body.classList.add('modal__non-scroll');
  modal.classList.add('modal--active');
});

closeModal.addEventListener('click', () => {
  document.body.classList.remove('modal__non-scroll');
  modal.classList.remove('modal--active');
});
