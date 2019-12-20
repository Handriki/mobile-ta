import { Component, OnInit } from '@angular/core';
import { Browse, BrowseService } from 'src/app/services/browse.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-new-browse',
  templateUrl: './new-browse.page.html',
  styleUrls: ['./new-browse.page.scss'],
})
export class NewBrowsePage implements OnInit {

  browse: Browse;
  browseId = null
  mainuser: AngularFirestoreDocument;
  title: string;
  details: string;
  nama: string;

  constructor(private afs: AngularFirestore,
    private browseService: BrowseService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController,
    private user: UserService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async onPost(){
    const { title, details } = this;
    try{
      this.afs.doc(`browse/${this.user.getUserID()}`).set({
        title : title,
        details : details,
        nama: this.user.getUserName()
      })

      this.presentAlert('Success', 'Post berhasil!')
      this.navController.navigateBack('home/tabs/browse');

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
  async loadBrowse(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    this.browseService.getBrowse(this.browseId).subscribe(res =>{
      loading.dismiss();
      this.browse = res;
    });
  }

  async saveBrowse(){
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();
    if(this.browseId){
      this.browseService.updateBrowse(this.browse, this.browseId).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      })
    }
    else{
      this.browseService.addBrowse(this.browse).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      });
    }
  }
}
