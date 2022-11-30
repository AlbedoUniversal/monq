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
      // 1669840853159
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

(0,_phoneinput_js__WEBPACK_IMPORTED_MODULE_1__.phoneInput)();
(0,_postForm_js__WEBPACK_IMPORTED_MODULE_2__.postForm)();

const deleteActiveClassFromAll = (list, className) => {
  for (let button of list) {
    button.classList.remove(`${className}`);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguZTVhOTg4NGVhYjhlM2ZjYjgwNGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1I0QjtBQUNpQjtBQUNKO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBVTtBQUNWLHNEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbklNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2NkN2UiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9waG9uZWlucHV0LmpzIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9wb3N0Rm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjY5ODQwODUzMTU5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuaW1wb3J0IHsgcGhvbmVJbnB1dCB9IGZyb20gJy4vcGhvbmVpbnB1dC5qcyc7XHJcbmltcG9ydCB7IHBvc3RGb3JtIH0gZnJvbSAnLi9wb3N0Rm9ybS5qcyc7XHJcblxyXG4vLyBGb3IgdG9nZ2xpbmcgYW5kIGZpbmRpbmcgbnVtYmVyIG9mIGNoaWxkcmVuIGFuZCBvdGhlciBzdHVmZiBpcyBkb25lIGhlcmUhXHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xyXG5jb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idXJnZXInKTtcclxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19waG9uZScpO1xyXG5jb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbk1vZGFsQnRuJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IGNsb3NlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlLWJ1dHRvbicpO1xyXG5cclxuY29uc3Qgb3BlblJlc3VsdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fYnV0dG9uJyk7XHJcbmNvbnN0IHJlc3VsdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdE1vZGFsJyk7XHJcbmNvbnN0IGNsb3NlUmVzdWx0TW9kYWwgPSByZXN1bHRNb2RhbC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0TW9kYWxfX2Nsb3NlLWJ1dHRvbicpO1xyXG5cclxuY29uc3QgYWxsUmFkaW9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlza3NfX3JhZGlvLWJ0bicpO1xyXG5jb25zdCBhbGxSYWRpb0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19jaGVja2JveCcpO1xyXG5jb25zdCBhbGxTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19zbGlkZScpO1xyXG5cclxucGhvbmVJbnB1dCgpO1xyXG5wb3N0Rm9ybSgpO1xyXG5cclxuY29uc3QgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsID0gKGxpc3QsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBsaXN0KSB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc05hbWV9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuTW9kYWwubGVuZ3RoOyBpKyspIHtcclxuICBvcGVuTW9kYWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsUmFkaW9CdG4ubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCByYWRpb0J0biA9IGFsbFJhZGlvQnRuW2ldO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gYWxsUmFkaW9DaGVja2JveFtpXTtcclxuICBjb25zdCBzbGlkZSA9IGFsbFNsaWRlcnNbaV07XHJcblxyXG4gIHJhZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGFsbFJhZGlvQnRuLCAncmlza3NfX3JhZGlvLWJ0bi0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsUmFkaW9DaGVja2JveCwgJ3Jpc2tzX19jaGVja2JveC0tYWN0aXZlJyk7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoYWxsU2xpZGVycywgJ3Jpc2tzX19zbGlkZS0tYWN0aXZlJyk7XHJcblxyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmlza3NfX2NoZWNrYm94LS1hY3RpdmUnKTtcclxuICAgIHJhZGlvQnRuLmNsYXNzTGlzdC5hZGQoJ3Jpc2tzX19yYWRpby1idG4tLWFjdGl2ZScpO1xyXG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgncmlza3NfX3NsaWRlLS1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxubWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1idXJnZXItLWFjdGl2ZScpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcclxuICBwaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX3Bob25lLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxub3BlblJlc3VsdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICByZXN1bHRNb2RhbC5jbGFzc0xpc3QuYWRkKCdyZXN1bHRNb2RhbC0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuY2xvc2VSZXN1bHRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgcmVzdWx0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVzdWx0TW9kYWwtLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJlc3VsdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQgPT09IHJlc3VsdE1vZGFsKSB7XHJcbiAgICByZXN1bHRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdyZXN1bHRNb2RhbC0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICByZXN1bHRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdyZXN1bHRNb2RhbC0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ub24tc2Nyb2xsJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGNpcmNsZU51bWJlckJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZHZhbnRhZ2VzLWNpcmNsZV9fdGV4dCcpO1xyXG5jb25zdCBjaXJjbGVTbGlkZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZHZhbnRhZ2VzX19zbGlkZScpO1xyXG5jb25zdCBhZHZhbnRhZ2VzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWR2YW50YWdlcy1jaXJjbGUnKTtcclxuY29uc3QgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XHJcbmNvbnN0IHdoeU1vbnFCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aHlNb25xJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZU51bWJlckJ0bkFsbC5sZW5ndGg7IGkrKykge1xyXG4gIGNvbnN0IGNpcmNsZU51bWJlckJ0biA9IGNpcmNsZU51bWJlckJ0bkFsbFtpXTtcclxuICBjb25zdCBjaXJjbGVTbGlkZSA9IGNpcmNsZVNsaWRlQWxsW2ldO1xyXG5cclxuICBjaXJjbGVOdW1iZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoY2lyY2xlU2xpZGVBbGwsICdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgICBjaXJjbGVTbGlkZS5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIGNpcmNsZU51bWJlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoY2lyY2xlU2xpZGVBbGwsICdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgICBjaXJjbGVTbGlkZS5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnJlc3VsdEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gIGNvbnN0IGNpcmNsZVNsaWRlRGVmYXVsdCA9IGNpcmNsZVNsaWRlQWxsWzVdO1xyXG5cclxuICBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwoY2lyY2xlU2xpZGVBbGwsICdhZHZhbnRhZ2VzX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgY2lyY2xlU2xpZGVEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG53aHlNb25xQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgY29uc3QgY2lyY2xlU2xpZGVEZWZhdWx0ID0gY2lyY2xlU2xpZGVBbGxbNV07XHJcblxyXG4gIGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbChjaXJjbGVTbGlkZUFsbCwgJ2FkdmFudGFnZXNfX3NsaWRlLS1hY3RpdmUnKTtcclxuICBjaXJjbGVTbGlkZURlZmF1bHQuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlc19fc2xpZGUtLWFjdGl2ZScpO1xyXG59KTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBob25lSW5wdXQoKSB7XHJcbiAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W2RhdGEtdGVsLWlucHV0XVwiKTtcclxuXHJcbiAgdmFyIGdldElucHV0TnVtYmVyc1ZhbHVlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAvLyBSZXR1cm4gc3RyaXBwZWQgaW5wdXQgdmFsdWUg4oCUIGp1c3QgbnVtYmVyc1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25QaG9uZVBhc3RlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxyXG4gICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KTtcclxuICAgIHZhciBwYXN0ZWQgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBpZiAocGFzdGVkKSB7XHJcbiAgICAgIHZhciBwYXN0ZWRUZXh0ID0gcGFzdGVkLmdldERhdGEoXCJUZXh0XCIpO1xyXG4gICAgICBpZiAoL1xcRC9nLnRlc3QocGFzdGVkVGV4dCkpIHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIHBhc3RlIG5vbi1udW1lcmljIHN5bWJvbCDigJQgcmVtb3ZlIGFsbCBub24tbnVtZXJpYyBzeW1ib2xzLFxyXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgd2lsbCBiZSBpbiBvblBob25lSW5wdXQgaGFuZGxlclxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uUGhvbmVJbnB1dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBlLnRhcmdldCxcclxuICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCksXHJcbiAgICAgIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmICghaW5wdXROdW1iZXJzVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIChpbnB1dC52YWx1ZSA9IFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcclxuICAgICAgLy8gRWRpdGluZyBpbiB0aGUgbWlkZGxlIG9mIGlucHV0LCBub3QgbGFzdCBzeW1ib2xcclxuICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBpbnB1dCBub24tbnVtZXJpYyBzeW1ib2xcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoW1wiN1wiLCBcIjlcIl0uaW5kZXhPZihpbnB1dE51bWJlcnNWYWx1ZVswXSkgPiAtMSkge1xyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI5XCIpXHJcbiAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBcIjdcIiArIGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICB2YXIgZmlyc3RTeW1ib2xzID0gXCIrN1wiO1xyXG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gaW5wdXQudmFsdWUgPSBmaXJzdFN5bWJvbHMgKyBcIiBcIjtcclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9IFwiKFwiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDEsIDQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gNSkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCIpIFwiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDQsIDcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCItXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNywgOSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCItXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCIrXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMCwgMTYpO1xyXG4gICAgfVxyXG4gICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlO1xyXG4gIH07XHJcbiAgdmFyIG9uUGhvbmVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIENsZWFyIGlucHV0IGFmdGVyIHJlbW92ZSBsYXN0IHN5bWJvbFxyXG4gICAgdmFyIGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09IDggJiYgaW5wdXRWYWx1ZS5sZW5ndGggPT0gMSkge1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBmb3IgKHZhciBwaG9uZUlucHV0IG9mIHBob25lSW5wdXRzKSB7XHJcbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uUGhvbmVLZXlEb3duKTtcclxuICAgIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uUGhvbmVJbnB1dCwgZmFsc2UpO1xyXG4gICAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgb25QaG9uZVBhc3RlLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuY29uc3QgVVJMID0gXCIvZm9ybS9zZW5kXCI7XHJcblxyXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGRhdGEsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XHJcbiAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgY29uc3QgYnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjaGVja1ZhbGlkKCkge1xyXG4gICAgbGV0IGlzRXJyb3IgPSBpbnB1dHMubGVuZ3RoO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgIGlmIChpLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgaXNFcnJvci0tO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlzRXJyb3JcclxuICAgICAgPyBidXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpXHJcbiAgICAgIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICB9XHJcblxyXG4gIGlucHV0cy5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hlY2tWYWxpZCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKSk7XHJcblxyXG4gICAgcG9zdERhdGEoVVJMLCBqc29uKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGZvcm0uaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2VzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJzdWNjZXNfX3RpdGxlXCI+0JfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwPC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwic3VjY2VzX190ZXh0XCI+JHtjcmVhdGVOYW1lKFxyXG4gICAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICAgKX0sINCy0LDRiCDQt9Cw0L/RgNC+0YEg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC9LiDQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLjwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0ICBgO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGZvcm0uaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2VzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJzdWNjZXNfX3RpdGxlXCI+0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuuKApjwvaDI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdCAgYDtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hbWUoZGF0YSkge1xyXG4gIHJldHVybiBgJHtkYXRhLmdldChcIm5hbWVcIil9IGA7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9