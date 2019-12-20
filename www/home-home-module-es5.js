(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/browse/browse-details/browse-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/browse/browse-details/browse-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/browse\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1> {{browse.title}}</h1>\n  <h3>by {{browse.nama}}</h3>\n  \n  <p>\n    {{browse.details}}\n  </p>\n  <div text-right>\n    <!-- <ion-button color=\"primary\" margin [routerLink]=\"['/','user-profile']\">See Profile</ion-button> -->\n  </div>\n</ion-content>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/browse/browse.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/browse/browse.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Collab Yuk!</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)=\"getProjects($event)\" color=\"light\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"onTest()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ng-container *ngIf=\"!browses || browses.length == 0\">\n    <div *ngFor=\"let n of [0,1,2]\" padding>\n      <ion-skeleton-text></ion-skeleton-text>\n      <p>\n        <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n      </p>\n    </div>\n  </ng-container>\n  <div *ngFor=\"let item of browses\">\n    <ion-card (click)=\"details(item.id)\">\n      <ion-card-header>\n        <ion-card-title>\n          {{ item.title }}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ item.details }}\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/browse/new-browse/new-browse.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/browse/new-browse/new-browse.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/browse\"></ion-back-button>\n    </ion-buttons>\n    <ion-button color=\"light\" fill=\"clear\" slot=\"end\" type=\"submit\" (click)=\"onPost()\">Post</ion-button>\n    <ion-title>New Searching Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input required [(ngModel)]=\"title\" type=\"text\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label position=\"stacked\">Search Details</ion-label>\n    <ion-textarea [attr.rows]=\"27\" required [(ngModel)]=\"details\"></ion-textarea>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/following/following.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/following/following.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Collab Yuk!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" [routerLink]=\"['/','home','tabs','projects', 'new-project']\">\n        <ion-icon name=\"briefcase\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" [routerLink]=\"['/','home','tabs','browse', 'new-browse']\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card [routerLink]=\"['/','home','tabs','browse', 'id']\">\n    <ion-card-header>\n      <ion-card-title>\n        Mencari Project Front End\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Sedang mencari project yang membutuhkan front end\n    </ion-card-content>\n  </ion-card>\n  <ion-card [routerLink]=\"['/','home','tabs','projects', 'id']\">\n    <ion-card-header>\n      <ion-card-title>\n        Project pemerintah\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Di cari anak IT untuk membuat Aplikasi yang berkerjasama dengan pemerintah\n    </ion-card-content>\n  </ion-card>\n  <ion-card [routerLink]=\"['/','home','tabs','projects', 'id']\">\n    <ion-card-header>\n      <ion-card-title>\n        Project pemerintah\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Di cari anak IT untuk membuat Aplikasi yang berkerjasama dengan pemerintah\n    </ion-card-content>\n  </ion-card>\n  <ion-card [routerLink]=\"['/','home','tabs','projects', 'id']\">\n    <ion-card-header>\n      <ion-card-title>\n        Project pemerintah\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Di cari anak IT untuk membuat Aplikasi yang berkerjasama dengan pemerintah\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"following\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"projects\">\n        <ion-icon name=\"briefcase\"></ion-icon>\n        <ion-label>Project</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"browse\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Browse</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"profile\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profile/edit-profile/edit-profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profile/edit-profile/edit-profile.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/Profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-button color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"onEdit()\">Change</ion-button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"nama\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Prodi</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"prodi\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Semester</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"semester\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Skills</ion-label>\n      <ion-textarea [attr.rows]=\"10\" required [(ngModel)]=\"skills\"></ion-textarea>\n    </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profile/profile.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profile/profile.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Collab Yuk!</ion-title>\n    <ion-button color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"presentEditModal()\">Edit</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <img src=\"https://fertilitynetworkuk.org/wp-content/uploads/2017/01/Facebook-no-profile-picture-icon-620x389-360x226.jpg\" width=\"80\" height=\"80\" style=\"object-fit: cover; border-radius: 50%;\"/>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-row>\n          <ion-text>\n            <div>\n              <h1>{{ nama }}</h1>\n            </div>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-text>\n        <p>Prodi : {{ prodi }}</p>\n        <p>Semester : {{ semester }}</p>\n        <p>Skills :<br>\n            {{ skills }}\n        </p>\n      </ion-text>\n    </ion-row>\n    <ion-text>\n      <p>\n        Portofolio\n      </p>\n      <button ion-button block (click)=\"choose()\">Upload a file</button>\n    </ion-text>\n  </ion-grid>\n  <!-- <ion-card (click)=\"expandItem(item)\" *ngFor=\"let item of items\">\n    <ion-card-header>\n      <ion-card-title>\n        Portofolio\n        <ion-icon name=\"arrow-dropdown\" item-right></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"350px\" [expanded]=\"item.expanded\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n            <ion-col size=\"4\">\n                <img src=\"https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg\" width=\"100px\" height=\"100px\"/>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/projects/new-project/new-project.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/projects/new-project/new-project.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/projects\"></ion-back-button>\n    </ion-buttons>\n    <ion-button color=\"light\" fill=\"clear\" slot=\"end\" type=\"submit\" (click)=\"onPost()\">Post</ion-button>\n    <ion-title>New Project</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input required [(ngModel)]=\"title\" type=\"text\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label position=\"stacked\">Project Details</ion-label>\n    <ion-textarea [attr.rows]=\"27\" required [(ngModel)]=\"details\"></ion-textarea>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/projects/project-details/project-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/projects/project-details/project-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/projects\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Project Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div *ngFor=\"let item of project\"> -->\n  <h1>{{ project.title }}</h1>\n  <h3>by {{ project.nama }}</h3>\n  <p>\n    {{ project.details }}\n  </p>\n  <div text-right>\n      <ion-button color=\"primary\" margin [routerLink]=\"['/','message']\">Ask Question</ion-button>\n  </div>\n  <!-- </div> -->\n</ion-content>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/projects/projects.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/projects/projects.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Collab Yuk!</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar color=\"light\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"onTest()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ng-container *ngIf=\"!projects || projects.length == 0\">\n    <div *ngFor=\"let n of [0,1,2]\" padding>\n      <ion-skeleton-text></ion-skeleton-text>\n      <p>\n        <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n      </p>\n    </div>\n  </ng-container>\n  <div *ngFor=\"let item of projects\">\n    <ion-card (click)=\"details(item.id)\">\n      <ion-card-header>\n        <ion-card-title>\n          {{ item.title }}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ item.details }}\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL0U6XFxtb2JpbGUtdGFcXG1vYmlsZS10YS1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGFuZGFibGVcXGV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFBQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    ExpandableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExpandableComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-expandable",
            template: __webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html"),
            styles: [__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());



/***/ }),

/***/ "./src/app/home/browse/browse-details/browse-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/browse/browse-details/browse-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: BrowseDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseDetailsPageModule", function() { return BrowseDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browse_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse-details.page */ "./src/app/home/browse/browse-details/browse-details.page.ts");







var routes = [
    {
        path: '',
        component: _browse_details_page__WEBPACK_IMPORTED_MODULE_6__["BrowseDetailsPage"]
    }
];
var BrowseDetailsPageModule = /** @class */ (function () {
    function BrowseDetailsPageModule() {
    }
    BrowseDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browse_details_page__WEBPACK_IMPORTED_MODULE_6__["BrowseDetailsPage"]]
        })
    ], BrowseDetailsPageModule);
    return BrowseDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/home/browse/browse-details/browse-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/browse/browse-details/browse-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnJvd3NlL2Jyb3dzZS1kZXRhaWxzL2Jyb3dzZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/browse/browse-details/browse-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/browse/browse-details/browse-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: BrowseDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseDetailsPage", function() { return BrowseDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/browse.service */ "./src/app/services/browse.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var BrowseDetailsPage = /** @class */ (function () {
    function BrowseDetailsPage(browseService, route, loadingController, navController, router) {
        this.browseService = browseService;
        this.route = route;
        this.loadingController = loadingController;
        this.navController = navController;
        this.router = router;
        this.browse = {
            title: "title",
            nama: "nama",
            details: "details"
        };
        this.browseId = null;
    }
    BrowseDetailsPage.prototype.ngOnInit = function () {
        this.browseId = this.route.snapshot.params['id'];
        this.router.navigateByUrl('/home/tabs/borwse/' + this.browseId);
        if (this.browseId) {
            this.loadBrowse();
        }
    };
    BrowseDetailsPage.prototype.remove = function (item) {
        this.browseService.removeBrowse(item.id);
    };
    BrowseDetailsPage.prototype.loadBrowse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.browseService.getBrowse(this.browseId).subscribe(function (res) {
                            _this.browse = res;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowseDetailsPage.prototype.saveBrowse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.browseId) {
                            this.browseService.updateBrowse(this.browse, this.browseId).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        else {
                            this.browseService.addBrowse(this.browse).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowseDetailsPage.ctorParameters = function () { return [
        { type: src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__["BrowseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    BrowseDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browse-details',
            template: __webpack_require__(/*! raw-loader!./browse-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/browse/browse-details/browse-details.page.html"),
            styles: [__webpack_require__(/*! ./browse-details.page.scss */ "./src/app/home/browse/browse-details/browse-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__["BrowseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BrowseDetailsPage);
    return BrowseDetailsPage;
}());



/***/ }),

/***/ "./src/app/home/browse/browse.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/browse/browse.module.ts ***!
  \**********************************************/
/*! exports provided: BrowsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePageModule", function() { return BrowsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse.page */ "./src/app/home/browse/browse.page.ts");







var routes = [
    {
        path: '',
        component: _browse_page__WEBPACK_IMPORTED_MODULE_6__["BrowsePage"]
    }
];
var BrowsePageModule = /** @class */ (function () {
    function BrowsePageModule() {
    }
    BrowsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browse_page__WEBPACK_IMPORTED_MODULE_6__["BrowsePage"]]
        })
    ], BrowsePageModule);
    return BrowsePageModule;
}());



/***/ }),

/***/ "./src/app/home/browse/browse.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/browse/browse.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnJvd3NlL2Jyb3dzZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/browse/browse.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/browse/browse.page.ts ***!
  \********************************************/
/*! exports provided: BrowsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePage", function() { return BrowsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/browse.service */ "./src/app/services/browse.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BrowsePage = /** @class */ (function () {
    function BrowsePage(navCtrl, browseService, router) {
        this.navCtrl = navCtrl;
        this.browseService = browseService;
        this.router = router;
        // this.generateProjects();
    }
    BrowsePage.prototype.ngOnInit = function () {
        var _this = this;
        this.browseService.getBrowses().subscribe(function (res) {
            _this.browses = res;
        });
    };
    BrowsePage.prototype.onTest = function () {
        this.router.navigateByUrl('/home/tabs/browse/new-browse');
    };
    // generateProjects(){
    //   this.projects = [
    //     'test',
    //     'mantap',
    //     'ms',
    //     'asdf'
    //   ];
    // }
    BrowsePage.prototype.getProjects = function (ev) {
        // this.generateProjects();
        var serVal = ev.target.value;
        if (serVal && serVal.trim() != '') {
            this.projects = this.projects.filter(function (project) {
                return (project.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    BrowsePage.prototype.details = function (id) {
        this.router.navigateByUrl('/home/tabs/browse/' + id);
    };
    BrowsePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_3__["BrowseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    BrowsePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browse',
            template: __webpack_require__(/*! raw-loader!./browse.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/browse/browse.page.html"),
            styles: [__webpack_require__(/*! ./browse.page.scss */ "./src/app/home/browse/browse.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_3__["BrowseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BrowsePage);
    return BrowsePage;
}());



/***/ }),

/***/ "./src/app/home/browse/new-browse/new-browse.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/browse/new-browse/new-browse.module.ts ***!
  \*************************************************************/
/*! exports provided: NewBrowsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBrowsePageModule", function() { return NewBrowsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_browse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-browse.page */ "./src/app/home/browse/new-browse/new-browse.page.ts");







var routes = [
    {
        path: '',
        component: _new_browse_page__WEBPACK_IMPORTED_MODULE_6__["NewBrowsePage"]
    }
];
var NewBrowsePageModule = /** @class */ (function () {
    function NewBrowsePageModule() {
    }
    NewBrowsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_browse_page__WEBPACK_IMPORTED_MODULE_6__["NewBrowsePage"]]
        })
    ], NewBrowsePageModule);
    return NewBrowsePageModule;
}());



/***/ }),

/***/ "./src/app/home/browse/new-browse/new-browse.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/browse/new-browse/new-browse.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnJvd3NlL25ldy1icm93c2UvbmV3LWJyb3dzZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/browse/new-browse/new-browse.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/browse/new-browse/new-browse.page.ts ***!
  \***********************************************************/
/*! exports provided: NewBrowsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBrowsePage", function() { return NewBrowsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/browse.service */ "./src/app/services/browse.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var NewBrowsePage = /** @class */ (function () {
    function NewBrowsePage(afs, browseService, route, loadingController, navController, user, alertController) {
        this.afs = afs;
        this.browseService = browseService;
        this.route = route;
        this.loadingController = loadingController;
        this.navController = navController;
        this.user = user;
        this.alertController = alertController;
        this.browseId = null;
    }
    NewBrowsePage.prototype.ngOnInit = function () {
    };
    NewBrowsePage.prototype.onPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, title, details;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                _a = this, title = _a.title, details = _a.details;
                try {
                    this.afs.doc("browse/" + this.user.getUserID()).set({
                        title: title,
                        details: details,
                        nama: this.user.getUserName()
                    });
                    this.presentAlert('Success', 'Post berhasil!');
                    this.navController.navigateBack('home/tabs/browse');
                }
                catch (error) {
                    console.dir(error);
                }
                return [2 /*return*/];
            });
        });
    };
    NewBrowsePage.prototype.presentAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewBrowsePage.prototype.loadBrowse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.browseService.getBrowse(this.browseId).subscribe(function (res) {
                            loading.dismiss();
                            _this.browse = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewBrowsePage.prototype.saveBrowse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.browseId) {
                            this.browseService.updateBrowse(this.browse, this.browseId).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        else {
                            this.browseService.addBrowse(this.browse).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewBrowsePage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__["BrowseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    NewBrowsePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-browse',
            template: __webpack_require__(/*! raw-loader!./new-browse.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/browse/new-browse/new-browse.page.html"),
            styles: [__webpack_require__(/*! ./new-browse.page.scss */ "./src/app/home/browse/new-browse/new-browse.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            src_app_services_browse_service__WEBPACK_IMPORTED_MODULE_2__["BrowseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], NewBrowsePage);
    return NewBrowsePage;
}());



/***/ }),

/***/ "./src/app/home/following/following.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/following/following.module.ts ***!
  \****************************************************/
/*! exports provided: FollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./following.page */ "./src/app/home/following/following.page.ts");







var routes = [
    {
        path: '',
        component: _following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]
    }
];
var FollowingPageModule = /** @class */ (function () {
    function FollowingPageModule() {
    }
    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]]
        })
    ], FollowingPageModule);
    return FollowingPageModule;
}());



/***/ }),

/***/ "./src/app/home/following/following.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/following/following.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/following/following.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/following/following.page.ts ***!
  \**************************************************/
/*! exports provided: FollowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPage", function() { return FollowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FollowingPage = /** @class */ (function () {
    function FollowingPage() {
    }
    FollowingPage.prototype.ngOnInit = function () {
    };
    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! raw-loader!./following.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/following/following.page.html"),
            styles: [__webpack_require__(/*! ./following.page.scss */ "./src/app/home/following/following.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowingPage);
    return FollowingPage;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _following_following_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./following/following.module */ "./src/app/home/following/following.module.ts");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/home/projects/projects.module.ts");
/* harmony import */ var _projects_project_details_project_details_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/project-details/project-details.module */ "./src/app/home/projects/project-details/project-details.module.ts");
/* harmony import */ var _browse_browse_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browse/browse.module */ "./src/app/home/browse/browse.module.ts");
/* harmony import */ var _browse_browse_details_browse_details_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browse/browse-details/browse-details.module */ "./src/app/home/browse/browse-details/browse-details.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/home/profile/profile.module.ts");
/* harmony import */ var _browse_new_browse_new_browse_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browse/new-browse/new-browse.module */ "./src/app/home/browse/new-browse/new-browse.module.ts");
/* harmony import */ var _projects_new_project_new_project_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/new-project/new-project.module */ "./src/app/home/projects/new-project/new-project.module.ts");












var routes = [
    {
        path: 'tabs',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"],
        children: [
            {
                path: 'following',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return _following_following_module__WEBPACK_IMPORTED_MODULE_4__["FollowingPageModule"]; }
                    }
                ]
            },
            {
                path: 'projects',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return _projects_projects_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageModule"]; }
                    },
                    {
                        path: 'new-project',
                        loadChildren: function () { return _projects_new_project_new_project_module__WEBPACK_IMPORTED_MODULE_11__["NewProjectPageModule"]; }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return _projects_project_details_project_details_module__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPageModule"]; }
                    },
                ]
            },
            {
                path: 'browse',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return _browse_browse_module__WEBPACK_IMPORTED_MODULE_7__["BrowsePageModule"]; }
                    },
                    {
                        path: 'new-browse',
                        loadChildren: function () { return _browse_new_browse_new_browse_module__WEBPACK_IMPORTED_MODULE_10__["NewBrowsePageModule"]; }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return _browse_browse_details_browse_details_module__WEBPACK_IMPORTED_MODULE_8__["BrowseDetailsPageModule"]; }
                    },
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfilePageModule"]; }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/following',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/following',
        pathMatch: 'full'
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/profile/edit-profile/edit-profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/profile/edit-profile/edit-profile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/profile/edit-profile/edit-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/profile/edit-profile/edit-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(afs, user, alertController, modalCtrl) {
        var _this = this;
        this.afs = afs;
        this.user = user;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.mainuser = afs.doc("users/" + user.getUserID());
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
            _this.email = event.email;
            _this.nama = event.nama;
            _this.prodi = event.prodi;
            _this.skills = event.skills;
            _this.semester = event.semester;
        });
    }
    EditProfileComponent.prototype.onEdit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, nama, prodi, semester, skills;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                _a = this, nama = _a.nama, prodi = _a.prodi, semester = _a.semester, skills = _a.skills;
                try {
                    this.afs.doc("users/" + this.user.getUserID()).update({
                        nama: nama,
                        prodi: prodi,
                        semester: semester,
                        skills: skills
                    });
                    this.presentAlert('Success', 'Edit berhasil!');
                    this.modalCtrl.dismiss();
                }
                catch (error) {
                    console.dir(error);
                }
                return [2 /*return*/];
            });
        });
    };
    EditProfileComponent.prototype.presentAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfileComponent.prototype.ngOnInit = function () { };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/home/profile/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/home/profile/profile.page.ts");
/* harmony import */ var src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/home/profile/edit-profile/edit-profile.component.ts");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__["ExpandableComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]],
            entryComponents: [_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/home/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/home/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);









var ProfilePage = /** @class */ (function () {
    // profilePic: string;
    function ProfilePage(afs, user, modalCtrl, navCtrl, fileChooser, file) {
        var _this = this;
        this.afs = afs;
        this.user = user;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.fileChooser = fileChooser;
        this.file = file;
        this.mainuser = afs.doc("users/" + user.getUserID());
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
            // this.posts = event.posts;
            _this.email = event.email;
            _this.nama = event.nama;
            _this.prodi = event.prodi;
            _this.semester = event.semester;
            _this.skills = event.skills;
            // this.profilePic = event.profilePic;
        });
        // this.items = [
        //   { expanded: false }
        // ];
    }
    ProfilePage.prototype.choose = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            alert(uri);
            _this.file.resolveLocalFilesystemUrl(uri).then(function (newUrl) {
                alert(JSON.stringify(newUrl));
                var dirPath = newUrl.nativeURL;
                var dirPathSegments = dirPath.split('/');
                dirPathSegments.pop();
                dirPath = dirPathSegments.join('/');
                _this.file.readAsArrayBuffer(dirPath, newUrl.name).then(function (buffer) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.upload(buffer, newUrl.name)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
    };
    ProfilePage.prototype.upload = function (buffer, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var blob, storage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                blob = new Blob([buffer], { type: "image/jpeg" });
                storage = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]();
                storage.ref('images/' + name).put(blob).then(function (d) {
                    alert("done");
                }).catch(function (error) {
                    alert(JSON.stringify(error));
                });
                return [2 /*return*/];
            });
        });
    };
    // expandItem(item): void {
    //   if (item.expanded) {
    //     item.expanded = false;
    //   } else {
    //     this.items.map(listItem => {
    //       if (item == listItem) {
    //         listItem.expanded = !listItem.expanded;
    //       } else {
    //         listItem.expanded = false;
    //       }
    //       return listItem;
    //     });
    //   }
    // }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.presentEditModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/home/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/home/projects/new-project/new-project.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/projects/new-project/new-project.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectPageModule", function() { return NewProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-project.page */ "./src/app/home/projects/new-project/new-project.page.ts");







var routes = [
    {
        path: '',
        component: _new_project_page__WEBPACK_IMPORTED_MODULE_6__["NewProjectPage"]
    }
];
var NewProjectPageModule = /** @class */ (function () {
    function NewProjectPageModule() {
    }
    NewProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_project_page__WEBPACK_IMPORTED_MODULE_6__["NewProjectPage"]]
        })
    ], NewProjectPageModule);
    return NewProjectPageModule;
}());



/***/ }),

/***/ "./src/app/home/projects/new-project/new-project.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/projects/new-project/new-project.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMvbmV3LXByb2plY3QvbmV3LXByb2plY3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/projects/new-project/new-project.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/projects/new-project/new-project.page.ts ***!
  \***************************************************************/
/*! exports provided: NewProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectPage", function() { return NewProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var NewProjectPage = /** @class */ (function () {
    function NewProjectPage(afs, projectService, route, loadingController, navController, user, alertController) {
        this.afs = afs;
        this.projectService = projectService;
        this.route = route;
        this.loadingController = loadingController;
        this.navController = navController;
        this.user = user;
        this.alertController = alertController;
        this.projectId = null;
    }
    NewProjectPage.prototype.ngOnInit = function () {
    };
    NewProjectPage.prototype.onPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, title, details;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                _a = this, title = _a.title, details = _a.details;
                try {
                    this.afs.doc("project/" + this.user.getUserID()).set({
                        title: title,
                        details: details,
                        nama: this.user.getUserName()
                    });
                    this.presentAlert('Success', 'Post berhasil!');
                    this.navController.navigateBack('home/tabs/projects');
                }
                catch (error) {
                    console.dir(error);
                }
                return [2 /*return*/];
            });
        });
    };
    NewProjectPage.prototype.presentAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewProjectPage.prototype.loadProject = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading Project...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.projectService.getProject(this.projectId).subscribe(function (res) {
                            loading.dismiss();
                            _this.project = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewProjectPage.prototype.saveProject = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving Project...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.projectId) {
                            this.projectService.updateProject(this.project, this.projectId).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        else {
                            this.projectService.addProject(this.project).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewProjectPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    NewProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__(/*! raw-loader!./new-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/projects/new-project/new-project.page.html"),
            styles: [__webpack_require__(/*! ./new-project.page.scss */ "./src/app/home/projects/new-project/new-project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], NewProjectPage);
    return NewProjectPage;
}());



/***/ }),

/***/ "./src/app/home/projects/project-details/project-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/projects/project-details/project-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPageModule", function() { return ProjectDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details.page */ "./src/app/home/projects/project-details/project-details.page.ts");







var routes = [
    {
        path: '',
        component: _project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]
    }
];
var ProjectDetailsPageModule = /** @class */ (function () {
    function ProjectDetailsPageModule() {
    }
    ProjectDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]]
        })
    ], ProjectDetailsPageModule);
    return ProjectDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/home/projects/project-details/project-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/projects/project-details/project-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/projects/project-details/project-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/projects/project-details/project-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPage", function() { return ProjectDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProjectDetailsPage = /** @class */ (function () {
    function ProjectDetailsPage(projectService, route, loadingController, navController, router) {
        this.projectService = projectService;
        this.route = route;
        this.loadingController = loadingController;
        this.navController = navController;
        this.router = router;
        this.project = {
            title: "title",
            nama: "nama",
            details: "details"
        };
        this.projectId = null;
    }
    ProjectDetailsPage.prototype.ngOnInit = function () {
        this.projectId = this.route.snapshot.params['id'];
        this.router.navigateByUrl('/home/tabs/projects/' + this.projectId);
        if (this.projectId) {
            this.loadProject();
        }
    };
    ProjectDetailsPage.prototype.remove = function (item) {
        this.projectService.removeProject(item.id);
    };
    ProjectDetailsPage.prototype.loadProject = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading Project...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.projectService.getProject(this.projectId).subscribe(function (res) {
                            _this.project = res;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectDetailsPage.prototype.saveProject = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving Project...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.projectId) {
                            this.projectService.updateProject(this.project, this.projectId).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        else {
                            this.projectService.addProject(this.project).then(function () {
                                loading.dismiss();
                                _this.navController.navigateBack('home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectDetailsPage.ctorParameters = function () { return [
        { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjectDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! raw-loader!./project-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/projects/project-details/project-details.page.html"),
            styles: [__webpack_require__(/*! ./project-details.page.scss */ "./src/app/home/projects/project-details/project-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectDetailsPage);
    return ProjectDetailsPage;
}());



/***/ }),

/***/ "./src/app/home/projects/projects.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/projects/projects.module.ts ***!
  \**************************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "./src/app/home/projects/projects.page.ts");







var routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]
    }
];
var ProjectsPageModule = /** @class */ (function () {
    function ProjectsPageModule() {
    }
    ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
        })
    ], ProjectsPageModule);
    return ProjectsPageModule;
}());



/***/ }),

/***/ "./src/app/home/projects/projects.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/projects/projects.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMvcHJvamVjdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/projects/projects.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/projects/projects.page.ts ***!
  \************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    ProjectsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (res) {
            _this.projects = res;
            // console.log("selesai load");
        });
    };
    ProjectsPage.prototype.onTest = function () {
        this.router.navigateByUrl('/home/tabs/projects/new-project');
    };
    ProjectsPage.prototype.remove = function (item) {
        this.projectService.removeProject(item.id);
    };
    ProjectsPage.prototype.details = function (id) {
        this.router.navigateByUrl('/home/tabs/projects/' + id);
    };
    ProjectsPage.ctorParameters = function () { return [
        { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/projects/projects.page.html"),
            styles: [__webpack_require__(/*! ./projects.page.scss */ "./src/app/home/projects/projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectsPage);
    return ProjectsPage;
}());



/***/ }),

/***/ "./src/app/services/browse.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/browse.service.ts ***!
  \********************************************/
/*! exports provided: BrowseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseService", function() { return BrowseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BrowseService = /** @class */ (function () {
    function BrowseService(db) {
        this.browsesCollection = db.collection('browse');
        this.browses = this.browsesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    BrowseService.prototype.getBrowses = function () {
        return this.browses;
    };
    BrowseService.prototype.getBrowse = function (id) {
        return this.browsesCollection.doc(id).valueChanges();
    };
    BrowseService.prototype.updateBrowse = function (browse, id) {
        return this.browsesCollection.doc(id).update(browse);
    };
    BrowseService.prototype.addBrowse = function (browse) {
        return this.browsesCollection.add(browse);
    };
    BrowseService.prototype.removeBrowse = function (id) {
        return this.browsesCollection.doc(id).delete();
    };
    BrowseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    BrowseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], BrowseService);
    return BrowseService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProjectService = /** @class */ (function () {
    function ProjectService(db) {
        this.projectsCollection = db.collection('project');
        this.projects = this.projectsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    ProjectService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectService.prototype.getProject = function (id) {
        return this.projectsCollection.doc(id).valueChanges();
    };
    ProjectService.prototype.updateProject = function (project, id) {
        return this.projectsCollection.doc(id).update(project);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.projectsCollection.add(project);
    };
    ProjectService.prototype.removeProject = function (id) {
        return this.projectsCollection.doc(id).delete();
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map