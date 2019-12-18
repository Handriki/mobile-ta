import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }

  remove(item){
    this.projectService.removeProject(item.id);
  }

}
