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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "a{\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <nav>\n   <h1> <a routerLink=\"/products\" style=\"color: black;\">Products</a></h1>\n    <!-- Другие ссылки... -->\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'my-online-store';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"] },
    { path: 'products/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        this.cartItems = [];
        this.cartItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cartItems);
    }
    CartService.prototype.getCartItems = function () {
        return this.cartItemsSubject.asObservable();
    };
    CartService.prototype.addToCart = function (product, quantity) {
        var existingItem = this.cartItems.find(function (item) { return item.product.id === product.id; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.cartItems.push({ product: product, quantity: quantity });
        }
        this.cartItemsSubject.next(this.cartItems);
    };
    CartService.prototype.removeFromCart = function (product) {
        this.cartItems = this.cartItems.filter(function (item) { return item.product.id !== product.id; });
        this.cartItemsSubject.next(this.cartItems);
    };
    CartService.prototype.getTotal = function () {
        return this.cartItems.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    CartService.prototype.clearCart = function () {
        this.cartItems = [];
        this.cartItemsSubject.next(this.cartItems);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\nbutton{\r\n    background-color: gray;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-left:  20px;\r\n    \r\n}\r\na{\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- cart.component.html -->\n<button [routerLink]=\"['/products']\">BACK</button>\n<h1>Cart</h1>\n\n<div class=\"cart\">\n  <div class=\"cart-item\" *ngFor=\"let item of cartItems\">\n    <img class=\"img\" [src]=\"item.product.imageUrl\" alt=\"{{ item.product.name }}\">\n    <h3>{{ item.product.name }}</h3>\n    <p>{{ item.product.price | currency }} x {{ item.quantity }}</p>\n    <button style=\"color:red\" (click)=\"removeFromCart(item)\">Remove</button>\n  </div>\n  <h3>Total: {{ total | currency }}</h3>\n <button><a [routerLink]=\"['/checkout']\">Checkout</a></button> \n</div>"

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
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
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
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
        this.total = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCartItems().subscribe(function (cartItems) {
            _this.cartItems = cartItems;
            _this.total = _this.cartService.getTotal();
        });
    };
    CartComponent.prototype.removeFromCart = function (item) {
        this.cartService.removeFromCart(item.product);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  div {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  input {\r\n    width: 100%;\r\n    padding: 8px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  button {\r\n    padding: 10px 20px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button[disabled] {\r\n    background-color: #ccc;\r\n  }"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button style=\"margin:10px 20px; background-color: gray; color: black;\" [routerLink]=\"['/cart']\">BACK</button>\n<h1>Checkout</h1>\n<form (ngSubmit)=\"onSubmit()\" #checkoutForm=\"ngForm\">\n  <div>\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" required [(ngModel)]=\"checkoutData.name\" name=\"name\" #name=\"ngModel\">\n    <div *ngIf=\"name.invalid && name.touched\">Name is required</div>\n  </div>\n  <div>\n    <label for=\"address\">Address:</label>\n    <input type=\"text\" id=\"address\" required [(ngModel)]=\"checkoutData.address\" name=\"address\" #address=\"ngModel\">\n    <div *ngIf=\"address.invalid && address.touched\">Address is required</div>\n  </div>\n  <div>\n    <label for=\"card\">Credit Card:</label>\n    <input type=\"text\" id=\"card\" required [(ngModel)]=\"checkoutData.card\" name=\"card\" #card=\"ngModel\">\n    <div *ngIf=\"card.invalid && card.touched\">Credit Card is required</div>\n  </div>\n  <button type=\"submit\" [disabled]=\"checkoutForm.invalid\">Place Order</button>\n</form>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.cartItems = [];
        this.total = 0;
        this.checkoutData = {
            name: '',
            address: '',
            card: ''
        };
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCartItems().subscribe(function (items) {
            _this.cartItems = items;
            _this.total = _this.cartService.getTotal();
        });
        console.log(2);
    };
    CheckoutComponent.prototype.placeOrder = function () {
        // Implement order placement logic here
        console.log('Order placed');
    };
    CheckoutComponent.prototype.onSubmit = function () {
        alert("\n    Customer Information:\n    Name: " + this.checkoutData.name + "\n    Address: " + this.checkoutData.address + "\n    Credit Card: " + this.checkoutData.card + "\n\n    Order Details:\n    " + this.cartItems.map(function (item) { return item.product.name + " - " + item.product.price + " x " + item.quantity; }).join('\n') + "\n    \n    Total: " + this.total + "\n  ");
        this.cartService.clearCart();
        this.router.navigate(['/products']);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n.description{\r\n    width: 500px;\r\n}\r\nbutton{\r\n    background-color: gray;\r\n    padding: 10px 20px;\r\n    margin: 10px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.details{\r\n    margin-left: 20px;\r\n}"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- product-detail.component.html -->\n<button [routerLink]=\"['/products']\">BACK</button>\n<div *ngIf=\"product\" class=\"details\">\n  <img class=\"img\" [src]=\"product.imageUrl\" alt=\"{{ product.name }}\">\n  <h2>{{ product.name }}</h2>\n  <p class=\"description\">{{ product.description }}</p>\n  <p>{{ product.price | currency }}</p>\n  <button (click)=\"addToCart()\">Add to Cart</button>\n</div>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.productService.getProduct(id).subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDetailComponent.prototype.addToCart = function () {
        if (this.product) {
            this.cartService.addToCart(this.product, 1); // Add 1 item by default
        }
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n.description{\r\n    width: 500px;\r\n    height: 160px;\r\n}\r\n.product-list{\r\n    max-width: 1200px;\r\n    margin: 30px auto;\r\n    padding:0 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\nbutton{\r\n    background-color: gray;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n.product-card{\r\n    background-color: #bdbebd;\r\n    border-radius: 10px;\r\n}\r\n.buttons{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 240px\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n.basket{\r\n    width: 80px;\r\n}\r\n@media (max-width: 1100px){\r\n\r\n    .img{\r\n        width: 150px;\r\n        height: 150px;\r\n    }\r\n    .description{\r\n        width: 300px;\r\n        height: 130px;\r\n        font-size: 12px;\r\n    }\r\n   \r\n}\r\n@media (max-width: 650px){\r\n    .product-list{\r\n        max-width: 300px;\r\n        \r\n        flex-direction: column;\r\n    }\r\n    .product-card{\r\n        margin-bottom: 30px;\r\n    }\r\n}\r\n@media (max-width: 370px){\r\n    .description{\r\n        width: 250px;\r\n        height: 150px;\r\n        font-size: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- product-list.component.html -->\n\n<div class=\"product-list\">\n  <div class=\"product-card\" *ngFor=\"let product of products\">\n    <img class=\"img\" [src]=\"product.imageUrl\" alt=\"{{ product.name }}\">\n    <h3>{{ product.name }}</h3>\n    <div class=\"part\">\n        <p class=\"description\">{{ product.description }}</p>\n        <p>{{ product.price | currency }}</p>\n        <div class=\"buttons\" >\n        <button (click)=\"addToCart(product)\">Add to Cart</button>\n    \n    <button [routerLink]=\"['/products', product.id]\"> <a [routerLink]=\"['/products', product.id]\">View Details</a></button>\n    </div>\n    </div>\n  </div>\n  \n</div>\n<div [routerLink]=\"['/cart']\" style=\"display:flex; flex-direction: column; align-items: center; \">\n<img class=\"basket\" src=\"src/app/imges/free-icon-shopping-basket-1077979.png\">\n<a [routerLink]=\"['/cart']\" style=\"color:green;\">Move to cart</a>\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        if (product) {
            this.cartService.addToCart(product, 1); // Add 1 item by default
        }
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            { id: 1, name: 'Batik', description: 'In a smooth oxamite tale of a palette of diverse bars, the shards of this tea tell the story of several tea traditions: Kenya and Sri Lanka. Its great taste helps to find the most important learning points of black tea. Balance and richness, a low aroma that suggests citrus undertones, all in the background, makes black velvet one of the most striking representatives of its look.', price: 100, imageUrl: 'https://images.prom.ua/5057088044_chaj-batik-chernyj.jpg' },
            { id: 2, name: 'Pryaniki', description: 'Gingerbread cookies with lemon filling from the Kievkhlib brand are made from choux pastry and topped with glaze. The baked goods are incredibly soft, moderately sweet with a slight citrus sourness. The product has a classic round shape and small size. Gingerbread cookies with lemon filling are not only delicious, but also quite healthy. Lemon jam prevents colds and strengthens the immune system and blood vessels. The baked goods are made from the highest quality products.', price: 200, imageUrl: 'https://cdn.27.ua/799/5d/54/3628372_1.jpeg' },
        ];
    }
    ProductService.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products);
    };
    ProductService.prototype.getProduct = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products.find(function (product) { return product.id === id; }));
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\my-online-store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map