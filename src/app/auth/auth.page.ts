import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  email: string = "";
  password: string = "";

  users: User;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public user: UserService,
    private alertController: AlertController
  ) { }

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

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async onLogin(){
    const { email, password } = this;
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      const loading = await this.loadingCtrl.create({
        message: 'Loading User...'
      });
      await loading.present();

      if(res.user) {
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
    catch(err){
      console.dir(err);
        this.presentAlert("Login Fail!", "Email or Password doesn't match");
        if(err.code === "auth/user-not-found"){
        console.log("User not found");
      }
    }
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

  async presentSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent
    });
    return await modal.present();
  }

}
