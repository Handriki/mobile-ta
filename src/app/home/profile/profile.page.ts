import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { ModalController, NavController } from '@ionic/angular';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import * as firebase from 'firebase'

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

  constructor(private afs: AngularFirestore, private user: UserService, private modalCtrl: ModalController,
    public navCtrl: NavController, private fileChooser: FileChooser, private file: File) {
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

  choose(){
    this.fileChooser.open().then((uri)=>{
      alert(uri);

      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));

        let dirPath = newUrl.nativeURL;
        let dirPathSegments = dirPath.split('/')
        dirPathSegments.pop()
        dirPath = dirPathSegments.join('/')

        this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async(buffer)=>{
          await this.upload(buffer, newUrl.name);
        })
      })
    })
  }
  async upload(buffer, name){
    let blob = new Blob([buffer], {type: "image/jpeg"});
    
    let storage = firebase.storage();

    storage.ref('images/' + name).put(blob).then((d)=>{
      alert("done");
    }).catch((error)=>{
      alert(JSON.stringify(error));
        })
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
