(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expandable2/expandable2.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expandable2/expandable2.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/browse/id\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <img src=\"https://fertilitynetworkuk.org/wp-content/uploads/2017/01/Facebook-no-profile-picture-icon-620x389-360x226.jpg\" width=\"80\" height=\"80\" style=\"object-fit: cover; border-radius: 50%;\"/>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-row>\n          <ion-text>\n            <h1>Aldric Leonardo</h1>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-text>\n        <p>Prodi : Informatika</p>\n        <p>Semester : 7</p>\n        <p>Skills :<br>\n            - Programming<br>\n            - C++<br>\n            - PHP\n        </p>\n      </ion-text>\n    </ion-row>\n  </ion-grid>\n  <ion-card (click)=\"expandItem(item)\" *ngFor=\"let item of items\">\n    <ion-card-header>\n      <ion-card-title>\n        Portofolio\n        <ion-icon name=\"arrow-dropdown\" item-right></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable2 expandHeight=\"350px\" [expanded]=\"item.expanded\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </app-expandable2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/expandable2/expandable2.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/expandable2/expandable2.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlMi9FOlxcbW9iaWxlLXRhXFxtb2JpbGUtdGEtbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxleHBhbmRhYmxlMlxcZXhwYW5kYWJsZTIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZTIvZXhwYW5kYWJsZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUFBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlMi9leHBhbmRhYmxlMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59IiwiLmV4cGFuZC13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb2xsYXBzZWQge1xuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/expandable2/expandable2.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable2/expandable2.component.ts ***!
  \*****************************************************************/
/*! exports provided: Expandable2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expandable2Component", function() { return Expandable2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Expandable2Component = /** @class */ (function () {
    function Expandable2Component(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    Expandable2Component.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    Expandable2Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Expandable2Component.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Expandable2Component.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Expandable2Component.prototype, "expandHeight", void 0);
    Expandable2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-expandable2",
            template: __webpack_require__(/*! raw-loader!./expandable2.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expandable2/expandable2.component.html"),
            styles: [__webpack_require__(/*! ./expandable2.component.scss */ "./src/app/components/expandable2/expandable2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], Expandable2Component);
    return Expandable2Component;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");
/* harmony import */ var _components_expandable2_expandable2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/expandable2/expandable2.component */ "./src/app/components/expandable2/expandable2.component.ts");








var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"], _components_expandable2_expandable2_component__WEBPACK_IMPORTED_MODULE_7__["Expandable2Component"]]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");



var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(profileService) {
        this.profileService = profileService;
        this.items = [];
        this.items = [
            { expanded: false }
        ];
    }
    UserProfilePage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfiles().subscribe(function (res) {
            _this.profiles = res;
        });
    };
    UserProfilePage.ctorParameters = function () { return [
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }
    ]; };
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], UserProfilePage);
    return UserProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map