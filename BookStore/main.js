(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [cart]='cart'></app-navbar>\n<div style=\"font-family: Arial, sans-serif; color: lightseagreen\">\n    <h1>{{title}}</h1>\n</div>\n    <router-outlet></router-outlet>\n<footer>\n    <p>&copy; {{year}}</p>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.year = new Date().getFullYear();
        this.cart = {
            items: [],
            totalquantity: 0,
            totalprice: 0
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _wave_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wave.pipe */ "./src/app/wave.pipe.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"] }
];
//every route goes to the home component
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_4__["BookComponent"],
                _wave_pipe__WEBPACK_IMPORTED_MODULE_5__["WavePipe"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avatar.service.ts":
/*!***********************************!*\
  !*** ./src/app/avatar.service.ts ***!
  \***********************************/
/*! exports provided: AvatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarService", function() { return AvatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarService = /** @class */ (function () {
    function AvatarService() {
    }
    AvatarService.prototype.getAvatar = function (email) {
        //return "https://2.gravatar.com/avatar/" +Md5.hashStr(email);
        return "https://api.adorable.io/avatars/400" + ts_md5__WEBPACK_IMPORTED_MODULE_1__["Md5"].hashStr(email);
    };
    AvatarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AvatarService);
    return AvatarService;
}());



/***/ }),

/***/ "./src/app/book-model.ts":
/*!*******************************!*\
  !*** ./src/app/book-model.ts ***!
  \*******************************/
/*! exports provided: BookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModel", function() { return BookModel; });
var BookModel = /** @class */ (function () {
    function BookModel() {
    }
    return BookModel;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 24rem; margin-bottom: 15px;\">\n  <img class=\"card-img-top img mx-auto\" src=\"{{getFullImagePath()}}\" alt=\"{{book.name}}\">\n  <div class=\"card-body\">\n      <app-tabs [book]=\"book\"></app-tabs>\n      <h5 class =\"card-title\">{{book.name}}</h5>\n        <p class=\"card-text author\">By: {{book.author}}</p>\n        <p class=\"card-text\">{{book.price | currency}}</p>\n  </div>\n    <!--{{book.formats}}-->\n    <select class = \"form-control\" [(ngModel)] = \"selectedFormat\">\n        <option *ngFor=\"let format of book.formats\">{{format}}</option>\n    </select>\n    <button *ngIf=\"book.inventory > 0\" class=\"btn btn-secondary\" (click)=\"addToCart()\">Add to Cart</button>\n    <button *ngIf=\"book.inventory <= 0\" class=\"btn btn-danger\" disabled>Sold Out</button>\n</div>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-model */ "./src/app/book-model.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart-model */ "./src/app/cart-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.getFullImagePath = function () {
        if (this.selectedFormat === 'movie') {
            var image = void 0;
            image = this.book.fullImagePath.split('.');
            return "." + image[1] + '-movie.' + image[2];
        }
        else {
            return this.book.fullImagePath;
        }
    };
    BookComponent.prototype.ngOnInit = function () {
        this.selectedFormat = this.book.formats[0];
    };
    BookComponent.prototype.addToCart = function () {
        var _this = this;
        this.book.inventory = this.book.inventory - 1;
        if (this.book.inventory <= 0) {
            this.book.name = this.book.name + '[SOLD OUT]';
        }
        var existingItem;
        existingItem = this.cart.items.find(function (x) { return x.bookid == _this.book.id; });
        if (!existingItem) {
            this.cart.items.push({ bookid: this.book.id, name: this.book.name, quantity: 1, unitprice: this.book.price });
        }
        else {
            existingItem.quantity = existingItem.quantity + 1;
        }
        this.cart.totalquantity = this.cart.totalquantity + 1;
        this.cart.totalprice = this.cart.totalprice + this.book.price;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _book_model__WEBPACK_IMPORTED_MODULE_1__["BookModel"])
    ], BookComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cart_model__WEBPACK_IMPORTED_MODULE_2__["CartModel"])
    ], BookComponent.prototype, "cart", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/cart-model.ts":
/*!*******************************!*\
  !*** ./src/app/cart-model.ts ***!
  \*******************************/
/*! exports provided: CartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModel", function() { return CartModel; });
var CartModel = /** @class */ (function () {
    function CartModel() {
    }
    return CartModel;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n  <app-book  [cart] = \"cart\" [book]=\"g\" *ngFor=\"let g of homeBook\"></app-book>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-model */ "./src/app/cart-model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient) {
        this.httpClient = httpClient;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get('./assets/book.json').subscribe(function (results) { _this.homeBook = results; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cart_model__WEBPACK_IMPORTED_MODULE_1__["CartModel"])
    ], HomeComponent.prototype, "cart", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-secondary bg-secondary\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: mediumseagreen; font-size: large\">Harry Potter Store</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n         <li class=\"nav-item\">\n            <a class=\"nav-link text-white\" routerLink=\"/cart\" routerLinkActive=\"active\">Cart<span class=\"badge badge\"> {{cart.totalquantity}}</span>\n            </a>\n        </li>\n      <li class=\"nav-item dropdown  text-white\">\n        <a class=\"nav-link dropdown-toggle  text-white\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"/action\">Action</a>\n          <a class=\"dropdown-item\" href=\"/other-action\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"/something-else\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-model */ "./src/app/cart-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cart_model__WEBPACK_IMPORTED_MODULE_1__["CartModel"])
    ], NavbarComponent.prototype, "cart", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Existing Reviews-->\n<!--Existing Reviews-->\n<h6>Reviews</h6>\n<div *ngFor=\"let review of book.reviews\">\n    <div class=\"row\">\n        <div class=\"col-2\">\n\t       <img class=\"img-fluid\" src=\"{{avatarService.getAvatar(review.author)}}\" />\n        </div>\n        <div class=\"col-8\">\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">{{review.body}}</p>\n                <footer class=\"blockquote-footer\"><cite>{{review.author}}</cite></footer>\n            </blockquote>\n        </div>\n        <div class=\"col-2\">\n            <h1>{{review.rating}}</h1>\n        </div>\n    </div>\n</div>\n\n<!--New Review-->\n<div class=\"row\">\n    <div class=\"col-2\">\n\t   <img class=\"img-fluid\" src=\"https://2.gravatar.com/avatar/blank\" />\n    </div>\n    <div class=\"col-8\">\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">{{newReview.body}}</p>\n                <footer class=\"blockquote-footer\"><cite>{{newReview.author}}</cite></footer>\n            </blockquote>\n    </div>\n    <div class=\"col-2\">\n            <h1>{{newReview.rating}}</h1>\n    </div>\n</div>\n<form name = \"form\" (ngSubmit)=\"submitClicked(); reviewForm.reset()\" #reviewForm=\"ngForm\">\n\t<div *ngIf=\"reviewForm.invalid && email.touched && body.touched\" class=\"alert alert-danger\">\n\t\t<ul>\n            <li *ngIf=\"email.errors && email.errors.required\">\n                Email is required.\n            </li>\n\t\t\t<li *ngIf=\"email.errors && email.errors.pattern\">\n                Email is not formatted correctly.\n            </li>\n\t\t\t<li *ngIf=\"body.errors && body.errors.required\">\n                Body is required and cannot exceed 400 characters.\n            </li>\n\t\t\t<li *ngIf=\"rating.errors && rating.errors.required\">\n                Rating is required.\n            </li>\n        </ul>\n\n\n\t</div>\n <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input  class=\"form-control\" type=\"email\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"newReview.author\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #email=\"ngModel\" [class.is-valid]=\"email.valid\" [class.is-invalid]=\"email.invalid && email.touched\" />\n\t\t<div class=\"invalid-feedback\">\n\t\t\tEmail is required and needs to look like an email address.\n\t\t</div>\n\n\t</div>\n    <div class=\"form-group\">\n        <label for=\"body\">Review</label>\n        <textarea class=\"form-control\" ng-maxlength=\"400\" placeholder=\"Enter your review\" name=\"body\" [(ngModel)]=\"newReview.body\" required #body=\"ngModel\" [class.is-valid]=\"body.valid\" [class.is-invalid]=\"body.invalid && body.touched\"></textarea>\n\t\t<div class=\"invalid-feedback\">\n\t\t\tReview is required.\n\t\t</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"rating\">Rating</label>\n        <select class=\"form-control\" name=\"rating\" [(ngModel)]=\"newReview.rating\" required #rating=\"ngModel\" [class.is-valid]=\"rating.valid\" [class.is-invalid]=\"rating.invalid && rating.touched\">\n\t\t\t<option></option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n        </select>\n\t\t<div class=\"invalid-feedback\">\n\t\t\tRating is required.\n\t\t</div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Submit Review\" [disabled]=\"reviewForm.invalid\" />\n</form>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-model */ "./src/app/book-model.ts");
/* harmony import */ var _avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../avatar.service */ "./src/app/avatar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {HttpClient, HttpHeaders } from '@angular/common/http';

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(avatarService) {
        this.avatarService = avatarService;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.newReview = {
            id: -1,
            createddate: "",
            body: "",
            rating: 5,
            author: ""
        };
    };
    ReviewsComponent.prototype.submitClicked = function () {
        if (!this.book.reviews) {
            this.book.reviews = [];
        }
        //this.httpClient.post('http://localhost:62144/book/addreview', {body: this.newReview.body, author: this.newReview.author, rating: this.newReview.rating}).subscribe((x) => {console.log(x)});
        this.book.reviews.push(this.newReview);
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _book_model__WEBPACK_IMPORTED_MODULE_1__["BookModel"])
    ], ReviewsComponent.prototype, "book", void 0);
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [_avatar_service__WEBPACK_IMPORTED_MODULE_2__["AvatarService"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.css":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabs/tabs.component.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills btn btn-sm\" style=\"justify-content: center\">\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"#\" (click)=\"setTab(1)\" [class.active] =\"tab ===1\">Description</a>\n\t</li>\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"#\" (click)=\"setTab(2)\" [class.active] =\"tab ===2\">Reviews</a>\n\t</li>\n</ul>\n<div *ngIf=\"tab === 1\">\n\t<p class=\"card-text\">{{book.description}}</p>\n</div>\n<div *ngIf=\"tab === 2\">\n    <app-reviews [book]=\"book\"></app-reviews>\n</div>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-model */ "./src/app/book-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.tab = 1;
    };
    TabsComponent.prototype.setTab = function (selectedTab) {
        this.tab = selectedTab;
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _book_model__WEBPACK_IMPORTED_MODULE_1__["BookModel"])
    ], TabsComponent.prototype, "book", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/wave.pipe.ts":
/*!******************************!*\
  !*** ./src/app/wave.pipe.ts ***!
  \******************************/
/*! exports provided: WavePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavePipe", function() { return WavePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WavePipe = /** @class */ (function () {
    function WavePipe() {
    }
    WavePipe.prototype.transform = function (value, args) {
        var result;
        result = '';
        for (var i = 0; i < value.length; i++) {
            if (i % 2 == 0) {
                result = result.concat(value[i].toUpperCase());
            }
            else {
                result = result.concat(value[i].toLowerCase());
            }
        }
        return result;
    };
    WavePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wave'
        })
    ], WavePipe);
    return WavePipe;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jorda\Documents\GitHub\BookStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map