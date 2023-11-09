/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/advantages/advantages.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/advantages/advantages.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(window).on('load', function () {
    $('.advantages__items').slick({
      slidesToShow: 6,
      dots: false,
      appendDots: '.advantages__pagination',
      dotsClass: "advantages__pagination",
      customPaging: function customPaging(slick, index) {
        return '<div class="advantages__dot_item"></div>';
      },
      prevArrow: false,
      nextArrow: false,
      responsive: [{
        breakpoint: 1000,
        settings: {
          centerMode: true,
          variableWidth: true,
          infinite: false,
          slidesToShow: 1,
          dots: true,
          appendDots: '.advantages__pagination',
          dotsClass: "advantages__pagination",
          customPaging: function customPaging(slick, index) {
            return '<div class="advantages__dot_item"></div>';
          },
          prevArrow: false,
          nextArrow: false
        }
      }]
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/availability/availability.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/availability/availability.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/banner/banner.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/banner/banner.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/banner2/banner2.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/banner2/banner2.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  // Функция для изменения изображения в зависимости от ширины экрана
  function hideImageOnLargeScreen() {
    var bannerImage = document.getElementById('banner2Image');
    var screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      bannerImage.style.display = 'none';
    } else {
      bannerImage.style.display = 'block';
    }
  }
  window.addEventListener('load', hideImageOnLargeScreen);
  window.addEventListener('resize', hideImageOnLargeScreen);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  function hideImageOnLargeScreen() {
    var bannerImage = document.getElementById('banner2Image');
    var screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      bannerImage.style.display = 'none';
    } else {
      bannerImage.style.display = 'block';
    }
  }
  window.addEventListener('load', hideImageOnLargeScreen);
  window.addEventListener('resize', hideImageOnLargeScreen);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {

  // alert('footer script');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  function hideElements() {
    var screenWidth = window.innerWidth;
    var logo_menu = document.getElementById('menu_hamburger');
    var menu = document.getElementById('menu');
    var header__right = document.getElementById('header__right-block');
    var header__left = document.getElementById('header__left-block');
    var header_logo = document.getElementById('header_logo');
    if (screenWidth <= 1200) {
      logo_menu.style.display = 'block';
      menu.style.display = 'none';
      header__right.style.display = 'none';
      header__left.style.display = 'none';
      header_logo.style.display = 'block';
    } else {
      logo_menu.style.display = 'none';
      menu.style.display = 'flex';
      header__right.style.display = 'flex';
      header__left.style.display = 'flex';
      header_logo.style.display = 'none';
    }
  }
  window.addEventListener('load', hideElements);
  window.addEventListener('resize', hideElements);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var phoneMenu = document.getElementById("phoneMenu");
  var defaultMenu = document.getElementById("defaultMenu");
  var menuHamburger = document.getElementById("menu_hamburger");
  var menuClose = document.getElementById("menu_close");
  menuClose.addEventListener("click", function () {
    phoneMenu.style.display = "none";
    defaultMenu.style.display = "flex";
  });
  menuHamburger.addEventListener("click", function () {
    phoneMenu.style.display = "flex";
    defaultMenu.style.display = "none";
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var getButton = document.getElementById("get_button");
  var phoneModal = document.getElementById("phoneModal");
  var modalClose = document.getElementById("modal_close");
  getButton.addEventListener("click", function () {
    phoneModal.style.display = "flex";
  });
  modalClose.addEventListener("click", function () {
    phoneModal.style.display = "none";
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/models/models.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/models/models.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/stocks/stocks.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/stocks/stocks.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(window).on('load', function () {
    $('.stocks__content').slick({
      slidesToShow: 3,
      dots: true,
      appendDots: '.stocks__pagination',
      dotsClass: "stocks__pagination",
      customPaging: function customPaging(slick, index) {
        return '<div class="stocks__dot_item"></div>';
      },
      prevArrow: false,
      nextArrow: false,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/timer/timer.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/timer/timer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var endDate = new Date('2023-11-31 23:59:59').getTime(); // Дата окончания акции

  // Функция для обновления таймера
  function updateTimer() {
    var now = new Date().getTime();
    var timeRemaining = endDate - now;
    if (timeRemaining <= 0) {
      document.getElementById('countdown').style.display = 'none';
      document.querySelector(".timer__left-block-text").textContent = "Акция закончилась";
      return;
    }
    var padZero = function padZero(num) {
      return num < 10 ? "0".concat(num) : num;
    };
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
  }

  // Функция для обновления SVG изображения
  function updateSVGImage() {
    var svgImage1 = document.getElementById('svgImage1');
    var svgImage2 = document.getElementById('svgImage2');
    if (window.innerWidth <= 1400) {
      svgImage1.style.display = 'none';
      svgImage2.style.display = 'block';
    } else {
      svgImage1.style.display = 'block';
      svgImage2.style.display = 'none';
    }
  }
  setInterval(updateTimer, 1000);
  updateTimer();
  updateSVGImage();
  window.addEventListener('resize', updateSVGImage);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/banner/banner */ "./src/blocks/modules/banner/banner.js");
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/timer/timer */ "./src/blocks/modules/timer/timer.js");
/* harmony import */ var _modules_timer_timer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_timer_timer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/advantages/advantages */ "./src/blocks/modules/advantages/advantages.js");
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_models_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/models/models */ "./src/blocks/modules/models/models.js");
/* harmony import */ var _modules_models_models__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_models_models__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_stocks_stocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/stocks/stocks */ "./src/blocks/modules/stocks/stocks.js");
/* harmony import */ var _modules_stocks_stocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_stocks_stocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_availability_availability__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/availability/availability */ "./src/blocks/modules/availability/availability.js");
/* harmony import */ var _modules_availability_availability__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_availability_availability__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_banner2_banner2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/banner2/banner2 */ "./src/blocks/modules/banner2/banner2.js");
/* harmony import */ var _modules_banner2_banner2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_banner2_banner2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_11__);













/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map