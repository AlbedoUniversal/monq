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
      // 1669281440160
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
  document.body.classList.add('resultModal__non-scroll');
  resultModal.classList.add('resultModal--active');
});

closeResultModal.addEventListener('click', () => {
  document.body.classList.remove('resultModal__non-scroll');
  resultModal.classList.remove('resultModal--active');
});


const text = document.querySelector('.textt');

text.addEventListener('click', () => {
  text.classList.toggle('yellow')
  text.innerHTML = 'ffjjfjfjfjfjfj';
})



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguZWJiNTQ2MTU2NTFmYTM3OTU5MjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1I0QjtBQUNpQjtBQUNKOztBQUV6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBVTtBQUNWLHNEQUFROztBQUVSO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2NkN2UiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9waG9uZWlucHV0LmpzIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9wb3N0Rm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjY5MjgxNDQwMTYwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCB7IHBob25lSW5wdXQgfSBmcm9tICcuL3Bob25laW5wdXQuanMnO1xuaW1wb3J0IHsgcG9zdEZvcm0gfSBmcm9tICcuL3Bvc3RGb3JtLmpzJztcblxuLy8gRm9yIHRvZ2dsaW5nIGFuZCBmaW5kaW5nIG51bWJlciBvZiBjaGlsZHJlbiBhbmQgb3RoZXIgc3R1ZmYgaXMgZG9uZSBoZXJlIVxuXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51Jyk7XG5jb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idXJnZXInKTtcbmNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGhvbmUnKTtcbmNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuTW9kYWxCdG4nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBjbG9zZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZS1idXR0b24nKTtcblxuY29uc3Qgb3BlblJlc3VsdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fYnV0dG9uJyk7XG5jb25zdCByZXN1bHRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRNb2RhbCcpO1xuY29uc3QgY2xvc2VSZXN1bHRNb2RhbCA9IHJlc3VsdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRNb2RhbF9fY2xvc2UtYnV0dG9uJyk7XG5cbmNvbnN0IGFsbFJhZGlvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19yYWRpby1idG4nKTtcbmNvbnN0IGFsbFJhZGlvQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlza3NfX2NoZWNrYm94Jyk7XG5jb25zdCBhbGxTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpc2tzX19zbGlkZScpO1xuXG5waG9uZUlucHV0KCk7XG5wb3N0Rm9ybSgpO1xuXG5jb25zdCBkZWxldGVBY3RpdmVDbGFzc0Zyb21BbGwgPSAobGlzdCwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAobGV0IGJ1dHRvbiBvZiBsaXN0KSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfWApO1xuICB9XG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG9wZW5Nb2RhbC5sZW5ndGg7IGkrKykge1xuICBvcGVuTW9kYWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKTtcbiAgfSk7XG59XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsUmFkaW9CdG4ubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgcmFkaW9CdG4gPSBhbGxSYWRpb0J0bltpXTtcbiAgY29uc3QgY2hlY2tib3ggPSBhbGxSYWRpb0NoZWNrYm94W2ldO1xuICBjb25zdCBzbGlkZSA9IGFsbFNsaWRlcnNbaV07XG5cbiAgcmFkaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGFsbFJhZGlvQnRuLCAncmlza3NfX3JhZGlvLWJ0bi0tYWN0aXZlJyk7XG4gICAgZGVsZXRlQWN0aXZlQ2xhc3NGcm9tQWxsKGFsbFJhZGlvQ2hlY2tib3gsICdyaXNrc19fY2hlY2tib3gtLWFjdGl2ZScpO1xuICAgIGRlbGV0ZUFjdGl2ZUNsYXNzRnJvbUFsbChhbGxTbGlkZXJzLCAncmlza3NfX3NsaWRlLS1hY3RpdmUnKTtcblxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Jpc2tzX19jaGVja2JveC0tYWN0aXZlJyk7XG4gICAgcmFkaW9CdG4uY2xhc3NMaXN0LmFkZCgncmlza3NfX3JhZGlvLWJ0bi0tYWN0aXZlJyk7XG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgncmlza3NfX3NsaWRlLS1hY3RpdmUnKTtcbiAgfSk7XG59XG5cbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWJ1cmdlci0tYWN0aXZlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19waG9uZS0tYWN0aXZlJyk7XG59KTtcblxuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XG59KTtcblxub3BlblJlc3VsdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1vZGFsX19ub24tc2Nyb2xsJyk7XG4gIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcbn0pO1xuXG5jbG9zZVJlc3VsdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc3VsdE1vZGFsX19ub24tc2Nyb2xsJyk7XG4gIHJlc3VsdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc3VsdE1vZGFsLS1hY3RpdmUnKTtcbn0pO1xuXG5cbmNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dHQnKTtcblxudGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGV4dC5jbGFzc0xpc3QudG9nZ2xlKCd5ZWxsb3cnKVxuICB0ZXh0LmlubmVySFRNTCA9ICdmZmpqZmpmamZqZmpmaic7XG59KVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gcGhvbmVJbnB1dCgpIHtcclxuICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbZGF0YS10ZWwtaW5wdXRdXCIpO1xyXG5cclxuICB2YXIgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIC8vIFJldHVybiBzdHJpcHBlZCBpbnB1dCB2YWx1ZSDigJQganVzdCBudW1iZXJzXHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblBob25lUGFzdGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlucHV0ID0gZS50YXJnZXQsXHJcbiAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpO1xyXG4gICAgdmFyIHBhc3RlZCA9IGUuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGlmIChwYXN0ZWQpIHtcclxuICAgICAgdmFyIHBhc3RlZFRleHQgPSBwYXN0ZWQuZ2V0RGF0YShcIlRleHRcIik7XHJcbiAgICAgIGlmICgvXFxEL2cudGVzdChwYXN0ZWRUZXh0KSkge1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gcGFzdGUgbm9uLW51bWVyaWMgc3ltYm9sIOKAlCByZW1vdmUgYWxsIG5vbi1udW1lcmljIHN5bWJvbHMsXHJcbiAgICAgICAgLy8gZm9ybWF0dGluZyB3aWxsIGJlIGluIG9uUGhvbmVJbnB1dCBoYW5kbGVyXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxyXG4gICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KSxcclxuICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gKGlucHV0LnZhbHVlID0gXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAvLyBFZGl0aW5nIGluIHRoZSBtaWRkbGUgb2YgaW5wdXQsIG5vdCBsYXN0IHN5bWJvbFxyXG4gICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIGlucHV0IG5vbi1udW1lcmljIHN5bWJvbFxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChbXCI3XCIsIFwiOVwiXS5pbmRleE9mKGlucHV0TnVtYmVyc1ZhbHVlWzBdKSA+IC0xKSB7XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjlcIilcclxuICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIHZhciBmaXJzdFN5bWJvbHMgPSBcIis3XCI7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBpbnB1dC52YWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCIoXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIikgXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIitcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygwLCAxNik7XHJcbiAgICB9XHJcbiAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWU7XHJcbiAgfTtcclxuICB2YXIgb25QaG9uZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gQ2xlYXIgaW5wdXQgYWZ0ZXIgcmVtb3ZlIGxhc3Qgc3ltYm9sXHJcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIGZvciAodmFyIHBob25lSW5wdXQgb2YgcGhvbmVJbnB1dHMpIHtcclxuICAgIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25QaG9uZUtleURvd24pO1xyXG4gICAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25QaG9uZUlucHV0LCBmYWxzZSk7XHJcbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBob25lUGFzdGUsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgVVJMID0gXCIvZm9ybS9zZW5kXCI7XG5cbmNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogZGF0YSxcbiAgfSk7XG5cbiAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG4gIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICBjb25zdCBidXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5cbiAgZnVuY3Rpb24gY2hlY2tWYWxpZCgpIHtcbiAgICBsZXQgaXNFcnJvciA9IGlucHV0cy5sZW5ndGg7XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKGkudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgaXNFcnJvci0tO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlzRXJyb3JcbiAgICAgID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKVxuICAgICAgOiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaW5wdXRzLmZvckVhY2goKGkpID0+IHtcbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hlY2tWYWxpZCk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcblxuICAgIHBvc3REYXRhKFVSTCwganNvbilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJzdWNjZXNfX3RpdGxlXCI+0JfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInN1Y2Nlc19fdGV4dFwiPiR7Y3JlYXRlTmFtZShcbiAgICAgICAgICAgIGZvcm1EYXRhXG4gICAgICAgICAgKX0sINCy0LDRiCDQt9Cw0L/RgNC+0YEg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC9LiDQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLjwvcD5cblx0XHRcdDwvZGl2PlxuXHQgIGA7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3VjY2VzX19jb250ZW50XCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzPVwic3VjY2VzX190aXRsZVwiPtCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LrigKY8L2gyPlxuXHRcdFx0PC9kaXY+XG5cdCAgYDtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmFtZShkYXRhKSB7XG4gIHJldHVybiBgJHtkYXRhLmdldChcIm5hbWVcIil9IGA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=