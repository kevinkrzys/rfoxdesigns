(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" id=\"cart\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9\">\r\n      <h4>Shopping Cart</h4>\r\n      <table class=\"table\">\r\n        <tbody>\r\n          <tr *ngFor=\"let item of currentCart; let i = index\">\r\n            <td class=\"image text-center\">\r\n              <img [src]=\"getSrc(item)\" alt=\"{{ item.imgAlt }}\" />\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <h5>\r\n                  {{ item.name }}\r\n                  <span *ngIf=\"item.cost\" class=\"float-right\">\r\n                    ${{item.cost}}\r\n                  </span>\r\n                </h5>\r\n              </div>\r\n              <p class=\"mb-0\">\r\n                {{ item.description }}\r\n              </p>\r\n              <p *ngIf=\"item.stock > 0\" class=\"mb-0 stock\">\r\n                In Stock\r\n              </p>\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"quantity\">\r\n                    Quantity\r\n                    <input type=\"number\" class=\"form-control\" [value]=\"item.requiredQuantity\" #quantity min=\"0\"\r\n                      (change)=\"item.requiredQuantity = +quantity.value;recalculate(currentCart)\" />\r\n                  </div>\r\n                  <div class=\"delete\">\r\n                    <button class=\"btn btn-outline-danger border-0\" (click)=\"delete(item)\">Delete</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <h5 class=\"float-right\">Subtotal ({{currentCart.length}} items): ${{subtotal}}</h5>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"card p-2\">\r\n        <h5 class=\"float-right\">Subtotal({{currentCart.length}} items): ${{subtotal}}</h5>\r\n        <button class=\"btn btn-warning\" (click)=\"checkout()\">Proceed to checkout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/gallery/gallery.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/gallery/gallery.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"gallery\">\r\n  <div class=\"container\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"row\">\r\n        <!-- <input type=\"file\" (change)=\"readExcel($event)\" /> -->\r\n        <div class=\"card-group\">\r\n          <div class=\"col-lg-3 mb-3\" *ngFor=\"let product of productList\" (click)=\"display(product)\">\r\n            <div class=\"card h-100\">\r\n              <img class=\"card-img-top\" [src]=\"getSrc(product)\" alt=\"{{ product.imageAlt }}\" />\r\n              <div class=\"card-body text-center d-flex\">\r\n                <div class=\"mt-auto w-100\">\r\n                  <h5 class=\"card-title mb-0\">{{ product.name }}</h5>\r\n                  <small *ngIf=\"product.cost\" class=\"text-muted\">Rental Price:\r\n                    <strong>${{ product.cost }}</strong></small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg mb-0\"\r\n  [ngClass]=\"{'transparentBackground': transparentBackground == true, 'opaqueBackground': transparentBackground == false}\">\r\n  <a class=\"navbar-brand p-0\" href=\"#\">\r\n    <img src=\"./assets/images/rfoxbanner.jpg\" alt=\"Logo\" />\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <nav class=\"navbar navbar-expand-lg ml-auto\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item dropdown\" *ngFor=\"let item of menu\">\r\n          <a class=\"nav-link dropdown-toggle dropbtn\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            {{ item.heading }}\r\n          </a>\r\n          <div class=\"dropdown-menu-right dropdown-menu dropdown-content mt-0\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" routerLink=\"/gallery\" (click)=\"fetch(subitem.title)\"\r\n              *ngFor=\"let subitem of item.subheading\">{{ subitem.title }}</a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <form class=\"form-inline my-2 my-lg-0\" id=\"search\">\r\n            <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\r\n              Go\r\n            </button>\r\n          </form>\r\n        </li>\r\n        <li class=\"nav-item cart\" (click)=\"displayCart()\">\r\n          <a href=\"#\" onclick=\"return false\" class=\"nav-link\">\r\n            <i class=\"fa fa-shopping-cart\"></i>\r\n            Cart\r\n          </a>\r\n          <div class=\"cartCount\">\r\n            <p>\r\n              {{ itemsInCart }}\r\n            </p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 p-0\" id=\"home\">\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide mb-3\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block mx-auto\" src=\"./assets/images/10353531_721567754585601_6759608481534653472_o.jpg\"\r\n          alt=\"First slide\" />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block mx-auto\" src=\"./assets/images/13305099_1004701749605532_4756411167209058437_o.jpg\"\r\n          alt=\"Second slide\" />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block mx-auto\" src=\"./assets/images/37367108_1729434913798875_8515307606791684096_o.jpg\"\r\n          alt=\"Third slide\" />\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <h3 class=\"text-center\">Featured Products</h3>\r\n    <hr class=\"w-50\" />\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"row\">\r\n        <div class=\"card-group\">\r\n          <div class=\"col-lg-3 mb-3\" *ngFor=\"let product of featuredProducts\"\r\n            (click)=\"displayCategory(product.category)\">\r\n            <div class=\"card h-100 border-0\">\r\n              <img class=\"card-img-top\" [src]=\"getSrc(product)\" alt=\"{{ product.imageAlt }}\" />\r\n              <div class=\"card-body text-center d-flex\">\r\n                <div class=\"mt-auto w-100\">\r\n                  <h5 class=\"card-title mb-0\">{{ product.name }}</h5>\r\n                  <small class=\"text-muted\">In</small><br>\r\n                  <h6 class=\"text-muted\">\r\n                    {{product.category}}\r\n                  </h6>\r\n                  <a class=\"text-muted\">\r\n                    View All\r\n                    <i class=\"fa fa-arrow-right\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"container\">\r\n    <div class=\"col-lg-12 mb-5 p-0\" id=\"card-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 mb-3\" *ngFor=\"let product of productList\">\r\n          <div class=\"card\" (click)=\"displayProduct(product)\">\r\n            <img class=\"card-img-top\" src=\"{{ product.imageSrc }}\" alt=\"{{ product.imageAlt }}\" />\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">\r\n                {{ product.description }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"container\">\r\n    <h3 class=\"text-center\">Client Testimonials</h3>\r\n    <hr class=\"w-50\" />\r\n    <div class=\"card-columns\">\r\n      <div class=\"card card-body text-xs-center\" *ngFor=\"let item of testimonials\">\r\n        <p class=\"card-text\">\"{{ item }}\"</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"col-lg-12 mb-4\" id=\"contact\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h4>Company</h4>\r\n              <br />\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">\r\n                  <a href=\"mailto:robert@rfoxdesigns.com\">\r\n                    <i class=\"fas fa-envelope\"></i>\r\n                    Email Us</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <h4>Contact</h4>\r\n              <br />\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">\r\n                  <a href=\"tel:214-634-3778\">\r\n                    <i class=\"fas fa-phone\"></i>\r\n                    P: 214-634-3778</a>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <a href=\"tel:214-634-3778\">\r\n                    <i class=\"fas fa-fax\"></i>\r\n                    F: 214-634-3779</a>\r\n                </li>\r\n              </ul>\r\n              <br />\r\n              <p>2570 W Commerce Street<br />Dallas, Tx 75212</p>\r\n            </div>\r\n            <!-- <div class=\"col-lg-4 text-center\">\r\n              <i class=\"fas mt-4 fa-phone\"></i>\r\n              <p>Phone</p>\r\n              <p class=\"mb-4\">214-634-3778</p>\r\n            </div>\r\n            <div class=\"col-lg-4 text-center\">\r\n              <i class=\"fas mt-4 fa-map-marker-alt\"></i>\r\n              <p>Address</p>\r\n              <p class=\"mb-4\">2570 W Commerce Street Dallas, Tx 75212</p>\r\n            </div>\r\n            <div class=\"col-lg-4 text-center\">\r\n              <i class=\"fas mt-4 fa-fax\"></i>\r\n              <p>Fax</p>\r\n              <p class=\"mb-4\">214-634-3779</p>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"mb-5\" id=\"map\">\r\n            <div class=\"text-center\">\r\n              <iframe\r\n                src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.6674826828644!2d-96.86803028481802!3d32.77455658097285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9c919c6999fd%3A0xc613ca08baa94810!2sR%20Fox%20Designs%20Llc!5e0!3m2!1sen!2sus!4v1578880952240!5m2!1sen!2sus\"\r\n                width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border: 0;\" allowfullscreen=\"\"></iframe>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-page/product-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-page/product-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-lg-12\" id=\"product\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 text-center\">\r\n        <div class=\"main-image mb-3\">\r\n          <img class=\"card-img-top\" [src]=\"selectedImgSrc\" alt=\"{{ selectedProduct.imageAlt }}\" />\r\n          <!-- <ngx-image-zoom\r\n            [thumbImage]=\"selectedProduct.imageSrc\"\r\n            [fullImage]=\"selectedProduct.imageSrc\"\r\n            enableLens=\"true\"\r\n            lensWidth=\"200\"\r\n            lensHeight=\"200\"\r\n            magnification=\"1.5\"\r\n          ></ngx-image-zoom> -->\r\n        </div>\r\n        <ul class=\"extra-images\">\r\n          <li *ngFor=\"let image of array(selectedProduct.imageCount); let i = index\">\r\n            <img class=\"card-img-top\" src=\"./assets/Copy of Jared Inventory Project 3e_files/{{\r\n                    category\r\n                  }}/{{ selectedProduct.name }}_{{i + 1}}.png\" (mouseenter)=\"setImgSrc(i + 1)\"\r\n              alt=\"{{ selectedProduct.imageAlt }}\" />\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- <div class=\"col-lg-4 pl-lg-0\">\r\n        <div class=\"product-data\">\r\n          <h1 class=\"product-name\">\r\n            {{ selectedProduct.name }}\r\n          </h1>\r\n          <p class=\"description\">\r\n            {{ selectedProduct.description }}\r\n          </p>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"w-50\">\r\n          <h1 class=\"product-name\">\r\n            {{ selectedProduct.name }}\r\n          </h1>\r\n          <div class=\"p-2 border rounded\">\r\n            <div class=\"price\" *ngIf=\"selectedProduct.cost\">\r\n              <h4>Rental Price: ${{ selectedProduct.cost }}</h4>\r\n            </div>\r\n            <p class=\"mb-0\" *ngIf=\"selectedProduct.size\">\r\n              <strong>Size:</strong> {{selectedProduct.size}}\r\n            </p>\r\n            <div class=\"quantity\">\r\n              Quantity\r\n              <input type=\"number\" class=\"form-control\" #quantity value=\"0\" (change)=\"itemQuantity = quantity.value\"\r\n                min=\"0\" />\r\n            </div>\r\n\r\n            <div class=\"buttons\">\r\n              <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"addToCart(selectedProduct)\">\r\n                <span>\r\n                  <i class=\"fa fa-shopping-cart\"></i>\r\n                </span>\r\n                Add to Cart\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-primary\">\r\n                <span>\r\n                  <i class=\"fa fa-play\"></i>\r\n                </span>\r\n                Rent Now\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "./src/app/components/product-page/product-page.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");







const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "product", component: _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductPageComponent"] },
    { path: "cart", component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: "gallery", component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'rfoxdesigns';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "./src/app/components/product-page/product-page.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductPageComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
            _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_3__["NgxImageZoomModule"]
        ],
        providers: [_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _services_product_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"], _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_16__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table img {\n  width: 150px;\n}\n\ntd.image {\n  width: 250px;\n}\n\n.stock {\n  font-weight: 400;\n  color: green;\n  font-size: 12px;\n}\n\n.quantity > .custom-select-sm {\n  height: 20px;\n  padding: 0;\n}\n\n.quantity {\n  border-right: 1px solid grey;\n  padding-right: 10px;\n  font-size: 12px;\n}\n\n.quantity > .form-control {\n  padding: 0 0.75rem;\n}\n\n.delete {\n  padding-right: 10px;\n  font-size: 12px;\n}\n\n.delete {\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.delete > .btn {\n  position: relative;\n  top: calc(50% - 15px);\n  font-size: 12px;\n  padding: 5px;\n}\n\n#cart {\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0M6XFxLZXZpblxcVVREXFxTcHJpbmcgMjBcXFByb2YgU2hla2hhclxccmZveGRlc2lnbnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG50ZC5pbWFnZSB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uc3RvY2sge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnF1YW50aXR5ID4gLmN1c3RvbS1zZWxlY3Qtc20ge1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucXVhbnRpdHkge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5xdWFudGl0eSA+IC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUgPiAuYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiNjYXJ0IHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbiIsIi50YWJsZSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbnRkLmltYWdlIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uc3RvY2sge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnF1YW50aXR5ID4gLmN1c3RvbS1zZWxlY3Qtc20ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5xdWFudGl0eSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnF1YW50aXR5ID4gLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbn1cblxuLmRlbGV0ZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRlbGV0ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlID4gLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI2NhcnQge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");



let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.subtotal = 0;
        this.currentCart = this.cartService.currentCart;
        this.cartService.currentCartUpdate.subscribe(cart => {
            this.currentCart = cart;
            this.calcSubtotal(this.currentCart);
        });
    }
    ngOnInit() {
        this.calcSubtotal(this.currentCart);
    }
    array(n) {
        return Array(n);
    }
    delete(item) {
        if (confirm("Are you sure you want to delete this item?"))
            this.cartService.removeFromCart(item);
    }
    getSrc(product) {
        return product.imageCount > 0 ? './assets/Copy of Jared Inventory Project 3e_files/' + product.category + '/' + product.name + '_1.png' : './assets/images/rfoxbanner.jpg';
    }
    recalculate(cart) {
        this.calcSubtotal(cart);
    }
    calcSubtotal(cart) {
        this.subtotal = 0;
        cart.forEach(x => {
            this.subtotal += x.cost * x.requiredQuantity;
        });
    }
    checkout() {
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cart",
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-item {\n  width: 165px;\n}\n\n#gallery {\n  padding-top: 7%;\n}\n\n.card:hover {\n  cursor: pointer;\n}\n\n.card-img-top {\n  max-height: 200px;\n  width: auto;\n  padding: 5%;\n  margin: auto;\n  max-width: 100%;\n}\n\n.card {\n  border: 1px solid transparent;\n}\n\n.card:hover {\n  -webkit-animation: hover 500ms;\n          animation: hover 500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes hover {\n  0% {\n    box-shadow: none;\n  }\n  100% {\n    box-shadow: 0px 2px 2px 1px #616161;\n  }\n}\n\n@keyframes hover {\n  0% {\n    box-shadow: none;\n  }\n  100% {\n    box-shadow: 0px 2px 2px 1px #616161;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L0M6XFxLZXZpblxcVVREXFxTcHJpbmcgMjBcXFByb2YgU2hla2hhclxccmZveGRlc2lnbnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBRUUsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsZ0JBQUE7RUNBRjtFREVBO0lBQ0UsbUNBQUE7RUNBRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxnQkFBQTtFQ0FGO0VERUE7SUFDRSxtQ0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHdpZHRoOiAxNjVweDtcclxufVxyXG5cclxuI2dhbGxlcnkge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAycHggMXB4ICM2MTYxNjE7XHJcbiAgYW5pbWF0aW9uOiBob3ZlciA1MDBtcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBob3ZlciB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAxcHggIzYxNjE2MTtcclxuICB9XHJcbn1cclxuIiwiLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgd2lkdGg6IDE2NXB4O1xufVxuXG4jZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDUlO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBhbmltYXRpb246IGhvdmVyIDUwMG1zO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBob3ZlciB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDFweCAjNjE2MTYxO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product/product.service */ "./src/app/services/product/product.service.ts");





let GalleryComponent = class GalleryComponent {
    constructor(firebaseService, activatedRoute, productService, router) {
        this.firebaseService = firebaseService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        this.productList = [];
        this.lampsData = [];
        this.activatedRoute.queryParams.subscribe((x) => {
            this.firebaseService.getCategories(x["category"]).subscribe((data) => {
                this.productList = [];
                data.docs.forEach((item) => {
                    let itemData = item.data();
                    this.productList.push({
                        name: itemData["Item Name"],
                        addInfor: itemData["Additional Info"],
                        cost: itemData["Cost"],
                        quantity: itemData["Quantity"],
                        size: itemData["Size (H x W x D)"],
                        imageCount: itemData["Image"],
                        category: x["category"]
                    });
                });
                console.log(this.productList);
            });
        });
    }
    ngOnInit() {
        // this.productList = [
        //   {
        //     name: "Tin Bars",
        //     addInfor: null,
        //     cost: "200",
        //     quantity: "(8) available",
        //     size: '"51"H x 78"W x 29"D"',
        //   },
        // ];
        // this.firestore
        //   .collection("Categories")
        //   .doc("Lanterns | Lamps")
        //   .collection("Data")
        //   .get().subscribe(data => {
        //     console.log(data.docs);
        //     // this.lampsData = data.docs;
        //     data.docs.forEach(item => {
        //       console.log(item.data())
        //       let itemData = item.data();
        //       this.firestore.collection("Categories").doc("Lanterns & Lamps").collection("Data").add(itemData);
        //     })
        //   });
    }
    // readExcel(event) {
    //   let file = event.target.files;
    //   if (file.length > 0) {
    //     // readXlsxFile(file[0]).then(rows => {
    //     //   console.log(rows);
    //     //   let keys = rows[0];
    //     //   let data: {}[] = [];
    //     //   for (var i = 1; i < rows.length; i++) {
    //     //     data[i - 1] = {};
    //     //     for (var j = 0; j < keys.length; j++) {
    //     //       data[i - 1][keys[j]] = rows[i][j];
    //     //     }
    //     //   }
    //     // });
    //     readXlsxFile(file[0], { getSheets: true }).then((sheets: {}[]) => {
    //       let currentSheet = sheets[10]["name"];
    //       readXlsxFile(file[0], { sheet: currentSheet }).then(rows => {
    //         let keys = rows[0];
    //         let data: {}[] = [];
    //         for (var i = 1; i < rows.length; i++) {
    //           data[i - 1] = {};
    //           for (var j = 0; j < keys.length; j++) {
    //             data[i - 1][keys[j]] = rows[i][j];
    //           }
    //         }
    //         console.log(data);
    //         data.forEach(el => {
    //           this.firestore.collection(currentSheet).add(el);
    //         });
    //       });
    //     });
    //   }
    // }
    display(product) {
        this.productService.selectedProduct = product;
        this.router.navigate(["/product"], { relativeTo: this.activatedRoute, queryParams: { product: JSON.stringify(product), category: product.category } });
    }
    getSrc(product) {
        return product.imageCount > 0 ? './assets/Copy of Jared Inventory Project 3e_files/' + product.category + '/' + product.name + '_1.png' : './assets/images/rfoxbanner.jpg';
    }
};
GalleryComponent.ctorParameters = () => [
    { type: src_app_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-gallery",
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  width: auto;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  -moz-column-count: 3;\n       column-count: 3;\n  padding: 0;\n}\n\n.cart {\n  position: relative;\n}\n\n.cart > .nav-link {\n  width: 80px;\n}\n\n.cartCount {\n  width: 20px;\n  color: white;\n  font-weight: 800;\n  font-size: 12px;\n  margin: auto;\n  background-color: red;\n  border-radius: 50%;\n  height: 20px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.cartCount > p {\n  margin: 0;\n}\n\n.navbar-brand > img {\n  height: 55px;\n}\n\n.navbar.mb-0 {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n}\n\n.nav-link,\n.btn-outline-success {\n  color: #eee;\n}\n\n#search > input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n#search > button {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.transparentBackground {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.opaqueBackground {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXEtldmluXFxVVERcXFNwcmluZyAyMFxcUHJvZiBTaGVraGFyXFxyZm94ZGVzaWducy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7O0VBRUUsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcnQgPiAubmF2LWxpbmsge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uY2FydENvdW50IHtcclxuICB3aWR0aDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FydENvdW50ID4gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kID4gaW1nIHtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIubWItMCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtbGluayxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4jc2VhcmNoID4gaW5wdXQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuI3NlYXJjaCA+IGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50QmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ub3BhcXVlQmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbHVtbi1jb3VudDogMztcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJ0ID4gLm5hdi1saW5rIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5jYXJ0Q291bnQge1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJ0Q291bnQgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubmF2YmFyLm1iLTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmssXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4jc2VhcmNoID4gaW5wdXQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4jc2VhcmNoID4gYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi50cmFuc3BhcmVudEJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5vcGFxdWVCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(cartService, router, route) {
        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.itemsInCart = 0;
        this.transparentBackground = true;
        router.events.subscribe(data => {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                debugger;
                if (data.urlAfterRedirects.includes("home")) {
                    this.transparentBackground = true;
                }
                else {
                    this.transparentBackground = false;
                }
            }
        });
    }
    ngOnInit() {
        this.cartService.cartSize.subscribe((itemsInCart) => {
            this.itemsInCart = itemsInCart;
        });
        this.menu = [
            {
                heading: "By Category",
                subheading: [
                    { title: "Bars", link: "" },
                    { title: "Buildings", link: "" },
                    { title: "Chargers", link: "" },
                    { title: "Entrances", link: "" },
                    { title: "Games", link: "" },
                    { title: "Lanterns & Lamps", link: "" },
                    { title: "Misc Props", link: "" },
                    { title: "Pillows", link: "" },
                    { title: "Podiums", link: "" },
                    { title: "Seating", link: "" },
                    { title: "Tables", link: "" },
                ],
                columncount: 0,
            }
            // {
            //   heading: "Furniture",
            //   subheading: [
            //     { title: "Industrial", link: "" },
            //     { title: "Bars", link: "" },
            //     { title: "Columns", link: "" },
            //     { title: "Platforms", link: "" },
            //   ],
            //   columncount: 0,
            // },
            // {
            //   heading: "Event Essentials",
            //   subheading: [
            //     { title: "Buffet", link: "" },
            //     { title: "Carpet", link: "" },
            //     { title: "Dance Floor", link: "" },
            //     { title: "Flag", link: "" },
            //   ],
            //   columncount: 0,
            // },
            // {
            //   heading: "By Color",
            //   subheading: [
            //     { title: "Black", link: "" },
            //     { title: "Clear", link: "" },
            //     { title: "Green", link: "" },
            //     { title: "Orange", link: "" },
            //   ],
            //   columncount: 0,
            // },
        ];
    }
    displayCart() {
        console.log("Current cart: ", this.cartService.currentCart);
        this.router.navigate(["/cart"], { relativeTo: this.route });
    }
    fetch(category) {
        this.router.navigate(["/gallery"], {
            relativeTo: this.route,
            queryParams: {
                category: category,
            },
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  #home {\n    margin: auto;\n  }\n}\n.carousel-item {\n  height: 85vh;\n}\n.carousel-item > img {\n  width: 100%;\n}\n@media (max-width: 425px) {\n  .carousel-item > img {\n    height: 100%;\n  }\n\n  .carousel-item {\n    height: 40vh;\n  }\n}\n#card-row .card:hover {\n  cursor: pointer;\n}\n@media (max-width: 425px) {\n  #card-row {\n    padding: 0;\n  }\n}\n#testimonials .card img {\n  width: 200px;\n  border-radius: 50%;\n}\n#testimonials .card {\n  background-color: #eee;\n}\n#testimonials .card .card-text {\n  background-color: #fff;\n}\n#testimonials hr {\n  margin: 1rem auto;\n  width: 75%;\n}\n@media (max-width: 425px) {\n  #testimonials .card {\n    text-align: center;\n  }\n}\n.fas {\n  font-size: 1.5rem;\n}\n.fa-phone {\n  transform: rotate(90deg);\n}\n.card-columns {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n.card.h-100 {\n  cursor: pointer;\n}\n.card.h-100:hover {\n  -webkit-animation: hover 500ms;\n          animation: hover 500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes hover {\n  0% {\n    box-shadow: none;\n  }\n  100% {\n    box-shadow: 0px 2px 2px 1px #616161;\n  }\n}\n@keyframes hover {\n  0% {\n    box-shadow: none;\n  }\n  100% {\n    box-shadow: 0px 2px 2px 1px #616161;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxLZXZpblxcVVREXFxTcHJpbmcgMjBcXFByb2YgU2hla2hhclxccmZveGRlc2lnbnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ0FGOztFREdBO0lBQ0UsWUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0U7SUFDRSxVQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZGO0FES0E7RUFDRTtJQUNFLGtCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsaUJBQUE7QUNIRjtBRE1BO0VBQ0Usd0JBQUE7QUNIRjtBRE1BO0VBQ0Usb0JBQUE7T0FBQSxlQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7QUNIRjtBRE1BO0VBRUUsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNKRjtBRE9BO0VBQ0U7SUFDRSxnQkFBQTtFQ0pGO0VETUE7SUFDRSxtQ0FBQTtFQ0pGO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsZ0JBQUE7RUNKRjtFRE1BO0lBQ0UsbUNBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjaG9tZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5jYXJvdXNlbC1pdGVtID4gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICB9XHJcbn1cclxuXHJcbiNjYXJkLXJvdyAuY2FyZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAjY2FyZC1yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbHMgLmNhcmQgaW1nIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jdGVzdGltb25pYWxzIC5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4jdGVzdGltb25pYWxzIC5jYXJkIC5jYXJkLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbHMgaHIge1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICN0ZXN0aW1vbmlhbHMgLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZhcyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYS1waG9uZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1jb2x1bW5zIHtcclxuICBjb2x1bW4tY291bnQ6IDI7XHJcbn1cclxuXHJcbi5jYXJkLmgtMTAwIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLmgtMTAwOmhvdmVyIHtcclxuICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDJweCAxcHggIzYxNjE2MTtcclxuICBhbmltYXRpb246IGhvdmVyIDUwMG1zO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDFweCAjNjE2MTYxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2hvbWUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDg1dmg7XG59XG5cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2Fyb3VzZWwtaXRlbSA+IGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNhcm91c2VsLWl0ZW0ge1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxufVxuI2NhcmQtcm93IC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgI2NhcmQtcm93IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4jdGVzdGltb25pYWxzIC5jYXJkIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jdGVzdGltb25pYWxzIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuI3Rlc3RpbW9uaWFscyAuY2FyZCAuY2FyZC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI3Rlc3RpbW9uaWFscyBociB7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgI3Rlc3RpbW9uaWFscyAuY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uZmFzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mYS1waG9uZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmNhcmQtY29sdW1ucyB7XG4gIGNvbHVtbi1jb3VudDogMjtcbn1cblxuLmNhcmQuaC0xMDAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLmgtMTAwOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBob3ZlciA1MDBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgaG92ZXIge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAxcHggIzYxNjE2MTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product/product.service */ "./src/app/services/product/product.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.testimonials = [];
        this.productList = [];
        this.featuredProducts = [];
    }
    ngOnInit() {
        this.setTestimonials();
        this.setCarousel();
    }
    setCarousel() {
        this.featuredProducts = [
            {
                addInfor: "Complimenting décor available as well: Marylin Monroe statue, Oversized hot dog and ice cream sundae, Giant Jukebox, 50s style highboys and barstools",
                category: "Buildings",
                cost: 1750,
                imageCount: 2,
                name: "50's Diner Façade",
                quantity: "(1) available",
                size: "8'H x 18'L x 2'D"
            },
            {
                addInfor: null,
                category: "Bars",
                cost: 200,
                imageCount: 3,
                name: "Cowhide Bars",
                quantity: "(10) available",
                size: "51'H x 78'W x 29'D"
            },
            {
                addInfor: null,
                category: "Misc Props",
                cost: null,
                imageCount: 1,
                name: "Golden Statues",
                quantity: "(2) available",
                size: "9'H X 36'W X36' D",
            },
            {
                addInfor: null,
                category: "Podiums",
                cost: null,
                imageCount: 1,
                name: "Long Horn Podium",
                quantity: "(1) available",
                size: "48H X 72W X 16D"
            }
        ];
    }
    displayCategory(category) {
        // this.productService.setProduct(product);
        this.router.navigate(["/gallery"], {
            relativeTo: this.route, queryParams: {
                category: category,
            },
        });
    }
    setTestimonials() {
        this.testimonials = [
            `Wow! I've been in the business nearly 13 years and have never worked with a designer quite like yourself. From conception to installation, you and your team were there for me every step of the way with unique and creative ideas, wonderful proposals, on time arrivals for every installation, a great crew with positive attitudes and a final product that blew my client's socks off! R Fox Designs is the best! I can't wait to work with you again!`,
            `Thank you so much. With your help the evening was a huge success.`,
            `Thanks so much for all of your help with the Party Fest After Party. It turned out to be such a hit! We definitely couldn't have done it without you!`,
            `I wanted to say thank you for the wonderful décor. Everyone just loved it! The event went off without a hitch and your staff was wonderful.`,
            `Just wanted to say thanks again for your team's work at that ... event last week. I was really impressed with the overall look of the event. Can't wait to work with you again.`,
            `Thank you so much for all of your help at the NACE 50th Anniversary party. Your room looked amazing. I truly appreciate your willingness to help whenever asked or not asked. I'm so glad that I can always count on you! ... I heard a lot of people talking about how great your room looked. Please thank Jared, Steve and all for helping with the drape and so much more.`,
        ];
    }
    getSrc(product) {
        return product.imageCount > 0 ? './assets/Copy of Jared Inventory Project 3e_files/' + product.category + '/' + product.name + '_1.png' : './assets/images/rfoxbanner.jpg';
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/product-page/product-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".extra-images {\n  list-style: none;\n  padding: 0;\n  display: inline-flex;\n}\n\n.extra-images li > img {\n  width: 80px;\n  margin: 0 5px;\n}\n\n.main-image > img {\n  width: 60%;\n}\n\nh1.product-name {\n  font-size: 1.8rem;\n  font-weight: 400;\n}\n\n.buttons > .btn {\n  width: 100%;\n}\n\n.quantity {\n  margin: 0 0 10px 0;\n}\n\n.quantity > .custom-select-sm {\n  width: auto;\n  margin-left: 10px;\n}\n\n.stock h4 {\n  font-weight: 400;\n  color: green;\n}\n\n.price h5 {\n  font-weight: 400;\n}\n\n#product {\n  padding-top: 10%;\n}\n\np,\n.quantity {\n  font: 14px;\n}\n\n.main-image {\n  min-height: 60vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UvQzpcXEtldmluXFxVVERcXFNwcmluZyAyMFxcUHJvZiBTaGVraGFyXFxyZm94ZGVzaWducy9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdC1wYWdlXFxwcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhLWltYWdlcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZXh0cmEtaW1hZ2VzIGxpID4gaW1nIHtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZSA+IGltZyB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuaDEucHJvZHVjdC1uYW1lIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYnV0dG9ucyA+IC5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucXVhbnRpdHkge1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxufVxyXG5cclxuLnF1YW50aXR5ID4gLmN1c3RvbS1zZWxlY3Qtc20ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc3RvY2sgaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucHJpY2UgaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNwcm9kdWN0IHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG5wLFxyXG4ucXVhbnRpdHkge1xyXG4gIGZvbnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlIHtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG59XHJcbiIsIi5leHRyYS1pbWFnZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmV4dHJhLWltYWdlcyBsaSA+IGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ubWFpbi1pbWFnZSA+IGltZyB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbmgxLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnV0dG9ucyA+IC5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnF1YW50aXR5IHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4ucXVhbnRpdHkgPiAuY3VzdG9tLXNlbGVjdC1zbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnN0b2NrIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucHJpY2UgaDUge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4jcHJvZHVjdCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbnAsXG4ucXVhbnRpdHkge1xuICBmb250OiAxNHB4O1xufVxuXG4ubWFpbi1pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/product-page/product-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductPageComponent = class ProductPageComponent {
    constructor(cartService, activatedRoute) {
        this.cartService = cartService;
        this.activatedRoute = activatedRoute;
        this.itemQuantity = "0";
        this.activatedRoute.queryParams.subscribe((x) => {
            this.selectedProduct = JSON.parse(x['product']);
            this.category = x['category'];
        });
    }
    ngOnInit() {
        this.selectedImgSrc = './assets/Copy of Jared Inventory Project 3e_files/' + this.category + '/' + this.selectedProduct.name + '_' + 1 + '.png';
    }
    array(n) {
        return Array(n);
    }
    addToCart(product) {
        // console.log(`${this.itemQuantity}` != '0');
        if (this.itemQuantity != '0') {
            product.requiredQuantity = +this.itemQuantity;
            this.cartService.addToCart(product);
        }
        else {
            alert("Enter valid quantity!");
        }
    }
    setImgSrc(index) {
        this.selectedImgSrc = './assets/Copy of Jared Inventory Project 3e_files/' + this.category + '/' + this.selectedProduct.name + '_' + index + '.png';
    }
};
ProductPageComponent.ctorParameters = () => [
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProductPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-page",
        template: __webpack_require__(/*! raw-loader!./product-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-page/product-page.component.html"),
        styles: [__webpack_require__(/*! ./product-page.component.scss */ "./src/app/components/product-page/product-page.component.scss")]
    })
], ProductPageComponent);



/***/ }),

/***/ "./src/app/services/cart/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CartService = class CartService {
    constructor() {
        this.cart = [];
        this.cartSize = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentCartUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.quantity = 0;
        if (JSON.parse(sessionStorage.getItem("currentCart"))) {
            this.cart = JSON.parse(sessionStorage.getItem("currentCart"));
            setTimeout(() => {
                this.cartSize.next(this.cart.length);
                this.currentCartUpdate.next(this.cart);
            }, 50);
        }
    }
    addToCart(product) {
        // console.log(!this.cart.some(x => x.name == product.name));
        if (!this.cart.some(x => x.name == product.name)) {
            this.cart.push(product);
        }
        else {
            let index = this.cart.findIndex(x => x.name == product.name);
            if (index != -1 && confirm("Update Product Quantity from " + this.cart[index].requiredQuantity + " to " + product.requiredQuantity + "?")) {
                this.cart[index].requiredQuantity = product.requiredQuantity;
                alert("Quantity Updated Successfully!");
            }
        }
        this.syncCart();
    }
    get currentCart() {
        return this.cart;
    }
    removeFromCart(item) {
        var index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
        this.syncCart();
    }
    syncCart() {
        sessionStorage.setItem("currentCart", JSON.stringify(this.cart));
        this.cartSize.next(this.cart.length);
        this.currentCartUpdate.next(this.cart);
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CartService);



/***/ }),

/***/ "./src/app/services/firebase/firebase.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/firebase.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let FirebaseService = class FirebaseService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getCategories(category) {
        // return this.firestore
        //   .collection("Categories")
        //   .doc("Bars")
        //   .collection("Data")
        //   .get();
        return this.firestore
            .collection("Categories")
            .doc(category)
            .collection("Data")
            .get();
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], FirebaseService);



/***/ }),

/***/ "./src/app/services/product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductService = class ProductService {
    constructor() { }
    setProduct(product) {
        this.selectedProduct = product;
        sessionStorage.setItem("selectedProduct", JSON.stringify(this.selectedProduct));
    }
    get product() {
        return (this.selectedProduct ||
            JSON.parse(sessionStorage.getItem("selectedProduct")));
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ProductService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDsugamFhzzpHzzSKRiLFv9N5Laki_74Tc",
        authDomain: "rfoxdesigns-9d9a0.firebaseapp.com",
        databaseURL: "https://rfoxdesigns-9d9a0.firebaseio.com",
        projectId: "rfoxdesigns-9d9a0",
        storageBucket: "rfoxdesigns-9d9a0.appspot.com",
        messagingSenderId: "891923946494",
        appId: "1:891923946494:web:6a990d9e36867f994cbeaf",
        measurementId: "G-5M6GR5E85N"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Kevin\UTD\Spring 20\Prof Shekhar\rfoxdesigns\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map