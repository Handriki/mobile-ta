import { Component, OnInit } from '@angular/core';
import { Project,ProjectService} from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
  project: Project = {
    title: 'test 123',
    projectDetails: ' Testtttt'
  };

  projectId = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
    if(this.projectId){
      this.loadProject();
    }
  }

  remove(item){
    this.projectService.removeProject(item.id);
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
