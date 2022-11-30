"use strict";
(self["webpackChunkmyPetProject"] = self["webpackChunkmyPetProject"] || []).push([["index"],{

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1669843450727
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _phoneinput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneinput.js */ "./src/phoneinput.js");
/* harmony import */ var _postForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postForm.js */ "./src/postForm.js");




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

(0,_phoneinput_js__WEBPACK_IMPORTED_MODULE_1__.phoneInput)();
(0,_postForm_js__WEBPACK_IMPORTED_MODULE_2__.postForm)();

const deleteActiveClassFromAll = (list, className) => {
  for (let button of list) {
    button.classList.remove(`${className}`);
  }
};
console.log(menuBurger);
for (let i = 0; i < allLink.length; i++) {
  const link = allLink[i];

  link.addEventListener('click', () => {
    document.body.classList.remove('modal__non-scroll');
    navigation.classList.remove('header__menu-burger--active');
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


/***/ }),

/***/ "./src/phoneinput.js":
/*!***************************!*\
  !*** ./src/phoneinput.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phoneInput": function() { return /* binding */ phoneInput; }
/* harmony export */ });
function phoneInput() {
  var phoneInputs = document.querySelectorAll("input[data-tel-input]");

  var getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, "");
  };

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("input", onPhoneInput, false);
    phoneInput.addEventListener("paste", onPhonePaste, false);
  }
}


/***/ }),

/***/ "./src/postForm.js":
/*!*************************!*\
  !*** ./src/postForm.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postForm": function() { return /* binding */ postForm; }
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const URL = "/form/send";

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return await res.json();
};

function postForm() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input");
  const button = form.querySelector("button");

  function checkValid() {
    let isError = inputs.length;

    inputs.forEach((i) => {
      if (i.validity.valid) {
        isError--;
      }
    });
    isError
      ? button.classList.add("disabled")
      : button.classList.remove("disabled");
  }

  inputs.forEach((i) => {
    i.addEventListener("change", checkValid);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    postData(URL, json)
      .then((data) => {
        console.log(data);
        form.innerHTML = `
			<div class="succes__content">
					<h2 class="succes__title">Заявка отправлена</h2>
					<p class="succes__text">${createName(
            formData
          )}, ваш запрос успешно отправлен. Наш менеджер свяжется с вами в ближайшее время.</p>
			</div>
	  `;
      })
      .catch(() => {
        form.innerHTML = `
			<div class="succes__content">
					<h2 class="succes__title">Что-то пошло не так…</h2>
			</div>
	  `;
      })
      .finally(() => {
        form.reset();
      });
  });
}

function createName(data) {
  return `${data.get("name")} `;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","styles"], function() { return __webpack_exec__("./src/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguODcxZDJmZjk5ZmMwNmU4YjFjNzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1I0QjtBQUNpQjtBQUNKO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVU7QUFDVixzREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hKTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9jZDdlIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvcGhvbmVpbnB1dC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvcG9zdEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2OTg0MzQ1MDcyN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IHBob25lSW5wdXQgfSBmcm9tICcuL3Bob25laW5wdXQuanMnO1xyXG5pbXBvcnQgeyBwb3N0Rm9ybSB9IGZyb20gJy4vcG9zdEZvcm0uanMnO1xyXG5cclxuLy8gRm9yIHRvZ2dsaW5nIGFuZCBmaW5kaW5nIG51bWJlciBvZiBjaGlsZHJlbiBhbmQgb3RoZXIgc3R1ZmYgaXMgZG9uZSBoZXJlIVxyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKTtcclxuY29uc3QgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnVyZ2VyJyk7XHJcbmNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGhvbmUnKTtcclxuY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW5Nb2RhbEJ0bicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuXHJcbmNvbnN0IG9wZW5SZXN1bHRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbicpO1xyXG5jb25zdCByZXN1bHRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRNb2RhbCcpO1xyXG5jb25zdCBjbG9zZVJlc3VsdE1vZGFsID0gcmVzdWx0TW9kYWwucXVlcnlTZWxlY3RvcignLnJlc3VsdE1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuXHJcbmNvbnN0IGFsbFJhZGlvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19yYWRpby1idG4nKTtcclxuY29uc3QgYWxsUmFkaW9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXNrc19fY2hlY2tib3gnKTtcclxuY29uc3QgYWxsU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXNrc19fc2xpZGUnKTtcclxuXHJcbmNvbnN0IGFsbExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51LWl0ZW0nKTtcclxuXHJcbnBob25lSW5wdXQoKTtcclxucG9zdEZvcm0oKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbCA9IChsaXN0LCBjbGFzc05hbWUpID0+IHtcclxuICBmb3IgKGxldCBidXR0b24gb2YgbGlzdCkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfWApO1xyXG4gIH1cclxufTtcclxuY29uc29sZS5sb2cobWVudUJ1cmdlcik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsTGluay5sZW5ndGg7IGkrKykge1xyXG4gIGNvbnN0IGxpbmsgPSBhbGxMaW5rW2ldO1xyXG5cclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtYnVyZ2VyLS1hY3RpdmUnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuTW9kYWwubGVuZ3RoOyBpKyspIHtcclxuICBvcGVuTW9kYWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsUmFkaW9CdG4ubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCByYWRpb0J0biA9IGFsbFJhZGlvQnRuW2ldO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gYWxsUmFkaW9DaGVja2JveFtpXTtcclxuICBjb25zdCBzbGlkZSA9IGFsbFNsaWRlcnNbaV07XHJcblxyXG4gIHJhZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGFsbFJhZGlvQnRuLCAncmlza3NfX3JhZGlvLWJ0bi0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsUmFkaW9DaGVja2JveCwgJ3Jpc2tzX19jaGVja2JveC0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsU2xpZGVycywgJ3Jpc2tzX19zbGlkZS0tYWN0aXZlJyk7XHJcblxyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmlza3NfX2NoZWNrYm94LS1hY3RpdmUnKTtcclxuICAgIHJhZGlvQnRuLmNsYXNzTGlzdC5hZGQoJ3Jpc2tzX19yYWRpby1idG4tLWFjdGl2ZScpO1xyXG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgncmlza3NfX3NsaWRlLS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxubWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1idXJnZXItLWFjdGl2ZScpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgcGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19waG9uZS0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbm9wZW5SZXN1bHRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgcmVzdWx0TW9kYWwuY2xhc3NMaXN0LmFkZCgncmVzdWx0TW9kYWwtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbmNsb3NlUmVzdWx0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yZXN1bHRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ID09PSByZXN1bHRNb2RhbCkge1xyXG4gICAgcmVzdWx0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVzdWx0TW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgcmVzdWx0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVzdWx0TW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBjaXJjbGVOdW1iZXJCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWR2YW50YWdlcy1jaXJjbGVfX3RleHQnKTtcclxuY29uc3QgY2lyY2xlU2xpZGVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWR2YW50YWdlc19fc2xpZGUnKTtcclxuY29uc3QgYWR2YW50YWdlc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkdmFudGFnZXMtY2lyY2xlJyk7XHJcbmNvbnN0IHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xyXG5jb25zdCB3aHlNb25xQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2h5TW9ucScpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVOdW1iZXJCdG5BbGwubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBjaXJjbGVOdW1iZXJCdG4gPSBjaXJjbGVOdW1iZXJCdG5BbGxbaV07XHJcbiAgY29uc3QgY2lyY2xlU2xpZGUgPSBjaXJjbGVTbGlkZUFsbFtpXTtcclxuXHJcbiAgY2lyY2xlTnVtYmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGNpcmNsZVNsaWRlQWxsLCAnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gICAgY2lyY2xlU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICBjaXJjbGVOdW1iZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGNpcmNsZVNsaWRlQWxsLCAnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gICAgY2lyY2xlU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5yZXN1bHRCbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICBjb25zdCBjaXJjbGVTbGlkZURlZmF1bHQgPSBjaXJjbGVTbGlkZUFsbFs1XTtcclxuXHJcbiAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGNpcmNsZVNsaWRlQWxsLCAnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gIGNpcmNsZVNsaWRlRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxud2h5TW9ucUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gIGNvbnN0IGNpcmNsZVNsaWRlRGVmYXVsdCA9IGNpcmNsZVNsaWRlQWxsWzVdO1xyXG5cclxuICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoY2lyY2xlU2xpZGVBbGwsICdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgY2lyY2xlU2xpZGVEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxufSk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwaG9uZUlucHV0KCkge1xyXG4gIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtkYXRhLXRlbC1pbnB1dF1cIik7XHJcblxyXG4gIHZhciBnZXRJbnB1dE51bWJlcnNWYWx1ZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgLy8gUmV0dXJuIHN0cmlwcGVkIGlucHV0IHZhbHVlIOKAlCBqdXN0IG51bWJlcnNcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uUGhvbmVQYXN0ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBlLnRhcmdldCxcclxuICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7XHJcbiAgICB2YXIgcGFzdGVkID0gZS5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgaWYgKHBhc3RlZCkge1xyXG4gICAgICB2YXIgcGFzdGVkVGV4dCA9IHBhc3RlZC5nZXREYXRhKFwiVGV4dFwiKTtcclxuICAgICAgaWYgKC9cXEQvZy50ZXN0KHBhc3RlZFRleHQpKSB7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwYXN0ZSBub24tbnVtZXJpYyBzeW1ib2wg4oCUIHJlbW92ZSBhbGwgbm9uLW51bWVyaWMgc3ltYm9scyxcclxuICAgICAgICAvLyBmb3JtYXR0aW5nIHdpbGwgYmUgaW4gb25QaG9uZUlucHV0IGhhbmRsZXJcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvblBob25lSW5wdXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlucHV0ID0gZS50YXJnZXQsXHJcbiAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpLFxyXG4gICAgICBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBpZiAoIWlucHV0TnVtYmVyc1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAoaW5wdXQudmFsdWUgPSBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XHJcbiAgICAgIC8vIEVkaXRpbmcgaW4gdGhlIG1pZGRsZSBvZiBpbnB1dCwgbm90IGxhc3Qgc3ltYm9sXHJcbiAgICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gaW5wdXQgbm9uLW51bWVyaWMgc3ltYm9sXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFtcIjdcIiwgXCI5XCJdLmluZGV4T2YoaW5wdXROdW1iZXJzVmFsdWVbMF0pID4gLTEpIHtcclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOVwiKVxyXG4gICAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gXCI3XCIgKyBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgdmFyIGZpcnN0U3ltYm9scyA9IFwiKzdcIjtcclxuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlID0gZmlyc3RTeW1ib2xzICsgXCIgXCI7XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIihcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygxLCA0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDUpIHtcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9IFwiKSBcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg0LCA3KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9IFwiLVwiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDcsIDkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9IFwiLVwiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDksIDExKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiK1wiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDAsIDE2KTtcclxuICAgIH1cclxuICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZTtcclxuICB9O1xyXG4gIHZhciBvblBob25lS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBDbGVhciBpbnB1dCBhZnRlciByZW1vdmUgbGFzdCBzeW1ib2xcclxuICAgIHZhciBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIGlucHV0VmFsdWUubGVuZ3RoID09IDEpIHtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZm9yICh2YXIgcGhvbmVJbnB1dCBvZiBwaG9uZUlucHV0cykge1xyXG4gICAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvblBob25lS2V5RG93bik7XHJcbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvblBob25lSW5wdXQsIGZhbHNlKTtcclxuICAgIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIG9uUGhvbmVQYXN0ZSwgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmNvbnN0IFVSTCA9IFwiL2Zvcm0vc2VuZFwiO1xyXG5cclxuY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBkYXRhLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tWYWxpZCgpIHtcclxuICAgIGxldCBpc0Vycm9yID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpZiAoaS52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgIGlzRXJyb3ItLTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpc0Vycm9yXHJcbiAgICAgID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKVxyXG4gICAgICA6IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgfVxyXG5cclxuICBpbnB1dHMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrVmFsaWQpO1xyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgIHBvc3REYXRhKFVSTCwganNvbilcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc19fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzPVwic3VjY2VzX190aXRsZVwiPtCX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsDwvaDI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInN1Y2Nlc19fdGV4dFwiPiR7Y3JlYXRlTmFtZShcclxuICAgICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICAgICl9LCDQstCw0Ygg0LfQsNC/0YDQvtGBINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvS4g0J3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjy48L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdCAgYDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Y2Nlc19fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzPVwic3VjY2VzX190aXRsZVwiPtCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LrigKY8L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQgIGA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lKGRhdGEpIHtcclxuICByZXR1cm4gYCR7ZGF0YS5nZXQoXCJuYW1lXCIpfSBgO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==