(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-open-message-open-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/message/open-message/open-message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/open-message/open-message.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/message\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Message</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <div class=\"chat-box\">\n      <div class=\"message-area\">\n        <div class=\"message\">\n          <p>Hello</p>\n        </div>\n      </div>\n      <div class=\"input-area\">\n        <form>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"10\" style=\"border: 1px solid black\">\n                <ion-input type=\"text\" name=\"message\" id=\"message\" placeholder=\"Say something nice...\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-button style=\"margin-top:4px\">\n                  <ion-icon name=\"send\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/message/open-message/open-message.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/message/open-message/open-message.module.ts ***!
  \*************************************************************/
/*! exports provided: OpenMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMessagePageModule", function() { return OpenMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _open_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-message.page */ "./src/app/message/open-message/open-message.page.ts");







const routes = [
    {
        path: '',
        component: _open_message_page__WEBPACK_IMPORTED_MODULE_6__["OpenMessagePage"]
    }
];
let OpenMessagePageModule = class OpenMessagePageModule {
};
OpenMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_open_message_page__WEBPACK_IMPORTED_MODULE_6__["OpenMessagePage"]]
    })
], OpenMessagePageModule);



/***/ }),

/***/ "./src/app/message/open-message/open-message.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/message/open-message/open-message.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.main .chat-box {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #f9fbfc;\n}\n.main .chat-box .message-area {\n  max-height: 90%;\n  height: 90%;\n  overflow: auto;\n  padding: 15px 10px;\n}\n.main .chat-box .message-area .message p {\n  color: #8a898b;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0px;\n  max-width: 95%;\n  min-width: 55%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  padding: 10px 15px 10px 7px;\n  margin: 5px 0;\n  background: white;\n}\n.main .chat-box .message-area .message.incoming {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.main .chat-box .message-area .message.incoming p {\n  color: white;\n  border-radius: 0 11px 11px 11px;\n  background: #B9C0E9;\n}\n.main .chat-box .message-area .message.outgoing {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.main .chat-box .message-area .message.outgoing p {\n  border-radius: 11px 11px 0 11px;\n}\n.main .chat-box .emo-area {\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  width: 100%;\n  padding: 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9vcGVuLW1lc3NhZ2UvRTpcXG1vYmlsZS10YVxcbW9iaWxlLXRhLW1hc3Rlci9zcmNcXGFwcFxcbWVzc2FnZVxcb3Blbi1tZXNzYWdlXFxvcGVuLW1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9tZXNzYWdlL29wZW4tbWVzc2FnZS9vcGVuLW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERE07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0dSO0FERFU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0daO0FEQVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VWO0FERFU7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0daO0FEQVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQ0VWO0FERFU7RUFDRSwrQkFBQTtBQ0daO0FEQ007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL29wZW4tbWVzc2FnZS9vcGVuLW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmNoYXQtYm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmJmYztcbiAgICAgIC5tZXNzYWdlLWFyZWEge1xuICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzhhODk4YjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTUlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggN3B4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS5pbmNvbWluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTFweCAxMXB4IDExcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjlDMEU5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS5vdXRnb2luZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweCAxMXB4IDAgMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5lbW8tYXJlYSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbiAuY2hhdC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmOWZiZmM7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSB7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZSBwIHtcbiAgY29sb3I6ICM4YTg5OGI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWluLXdpZHRoOiA1NSU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggN3B4O1xuICBtYXJnaW46IDVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLmluY29taW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLmluY29taW5nIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTFweCAxMXB4IDExcHg7XG4gIGJhY2tncm91bmQ6ICNCOUMwRTk7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZS5vdXRnb2luZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLm91dGdvaW5nIHAge1xuICBib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMCAxMXB4O1xufVxuLm1haW4gLmNoYXQtYm94IC5lbW8tYXJlYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/message/open-message/open-message.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/message/open-message/open-message.page.ts ***!
  \***********************************************************/
/*! exports provided: OpenMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMessagePage", function() { return OpenMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OpenMessagePage = class OpenMessagePage {
    constructor() { }
    ngOnInit() {
    }
};
OpenMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-message',
        template: __webpack_require__(/*! raw-loader!./open-message.page.html */ "./node_modules/raw-loader/index.js!./src/app/message/open-message/open-message.page.html"),
        styles: [__webpack_require__(/*! ./open-message.page.scss */ "./src/app/message/open-message/open-message.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OpenMessagePage);



/***/ })

}]);
//# sourceMappingURL=message-open-message-open-message-module-es2015.js.map