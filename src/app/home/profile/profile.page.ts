import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';

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
	// profilePic: string;

  constructor(private afs: AngularFirestore, private user: UserService) {
    this.mainuser = afs.doc(`users/${user.getUserID()}`);
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			// this.posts = event.posts;
			this.email = event.email;
			// this.profilePic = event.profilePic;
		})
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

}
