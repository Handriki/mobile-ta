import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  mainuser: AngularFirestoreDocument;
	sub;
  email: string;
  nama: string;
  prodi: string;
  semester: number;
  skills: string;

  constructor(private afs: AngularFirestore, private user: UserService, private alertController: AlertController, private modalCtrl: ModalController) {
    this.mainuser = afs.doc(`users/${user.getUserID()}`);
		this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.email = event.email;
      this.nama = event.nama;
      this.prodi = event.prodi;
      this.skills = event.skills;
      this.semester = event.semester;
		});
  }

  async onEdit(){
    const { nama, prodi, semester, skills } = this;
    try{
      this.afs.doc(`users/${this.user.getUserID()}`).update({
        nama : nama,
        prodi : prodi,
        semester : semester,
        skills: skills
      })

      this.presentAlert('Success', 'Edit berhasil!')
      this.modalCtrl.dismiss();

    }
    catch(error){
      console.dir(error);
    }
  }

  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}
  ngOnInit() {}

}
