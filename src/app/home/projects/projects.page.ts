import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService, private router:Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
      console.log("selesai load");
    });
  }

  onTest(){
    this.router.navigateByUrl('/home/tabs/projects/new-project');
  }

  remove(item){
    this.projectService.removeProject(item.id);
  }

}
