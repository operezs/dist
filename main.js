(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts"
	],
	"./modules/archives/archives.module": [
		"./src/app/shopify-app/modules/archives/archives.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-orders-order~8330955a",
		"common",
		"modules-archives-archives-module"
	],
	"./modules/data-config/data-config.module": [
		"./src/app/shopify-app/modules/data-config/data-config.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-orders-order~8330955a",
		"common",
		"modules-data-config-data-config-module"
	],
	"./modules/label/label.module": [
		"./src/app/shopify-app/modules/label/label.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-label-label-module~modules-manifest-manifest-module",
		"common",
		"modules-label-label-module"
	],
	"./modules/manifest/manifest.module": [
		"./src/app/shopify-app/modules/manifest/manifest.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-label-label-module~modules-manifest-manifest-module",
		"common",
		"modules-manifest-manifest-module"
	],
	"./modules/orders/orders.module": [
		"./src/app/shopify-app/modules/orders/orders.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-orders-order~8330955a",
		"common",
		"modules-orders-orders-module"
	],
	"./modules/retiro/retiro.module": [
		"./src/app/shopify-app/modules/retiro/retiro.module.ts",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-label-label-~6184ba7d",
		"default~modules-archives-archives-module~modules-data-config-data-config-module~modules-orders-order~8330955a",
		"common",
		"modules-retiro-retiro-module"
	],
	"./modules/user/user.module": [
		"./src/app/shopify-app/modules/user/user.module.ts",
		"common",
		"modules-user-user-module"
	],
	"./shopify-app/shopify-app.module": [
		"./src/app/shopify-app/shopify-app.module.ts",
		"shopify-app-shopify-app-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutes, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"]
        }
    },
    {
        path: 'carrier',
        loadChildren: './shopify-app/shopify-app.module#ShopifyAppModule',
        // canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"]
        }
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(AppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ChankyaAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChankyaAppComponent", function() { return ChankyaAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChankyaAppComponent = /** @class */ (function () {
    function ChankyaAppComponent(translate, authService) {
        this.authService = authService;
        translate.setDefaultLang('es');
        this.authService.loginCommands = ['/login'];
        this.authService.afterLoginCommands = ['/carrier'];
        this.authService.logoutCommands = ['/login'];
        this.authService.changePasswordCommands = ['/change-password'];
        // translate.addLangs(['es', 'en']);
        translate.addLangs(['es']);
        translate.setDefaultLang('es');
        var browserLang = translate.getBrowserLang();
        //translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
        translate.use('es');
    }
    ChankyaAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chankya-app',
            template: '<router-outlet></router-outlet>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChankyaAppComponent);
    return ChankyaAppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, ChankyaAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChankyaAppModule", function() { return ChankyaAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./node_modules/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _core_menu_menu_toggle_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/menu/menu-toggle.module */ "./src/app/core/menu/menu-toggle.module.ts");
/* harmony import */ var _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/menu/menu-items/menu-items */ "./src/app/core/menu/menu-items/menu-items.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./error-handling/error-handling.module */ "./src/app/error-handling/error-handling.module.ts");
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./http-request-indicator/components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ngrx/ngrx.module */ "./src/app/ngrx/ngrx.module.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.module */ "./src/app/confirm-dialog/confirm-dialog.module.ts");
/* harmony import */ var _confirm_dialog_components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./confirm-dialog/components/confirm-dialog.component */ "./src/app/confirm-dialog/components/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//










/********** Custom option for ngx-translate ******/
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var perfectScrollbarConfig = {
    suppressScrollX: true
};
var ChankyaAppModule = /** @class */ (function () {
    function ChankyaAppModule() {
    }
    ChankyaAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["RoutingModule"],
                ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TourNgBootstrapModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                _core_menu_menu_toggle_module__WEBPACK_IMPORTED_MODULE_18__["MenuToggleModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    preventDuplicates: true
                }),
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_22__["AuthenticationModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_23__["ConfigModule"],
                _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_24__["ErrorHandlingModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_25__["HttpRequestIndicatorModule"],
                _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_28__["NgrxModule"],
                _confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["ChankyaAppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["ChankyaAppComponent"]],
            providers: [
                _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_19__["MenuItems"],
                _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_20__["PageTitleService"],
                _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            entryComponents: [
                _http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"],
                _confirm_dialog_components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmDialogComponent"],
            ]
        })
    ], ChankyaAppModule);
    return ChankyaAppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth-component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-auth',
            template: __webpack_require__(/*! ./auth-component.html */ "./src/app/auth/auth-component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/authentication/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handling/error-handling.module */ "./src/app/error-handling/error-handling.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ngrx/ngrx.module */ "./src/app/ngrx/ngrx.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/authentication/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/authentication/components/logout/logout.component.ts");
/* harmony import */ var _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage-session/manage-session.component */ "./src/app/authentication/components/manage-session/manage-session.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/authentication/components/test/test.component.ts");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"],
                _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_6__["HttpRequestIndicatorModule"],
                _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_7__["NgrxModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_12__["AuthenticationRoutingModule"],
            ],
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
                _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_10__["ManageSessionComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"]
            ],
            exports: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
                _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_10__["ManageSessionComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"],
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/components/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Wrapper-->\r\n<div class=\"loginone-wrapper pt-xl-5\">\r\n  <div class=\"login-content text-center\" *ngIf=\"!installFlag\">\r\n    <div class=\"login-inner-wrapper-2 shadow-box p-4\" >\r\n      <div class=\" d-flex justify-content-center mb-4\">\r\n        <div class=\"logo-sign\">\r\n          <img src=\"assets/img/digipilote/correo-chile.png\" width = \"140\">\r\n        </div>\r\n        <!-- <div class=\"logo-text mx-2 align-self-center\">\r\n          <img src=\"assets/img/chankya-logo.png\" width=\"121\" height=\"16\">\r\n        </div> -->\r\n      </div>\r\n      <div class=\"mb-4\">\r\n        <p class=\"text-muted font-weight-bold mb-0 letter-space-1\">{{'WELCOME_MESSAGE'|translate}}</p>\r\n        <h2 class=\"text-primary font-weight-normal\">{{'SIGN_MESSAGE'|translate}}</h2>\r\n      </div>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" capsLock (capsLock)=\"capsLockOn=$event\" inputFocus>\r\n        <!-- <form #form=\"ngForm\" (ngSubmit)=logIn(form.value) class=\"login-form\" action=\"javascript:void(0)\" method=\"post\"> -->\r\n        <!-- <div class=\"form-group\">\r\n                            <input name=\"fname\" [(ngModel)]=\"name\" class=\"form-control session-input-font input-square\" type=\"text\" placeholder=\"First Name\" required>\r\n                        </div> -->\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" formControlName=\"shop\" name=\"shop\" class=\"form-control session-input-font input-square\"\r\n            placeholder=\"{{'Shop Url'|translate}}\" required>\r\n        </div>\r\n        <!-- <div class=\"form-group\">\r\n          <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"{{'PASSWORD'|translate}}\"\r\n            class=\"form-control session-input-font input-square\" required>\r\n        </div> -->\r\n        <div class=\"login-meta mb-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-6 col-md-6\">\r\n              <!-- <div class=\"custom-control custom-checkbox\">\r\n                <label class=\"mb-2 mr-sm-2 mb-sm-0 d-flex\">\r\n                  <input class=\"custom-control-input ng-untouched ng-pristine ng-valid\" type=\"checkbox\">\r\n                  <span class=\"custom-control-label\"></span>\r\n                  <span\r\n                    class=\"custom-control-description d-inline-block align-text-top\">{{'REMEMBER_ME'|translate}}</span>\r\n                </label>\r\n              </div> -->\r\n            </div>\r\n            <!-- <div class=\"col-12 col-sm-6 col-md-6 text-left text-sm-right\">\r\n              <a routerLink=\"/session/forgot-password\" class=\"text-muted\">{{'FORGOT_PASS'|translate}}</a>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg btn-square\">{{'SIGN_BTN'|translate}}</button>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n          <a href=\"https://pixofia.com\" target=\"_blank\"\r\n            class=\"text-muted\">{{'https://pixofia.com'|translate}}</a>\r\n        </div>\r\n        <!-- <div class=\"login-social-icon\">\r\n                            <ul class=\"list-inline\">\r\n                                <li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-google-plus fa-lg text-warning\"></i></a></li>\r\n                                <li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter fa-lg text-info\"></i></a></li>\r\n                                <li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-official fa-lg text-primary\"></i></a></li>\r\n                                <li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-instagram fa-lg text-danger\"></i></a></li>\r\n                            </ul>\r\n                        </div> -->\r\n      </form>\r\n    </div>\r\n    <!-- login form wrapper closed -->\r\n  </div>\r\n  <!-- login-one- wrapper closed -->\r\n\r\n  <div class = \"display-flex justify-content-center padding-right-60px \" *ngIf=\"installFlag\">\r\n    <h1 class = \"font-style\">Instalando App, por favor espere....</h1>\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-http-request-indicator\r\n  [urlExpressions]=\"[configService.config?.apiUrl + configService.config?.apiConfigs.authentication.loginUser.apiEndpoint + '.*']\">\r\n</app-http-request-indicator>\r\n"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-style {\n  color: white;\n  font-size: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ybGFuZG8vRGVzYXJyb2xsby9TT0xERVYvc2hvcGlmeS9jYXJyaWVyLXNlcnZpY2UtZnJvbnQvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1zdHlsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var errorKey = 'login';
var requiredUserandPasswordKey = 'Required Username and Password';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, configService, authService, translate, toastr, errorHandlingService, formBuilder, _activatedRoute) {
        this.route = route;
        this.router = router;
        this.configService = configService;
        this.authService = authService;
        this.translate = translate;
        this.toastr = toastr;
        this.errorHandlingService = errorHandlingService;
        this.formBuilder = formBuilder;
        this._activatedRoute = _activatedRoute;
        this.currentLang = 'fr';
        this.queryParams = {
            hmac: '',
            shop: '',
            timestamp: '',
            code: '',
            state: ''
        };
        this.installFlag = false;
        var browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
        translate.use('es');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getQueryParams();
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
            this.authService.loginNavigationExtras = undefined;
        }
    };
    LoginComponent.prototype.getQueryParams = function () {
        var _this = this;
        this.urlTree = this.router.parseUrl(this.router.url);
        this.queryParams.hmac = this.urlTree.queryParams['hmac'];
        this.queryParams.shop = this.urlTree.queryParams['shop'];
        this.queryParams.timestamp = this.urlTree.queryParams['timestamp'];
        this.queryParams.code = this.urlTree.queryParams['code'];
        this.queryParams.state = this.urlTree.queryParams['state'];
        window.history.pushState(null, '', '');
        if (this.queryParams.code) {
            this.installFlag = true;
            this.authService.installApp(this.queryParams).subscribe(function (response) {
                _this.toastr.success('Su aplicación ha sido instalada con éxito...!');
                _this.navigateAfterLogin();
            });
        }
        else {
            this.createFormGroup();
        }
    };
    LoginComponent.prototype.createFormGroup = function () {
        this.loginForm = this.formBuilder.group({
            shop: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var shop = this.loginForm.get('shop').value;
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            if (shop) {
                this.loginAuth(shop);
            }
            else {
                this.translate.get('EMAIL_PASSWORD_MESSAGE').subscribe(function (res) {
                    _this.toastr.error(res);
                });
            }
        }
    };
    LoginComponent.prototype.loginAuth = function (shop) {
        var _this = this;
        this.authService.loginUser(shop, this.queryParams)
            .subscribe(function (resp) {
            // this.rootActions.setState(this.authService.userPreferences);
            _this.navigateAfterLogin();
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LoginComponent.prototype.navigateAfterLogin = function () {
        if (this.returnUrl && this.returnUrl.length > 0) {
            this.router.navigateByUrl(this.returnUrl);
        }
        else {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/authentication/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host { /* Safari */\r\n    display: -webkit-box;\r\n    display: flex; /* Safari */\r\n    -webkit-box-orient:         vertical;\r\n    -webkit-box-direction:         normal;\r\n            flex-direction:         column; /* Safari */\r\n    -webkit-box-flex:         1;\r\n            flex-grow:         1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFDMkIsV0FBVztJQUNsQyxvQkFBYTtJQUFiLGFBQWEsRUFFbUIsV0FBVztJQUMzQyxvQ0FBOEI7SUFBOUIscUNBQThCO1lBQTlCLDhCQUE4QixFQUVSLFdBQVc7SUFDakMsMkJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyAgICBcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU2FmYXJpICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogICAgICAgICBjb2x1bW47XHJcblxyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7IC8qIFNhZmFyaSAqL1xyXG4gICAgZmxleC1ncm93OiAgICAgICAgIDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-http-request-indicator\r\n    [urlExpressions]=\"[configService.config?.apiConfigs.authentication.revokeUser.apiEndpoint]\">\r\n</app-http-request-indicator>"

/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, authService, configService, translate, errorHandlingService) {
        this.router = router;
        this.authService = authService;
        this.configService = configService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        // setTranslations(this.translate, TRANSLATIONS);
    }
    LogoutComponent.prototype.ngAfterViewInit = function () {
        this.authService.logOut();
        this.router.navigate(this.authService.loginCommands, this.authService.loginNavigationExtras);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/authentication/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/manage-session/manage-session.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/components/manage-session/manage-session.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManageSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSessionComponent", function() { return ManageSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageSessionComponent = /** @class */ (function () {
    function ManageSessionComponent(authService) {
        this.authService = authService;
    }
    ManageSessionComponent.prototype.manageSession = function (addOrRemoveCounter) {
        var sessionCounterString = localStorage.getItem('tabCount');
        var sessionCounterActual = 
        // tslint:disable-next-line:radix
        sessionCounterString !== undefined && sessionCounterString ? parseInt(localStorage.getItem('tabCount')) : 0;
        if (addOrRemoveCounter) {
            localStorage.setItem('tabCount', (sessionCounterActual + 1).toString());
        }
        else {
            sessionCounterActual = (sessionCounterActual - 1) >= 0 ? (sessionCounterActual - 1) : 0;
            localStorage.setItem('tabCount', sessionCounterActual.toString());
            if (sessionCounterActual === 0) {
                return this.updateExpirationTime();
            }
        }
        return true;
    };
    ManageSessionComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    ManageSessionComponent.prototype.beforeUnloadHandler = function ($event) {
        this.manageSession(false);
        return true;
    };
    ManageSessionComponent.prototype.updateExpirationTime = function () {
        if (this.authService.currentUser) {
            this.authService.updateExpirationTime({ userActive: 0 }).subscribe(function () {
            });
            this.sleep(300);
            return false;
        }
        return true;
    };
    ManageSessionComponent.prototype.ngOnInit = function () {
        this.manageSession(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ManageSessionComponent.prototype, "beforeUnloadHandler", null);
    ManageSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-session',
            template: ""
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ManageSessionComponent);
    return ManageSessionComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/test/test.component.html":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/authentication/components/test/test.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/components/test/test.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.ts ***!
  \******************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
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

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/authentication/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/authentication/components/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/authentication/services/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//




//




var AuthService = /** @class */ (function () {
    function AuthService(http, errorHandlingService, router, toastr, configService, translate, activatedRoute) {
        this.http = http;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.toastr = toastr;
        this.configService = configService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.isLoggedIn = false;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.userData = this.userSource.asObservable();
        this.userFullName$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalNavigation$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        // setTranslations(this.translate, TRANSLATIONS);
        /*this.localService.getCurrentValue().subscribe(lang => {
            this.currentLang = lang;
        });*/
    }
    Object.defineProperty(AuthService.prototype, "logoutCommands", {
        get: function () {
            return this.errorHandlingService.logoutCommands;
        },
        set: function (value) {
            this.errorHandlingService.logoutCommands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this.errorHandlingService.logoutNavigationExtras;
        },
        set: function (value) {
            this.errorHandlingService.logoutNavigationExtras = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getHeaders = function (addUserOauth, isForm, addAuthorization) {
        if (addUserOauth === void 0) { addUserOauth = false; }
        if (isForm === void 0) { isForm = false; }
        if (addAuthorization === void 0) { addAuthorization = true; }
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept-Language': this.currentLang,
            'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
        });
        if (this.userToken && this.userToken !== 'null') { // check 'null' because is returned this value when not exists
            if (addAuthorization) {
                requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
            }
            if (addUserOauth) {
                requestOptions = requestOptions.append('useroauth', this.userToken);
            }
        }
        return requestOptions;
    };
    Object.defineProperty(AuthService.prototype, "userToken", {
        get: function () {
            return this.http.userToken;
        },
        set: function (value) {
            this.http.userToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentLang", {
        get: function () {
            return this.http.currentLanguage;
        },
        set: function (value) {
            this.http.currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var localStorageUser = localStorage.getItem('currentUser');
            if (localStorageUser && localStorageUser !== 'null') {
                return JSON.parse(localStorageUser);
            }
            return null;
        },
        set: function (value) {
            localStorage.setItem('currentUser', value ? JSON.stringify(value) : null);
            this.userFullName$.next(this.loggedUserInfo());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            // return this.currentUser && this.currentUser !== 'null' ? true : false;
            return this.userToken && this.userToken !== 'null' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.updateCurrentUser = function (value) {
        value.newUser = false;
        value.profile = true;
        localStorage.setItem('currentUser', value ? JSON.stringify(value) : null);
    };
    AuthService.prototype.getDecodedAccessToken = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_10__(this.userToken);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getUserRole = function () {
        var userRole = this.getDecodedAccessToken().role;
        return userRole;
    };
    AuthService.prototype.getUserId = function () {
        var userId = this.getDecodedAccessToken().userId;
        return userId;
    };
    AuthService.prototype.loggedUserInfo = function () {
        var value = this.currentUser;
        var userFullname = null;
        if (value) {
            userFullname = value.first_name && value.last_name ? value.first_name + " " + value.last_name : null;
            if (!userFullname) {
                userFullname = value.first_name ? value.first_name : value.last_name;
                userFullname = userFullname ? userFullname : value.username;
            }
        }
        return userFullname;
    };
    AuthService.prototype.getLoggedUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.installApp = function (data) {
        var _this = this;
        var url = this.configService.config.apiUrl + this.configService.config.apiConfigs.install.apiEndpoint;
        var queryParams = '';
        queryParams += '?' + ("code=" + data.code) + '&'
            + ("hmac=" + data.hmac) + '&'
            + ("shop=" + data.shop) + '&'
            + ("state=" + data.state) + '&'
            + ("timestamp=" + data.timestamp) + '&';
        return this.http.get(url + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('install', response);
            if (response) {
                var token = response.token;
                var user = response.user;
                _this.currentUser = user;
                _this.userToken = token;
            }
            else {
                _this.userToken = null;
                _this.currentUser = null;
                //   throw new Error();
            }
        }));
    };
    AuthService.prototype.loginUser = function (shop, queryParams, code) {
        var _this = this;
        shop = shop.replace('+', '%2B');
        var headers = this.getHeaders(false, false, false);
        var credentials = {
            'shop': shop,
            'queryParams': queryParams
        };
        var url = this.configService.config.apiUrl + this.configService.config.apiConfigs.authentication.loginUser.apiEndpoint;
        return this.http.post(url, credentials, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('after login', JSON.stringify(response));
            if (response.user.newUser) {
                window.location.href = response.user.redirect;
            }
            else if (!response.user.newUser && !response.user.hmac) {
                window.location.href = response.user.redirect;
            }
            else {
                var token = response.token;
                if (!token || token.length === 0) {
                    throw new Error();
                }
                _this.userToken = token;
                var user = response.user;
                if (response) {
                    _this.currentUser = user;
                    _this.userToken = token;
                    _this.translate.get('LOGIN_MESSAGE').subscribe(function (res) {
                        _this.toastr.success(res);
                    });
                }
                else {
                    _this.currentUser = null;
                    throw new Error();
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
            }
        }));
    };
    AuthService.prototype.logOut = function () {
        /*let headers = this.getHeaders(false, true, false);
        let credentials = 'grant_type=password'
            + '&token=' + this.userToken;
        // Using the builtin Http of angular for prevent handling the errors and showing messages to the user
        this.http.httpClient.post(this.configService.config.apiConfigs.authentication.revokeUser.apiEndpoint,
            credentials, { headers: headers }).subscribe();*/
        this.logoutSpa();
        this.router.navigate(this.logoutCommands);
    };
    AuthService.prototype.postUserPreferences = function (preferences) {
        var headers = this.getHeaders(true);
        return this.http.post(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, preferences);
    };
    AuthService.prototype.getUserPreferences = function () {
        var _this = this;
        var headers = this.getHeaders(true);
        return this.http.get(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.userPreferences = JSON.parse(response.preferences);
            // this.rootActions.setState(this.userPreferences);TODO
            return _this.userPreferences;
        }));
    };
    AuthService.prototype.logoutSpa = function () {
        var _this = this;
        localStorage.removeItem('userToken');
        this.isLoggedIn = false;
        this.translate.get('LOGOUT_MESSAGE').subscribe(function (res) {
            _this.toastr.success(res);
        });
        this.userToken = null;
        this.currentUser = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    };
    AuthService.prototype.updateExpirationTime = function (data) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.tokenExpirationTime.apiEndpoint, data, { headers: this.getHeaders(true) });
    };
    AuthService.prototype.changePassword = function (currentPassword, newPassword) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.changePassword.apiEndpoint, {
            old_password: currentPassword,
            new_password: newPassword
        }, { headers: this.getHeaders() });
    };
    AuthService.prototype.patchUser = function (data, userId) {
        return this.http.patch(this.configService.config.apiConfigs.users.apiEndpoint + userId + '/', JSON.stringify(data));
    };
    AuthService.prototype.passUserData = function (user) {
        this.userSource.next(user);
    };
    /*
 *  getLocalStorageUser function is used to get local user profile data.
 */
    AuthService.prototype.getLocalStorageUser = function () {
        this.userData = JSON.parse(localStorage.getItem('userToken'));
        if (this.userData) {
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    };
    AuthService.prototype.logOutPas = function () {
        var _this = this;
        localStorage.removeItem('userToken');
        this.isLoggedIn = false;
        this.translate.get('LOGOUT_MESSAGE').subscribe(function (res) {
            _this.toastr.success(res);
        });
        this.router.navigate(['/session/loginone']);
    };
    /*
     * setLocalUserProfile function is used to set local user profile data.
     */
    AuthService.prototype.setLocalUserProfile = function (value) {
        localStorage.setItem('userToken', JSON.stringify(value));
        this.isLoggedIn = true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingHttpService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/config/services/config-resolve.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/config/services/config-resolve.service.ts ***!
  \***********************************************************/
/*! exports provided: ConfigResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigResolveService", function() { return ConfigResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { setTranslations } from '@c/ngx-translate';
// import { ErrorHandlingService } from '@c/error-handling';
// import { TRANSLATIONS } from './i18n/config-resolve.service.translations';

var ConfigResolveService = /** @class */ (function () {
    function ConfigResolveService(/*private errorHandlinService: ErrorHandlingService,*/ configService, translate) {
        this.configService = configService;
        this.translate = translate;
        // setTranslations(this.translate, TRANSLATIONS);
    }
    ConfigResolveService.prototype.resolve = function (route) {
        if (this.configService.config) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.configService.config);
        }
        return this.configService.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            // this.errorHandlinService.handleUiError('@c/config/ConfigResolveService/Error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    };
    ConfigResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ConfigResolveService);
    return ConfigResolveService;
}());



/***/ }),

/***/ "./src/app/config/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/config/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ErrorHandlingHttpService } from '@c/error-handling';


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getConfig = function () {
        var _this = this;
        return this.http.get('assets/data/config.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.config = response;
        }));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/components/confirm-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/confirm-dialog/components/confirm-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    {{ message }}\n</div>\n<div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button> -->\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\n</div>"

/***/ }),

/***/ "./src/app/confirm-dialog/components/confirm-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/confirm-dialog/components/confirm-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialogComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialogComponent.prototype, "btnOkText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/confirm-dialog/components/confirm-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.module.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirm-dialog.component */ "./src/app/confirm-dialog/components/confirm-dialog.component.ts");
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/confirm-dialog.service */ "./src/app/confirm-dialog/services/confirm-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            declarations: [
                _components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"],
            ],
            providers: [
                _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"],
            ]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/services/confirm-dialog.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/confirm-dialog/services/confirm-dialog.service.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/confirm-dialog.component */ "./src/app/confirm-dialog/components/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmDialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'lg'; }
        var modalRef = this.modalService.open(_components_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    ConfirmDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-items/menu-items.ts":
/*!****************************************************!*\
  !*** ./src/app/core/menu/menu-items/menu-items.ts ***!
  \****************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    // {
    //    state: 'information',
    //    name: 'POST INFORMATION',
    //    type: 'link',
    //    icon: 'fa fa-bank icons',
    // },
    {
        state: 'orders',
        name: 'Pedidos',
        type: 'link',
        icon: 'fa fa-shopping-bag icons',
    },
    {
        state: 'manifest',
        name: 'Manifiesto',
        type: 'link',
        icon: 'fa fa-calendar-check-o icons',
    },
    {
        state: 'retiro',
        name: 'Retiro',
        type: 'link',
        icon: 'fa fa-registered icons',
    },
    {
        state: 'archives',
        name: 'Archivos',
        type: 'link',
        icon: 'fa fa-archive icons',
    },
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/core/menu/menu-toggle.module.ts ***!
  \*************************************************/
/*! exports provided: MenuToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleModule", function() { return MenuToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle */ "./src/app/core/menu/menu-toggle/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuToggleModule = /** @class */ (function () {
    function MenuToggleModule() {
    }
    MenuToggleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleAnchorDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleDirective"],
            ],
            exports: [
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleAnchorDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_1__["MenuToggleDirective"],
            ],
        })
    ], MenuToggleModule);
    return MenuToggleModule;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/index.ts ***!
  \************************************************/
/*! exports provided: MenuToggleAnchorDirective, MenuToggleLinkDirective, MenuToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-toggle-anchor.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function() { return _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__["MenuToggleAnchorDirective"]; });

/* harmony import */ var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle-link.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function() { return _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"]; });

/* harmony import */ var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-toggle.directive */ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function() { return _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"]; });






/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts ***!
  \***********************************************************************/
/*! exports provided: MenuToggleAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function() { return MenuToggleAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle-link.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MenuToggleAnchorDirective = /** @class */ (function () {
    function MenuToggleAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    MenuToggleAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MenuToggleAnchorDirective.prototype, "onClick", null);
    MenuToggleAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[menuToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"])),
        __metadata("design:paramtypes", [_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"]])
    ], MenuToggleAnchorDirective);
    return MenuToggleAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts ***!
  \*********************************************************************/
/*! exports provided: MenuToggleLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function() { return MenuToggleLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle.directive */ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MenuToggleLinkDirective = /** @class */ (function () {
    function MenuToggleLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(MenuToggleLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    MenuToggleLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    MenuToggleLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    MenuToggleLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuToggleLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MenuToggleLinkDirective.prototype, "open", null);
    MenuToggleLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[menuToggleLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleDirective"])),
        __metadata("design:paramtypes", [_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleDirective"]])
    ], MenuToggleLinkDirective);
    return MenuToggleLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle.directive.ts ***!
  \****************************************************************/
/*! exports provided: MenuToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function() { return MenuToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuToggleDirective = /** @class */ (function () {
    function MenuToggleDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    MenuToggleDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    MenuToggleDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    MenuToggleDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    MenuToggleDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    MenuToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[menuToggleDirective]',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuToggleDirective);
    return MenuToggleDirective;
}());



/***/ }),

/***/ "./src/app/core/page-title/page-title.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/page-title/page-title.service.ts ***!
  \*******************************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PageTitleService = /** @class */ (function () {
    function PageTitleService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    PageTitleService.prototype.setTitle = function (value) {
        this.title.next(value);
    };
    PageTitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "./src/app/error-handling/error-handling.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/error-handling/error-handling.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorHandlingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingModule", function() { return ErrorHandlingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/http-headers-interceptor.service */ "./src/app/error-handling/interceptors/http-headers-interceptor.service.ts");
/* harmony import */ var _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/error-handling-interceptor.service */ "./src/app/error-handling/interceptors/error-handling-interceptor.service.ts");
/* harmony import */ var _interceptors_http_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/http-loading-interceptor.service */ "./src/app/error-handling/interceptors/http-loading-interceptor.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//

//
// import { NgxTranslateModule } from '../../ngx-translate';TODO




var ErrorHandlingModule = /** @class */ (function () {
    function ErrorHandlingModule() {
    }
    ErrorHandlingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["HttpHeadersInterceptorService"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingInterceptorService"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["HttpLoadingInterceptorService"], multi: true },
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]],
            declarations: [],
            exports: []
        })
    ], ErrorHandlingModule);
    return ErrorHandlingModule;
}());



/***/ }),

/***/ "./src/app/error-handling/interceptors/error-handling-interceptor.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/error-handling/interceptors/error-handling-interceptor.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ErrorHandlingInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingInterceptorService", function() { return ErrorHandlingInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//


//

var ErrorHandlingInterceptorService = /** @class */ (function () {
    function ErrorHandlingInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
    }
    ErrorHandlingInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (request) {
            if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.errorHandlingService.serverOnline.next(true);
            }
            return request;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_this.errorHandlingService.handleServiceError(error));
        }));
    };
    ErrorHandlingInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ErrorHandlingInterceptorService);
    return ErrorHandlingInterceptorService;
}());



/***/ }),

/***/ "./src/app/error-handling/interceptors/http-headers-interceptor.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/error-handling/interceptors/http-headers-interceptor.service.ts ***!
  \*********************************************************************************/
/*! exports provided: HttpHeadersInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptorService", function() { return HttpHeadersInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//

var HttpHeadersInterceptorService = /** @class */ (function () {
    function HttpHeadersInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
    }
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('userToken');
        },
        set: function (value) {
            localStorage.setItem('userToken', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    HttpHeadersInterceptorService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
        });
        if (this.userToken && this.userToken !== 'null') { // check 'null' because is returned this value when not exists
            requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
        }
        return requestOptions;
    };
    HttpHeadersInterceptorService.prototype.getRequestOptionArgs = function (request) {
        if (request.headers.keys().length === 0) {
            var headers = this.getHeaders();
            if (headers.get('Authorization')) {
                return request.clone({
                    setHeaders: {
                        'Accept-Language': headers.get('Accept-Language'),
                        'Content-Type': headers.get('Content-Type'),
                        'Authorization': headers.get('Authorization'),
                    }
                });
            }
            else {
                return request.clone({
                    setHeaders: {
                        'Accept-Language': headers.get('Accept-Language'),
                        'Content-Type': headers.get('Content-Type'),
                    }
                });
            }
        }
        else {
            return request;
        }
    };
    HttpHeadersInterceptorService.prototype.intercept = function (request, next) {
        request = this.getRequestOptionArgs(request);
        return next.handle(request);
    };
    HttpHeadersInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"]])
    ], HttpHeadersInterceptorService);
    return HttpHeadersInterceptorService;
}());



/***/ }),

/***/ "./src/app/error-handling/interceptors/http-loading-interceptor.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/error-handling/interceptors/http-loading-interceptor.service.ts ***!
  \*********************************************************************************/
/*! exports provided: HttpLoadingInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoadingInterceptorService", function() { return HttpLoadingInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http-request-indicator/services/loading.service */ "./src/app/http-request-indicator/services/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//

//


var HttpLoadingInterceptorService = /** @class */ (function () {
    function HttpLoadingInterceptorService(httpClient, errorHandlingService, loadingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this.loadingService = loadingService;
        this._currentLanguage = '';
        this.totalRequests = 0;
    }
    Object.defineProperty(HttpLoadingInterceptorService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('userToken');
        },
        set: function (value) {
            localStorage.setItem('userToken', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpLoadingInterceptorService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    HttpLoadingInterceptorService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
        });
        if (this.userToken && this.userToken !== 'null') { // check 'null' because is returned this value when not exists
            requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
        }
        return requestOptions;
    };
    HttpLoadingInterceptorService.prototype.getRequestOptionArgs = function (request) {
        if (request.headers.keys().length === 0) {
            var headers = this.getHeaders();
            if (headers.get('Authorization')) {
                return request.clone({
                    setHeaders: {
                        'Accept-Language': headers.get('Accept-Language'),
                        'Content-Type': headers.get('Content-Type'),
                        'Authorization': headers.get('Authorization'),
                    }
                });
            }
            else {
                return request.clone({
                    setHeaders: {
                        'Accept-Language': headers.get('Accept-Language'),
                        'Content-Type': headers.get('Content-Type'),
                    }
                });
            }
        }
        else {
            return request;
        }
    };
    HttpLoadingInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        // request = this.getRequestOptionArgs(request);
        this.totalRequests++;
        this.loadingService.loading$.next(true);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.decreaseRequests();
            }
        }, function (error) {
            _this.loadingService.loading$.next(false);
        }, function () {
            _this.loadingService.loading$.next(false);
        }));
    };
    HttpLoadingInterceptorService.prototype.decreaseRequests = function () {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.loadingService.loading$.next(false);
        }
    };
    HttpLoadingInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"],
            _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
    ], HttpLoadingInterceptorService);
    return HttpLoadingInterceptorService;
}());



/***/ }),

/***/ "./src/app/error-handling/models/handled-error.ts":
/*!********************************************************!*\
  !*** ./src/app/error-handling/models/handled-error.ts ***!
  \********************************************************/
/*! exports provided: HandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandledError", function() { return HandledError; });
var HandledError = /** @class */ (function () {
    function HandledError() {
        this.description = '';
        this.error = new Error();
    }
    return HandledError;
}());



/***/ }),

/***/ "./src/app/error-handling/services/error-handling-http.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/error-handling/services/error-handling-http.service.ts ***!
  \************************************************************************/
/*! exports provided: RequestType, ErrorHandlingHttpService, errorHandlingServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingHttpService", function() { return ErrorHandlingHttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandlingServiceFactory", function() { return errorHandlingServiceFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestType;
(function (RequestType) {
    RequestType[RequestType["Get"] = 0] = "Get";
    RequestType[RequestType["Post"] = 1] = "Post";
    RequestType[RequestType["Delete"] = 2] = "Delete";
    RequestType[RequestType["Patch"] = 3] = "Patch";
    RequestType[RequestType["Put"] = 4] = "Put";
    RequestType[RequestType["Request"] = 5] = "Request";
})(RequestType || (RequestType = {}));
var ErrorHandlingHttpService = /** @class */ (function () {
    function ErrorHandlingHttpService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
        this.showDialogTime = 70 * 1000;
        this.countDown = 60;
        this._expire_in = 0;
    }
    Object.defineProperty(ErrorHandlingHttpService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('userToken');
        },
        set: function (value) {
            localStorage.setItem('userToken', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingHttpService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorHandlingHttpService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
        });
        if (this.userToken && this.userToken !== 'null') { // check 'null' because is returned this value when not exists
            requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
        }
        return requestOptions;
    };
    ErrorHandlingHttpService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = {
                headers: this.getHeaders(),
            };
        }
        else {
            if (options.headers == null) {
                options.headers = this.getHeaders();
            }
        }
        return options;
    };
    ErrorHandlingHttpService.prototype.requestInterceptor = function (type, url, body, options) {
        var _this = this;
        var request = null;
        switch (type) {
            case RequestType.Get: {
                request = this.httpClient.get(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Post: {
                request = this.httpClient.post(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Delete: {
                request = this.httpClient.delete(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Patch: {
                request = this.httpClient.patch(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Put: {
                request = this.httpClient.put(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Request: {
                request = this.httpClient.request(url);
                break;
            }
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) {
            if (value) {
                var expires_in = value.expires_in;
                // handle remaining time
                if (expires_in && expires_in > 0) {
                    _this._expire_in = expires_in;
                    if (_this._sessionExpire$) {
                        _this._sessionExpire$.unsubscribe();
                    }
                    // Checking if the expiration time is less than X count of seconds and
                    // if it's then start a counter for the remaining time between expiration time and notification time
                    // X count of seconds before expiration.If isn't, then show the notification immediately
                    var timeToShowDialog = _this._expire_in * 1000;
                    var countDown_1 = _this.countDown;
                    if (_this.showDialogTime < timeToShowDialog) {
                        timeToShowDialog -= _this.showDialogTime;
                        // Send a notification 70 seconds before session expire
                        _this._sessionExpire$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(timeToShowDialog).subscribe(function (here) {
                            _this.errorHandlingService.showExpireNotification.next(countDown_1);
                        });
                    }
                    else {
                        if (_this._expire_in <= _this.countDown) {
                            countDown_1 = _this._expire_in;
                        }
                        _this.errorHandlingService.showExpireNotification.next(countDown_1);
                    }
                }
            }
            // Common place where put code we want to execute for all the request when are success
            _this.errorHandlingService.serverOnline.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_this.errorHandlingService.handleServiceError(error));
        }));
    };
    ErrorHandlingHttpService.prototype.request = function (req) {
        return this.requestInterceptor(RequestType.Request, req, null);
    };
    ErrorHandlingHttpService.prototype.get = function (url, options) {
        return this.requestInterceptor(RequestType.Get, url, null, options);
    };
    ErrorHandlingHttpService.prototype.post = function (url, body, options) {
        return this.requestInterceptor(RequestType.Post, url, body, options);
    };
    ErrorHandlingHttpService.prototype.put = function (url, body, options) {
        return this.requestInterceptor(RequestType.Put, url, body, options);
    };
    ErrorHandlingHttpService.prototype.delete = function (url, options) {
        return this.requestInterceptor(RequestType.Delete, url, null, options);
    };
    ErrorHandlingHttpService.prototype.patch = function (url, body, options) {
        return this.requestInterceptor(RequestType.Patch, url, body, options);
    };
    ErrorHandlingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ErrorHandlingHttpService);
    return ErrorHandlingHttpService;
}());

function errorHandlingServiceFactory(errorHandlingService, httpClient) {
    return new ErrorHandlingHttpService(httpClient, errorHandlingService);
}


/***/ }),

/***/ "./src/app/error-handling/services/error-handling.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/error-handling/services/error-handling.service.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _models_handled_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/handled-error */ "./src/app/error-handling/models/handled-error.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//


var errorServerKey = 'The server encountered an internal error.';
var errorServerDownKey = 'The requested server is unavailable. Please try again later.';
var errorTitle = 'Error';
var ErrorHandlingService = /** @class */ (function () {
    function ErrorHandlingService(// public snackBar: MatSnackBar,
    translate, router, toastr) {
        this.translate = translate;
        this.router = router;
        this.toastr = toastr;
        this.serverOnline = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.showExpireNotification = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showNotificationObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.timeBeforeEmmitTheSameError = 1000;
        // setTranslations(translate, TRANSLATIONS);
        this.onServerUp();
        this.subscriptionToNotification();
    }
    ErrorHandlingService.prototype.subscriptionToNotification = function () {
        var _this = this;
        this.showNotificationObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (error) {
            // Preventing shows more than one time the token expiration error
            if (_this.lastEmittedNotification && _this.lastEmittedNotification.errorMessage === error.errorMessage) {
                var differenceInMilliSeconds = error.date.getTime() - _this.lastEmittedNotification.date.getTime();
                if ((differenceInMilliSeconds <= _this.timeBeforeEmmitTheSameError)) {
                    return false;
                }
            }
            return true;
        })).subscribe(function (value) {
            _this.lastEmittedNotification = value;
            _this.toastr.error(value.errorMessage);
            /* this.snackBar.openFromComponent(CustomSnackbarComponent, {
                data: { messageData: value.errorMessage, messageType: 'Error' },
                duration: 2000,
                horizontalPosition: 'right',
                panelClass: ['background-color-accent'],
            }); */
        });
    };
    Object.defineProperty(ErrorHandlingService.prototype, "logoutCommands", {
        get: function () {
            return this._logoutCommands;
        },
        set: function (value) {
            this._logoutCommands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this._logoutNavigationExtras;
        },
        set: function (value) {
            this._logoutNavigationExtras = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorHandlingService.prototype.onServerUp = function () {
        var _this = this;
        this.serverOnline.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value === true) {
                // Removing timeOutClient threat if it was provided
                if (_this.timeOutClient$) {
                    _this.timeOutClient$.unsubscribe();
                    _this.timeOutClient$ = null;
                }
                // Removing timeOutServer threat if it was provided
                if (_this.timeOutServer$) {
                    _this.timeOutServer$.unsubscribe();
                    _this.timeOutServer$ = null;
                }
                if (_this.toastOfServerDown !== undefined && _this.toastOfServerDown !== null) {
                    _this.toastOfServerDown.dismiss();
                }
            }
        });
    };
    ErrorHandlingService.prototype.handleServiceError = function (err) {
        var _this = this;
        // console.log('error', err);
        var handledError = new _models_handled_error__WEBPACK_IMPORTED_MODULE_6__["HandledError"]();
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // If the request have status code equal to 0 is that the spa can't reach the api
            if (err.status === 0) {
                // Setting the state of the server to down and emitting the new state
                if (this.serverOnline.getValue() === true) {
                    // Returning error code 410 corresponding to "Gone" response that means the the resource you want not exist right now
                    handledError.code = 'DISCONECTED';
                    // this.translate.get([errorServerDownKey, errorTitle]).subscribe(text => {TODO
                    // this.toastOfServerDown = this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    //     data: { messageData: errorServerDownKey, messageTitle: errorTitle, messageType: 'Error' },
                    //     horizontalPosition: 'right',
                    //     panelClass: ['background-color-accent'],
                    // });
                    this.translate.get('SERVER_DOWN_MESSAGE').subscribe(function (res) {
                        _this.toastr.error(res);
                    });
                    this.serverOnline.next(false);
                }
                return handledError;
            }
            // Setting the state of the server to up if the error is not "server down"
            this.serverOnline.next(true);
            try {
                // handledError.message = err.statusText;
                // const errObj = err.error;
                // Managing error from client request
                if (err.status >= 400 && err.status < 500) {
                    return this.handlingClientErrors(err, handledError);
                }
                else {
                    // Handling errors in the server side
                    return this.handlingServerErrors(err, handledError);
                }
            }
            catch (exception) {
                /* If this code is executed is because the response from the api doesn't have a valid json format that means
                 is returning some kind of html or something else*/
                if (err.status >= 400 && err.status < 500) {
                    this.translate.get('BAD_REQUEST_MESSAGE').subscribe(function (res) {
                        handledError.description = res;
                    });
                }
                else {
                    this.translate.get('SERVER_ERROR_MESSAGE').subscribe(function (res) {
                        handledError.description = res;
                    });
                }
                return handledError;
            }
        }
        else {
            handledError.error = err;
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handlingClientErrors = function (error, handledError) {
        // Managing authentication errors
        // Sesion expired: TODO
        // console.log('errObj', errObj);
        if (error.status === 401) {
            // redirecting the user to login page if the error is caused by token expiration
            handledError.code = error.error.code;
            handledError.logoutCommands = this.logoutCommands;
            handledError.logoutNavigationExtras = this.logoutNavigationExtras;
            handledError.description = error.error.description;
            localStorage.setItem('userToken', null);
            return handledError;
        }
        else if (error.error.code) {
            handledError.code = error.error.code;
            handledError.description = error.error.description;
            return handledError;
        }
        else {
            handledError.code = 'UNKNOW_ERROR';
            handledError.description = 'An unexpected error has occurred';
            // if (error.error.) {
            //     this.translate.get(/*errorClientKey*/errObj.error).subscribe(text => {
            //         handledError.description = text;
            //     });
            //     return handledError;
            // }
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handlingServerErrors = function (error, handledError) {
        // if (errObj.detail) {
        //     handledError.description = errObj.detail[0];
        //     return handledError;
        // } else {
        //     // Managing all the remaining errors as a server side errors
        //     this.translate.get(errorServerKey).subscribe(text => {
        //         handledError.description = text;
        //     });
        //     return handledError;
        // }
        handledError.code = 'SERVER_ERROR';
        handledError.description = 'Internal Server Error';
        return handledError;
    };
    ErrorHandlingService.prototype.handleUiError = function (key, err, url) {
        var serverState = this.serverOnline.getValue();
        var error = err.error;
        // If server state is online then continues managing the
        if (serverState) {
            // Displaying the error if it really contains a message
            error.message = error.description;
            if (error.message) {
                // if (error.message === 'DUPLICATE_ENTITY') {
                //     switch (url) {
                //         case 'user': {
                //             error.message = 'This user already exists';
                //             break;
                //         }
                //     }
                // }
                this.showNotificationObservable.next({
                    key: key,
                    errorMessage: error.message,
                    errorCode: error.errorCode,
                    date: new Date()
                });
            }
            if (error.logoutCommands) {
                this.router.navigate(error.logoutCommands, error.logoutNavigationExtras);
            }
        }
    };
    ErrorHandlingService.prototype.errorDaemon = function (path, error, handledError) {
        var _this = this;
        if (error.constructor === Object) {
            Object.keys(error).forEach(function (key) {
                path.push(key);
                _this.errorDaemon(path, error[key], handledError);
                path.pop();
            });
        }
        else {
            var pathStr = this.capitalizeWord(path.join('.'));
            var errorStr = this.capitalizeWord(error.constructor === Array ? error.join(' ') : error);
            if (handledError.description === '' || handledError.description === undefined) {
                handledError.description = pathStr + ': ' + errorStr + '\n';
            }
            else {
                handledError.description = handledError.description + pathStr + ': ' + ' ' + errorStr + '\n';
            }
        }
    };
    ErrorHandlingService.prototype.buildingErrorMessage = function (error, handledError) {
        // Checking if the error comes with more than one validation error
        if (error.detail[0].constructor === Object) {
            var path = [];
            this.errorDaemon(path, error.detail[0], handledError);
            // sending the form validations errors to the component where are the fields
            handledError.formErrors = error.detail[0];
        }
        else {
            handledError.description = error.detail[0];
        }
    };
    ErrorHandlingService.prototype.capitalizeWord = function (word) {
        return typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    };
    ErrorHandlingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h0dHAtcmVxdWVzdC1pbmRpY2F0b3IvY29tcG9uZW50cy9odHRwLXJlcXVlc3QtaW5kaWNhdG9yL2h0dHAtcmVxdWVzdC1pbmRpY2F0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HttpRequestIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorComponent", function() { return HttpRequestIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-request-indicators.service */ "./src/app/http-request-indicator/services/http-request-indicators.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/http-request-indicator/services/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// "@types/lodash": "ts2.0",
// "lodash": "4.17.4",
// "lodash.uniqueid": "4.0.1"



var HttpRequestIndicatorComponent = /** @class */ (function () {
    function HttpRequestIndicatorComponent(httpRequestIndicators, loadingService) {
        this.httpRequestIndicators = httpRequestIndicators;
        this.loadingService = loadingService;
        this.uid = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]();
    }
    HttpRequestIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.httpRequestIndicators
            .registerIndicator(this.uid, this.urlExpressions)
            .subscribe(function (visible) {
            _this.loadingService.loading$.next(visible);
        });
    };
    HttpRequestIndicatorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.httpRequestIndicators.unregisterIndicator(this.uid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HttpRequestIndicatorComponent.prototype, "urlExpressions", void 0);
    HttpRequestIndicatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-http-request-indicator',
            template: __webpack_require__(/*! ./http-request-indicator.component.html */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./http-request-indicator.component.css */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestIndicatorsService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], HttpRequestIndicatorComponent);
    return HttpRequestIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHR0cC1yZXF1ZXN0LWluZGljYXRvci9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9odHRwLXJlcXVlc3QtaW5kaWNhdG9yL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: none;\">\r\n    <g transform=\"rotate(0 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(30 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(60 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(90 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(120 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(150 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(180 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(210 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(240 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(270 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(300 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(330 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/http-request-indicator/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/http-request-indicator/components/loading/loading.component.css")]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/http-request-indicator.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/http-request-indicator/http-request-indicator.module.ts ***!
  \*************************************************************************/
/*! exports provided: HttpRequestIndicatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorModule", function() { return HttpRequestIndicatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/http-request-indicator/http-request-indicator.component */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts");
/* harmony import */ var _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/indicated-interceptor.service */ "./src/app/http-request-indicator/services/indicated-interceptor.service.ts");
/* harmony import */ var _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/loading-interceptor.service */ "./src/app/http-request-indicator/services/loading-interceptor.service.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//




var HttpRequestIndicatorModule = /** @class */ (function () {
    function HttpRequestIndicatorModule() {
    }
    HttpRequestIndicatorModule_1 = HttpRequestIndicatorModule;
    HttpRequestIndicatorModule.forRoot = function () {
        return {
            ngModule: HttpRequestIndicatorModule_1,
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["IndicatedInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["LoadingInterceptor"], multi: true }
            ]
        };
    };
    var HttpRequestIndicatorModule_1;
    HttpRequestIndicatorModule = HttpRequestIndicatorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]],
            exports: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]]
        })
    ], HttpRequestIndicatorModule);
    return HttpRequestIndicatorModule;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/models/http-request-indicator.ts":
/*!*************************************************************************!*\
  !*** ./src/app/http-request-indicator/models/http-request-indicator.ts ***!
  \*************************************************************************/
/*! exports provided: HttpRequestIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicator", function() { return HttpRequestIndicator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var HttpRequestIndicator = /** @class */ (function () {
    function HttpRequestIndicator(uid, urlExpressions) {
        this.uid = uid;
        this.urlExpressions = urlExpressions;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    return HttpRequestIndicator;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/http-request-indicators.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/http-request-indicator/services/http-request-indicators.service.ts ***!
  \************************************************************************************/
/*! exports provided: HttpRequestIndicatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorsService", function() { return HttpRequestIndicatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/http-request-indicator */ "./src/app/http-request-indicator/models/http-request-indicator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestIndicatorsService = /** @class */ (function () {
    function HttpRequestIndicatorsService() {
        this.indicators = [];
    }
    HttpRequestIndicatorsService.prototype.registerIndicator = function (uid, urlExpressions) {
        var indicator = new _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicator"](uid, urlExpressions);
        this.indicators.push(indicator);
        return indicator.show;
    };
    HttpRequestIndicatorsService.prototype.unregisterIndicator = function (uid) {
        this.indicators.splice(this.indicators.map(function (indicator) { return indicator.uid; }).indexOf(uid), 1);
    };
    HttpRequestIndicatorsService.prototype.findIndicators = function (url) {
        var indicators = [];
        for (var i = 0; i < this.indicators.length; i++) {
            var indicator = this.indicators[i];
            for (var j = 0; j < indicator.urlExpressions.length; j++) {
                var expression = indicator.urlExpressions[j];
                var pattern = new RegExp(expression);
                if (pattern.test(url)) {
                    indicators.push(indicator);
                    break;
                }
            }
        }
        return indicators;
    };
    HttpRequestIndicatorsService.prototype.setLoading = function (flag) {
    };
    HttpRequestIndicatorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpRequestIndicatorsService);
    return HttpRequestIndicatorsService;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/indicated-interceptor.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/http-request-indicator/services/indicated-interceptor.service.ts ***!
  \**********************************************************************************/
/*! exports provided: IndicatedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatedInterceptor", function() { return IndicatedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-request-indicators.service */ "./src/app/http-request-indicator/services/http-request-indicators.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndicatedInterceptor = /** @class */ (function () {
    function IndicatedInterceptor(httpRequestIndicatorsService) {
        this.httpRequestIndicatorsService = httpRequestIndicatorsService;
    }
    IndicatedInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var indicators = this.httpRequestIndicatorsService.findIndicators(req.url.toString());
        indicators.forEach(function (indicator) { return indicator.show.next(true); });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            _this.httpRequestIndicatorsService.setLoading(true);
        }, function (error) { }, function () {
            indicators.forEach(function (indicator) { return indicator.show.next(false); });
        }));
    };
    IndicatedInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicatorsService"]])
    ], IndicatedInterceptor);
    return IndicatedInterceptor;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/loading-interceptor.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/http-request-indicator/services/loading-interceptor.service.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-request-indicators.service */ "./src/app/http-request-indicator/services/http-request-indicators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(httpRequestIndicatorsService) {
        this.httpRequestIndicatorsService = httpRequestIndicatorsService;
        this.totalRequests = 0;
    }
    LoadingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.totalRequests++;
        this.httpRequestIndicatorsService.setLoading(true);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.decreaseRequests();
            }
        }, function (error) { }, function () {
            _this.decreaseRequests();
        }));
    };
    LoadingInterceptor.prototype.decreaseRequests = function () {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            // this.loadingService.setLoading(false);
        }
    };
    LoadingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorsService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/loading.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/http-request-indicator/services/loading.service.ts ***!
  \********************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'loading-overlay-backdrop',
    panelClass: 'loading-overlay-panel'
};
var LoadingService = /** @class */ (function () {
    function LoadingService(router, overlay) {
        var _this = this;
        this.router = router;
        this.overlay = overlay;
        this.counter = 0;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loading$.subscribe(function (loading) {
            if (loading) {
                _this.counter++;
                if (_this.counter > 0 && !_this.overlayRef) {
                    _this.overlayRef = _this.createOverlay(DEFAULT_CONFIG);
                    var loadingPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]);
                    _this.overlayRef.attach(loadingPortal);
                }
            }
            else {
                _this.counter--;
                _this.counter = _this.counter < 0 ? 0 : _this.counter;
                if (_this.counter === 0) {
                    if (_this.overlayRef) {
                        _this.overlayRef.dispose();
                        _this.overlayRef = null;
                    }
                }
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.loading$.next(true);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.loading$.next(false);
            }
        });
    }
    LoadingService.prototype.getOverlayConfig = function (config) {
        var positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    LoadingService.prototype.createOverlay = function (config) {
        // Returns an OverlayConfig
        var overlayConfig = this.getOverlayConfig(config);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/ngrx/ngrx.module.ts":
/*!*************************************!*\
  !*** ./src/app/ngrx/ngrx.module.ts ***!
  \*************************************/
/*! exports provided: NgrxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxModule", function() { return NgrxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/root-actions.service */ "./src/app/ngrx/services/root-actions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgrxModule = /** @class */ (function () {
    function NgrxModule() {
    }
    NgrxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]
            ],
            declarations: [],
            exports: [],
            providers: [
                _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__["RootActionsService"]
            ]
        })
    ], NgrxModule);
    return NgrxModule;
}());



/***/ }),

/***/ "./src/app/ngrx/services/root-actions.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngrx/services/root-actions.service.ts ***!
  \*******************************************************/
/*! exports provided: RootActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootActionsService", function() { return RootActionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootActionsService = /** @class */ (function () {
    function RootActionsService(store) {
        this.store = store;
    }
    RootActionsService.prototype.setState = function (state) {
        // this.store.dispatch(createAction(RootActionsService.SET_STATE, state));
    };
    RootActionsService.SET_STATE = 'SET_STATE';
    RootActionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], RootActionsService);
    return RootActionsService;
}());



/***/ }),

/***/ "./src/app/service/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, router, toastr) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.toastr = toastr;
        this.isLoggedIn = false;
        this.user = firebaseAuth.authState;
    }
    /*
     *  getLocalStorageUser function is used to get local user profile data.
     */
    AuthService.prototype.getLocalStorageUser = function () {
        this.userData = JSON.parse(localStorage.getItem("userProfile"));
        if (this.userData) {
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    };
    /*
    * signupUserProfile method save email and password into firabse &
    * signupUserProfile method save the user sign in data into local storage.
    */
    AuthService.prototype.signupUserProfile = function (value) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(value.email, value.password)
            .then(function (value) {
            _this.toastr.success('Account Created!');
            _this.setLocalUserProfile(value);
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * loginUser fuction used to login.
     */
    AuthService.prototype.loginUser = function (value) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(value.email, value.password)
            .then(function (value) {
            _this.setLocalUserProfile(value);
            _this.toastr.success('You have been successfully logged In!');
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * resetPassword is used to reset your password.
     */
    AuthService.prototype.resetPassword = function (value) {
        var _this = this;
        this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
            .then(function (value) {
            _this.toastr.success("Email Sent");
            _this.router.navigate(['/session/loginone']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * logOut function is used to sign out .
     */
    AuthService.prototype.logOut = function () {
        this.firebaseAuth
            .auth
            .signOut();
        localStorage.removeItem("userProfile");
        this.isLoggedIn = false;
        this.toastr.success("You have been successfully logged out!");
        this.router.navigate(['/session/loginone']);
    };
    /*
     * setLocalUserProfile function is used to set local user profile data.
     */
    AuthService.prototype.setLocalUserProfile = function (value) {
        localStorage.setItem("userProfile", JSON.stringify(value));
        this.isLoggedIn = true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthService);
    return AuthService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["ChankyaAppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/orlando/Desarrollo/SOLDEV/shopify/carrier-service-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map