(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isLogin ? 'Login' : 'Signup' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n              <ion-item>\n                <ion-label position=\"floating\">E-mail</ion-label>\n                <ion-input \n                  inputmode=\"email\"\n                  [(ngModel)]=\"email\"\n                  required\n                  #emailCtrl=\"ngModel\" \n                  type=\"email\">\n                </ion-input>\n              </ion-item>\n              <ion-item\n                *ngIf=\"!emailCtrl.valid && emailCtrl.touched\"\n                lines=\"none\">\n              <ion-label>Should be a valid email address</ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input \n                  type=\"password\"\n                  [(ngModel)]=\"password\"\n                  #passwordCtrl=\"ngModel\"\n                  required\n                  minLength=\"6\">\n                </ion-input>\n              </ion-item>\n              <ion-item\n                *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\n                lines=\"none\">\n              <ion-label>Should be a valid password</ion-label>\n              </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"button\" color=\"primary\" fill=\"clear\" (click)=\"presentSignUpModal()\" expand=\"full\">Switch to {{ isLogin ? 'Signup' : 'Login' }}</ion-button>\n          <ion-button type=\"submit\" color=\"primary\" (click)=\"onLogin()\" expand=\"block\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner> -->\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"fixed\">Email</ion-label>\n        <ion-input\n          required\n          [(ngModel)]=\"email\"\n          type=\"email\"\n          placeholder=\"Your email here\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Password</ion-label>\n        <ion-input\n          required\n          [(ngModel)]=\"password\"\n          type=\"password\"\n          minlength=\"6\"\n          placeholder=\"******\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Confirm Password</ion-label>\n        <ion-input\n          required\n          [(ngModel)]=\"cpassword\"\n          type=\"password\"\n          minlength=\"6\"\n          placeholder=\"******\"\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" (click)=\"onSignUp()\">Sign Up</ion-button>\n    <ion-button expand=\"block\" fill='outline' color='danger' (click)='onCancel()'>Cancel</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");








var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]],
            entryComponents: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");








var AuthPage = /** @class */ (function () {
    function AuthPage(modalCtrl, authService, router, loadingCtrl, afAuth, user, alertController) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.user = user;
        this.alertController = alertController;
        this.isLoading = false;
        this.isLogin = true;
        this.email = "";
        this.password = "";
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    //   onLogin(f: NgForm) {
    //     this.authService.login(f.value.email, f.value.password).subscribe(
    //       resp => {
    //         if (resp.idToken) {
    //           console.log(resp);
    //           this.router.navigateByUrl('/home');
    //         } else {
    //           console.log('login failed.');
    //         }
    //       },
    //       errorResp => {
    //         console.log(errorResp);
    //     });
    //     // this.isLoading = true;
    //     // this.loadingCtrl.create({keyboardClose: true, message: 'Logging in...'})
    //     //   .then(loadingEl => {
    //     //     loadingEl.present();
    //     //     setTimeout(() => {
    //     //       this.isLoading = false;
    //     //       loadingEl.dismiss();
    //     //       this.router.navigateByUrl('home');
    //     //     }, 1500);
    //     //   });
    //     // this.authService.login();
    //   }
    AuthPage.prototype.presentAlert = function (title, content) {
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
    AuthPage.prototype.onLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, res_1, loading_1, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 2:
                        res_1 = _b.sent();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading User...'
                            })];
                    case 3:
                        loading_1 = _b.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 4:
                        _b.sent();
                        if (res_1.user) {
                            console.log("id : " + res_1.user.uid);
                            this.user.getUser(res_1.user.uid).subscribe(function (r) {
                                _this.users = r;
                                _this.user.setUser({
                                    email: email,
                                    uid: res_1.user.uid,
                                    nama: _this.users.nama,
                                    prodi: _this.users.prodi,
                                    semester: _this.users.semester,
                                    skills: _this.users.skills
                                });
                                loading_1.dismiss();
                            });
                            this.router.navigateByUrl('/home');
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        this.presentAlert("Login Fail!", "Email or Password doesn't match");
                        if (err_1.code === "auth/user-not-found") {
                            console.log("User not found");
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //   onSubmit(f: NgForm){
    //     this.authService.login(f.value.email, f.value.password).subscribe(
    //       resp => {
    //         if (resp.idToken) {
    //           console.log(resp);
    //           this.router.navigateByUrl('/home');
    //         } else {
    //           console.log('login failed.');
    //         }
    //       },
    //       errorResp => {
    //         console.log(errorResp);
    //     });
    //   }
    AuthPage.prototype.presentSignUpModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._userIsAuthenticated = true;
    }
    Object.defineProperty(AuthService.prototype, "userIsAuthenticated", {
        get: function () {
            return this._userIsAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userID", {
        get: function () {
            return this._userID;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signup = function (email, password) {
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        });
    };
    AuthService.prototype.login = function (email, password) {
        //firebase login API here
        this._userIsAuthenticated = true;
        console.log(this._userIsAuthenticated);
        console.log("test: " + this._userID);
        var res = this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        return res;
    };
    AuthService.prototype.logout = function () {
        this._userIsAuthenticated = false;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");








var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(modalCtrl, authSvc, profileService, afAuth, afstore, user, alertController, loadingController) {
        this.modalCtrl = modalCtrl;
        this.authSvc = authSvc;
        this.profileService = profileService;
        this.afAuth = afAuth;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.email = "";
        this.nama = "";
        this.prodi = "";
        this.skills = "";
        this.password = "";
        this.cpassword = "";
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.presentAlert = function (title, content) {
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
    SignUpComponent.prototype.onSignUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, cpassword, res_1, loading_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password, cpassword = _a.cpassword;
                        if (password !== cpassword) {
                            return [2 /*return*/, console.error("Password don't match")];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 2:
                        res_1 = _b.sent();
                        this.afstore.doc("users/" + res_1.user.uid).set({
                            email: email
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Registering User...'
                            })];
                    case 3:
                        loading_1 = _b.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 4:
                        _b.sent();
                        this.user.getUser(res_1.user.uid).subscribe(function (r) {
                            _this.users = r;
                            _this.user.setUser({
                                email: email,
                                uid: res_1.user.uid,
                                nama: _this.users.nama,
                                prodi: _this.users.prodi,
                                semester: _this.users.semester,
                                skills: _this.users.skills
                            });
                            loading_1.dismiss();
                        });
                        this.presentAlert('Success', 'You are registered!');
                        this.modalCtrl.dismiss();
                        console.log(res_1);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // onSignUp(f: NgForm) {
    //   this.profile = {
    //     email: f.value.email,
    //     nama : '',
    //     prodi: '',
    //     rating : 5,
    //     skills: ''
    //   }
    //   this.profileService.addProfile(this.profile);
    //   console.log(f.value);
    //   this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
    //     console.log(resp);
    //     this.modalCtrl.dismiss();
    //   });
    // }
    SignUpComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/auth/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map