import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // public items: any = [];
  // public user: String;

  mainuser: AngularFirestoreDocument;
	userPosts;
	sub;
	// posts;
  email: string;
  nama: string;
  prodi: string;
  semester: number;
  skills: string;
	// profilePic: string;

  constructor(private afs: AngularFirestore, private user: UserService, private modalCtrl: ModalController) {
    this.mainuser = afs.doc(`users/${user.getUserID()}`);
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			// this.posts = event.posts;
      this.email = event.email;
      this.nama = event.nama;
      this.prodi = event.prodi;
      this.semester = event.semester;
      this.skills = event.skills;
			// this.profilePic = event.profilePic;
		});
    // this.items = [
    //   { expanded: false }
    // ];
  }

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

  ngOnInit() {

  }

  async presentEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditProfileComponent
    });
    return await modal.present();
  }

}
