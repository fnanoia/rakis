/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/requests.js":
/*!******************************!*\
  !*** ./frontend/requests.js ***!
  \******************************/
/***/ ((module) => {

//crear constructor con rutas y metodos, get post delete para manejar el formulario
//exportar modulo
//importar en app.js para el evento del FORM

class FormRequire{
    
    construtor() {
        this.URL= "http://localhost:4000/api/form";
    }

    //obtener form
    async getForm(){
       const formResponse = await fetch(this.URL);
       const form = await formResponse.json();
       return form;
    }

    //guardar form. envia datos al backend
    async postForm(form){
        const formResponse = await fetch(this.URL, {
            method: "POST",
            body: form
        }
            );
        const data = await formResponse.json();
        console.log(data);
    }

    async deleteForm(formID){
        const formResponse = await fetch(`${this.URL}/${formID}`,{
            headers: {
                "Content-type" : "application/json"
            },
            method: "DELETE"
    });
    const deleted = await formResponse.json();
    console.log(deleted);
    }
}

module.exports = FormRequire;

/***/ }),

/***/ "./frontend/static/background.jpg":
/*!****************************************!*\
  !*** ./frontend/static/background.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/background.jpg");

/***/ }),

/***/ "./frontend/static/img3.jpg":
/*!**********************************!*\
  !*** ./frontend/static/img3.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img3.jpg");

/***/ }),

/***/ "./frontend/styles/main.css":
/*!**********************************!*\
  !*** ./frontend/styles/main.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/background.jpg */ "./frontend/static/background.jpg");
/* harmony import */ var _static_img3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/img3.jpg */ "./frontend/static/img3.jpg");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ "./frontend/requests.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_requests__WEBPACK_IMPORTED_MODULE_2__);
//importo el css desde el JS
__webpack_require__(/*! ./styles/main.css */ "./frontend/styles/main.css");

//importo todas las imagenes que voy a usar en el sitio



//importo archivo JS de requests para el backend


//eventos render
let programs = document.getElementById("programs__info");
document.getElementById("programs__btn").addEventListener("click", () =>{
   let programsInfo = document.createElement("div");
   programsInfo.innerHTML= `
      <div class="d-flex justify-content-center m-5">
          <div class="card m-5 pb-5" style="max-width: 540px">
            <img src="/img/educativo.png" alt="..." class="card-img-top mx-auto d-block img-fluid" style="width: 200px">
            <div class="card-body">
              <h5 class="card-title">Instituciones educativas</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure</p>
            </div>
            <div class="mx-auto p-1">
              <a href="/#contact"><button type="submit" class="btn btn-dark">Mas informacion!</button></a>
            </div>
          </div>
          <div class="card m-5 pb-5" style="max-width: 540px">
            <img src="/img/empresa.png" alt="..." class="card-img-top mx-auto d-block img-fluid" style="width: 200px">
            <div class="card-body">
              <h5 class="card-title">Empresas</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure.</p>
            </div>
            <div class="mx-auto p-1">
              <a href="/#contact"><button type="submit" class="btn btn-dark">Mas informacion!</button></a>
            </div>
          </div>
      </div>
   `
   programs.append(programsInfo);
});

//eventos btn
let contact = document.getElementById("contact__info");
let contactBtn = document.getElementById("contact__btn");
contactBtn.addEventListener("click", ()=>{

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(contact.innerHTML= `<button class="btn btn-dark" disabled>Enviado</button>`);
}, 3000);
})
.then(contact.innerHTML = `<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>`);
});


//eventos form submit
document.getElementById("contact__form").addEventListener("submit", function(e){
  
  e.preventDefault();

  const email = document.getElementById("email__form").value;
  const name = document.getElementById("name__form").value;

  console.log(email);
  console.log(name);
  //form js. le appendeo los datos captados en el submit
  const formData = new FormData();
  formData.append("email", email);
  formData.append("name", name);

  //modulo creado para mandar datos al backend en requests.js
  const formRequest = new (_requests__WEBPACK_IMPORTED_MODULE_2___default())();
  formRequest.postForm(formData);

});





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map