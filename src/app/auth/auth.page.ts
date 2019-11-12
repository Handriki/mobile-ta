import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    this.authService.login(f.value.email, f.value.password).subscribe(
      resp => {
        if (resp.idToken) {
          console.log(resp);
          this.router.navigateByUrl('/home');
        } else {
          console.log('login failed.');
        }
      },
      errorResp => {
        console.log(errorResp);
    });
    // this.isLoading = true;
    // this.loadingCtrl.create({keyboardClose: true, message: 'Logging in...'})
    //   .then(loadingEl => {
    //     loadingEl.present();
    //     setTimeout(() => {
    //       this.isLoading = false;
    //       loadingEl.dismiss();
    //       this.router.navigateByUrl('home');
    //     }, 1500);
    //   });
    // this.authService.login();
  }

  onSubmit(f: NgForm){
    this.authService.login(f.value.email, f.value.password).subscribe(
      resp => {
        if (resp.idToken) {
          console.log(resp);
          this.router.navigateByUrl('/home');
        } else {
          console.log('login failed.');
        }
      },
      errorResp => {
        console.log(errorResp);
    });
  }

  async presentSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent
    });
    return await modal.present();
  }

}
