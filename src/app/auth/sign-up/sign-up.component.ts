import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  profile: Profile;

  constructor(private modalCtrl: ModalController, private authSvc: AuthService, private profileService: ProfileService) { }

  ngOnInit() {}

  onSignUp(f: NgForm) {
    this.profile = {
      email: f.value.email,
      nama : '',
      prodi: '',
      rating : 5,
      skills: ''
    }
    this.profileService.addProfile(this.profile);
    console.log(f.value);
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp);
      this.modalCtrl.dismiss();
    });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}