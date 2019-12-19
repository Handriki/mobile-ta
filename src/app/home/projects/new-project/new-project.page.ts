import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {

  project: Project;
  projectId = null
  mainuser: AngularFirestoreDocument;
  title: string;
  details: string;
  nama: string;

  constructor(
    private afs: AngularFirestore,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController,
    private user: UserService,
    private alertController: AlertController
  ) { 

  }

  ngOnInit() {
    
  }

  async onPost(){
    const { title, details } = this;
    try{
      this.afs.doc(`project/${this.user.getUserID()}`).set({
        title : title,
        details : details,
        nama: this.user.getUserName()
      })
      this.presentAlert('Success', 'Post berhasil!')
      this.navController.navigateBack('home/tabs/projects');


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
  async loadProject(){
    const loading = await this.loadingController.create({
      message: 'Loading Project...'
    });
    await loading.present();

    this.projectService.getProject(this.projectId).subscribe(res =>{
      loading.dismiss();
      this.project = res;
    });
  }

  async saveProject(){
    const loading = await this.loadingController.create({
      message: 'Saving Project...'
    });
    await loading.present();
    if(this.projectId){
      this.projectService.updateProject(this.project, this.projectId).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      })
    }
    else{
      this.projectService.addProject(this.project).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      });
    }
  }

}
