import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ProfileService, Profile } from '../../services/profile.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  profile: Profile;
  email: string = "";
  nama: string = "";
  prodi: string = "";
  skills: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(private modalCtrl: ModalController, 
    private authSvc: AuthService, 
    private profileService: ProfileService,
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
    private loadingController: LoadingController) { }
    users: User;

  ngOnInit() {}

  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}
  async onSignUp(){
    const { email, password, cpassword } = this;
    if(password !== cpassword){
      return console.error("Password don't match");
    }
    
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);

      this.afstore.doc(`users/${res.user.uid}`).set({
        email
      })
      const loading = await this.loadingController.create({
        message: 'Registering User...'
      });
      await loading.present();
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


      this.presentAlert('Success', 'You are registered!')
      this.modalCtrl.dismiss();

      console.log(res);
    }
    catch(error){
      console.dir(error);
    }
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
}