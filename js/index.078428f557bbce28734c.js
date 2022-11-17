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
      // 1668714934723
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
const openModal = document.querySelector('.umbrellaMonitoring__more');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close-button');

(0,_phoneinput_js__WEBPACK_IMPORTED_MODULE_1__.phoneInput)();
(0,_postForm_js__WEBPACK_IMPORTED_MODULE_2__.postForm)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguMDc4NDI4ZjU1N2JiY2UyODczNGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1I0QjtBQUNpQjtBQUNKO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBVTtBQUNWLHNEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9CTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9jZDdlIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvcGhvbmVpbnB1dC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvcG9zdEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2ODcxNDkzNDcyM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IHBob25lSW5wdXQgfSBmcm9tICcuL3Bob25laW5wdXQuanMnO1xyXG5pbXBvcnQgeyBwb3N0Rm9ybSB9IGZyb20gJy4vcG9zdEZvcm0uanMnO1xyXG5cclxuLy8gRm9yIHRvZ2dsaW5nIGFuZCBmaW5kaW5nIG51bWJlciBvZiBjaGlsZHJlbiBhbmQgb3RoZXIgc3R1ZmYgaXMgZG9uZSBoZXJlIVxyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xyXG5jb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idXJnZXInKTtcclxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19waG9uZScpO1xyXG5jb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW1icmVsbGFNb25pdG9yaW5nX19tb3JlJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IGNsb3NlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlLWJ1dHRvbicpO1xyXG5cclxucGhvbmVJbnB1dCgpO1xyXG5wb3N0Rm9ybSgpO1xyXG5cclxubWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1idXJnZXItLWFjdGl2ZScpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LS1hY3RpdmUnKTtcclxuICBwaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX3Bob25lLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5vcGVuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fbm9uLXNjcm9sbCcpO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKTtcclxufSk7XHJcblxyXG5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX25vbi1zY3JvbGwnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGhvbmVJbnB1dCgpIHtcclxuICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbZGF0YS10ZWwtaW5wdXRdXCIpO1xyXG5cclxuICB2YXIgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIC8vIFJldHVybiBzdHJpcHBlZCBpbnB1dCB2YWx1ZSDigJQganVzdCBudW1iZXJzXHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblBob25lUGFzdGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlucHV0ID0gZS50YXJnZXQsXHJcbiAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpO1xyXG4gICAgdmFyIHBhc3RlZCA9IGUuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGlmIChwYXN0ZWQpIHtcclxuICAgICAgdmFyIHBhc3RlZFRleHQgPSBwYXN0ZWQuZ2V0RGF0YShcIlRleHRcIik7XHJcbiAgICAgIGlmICgvXFxEL2cudGVzdChwYXN0ZWRUZXh0KSkge1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gcGFzdGUgbm9uLW51bWVyaWMgc3ltYm9sIOKAlCByZW1vdmUgYWxsIG5vbi1udW1lcmljIHN5bWJvbHMsXHJcbiAgICAgICAgLy8gZm9ybWF0dGluZyB3aWxsIGJlIGluIG9uUGhvbmVJbnB1dCBoYW5kbGVyXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxyXG4gICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KSxcclxuICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gKGlucHV0LnZhbHVlID0gXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAvLyBFZGl0aW5nIGluIHRoZSBtaWRkbGUgb2YgaW5wdXQsIG5vdCBsYXN0IHN5bWJvbFxyXG4gICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIGlucHV0IG5vbi1udW1lcmljIHN5bWJvbFxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChbXCI3XCIsIFwiOVwiXS5pbmRleE9mKGlucHV0TnVtYmVyc1ZhbHVlWzBdKSA+IC0xKSB7XHJcbiAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjlcIilcclxuICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgIHZhciBmaXJzdFN5bWJvbHMgPSBcIis3XCI7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBpbnB1dC52YWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gXCIoXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIikgXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSBcIi1cIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIitcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygwLCAxNik7XHJcbiAgICB9XHJcbiAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWU7XHJcbiAgfTtcclxuICB2YXIgb25QaG9uZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gQ2xlYXIgaW5wdXQgYWZ0ZXIgcmVtb3ZlIGxhc3Qgc3ltYm9sXHJcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIGZvciAodmFyIHBob25lSW5wdXQgb2YgcGhvbmVJbnB1dHMpIHtcclxuICAgIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25QaG9uZUtleURvd24pO1xyXG4gICAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25QaG9uZUlucHV0LCBmYWxzZSk7XHJcbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBob25lUGFzdGUsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5jb25zdCBVUkwgPSBcIi9mb3JtL3NlbmRcIjtcclxuXHJcbmNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogZGF0YSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcclxuICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuICBjb25zdCBidXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWQoKSB7XHJcbiAgICBsZXQgaXNFcnJvciA9IGlucHV0cy5sZW5ndGg7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgaWYgKGkudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICBpc0Vycm9yLS07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaXNFcnJvclxyXG4gICAgICA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIilcclxuICAgICAgOiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRzLmZvckVhY2goKGkpID0+IHtcclxuICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja1ZhbGlkKTtcclxuICB9KTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcclxuXHJcbiAgICBwb3N0RGF0YShVUkwsIGpzb24pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzcz1cInN1Y2Nlc19fdGl0bGVcIj7Ql9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LA8L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJzdWNjZXNfX3RleHRcIj4ke2NyZWF0ZU5hbWUoXHJcbiAgICAgICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICAgICApfSwg0LLQsNGIINC30LDQv9GA0L7RgSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L0uINCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQgIGA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWNjZXNfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzcz1cInN1Y2Nlc19fdGl0bGVcIj7Qp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC64oCmPC9oMj5cclxuXHRcdFx0PC9kaXY+XHJcblx0ICBgO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmFtZShkYXRhKSB7XHJcbiAgcmV0dXJuIGAke2RhdGEuZ2V0KFwibmFtZVwiKX0gYDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=