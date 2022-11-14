import './styles/main.scss';
import {phoneInput} from './phoneinput.js';
import {postForm} from './postForm.js';

// For toggling and finding number of children and other stuff is done here!

const navigation = document.querySelector('.header__nav');
const menu = document.querySelector('.header__menu');
const phone = document.querySelector('.header__phone');


phoneInput()
postForm()

navigation.addEventListener('click', () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  // navigation.style.setProperty('--childenNumber', navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle('header__menu-burger--active');
  menu.classList.toggle('header__menu--active');
  phone.classList.toggle('header__phone--active');
});
