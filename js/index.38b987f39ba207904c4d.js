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
      // 1670141370464
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
const menuBurger = document.querySelectorAll('.header__menu-burger');
const menuBurgerClose = document.querySelector('.header__menu-burger--close');

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

menuBurger[0].addEventListener('click', () => {
  menu.classList.add('header__menu--active');
  document.body.classList.add('modal__non-scroll');
  phone.classList.add('header__phone--active');
});

menuBurgerClose.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
  document.body.classList.remove('modal__non-scroll');
  phone.classList.remove('header__phone--active');
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
const URL = '/form/send';

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  return await res.json();
};

function postForm() {
  const forms = document.querySelectorAll('#form');

  for (let i = 0; i < form.length; i++) {
    const form = forms[i];

    const inputs = form.querySelectorAll('input');
    const button = form.querySelector('button');

    function checkValid() {
      let isError = inputs.length;

      inputs.forEach((i) => {
        if (i.validity.valid) {
          isError--;
        }
      });
      isError ? button.classList.add('disabled') : button.classList.remove('disabled');
    }

    inputs.forEach((i) => {
      i.addEventListener('change', checkValid);
    });

    form.addEventListener('submit', (e) => {
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
              formData,
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
}

function createName(data) {
  return `${data.get('name')} `;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","styles"], function() { return __webpack_exec__("./src/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3M/Y2Q3ZSIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL3Bob25laW5wdXQuanMiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL3Bvc3RGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NzAxNDEzNzA0NjRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBwaG9uZUlucHV0IH0gZnJvbSAnLi9waG9uZWlucHV0LmpzJztcclxuaW1wb3J0IHsgcG9zdEZvcm0gfSBmcm9tICcuL3Bvc3RGb3JtLmpzJztcclxuXHJcbi8vIEZvciB0b2dnbGluZyBhbmQgZmluZGluZyBudW1iZXIgb2YgY2hpbGRyZW4gYW5kIG90aGVyIHN0dWZmIGlzIGRvbmUgaGVyZSFcclxuXHJcbmNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51Jyk7XHJcbmNvbnN0IG1lbnVCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51LWJ1cmdlcicpO1xyXG5jb25zdCBtZW51QnVyZ2VyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ1cmdlci0tY2xvc2UnKTtcclxuXHJcbmNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGhvbmUnKTtcclxuY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW5Nb2RhbEJ0bicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuXHJcbmNvbnN0IG9wZW5SZXN1bHRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbicpO1xyXG5jb25zdCByZXN1bHRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRNb2RhbCcpO1xyXG5jb25zdCBjbG9zZVJlc3VsdE1vZGFsID0gcmVzdWx0TW9kYWwucXVlcnlTZWxlY3RvcignLnJlc3VsdE1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuXHJcbmNvbnN0IGFsbFJhZGlvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19yYWRpby1idG4nKTtcclxuY29uc3QgYWxsUmFkaW9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXNrc19fY2hlY2tib3gnKTtcclxuY29uc3QgYWxsU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXNrc19fc2xpZGUnKTtcclxuXHJcbmNvbnN0IGFsbExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51LWl0ZW0nKTtcclxuXHJcbnBob25lSW5wdXQoKTtcclxucG9zdEZvcm0oKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbCA9IChsaXN0LCBjbGFzc05hbWUpID0+IHtcclxuICBmb3IgKGxldCBidXR0b24gb2YgbGlzdCkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsTGluay5sZW5ndGg7IGkrKykge1xyXG4gIGNvbnN0IGxpbmsgPSBhbGxMaW5rW2ldO1xyXG5cclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtYnVyZ2VyLS1hY3RpdmUnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuTW9kYWwubGVuZ3RoOyBpKyspIHtcclxuICBvcGVuTW9kYWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsUmFkaW9CdG4ubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCByYWRpb0J0biA9IGFsbFJhZGlvQnRuW2ldO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gYWxsUmFkaW9DaGVja2JveFtpXTtcclxuICBjb25zdCBzbGlkZSA9IGFsbFNsaWRlcnNbaV07XHJcblxyXG4gIHJhZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGFsbFJhZGlvQnRuLCAncmlza3NfX3JhZGlvLWJ0bi0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsUmFkaW9DaGVja2JveCwgJ3Jpc2tzX19jaGVja2JveC0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsU2xpZGVycywgJ3Jpc2tzX19zbGlkZS0tYWN0aXZlJyk7XHJcblxyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmlza3NfX2NoZWNrYm94LS1hY3RpdmUnKTtcclxuICAgIHJhZGlvQnRuLmNsYXNzTGlzdC5hZGQoJ3Jpc2tzX19yYWRpby1idG4tLWFjdGl2ZScpO1xyXG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgncmlza3NfX3NsaWRlLS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxubWVudUJ1cmdlclswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fcGhvbmUtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbm1lbnVCdXJnZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIHBob25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fcGhvbmUtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5vcGVuUmVzdWx0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5jbG9zZVJlc3VsdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICByZXN1bHRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdyZXN1bHRNb2RhbC0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICB9XHJcbn0pO1xyXG5cclxucmVzdWx0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldCA9PT0gcmVzdWx0TW9kYWwpIHtcclxuICAgIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKTtcclxuICAgIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgY2lyY2xlTnVtYmVyQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkdmFudGFnZXMtY2lyY2xlX190ZXh0Jyk7XHJcbmNvbnN0IGNpcmNsZVNsaWRlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkdmFudGFnZXNfX3NsaWRlJyk7XHJcbmNvbnN0IGFkdmFudGFnZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzLWNpcmNsZScpO1xyXG5jb25zdCByZXN1bHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcclxuY29uc3Qgd2h5TW9ucUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoeU1vbnEnKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlTnVtYmVyQnRuQWxsLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29uc3QgY2lyY2xlTnVtYmVyQnRuID0gY2lyY2xlTnVtYmVyQnRuQWxsW2ldO1xyXG4gIGNvbnN0IGNpcmNsZVNsaWRlID0gY2lyY2xlU2xpZGVBbGxbaV07XHJcblxyXG4gIGNpcmNsZU51bWJlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbChjaXJjbGVTbGlkZUFsbCwgJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICAgIGNpcmNsZVNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgY2lyY2xlTnVtYmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgIGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbChjaXJjbGVTbGlkZUFsbCwgJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICAgIGNpcmNsZVNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxucmVzdWx0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgY29uc3QgY2lyY2xlU2xpZGVEZWZhdWx0ID0gY2lyY2xlU2xpZGVBbGxbNV07XHJcblxyXG4gIGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbChjaXJjbGVTbGlkZUFsbCwgJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICBjaXJjbGVTbGlkZURlZmF1bHQuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbndoeU1vbnFCbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICBjb25zdCBjaXJjbGVTbGlkZURlZmF1bHQgPSBjaXJjbGVTbGlkZUFsbFs1XTtcclxuXHJcbiAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGNpcmNsZVNsaWRlQWxsLCAnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG4gIGNpcmNsZVNsaWRlRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGhvbmVJbnB1dCgpIHtcclxuICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbZGF0YS10ZWwtaW5wdXRdXCIpO1xyXG5cclxuICB2YXIgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIC8vIFJldHVybiBzdHJpcHBlZCBpbnB1dCB2YWx1ZSDigJQganVzdCBudW1iZXJzXHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblBob25lUGFzdGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlucHV0ID0gZS50YXJnZXQsXHJcbiAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpO1xyXG4gICAgdmFyIHBhc3RlZCA9IGUuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGlmIChwYXN0ZWQpIHtcclxuICAgICAgdmFyIHBhc3RlZFRleHQgPSBwYXN0ZWQuZ2V0RGF0YShcIlRleHRcIik7XHJcbiAgICAgIGlmICgvXFxEL2cudGVzdChwYXN0ZWRUZXh0KSkge1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gcGFzdGUgbm9uLW51bWVyaWMgc3ltYm9sIOKAlCByZW1vdmUgYWxsIG5vbi1udW1lcmljIHN5bWJvbHMsXHJcbiAgICAgICAgLy8gZm9ybWF0dGluZyB3aWxsIGJlIGluIG9uUGhvbmVJbnB1dCBoYW5kbGVyXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxyXG4gICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KSxcclxuICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gKGlucHV0LnZhbHVlID0gXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAvLyBFZGl0aW5nIGluIHRoZSBtaWRkbGUgb2YgaW5wdXQsIG5vdCBsYXN0IHN5bWJvbFxyXG4gICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIGlucHV0IG5vbi1udW1lcmljIHN5bWJvbFxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChbXCI3XCIsIFwiOVwiXS5pbmRleE9mKGlucHV0TnVtYmVyc1ZhbHVlWzBdKSA+IC0xKSB7XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjlcIilcclxuICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIHZhciBmaXJzdFN5bWJvbHMgPSBcIis3XCI7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBpbnB1dC52YWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCIoXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIikgXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIitcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygwLCAxNik7XHJcbiAgICB9XHJcbiAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWU7XHJcbiAgfTtcclxuICB2YXIgb25QaG9uZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gQ2xlYXIgaW5wdXQgYWZ0ZXIgcmVtb3ZlIGxhc3Qgc3ltYm9sXHJcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIGZvciAodmFyIHBob25lSW5wdXQgb2YgcGhvbmVJbnB1dHMpIHtcclxuICAgIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25QaG9uZUtleURvd24pO1xyXG4gICAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25QaG9uZUlucHV0LCBmYWxzZSk7XHJcbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBob25lUGFzdGUsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5jb25zdCBVUkwgPSAnL2Zvcm0vc2VuZCc7XHJcblxyXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGRhdGEsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Zvcm0nKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZm9ybXNbaV07XHJcblxyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkKCkge1xyXG4gICAgICBsZXQgaXNFcnJvciA9IGlucHV0cy5sZW5ndGg7XHJcblxyXG4gICAgICBpbnB1dHMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgIGlmIChpLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICBpc0Vycm9yLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaXNFcnJvciA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja1ZhbGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgICAgcG9zdERhdGEoVVJMLCBqc29uKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWNjZXNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwic3VjY2VzX190aXRsZVwiPtCX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3VjY2VzX190ZXh0XCI+JHtjcmVhdGVOYW1lKFxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICApfSwg0LLQsNGIINC30LDQv9GA0L7RgSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L0uINCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWNjZXNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwic3VjY2VzX190aXRsZVwiPtCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LrigKY8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lKGRhdGEpIHtcclxuICByZXR1cm4gYCR7ZGF0YS5nZXQoJ25hbWUnKX0gYDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=