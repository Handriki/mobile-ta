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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");








const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }
];
let AuthPageModule = class AuthPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");








let AuthPage = class AuthPage {
    constructor(modalCtrl, authService, router, loadingCtrl, afAuth, user, alertController) {
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
    ngOnInit() {
    }
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
    presentAlert(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password } = this;
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                const loading = yield this.loadingCtrl.create({
                    message: 'Loading User...'
                });
                yield loading.present();
                if (res.user) {
                    console.log("id : " + res.user.uid);
                    this.user.getUser(res.user.uid).subscribe(r => {
                        this.users = r;
                        this.user.setUser({
                            email,
                            uid: res.user.uid,
                            nama: this.users.nama,
                            prodi: this.users.prodi,
                            semester: this.users.semester,
                            skills: this.users.skills
                        });
                        loading.dismiss();
                    });
                    this.router.navigateByUrl('/home');
                }
            }
            catch (err) {
                console.dir(err);
                this.presentAlert("Login Fail!", "Email or Password doesn't match");
                if (err.code === "auth/user-not-found") {
                    console.log("User not found");
                }
            }
        });
    }
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
    presentSignUpModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
            });
            return yield modal.present();
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this._userIsAuthenticated = true;
    }
    get userIsAuthenticated() {
        return this._userIsAuthenticated;
    }
    get userID() {
        return this._userID;
    }
    signup(email, password) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseAPIKey}`, {
            email,
            password,
            returnSecureToken: true
        });
    }
    login(email, password) {
        //firebase login API here
        this._userIsAuthenticated = true;
        console.log(this._userIsAuthenticated);
        console.log("test: " + this._userID);
        const res = this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseAPIKey}`, {
            email,
            password,
            returnSecureToken: true
        });
        return res;
    }
    logout() {
        this._userIsAuthenticated = false;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");








let SignUpComponent = class SignUpComponent {
    constructor(modalCtrl, authSvc, profileService, afAuth, afstore, user, alertController, loadingController) {
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
    ngOnInit() { }
    presentAlert(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onSignUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password, cpassword } = this;
            if (password !== cpassword) {
                return console.error("Password don't match");
            }
            try {
                const res = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                this.afstore.doc(`users/${res.user.uid}`).set({
                    email
                });
                const loading = yield this.loadingController.create({
                    message: 'Registering User...'
                });
                yield loading.present();
                this.user.getUser(res.user.uid).subscribe(r => {
                    this.users = r;
                    this.user.setUser({
                        email,
                        uid: res.user.uid,
                        nama: this.users.nama,
                        prodi: this.users.prodi,
                        semester: this.users.semester,
                        skills: this.users.skills
                    });
                    loading.dismiss();
                });
                this.presentAlert('Success', 'You are registered!');
                this.modalCtrl.dismiss();
                console.log(res);
            }
            catch (error) {
                console.dir(error);
            }
        });
    }
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
    onCancel() {
        this.modalCtrl.dismiss();
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map